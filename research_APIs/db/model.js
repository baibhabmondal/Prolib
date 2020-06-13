const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var User_Details_Schema = new Schema({

	name: String,
	email: String,
	password: String,
	reg_no: String,
	contact: String,
	father_name: String,
	DOB: String,
	gender: String,
	address: String,
	city: String,
	state: String,
	country: String,
	pincode: Number,
	//bookmarks: [String],
	bookmarks: [{ type: Schema.Types.ObjectId, ref: 'project_details' }],
	projects: [{ type: Schema.Types.ObjectId, ref: 'project_details' }],
	skills: [String],
	department: String,
	qualifications: [String],
	interests: [String],
	achievements:String,
	work_as:String,
	works_at:[String],
	about:String

})

var Project_Details_Schema = new Schema({

	title : String,
	owner_id: String,
	owner_name: String,
	creation_timestamp: String,
	modify_timestamp: String,
	abstract: String,
	description: String,
	bookmarks_count: {type: Number,default: 0},
	status: String,
	github_url: String,
	public: Boolean,
	paper_url: String,
	media_url: [String],
	achievements: [String],
	collaborators: [String],
	stack: [String],
	hasRequested: [String]

})

var Requests_Schema = new Schema({
	project_title: String,
	project_id: String,
    requesterId: String,
    owner_id: String,
		requester_name: String
})

var Notification_Schema = new Schema({

	date: String,
	user_id: String,
	notification: String

})

var AuthToken_Schema = new Schema({
  token:String,
  reg_no: String
})

Project_Details_Schema.plugin(mongoosePaginate);

var User_Details = mongoose.model('user_details',User_Details_Schema);
var Project_Details = mongoose.model('project_details',Project_Details_Schema);
var Request_Details = mongoose.model('request_details',Requests_Schema);
var AuthToken = mongoose.model('auth_token',AuthToken_Schema);
var Notification_Details = mongoose.model('notifications',Notification_Schema);

module.exports =  {
	User_Details: User_Details,
	Project_Details: Project_Details,
	Request_Details: Request_Details,
	AuthToken: AuthToken,
	Notification_Details: Notification_Details
};
