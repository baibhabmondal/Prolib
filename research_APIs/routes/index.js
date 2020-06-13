const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../db/model');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AWS = require('aws-sdk');
const multerS3 = require('multer-s3')
const multer = require('multer');
const s3BucketMgt = require("s3-nodejs-sample");
const bucketName="research-webarch";

const aws_access_key_id = 'AKIAJUL5TZNDDNUCPLAA';
const aws_secret_access_key = '68HO1LT2eWxjX1OXJG/01TVgEjNjWf7PzVQIQzNE';

AWS.config.update({
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key,
    region: 'ap-south-1'
});

const s3 = new AWS.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: bucketName,
        key: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})


const saltRounds = 17;

router.use(bodyParser.urlencoded({ extended: true }))

router.use(bodyParser.urlencoded({ extended: true }))
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

router.use(cors());

function allowStudent(req,res,next) { // allow specific user only
    if(!req.body.token) return res.status(403).send({ success: false, message: 'No token' });
    db.AuthToken.findOne({ token: req.body.token }, (err, data) => {
        if(!data) return res.send({success: false,message: "Wrong Token"})
        else {

            db.User_Details.findOne({reg_no: data.reg_no}).then(function(data) {

                if (data.reg_no == req.params.reg_no || data.reg_no == req.body.reg_no) {
                    console.log("equal!")
                    next();
                }
                else {
                  console.log("not equal")
                  res.status(403).send({success: false,message: 'You cannot access other student information'})
                }
            })
        }
    });
}

function allow(req,res,next) { // allow all but token required

    if(!req.body.token) return res.status(403).send({ success: false, message: 'No token' });
    db.AuthToken.findOne({ token: req.body.token }, (err, data) => {
        if (!data) return res.status(403).send({ success: false, message: 'Wrong token' });
        next();
    });
}


router.post('/user/create', (req, res) => {

    if(!req.body.password) {
        return res.send({success: false,message: 'Password cannot be empty'});
    }

    db.User_Details.findOne({reg_no: req.body.reg_no}).then(function(data) {

        if(data) {
            res.status(400).send({success: false, message: "Registration number already exists" });
        }

        else {

            bcrypt.hash(req.body.password,saltRounds).then(function(hash) {

                db.User_Details.create({

                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    reg_no: req.body.reg_no,
                    father_name: req.body.father_name,
                    DOB: req.body.DOB,
                    gender: req.body.gender,
                    address: req.body.address,
                    city: req.body.city,
                    state: req.body.state,
                    country: req.body.country,
                    pincode: req.body.pincode,
                    skills: req.body.skills,
                    department: req.body.department,
                    qualifications: req.body.qualifications,
                    interests: req.body.interests,
                    achievements:req.body.achievements,
                    work_as:req.body.work_as,
                    works_at:req.body.works_at,
                    about:req.body.about



                }).then(function(data) {
                    console.log("User created")
                    res.send({success: true,uid: data._id,reg_no: data.reg_no})
                }).catch(function(err) {
                    console.log(err);
                    res.send({ success: false });
                })

            });
        }


    })

});

router.post('/user/read/:id?' ,  (req,res) => {

    if (!req.params.id) {

        db.User_Details.find({}, (err, item) => {
            if (err) {
                res.send({ success: false });
                return console.error(err);
            } else {
             res.send({ success: true, item: item });
            }
        });

    }

    else {

       db.User_Details.findOne({ _id: req.params.id }, (err, item) => {
        if (!item) {
            res.status(404).send({ success: false, message: 'User Id does not exists' });
            console.log("success");
        } else if(err) {
            console.log("error");
            res.status(404).send({ success: false });
            return console.error(err);
        } else {
            res.send({ success: true, item: item });
            console.log("success");
        }
    });

   }
})

router.post('/project/create',  (req,res) => {

    var dateUTC = new Date();
    var dateUTC = new Date().getTime()
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5);
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    var dateCurrent = dateIST.toUTCString() + "+530";

    db.Project_Details.create({

        title : req.body.title,
        owner_id: req.body.owner_id,
        owner_name: req.body.owner_name,
        creation_timestamp: dateCurrent,
        modify_timestamp: dateCurrent,
        abstract: req.body.abstract,
        description: req.body.description,
        status: req.body.status,
        github_url: req.body.github_url,
        public: req.body.public,
        paper_url: req.body.paper_url,
        media_url: req.body.media_url,
        achievements: req.body.achievements,
        collaborators: req.body.collaborators,
        stack: req.body.stack

    }).then(function(data) {
        console.log("Project created")
        db.User_Details.findById(req.body.owner_id).then(function(data1){
            if (!data1) {
                res.send({success: false,message: 'no user'})
            }
            data1.update(  { $push: { projects: data._id } } ).then(function() {
                    console.log("User updated")
                    res.send({success: true})
                }).catch(function(err){
                    res.send({success: false})
                })
        })
    }).catch(function(err) {
        console.log(err);
        res.send({ success: false });
    })

})

router.post('/project/read/:project_id?',  (req,res) => {

    if (!req.params.project_id) {

        db.Project_Details.find({}, (err, item) => {
            if (err) {
                res.send({ success: false });
                return console.error(err);
            } else {
             res.send({ success: true, item: item });
            }
        });

    }

    else {

       db.Project_Details.findOne({ _id: req.params.project_id }, (err, item) => {
        if(!item) {
            res.status(404).send({ success: false, message: 'Project Id does not exists' });
            console.log("success");
        } else if(err) {
            res.status(404).send({success: false})
        } else {
            res.send({ success: true, item: item });
            console.log("success");
        }
    });

   }

})

router.post('/upvote/:project_id',   (req,res) => {

    db.Project_Details.findById(req.params.project_id).then(function(data) {
        data.update({bookmarks_count: data.bookmarks_count+1}).then(function() {
            db.User_Details.findOne({reg_no: req.body.reg_no }).then(function(data1){
                data1.update(  { $push: { bookmarks: data._id } } ).then(function() {
                    res.send({success: true})
                }).catch(function(err){
                    res.send({success: false})
                })
            })
        })
    })

})

router.post('/downvote/:project_id' ,   (req,res) => {

    db.Project_Details.findById(req.params.project_id).then(function(data) {
        data.update({bookmarks_count: data.bookmarks_count-1}).then(function() {
            db.User_Details.findOne({reg_no: req.body.reg_no }).then(function(data1){
                data1.update(  { $pull: { bookmarks: data._id } } ).then(function() {
                    res.send({success: true})
                })
            })
        })
    })

})

router.post('/api/upload',  upload.single('project'), (req, res) => {
    console.log("Request body is" + req.file.location);
    res.send({ path: req.file.location })
})

router.post('/popularProjects', (req,res) => {
    var query   = {};
    var options = {
        select:   'title abstract collaborators stack',
        sort:     { bookmarks_count: -1 },
        lean:     true,
        offset:   req.body.offset,
        limit:    req.body.limit
    };

    db.Project_Details.paginate(query, options).then(function(result) {
         res.send({success: true,item: result})

    });
})

router.post('/feed',(req,res) => {
    var query   = {};
    var options = {
        select:   'title abstract owner_name collaborators stack owner_id __v',
        sort:     { date: -1 },
        lean:     true,
        offset:   req.body.offset,
        limit:    req.body.limit
    };

    db.Project_Details.paginate(query, options).then(function(result) {
         res.send({success: true,item: result})

    });
})

router.post('/bookmarkedprojects',(req,res) =>{

    db.User_Details.
      findOne({ _id: req.body._id }).
      populate('bookmarks').
      exec(function (err, item) {
        if (err) return res.send({success: false,message: err});
        res.send({success: true,item: item.bookmarks})
    });

})

router.post('/myprojects',  (req,res) => {
    db.User_Details.
      findOne({ _id: req.body._id }).
      populate('projects').
      exec(function (err, item) {
        if (err) return res.send({success: false,message: err});
        else if(!item) {
            return res.send({success: true,message: 'No projects yet'})
        }
        res.send({success: true,item: item.projects})
    });
})

router.post('/request/:project_id',(req,res) => {

    db.Project_Details.findById(req.params.project_id).then(function(data){
        if(!data) {
            return res.send({success: false, message: 'Project Id Does not exists'})
        }
        var project_name = data.title;
        var requesterId = req.body.requester_id;
        var requester_name = req.body.requester_name;
        var owner_id = data.owner_id;

        db.Request_Details.create({
            project_title: project_name,
            project_id: data._id,
            requesterId: requesterId,
            owner_id: owner_id,
            requester_name: requester_name
        }).then(function(){
            res.send({success: true})
        }).catch(function(err){
            res.send({success: false})
        })

    })

});

router.post('/seerequests',(req,res) => {

    db.Request_Details.find({owner_id: req.body._id}).then(function(data) {
        res.send({success: true,data: data})
    })

});

router.post('/seenotif',(req,res) => {

    db.Notification_Details.find({user_id: req.body.id}).sort('-date').then(function(data) {
        res.send({success: true,data: data})
    })

});

router.post('/deletenotif/:id',(req,res) =>{
    db.Notification_Details.findOne({ _id: req.params.id }, function(err, item) {
        if (err) {
            return console.error(err);
        }
        if (!item) {
            res.send({ message: 'Does not exist' })
            console.log("Does not exist")
        } else {
            item.remove(function(err, data) {
                if (err) {
                    return console.error(err);
                } else {
                    res.send({ success: true });
                }
            });
        }
    });
})

router.post('/accept/:requester_id/:request_id',(req,res) => {

    var dateUTC = new Date();
    var dateUTC = new Date().getTime()
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5);
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    var dateCurrent = dateIST.toUTCString() + "+530";

    db.Project_Details.update({ _id: req.body.p_id }, { $push: { collaborators: req.body.requester_name } })
        .then(function(){
            db.Request_Details.findOne({_id: req.params.request_id})
            .exec().then(function(data1){
                data1.remove(function(err, message) {
                if (err) {
                    return console.error(err);
                } else {
                    db.Notification_Details.create({
                    date: dateCurrent,
                    user_id: req.params.requester_id,
                    notification: "You are now a collaborator for " + data1.project_title
                })
                    db.Request_Details.find({ owner_id: req.body._id }).then(function (data) {
                        res.send({ success: true, data: data })
                    })
                }
            });
        })
    });
    // res.send({ success: true });

});

router.post('/reject/:requester_id/:request_id',(req,res) => {

    var dateUTC = new Date();
    var dateUTC = new Date().getTime()
    var dateIST = new Date(dateUTC);
    dateIST.setHours(dateIST.getHours() + 5);
    dateIST.setMinutes(dateIST.getMinutes() + 30);
    var dateCurrent = dateIST.toUTCString() + "+530";

    db.Request_Details.findOne({_id: req.params.request_id}).then(function(data1){
                data1.remove(function(err, message) {
                if (err) {
                    return console.error(err);
                } else {
                    db.Notification_Details.create({
                    date: dateCurrent,
                    user_id: req.params.requester_id,
                    notification: "Your request to collaborate for " + data1.project_title + " has been rejected"
                })
                    db.Request_Details.find({ owner_id: req.body._id }).then(function (data) {
                        res.send({ success: true, data: data })
                    })
                }
            });
        })

    // res.send({ success: true });

});

router.post('/authenticate', (req, res) => { // authenticate a user

        db.AuthToken.findOne({ email: req.body.email }).then(function(data) {
            if(!data) {
                db.User_Details.findOne({email: req.body.email}).then(function(user){
                    if(!user) return res.send({success: false,message: 'Authentication failed. User not found.'})

                    else {
                        bcrypt.compare(req.body.password,user.password).then(function(data) {
                            if(data) {

                                const payload = {
                                    user: user.reg_no
                                };

                                var token = jwt.sign(payload, "abcdef", {
                                    expiresIn: 60*60*24
                                });

                                db.AuthToken.create({
                                    token: token,
                                    email: req.body.email
                                }).then(function(data) {
                                    res.send({
                                    success: true,
                                    message: 'token created',
                                    token: token,
                                    reg_no: user.reg_no,
                                    uid: user._id,
                                    name: user.name

                                });
                            })

                            } else {
                                res.send({success: false,message: 'Authentication failed. Wrong password.'})
                            }
                        })
                    }

                })
            } else {
                db.User_Details.findOne({reg_no: data.reg_no}).then(function(user) {
                    bcrypt.compare(req.body.password,user.password).then(function(check) {
                        if(check) {
                          db.AuthToken.findOne({reg_no: req.body.reg_no}).then(function(data) {
                            res.send({token: data.token , success: true,
                                    reg_no: user.reg_no,
                                    uid: user._id
                                 })
                          })
                        } else {
                            res.send({success: false,message:'Wrong Password'})
                        }
                    })
                })
            }
        })
});

router.post('/logout' , (req,res) => {

    db.AuthToken.findOne({token: req.body.token}).then(function(data) {
        if(!data) {
            res.send({ message: 'illegal token' })
        } else {
            data.remove(function(err, user) {
                if (err) {
                    return console.error(err);
                } else {
                    res.send({ success: true, message: "Succesfully logged out" });
                }
            });
        }
    }).catch(function(err) {
        console.error(err);
        res.send({success: false,message: 'error'})
    })
})

router.post('/project/update/:project_id?',(req,res) => {
    db.Project_Details.findById(req.params.project_id, function(err, item) {
        if (!item) {
            console.log("empty");
            res.send({ success: false });
        }
        var dateUTC = new Date();
        var dateUTC = new Date().getTime()
        var dateIST = new Date(dateUTC);
        dateIST.setHours(dateIST.getHours() + 5);
        dateIST.setMinutes(dateIST.getMinutes() + 30);
        var dateCurrent = dateIST.toUTCString() + "+530";
        item.update({
            title : req.body.title,
            modify_timestamp: dateCurrent,
            abstract: req.body.abstract,
            description: req.body.description,
            status: req.body.status,
            github_url: req.body.github_url,
            paper_url: req.body.paper_url,
            media_url: req.body.media_url,
            achievements: req.body.achievements,
            collaborators: req.body.collaborators,
            stack: req.body.stack
        }, function(err, itemID) {
            if (err) {
                console.log(err);
                res.send("Error encountered!!" + err);
            } else {
                console.log("Updated:" + itemID)
                res.send({ success: true });
            }
        })
    });
})

router.post('/user/update/:user_id?',(req,res) => {
    db.User_Details.findById(req.params.user_id, function(err, item) {
        if (!item) {
            console.log("empty");
            res.send({ success: false });
        }
        item.update({
            name:req.body.name,
            qualifications:req.body.qualifications,
            work_as:req.body.work_as,
            email: req.body.email,
            address: req.body.address,
            skills: req.body.skills,
            interests: req.body.interests,
            about:req.body.about,
            contact:req.body.contact,
            works_at:req.body.works_at,
            achievements:req.body.achievements,
            DOB:req.body.DOB

        }, function(err, itemID) {
            if (err) {
                console.log(err);
                res.send("Error encountered!!" + err);
            } else {
                console.log("Updated:" + itemID)
                res.send({ success: true });
            }
        })
    });
})

router.post('*',(req,res) => {
    res.status(404).send({success: false,message: 'Page does not exist!'});
})

router.get('*',(req,res) => {
    res.status(404).send({success: false,message: 'Page does not exist!'});
})

module.exports = router;

/*

 apis left:

    - return names of members

*/
