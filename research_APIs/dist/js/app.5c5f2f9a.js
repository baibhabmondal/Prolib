(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{2450:"759c2542",2694:"a51bcbc4","49e6":"d1205865",ad59:"b9236159",ae8e:"8d12422d",c229:"f216d495","chunk-4daf":"9108e17b","chunk-61bc":"64a16feb","chunk-69c0":"4ca5fb1d","chunk-c28c":"a21041a0","chunk-d16f":"e4eb4089","chunk-fd9e":"2119c904",d715:"665d21c7"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4daf":1,"chunk-d16f":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{2450:"31d6cfe0",2694:"31d6cfe0","49e6":"31d6cfe0",ad59:"31d6cfe0",ae8e:"31d6cfe0",c229:"31d6cfe0","chunk-4daf":"97986022","chunk-61bc":"31d6cfe0","chunk-69c0":"31d6cfe0","chunk-c28c":"31d6cfe0","chunk-d16f":"826399a5","chunk-fd9e":"31d6cfe0",d715:"31d6cfe0"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),l=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),a=n.n(r);a.a},"04f5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("ce5b"),o=n.n(a);n("bf40");r["default"].use(o.a,{});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("router-view")],1)},s=[],c=(n("034f"),n("2877")),l={},u=Object(c["a"])(l,i,s,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,p=n("8c4f");r["default"].use(p["a"]);var f=new p["a"]({mode:"history",base:"/",routes:[{path:"/signup",name:"signup",component:function(){return n.e("2450").then(n.bind(null,"2450"))}},{path:"/:user",props:!0,component:function(){return n.e("chunk-d16f").then(n.bind(null,"a78b"))},beforeEnter:function(e,t,n){localStorage.id?n():n("/")},children:[{path:"/",name:"feed",component:function(){return n.e("c229").then(n.bind(null,"c229"))}},{path:"projects",name:"projects",component:function(){return n.e("2694").then(n.bind(null,"2694"))}},{path:"bookmarks",name:"bookmarks",component:function(){return n.e("ad59").then(n.bind(null,"ad59"))}},{path:"profile",name:"profile",component:function(){return n.e("chunk-4daf").then(n.bind(null,"0162"))}},{path:"events",name:"events",component:function(){return n.e("chunk-61bc").then(n.bind(null,"c2ee"))}},{path:"ClubsandTeams",name:"ClubsandTeams",component:function(){return n.e("chunk-69c0").then(n.bind(null,"8f59"))}},{path:"popularProjects",name:"popularProjects",component:function(){return n.e("ae8e").then(n.bind(null,"ae8e"))}},{path:"notifications",name:"notification",component:function(){return n.e("chunk-fd9e").then(n.bind(null,"7b01"))}},{path:"requests",name:"request",component:function(){return n.e("chunk-c28c").then(n.bind(null,"894e"))}},{path:"read/:id",props:!0,name:"project",component:function(){return n.e("49e6").then(n.bind(null,"49e6"))}}]},{path:"/",name:"login",component:function(){return n.e("d715").then(n.bind(null,"d715"))}}]}),h=(n("96cf"),n("3040")),m=(n("7f7f"),n("2f62")),v=n("bc3a"),b=n.n(v);r["default"].use(m["a"]);var k=new m["a"].Store({state:{feedProjects:[],userId:localStorage.id,personalProjects:[],bookmarkProjects:[],regNo:localStorage.reg_no,name:localStorage.name,loading:!1,error:null,notifCount:0},getters:{notifCount:function(e){return e.notifCount},error:function(e){return e.error},getBookmarkProject:function(e){return e.bookmarkProjects},getPersonalProjects:function(e){return e.personalProjects},loading:function(e){return e.loading},userId:function(e){return e.userId},regNo:function(e){return e.regNo},name:function(e){return e.name}},mutations:{setNotifCount:function(e,t){e.notifCount=t},clrNotifCount:function(e){e.notifCount=0},setError:function(e,t){e.error=t},clearError:function(e){e.error=null},setFeed:function(e,t){e.feedProjects=t},personalProjects:function(e,t){e.personalProjects=t},bookmarks:function(e,t){e.bookmarkProjects=t},userId:function(e,t){e.userId=t},reg_no:function(e,t){e.regNo=t},name:function(e,t){e.name=t},loading:function(e,t){e.loading=t}},actions:{setNotifCount:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.getters,e.next=3,b.a.post("http://localhost:80/seenotif",{id:r.userId});case 3:a=e.sent,o=a.data.data,n("setNotifCount",o.length);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),clrNotifCount:function(e){var t=e.commit;t("clrNotifCount")},setError:function(e,t){var n=e.commit;n("setError",t)},clearError:function(e){var t=e.commit;t("clearError")},personalProjects:function(e){var t=e.commit,n=e.state;b.a.post("http://localhost:80/myprojects",{_id:n.userId}).then(function(e){e.data.item?t("personalProjects",e.data.item):t("personalProjects",[])}).catch(function(e){console.log(e)})},bookmarks:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,b.a.get("http://localhost:3000/bookmarkProjects");case 4:r=e.sent,n("bookmarks",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),userId:function(e,t){var n=e.commit;n("userId",t)},reg_no:function(e,t){var n=e.commit;n("reg_no",t)},name:function(e,t){var n=e.commit;n("name",t)},loading:function(e,t){var n=e.commit;n("loading",t)}}}),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticStyle:{"border-radius":"10px"}},[n("v-card-title",[n("h2",[n("v-icon",{attrs:{left:"","pr-2":""}},[e._v("add_circle_outline")]),e._v(" "+e._s("edit"===e.task?"Edit project":"Add new Project"))],1)]),n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-text-field",{attrs:{required:"",rules:e.titleRules,counter:50,"prepend-inner-icon":"code",label:"Project title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-text-field",{attrs:{required:"",rules:e.aboutRules,counter:100,"prepend-inner-icon":"layers",label:"About"},model:{value:e.about,callback:function(t){e.about=t},expression:"about"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-textarea",{attrs:{required:"",rules:e.desRules,"auto-grow":"","prepend-inner-icon":"notes",label:"Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-combobox",{attrs:{items:e.items,label:"Stack",chips:"",clearable:"","prepend-inner-icon":"dns",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove(t.item)}}},[n("strong",[e._v(e._s(t.item))])])]}}]),model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}})],1),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload",attrs:{type:"file",name:"project"}}),n("v-btn",{staticClass:"primary--text",attrs:{outline:""},on:{click:e.uploadFile}},[n("v-icon",{attrs:{left:""}},[e._v("cloud_upload")]),e._v("Upload Media")],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-text-field",{attrs:{rules:e.linkRules,"prepend-inner-icon":"link",label:"Project link"},model:{value:e.link,callback:function(t){e.link=t},expression:"link"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-textarea",{attrs:{"auto-grow":"","prepend-inner-icon":"grade",label:"Achievements"},model:{value:e.achievements,callback:function(t){e.achievements=t},expression:"achievements"}})],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"text-xs-right":""}},[n("v-btn",{attrs:{color:"red lighten-1",outline:""},on:{click:e.cancel}},[e._v("Cancel")])],1),n("v-flex",{attrs:{"text-xs-left":""}},[n("v-btn",{attrs:{disabled:!e.valid,color:"green lighten-1",outline:""},on:{click:e.submit}},[e._v("Save")])],1)],1)],1)],1)],1)},x=[],w=(n("b54a"),n("8afe")),_=(n("ac6a"),{props:{task:String,projectId:String},data:function(){return{chips:[],items:["Vue","Node","React","Angular","frontend","Backende"],valid:!0,title:"",about:"",achievements:"",description:"",collaborators:[],stack:"",link:"",titleRules:[function(e){return!!e||"Title is required"}],aboutRules:[function(e){return!!e||"About is required"}],desRules:[function(e){return!!e||"Description is required"}],linkRules:[function(e){return!!e||"Project link is required"}]}},computed:{loading:function(){return this.$store.getters.loading},uid:function(){return this.$store.getters.userId},reg_no:function(){return this.$store.getters.regNo},name:function(){return this.$store.getters.name}},created:function(){this.callProject()},methods:{callProject:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("edit"!==this.task){e.next=16;break}return e.prev=1,e.next=4,b.a.post("http://localhost:80/project/read/".concat(this.projectId));case 4:t=e.sent,this.title=t.data.item.title,this.about=t.data.item.abstract,this.description=t.data.item.description,this.link=t.data.item.github_url,t.data.item.achievements.forEach(function(e){n.achievements+=e,n.achievements+="\n"}),this.chips=t.data.item.stack,e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[1,13]])}));return function(){return e.apply(this,arguments)}}(),remove:function(e){this.chips.splice(this.chips.indexOf(e),1),this.chips=Object(w["a"])(this.chips)},uploadFile:function(){this.$refs.upload.click()},cancel:function(){this.clear(),this.$emit("close")},submit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.$refs.form.validate()){e.next=13;break}if(t={title:this.title,abstract:this.about,description:this.description,github_url:this.link,stack:this.chips,achievements:this.achievements,owner_id:this.uid,owner_name:this.name,collaborators:this.collaborators},"edit"!==this.task){e.next=9;break}return e.next=6,b.a.post("http://localhost:80/project/update/".concat(this.projectId),t);case 6:this.$emit("change"),e.next=11;break;case 9:return e.next=11,b.a.post("http://localhost:80/project/create",t);case 11:this.clear(),this.$emit("close");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log(e.t0);case 18:case"end":return e.stop()}},e,this,[[0,15]])}));return function(){return e.apply(this,arguments)}}(),clear:function(){this.$refs.form.reset(),this.title="",this.description="",this.stack=[],this.about="",this.link=""}}}),j=_,y=Object(c["a"])(j,g,x,!1,null,null,null);y.options.__file="newProject.vue";var O=y.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("h2",[n("v-icon",{attrs:{left:"","pr-2":""}},[e._v("edit")]),e._v(" Edit Profile")],1)]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-text-field",{attrs:{"prepend-inner-icon":"person",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{"prepend-inner-icon":"code",label:"Registration Number"},model:{value:e.regno,callback:function(t){e.regno=t},expression:"regno"}}),n("v-text-field",{attrs:{"prepend-inner-icon":"email",label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.birthdate,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.birthdate=t}},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"birthdate","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}}),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.birthdate,callback:function(t){e.birthdate=t},expression:"birthdate"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.birthdate)}}},[e._v("OK")])],1)],1),n("v-text-field",{attrs:{"prepend-inner-icon":"phone",label:"Contact Number"},model:{value:e.contact,callback:function(t){e.contact=t},expression:"contact"}}),n("v-select",{attrs:{"prepend-icon":"person",items:e.designation,label:"Work As"},model:{value:e.work_as,callback:function(t){e.work_as=t},expression:"work_as"}})],1)],1),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload",attrs:{type:"file",name:"project"}}),n("v-btn",{staticClass:"primary--text",attrs:{outline:""},on:{click:e.uploadFile}},[n("v-icon",{attrs:{left:""}},[e._v("cloud_upload")]),e._v("Upload Image")],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-combobox",{attrs:{items:e.items,label:"Interests",chips:"",clearable:"","prepend-inner-icon":"dns",multiple:"",required:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove1(t.item)}}},[n("strong",[e._v(e._s(t.item))])])]}}]),model:{value:e.interests,callback:function(t){e.interests=t},expression:"interests"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-combobox",{attrs:{items:e.items,label:"Skills",chips:"",clearable:"","prepend-inner-icon":"dns",multiple:"",required:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove(t.item)}}},[n("strong",[e._v(e._s(t.item))])])]}}]),model:{value:e.skills,callback:function(t){e.skills=t},expression:"skills"}})],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-combobox",{attrs:{items:e.qualification,label:"Qualifications",chips:"",clearable:"","prepend-inner-icon":"layers",multiple:"",required:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove2(t.item)}}},[n("strong",[e._v(e._s(t.item))])])]}}]),model:{value:e.qualifications,callback:function(t){e.qualifications=t},expression:"qualifications"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[n("v-combobox",{attrs:{label:"Works At",chips:"",clearable:"","prepend-inner-icon":"work",multiple:"",required:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[n("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(n){e.remove3(t.item)}}},[n("strong",[e._v(e._s(t.item))])])]}}]),model:{value:e.worksat,callback:function(t){e.worksat=t},expression:"worksat"}})],1)],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[n("v-text-field",{attrs:{"prepend-inner-icon":"room",label:"Location"},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),n("v-textarea",{attrs:{"auto-grow":"","prepend-inner-icon":"notes",label:"About Me"},model:{value:e.about,callback:function(t){e.about=t},expression:"about"}}),n("v-textarea",{attrs:{"auto-grow":"","prepend-inner-icon":"notes",label:"Achievements"},model:{value:e.achievements,callback:function(t){e.achievements=t},expression:"achievements"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"red darken-1",outline:""},on:{click:e.cancel}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"green darken-1",outline:""},on:{click:e.save}},[e._v("Save")])],1)],1)},q=[],S=n("a322"),$={data:function(){var e;return e={menu:!1,dialog:!1,birthdate:null,work_as:"",designation:["Student","Faculty"],items:["Vue","Node","React","Angular","frontend","Backende"],qualification:[]},Object(S["a"])(e,"work_as",""),Object(S["a"])(e,"name",""),Object(S["a"])(e,"regno",""),Object(S["a"])(e,"qualifications",[]),Object(S["a"])(e,"worksat",[]),Object(S["a"])(e,"about",""),Object(S["a"])(e,"contact",""),Object(S["a"])(e,"email",""),Object(S["a"])(e,"birthdate",""),Object(S["a"])(e,"location",""),Object(S["a"])(e,"skills",[]),Object(S["a"])(e,"interests",[]),Object(S["a"])(e,"achievements",""),e},computed:{uid:function(){return this.$store.getters.userId},loading:function(){return this.$store.getters.loading}},methods:{cancel:function(){this.$emit("close")},uploadFile:function(){this.$refs.upload.click()},remove:function(e){this.skills.splice(this.skills.indexOf(e),1),this.skills=Object(w["a"])(this.skills)},remove1:function(e){this.interests.splice(this.interests.indexOf(e),1),this.interests=Object(w["a"])(this.interests)},remove2:function(e){this.qualifications.splice(this.interests.indexOf(e),1),this.interests=Object(w["a"])(this.interests)},remove3:function(e){this.worksat.splice(this.interests.indexOf(e),1),this.interests=Object(w["a"])(this.interests)},save:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$store.dispatch("loading",!0),t={name:this.name,reg_no:this.regno,DOB:this.birthdate,email:this.email,address:this.location,contact:this.contact,about:this.about,work_as:this.work_as,skills:this.skills,interests:this.interests,works_at:this.worksat,qualifications:this.qualifications,achievements:this.achievements},e.next=5,b.a.post("http://localhost:80/user/update/".concat(this.uid),t);case 5:this.$emit("refresh"),this.$emit("close"),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),this.$store.dispatch("loading",!1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},created:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log(this.uid),e.next=4,b.a.post("http://localhost:80/user/read/".concat(this.uid));case 4:t=e.sent,console.log(t.data),this.name=t.data.item.name,this.regno=t.data.item.reg_no,this.birthdate=t.data.item.DOB,this.email=t.data.item.email,this.location=t.data.item.address,this.contact=t.data.item.contact,this.about=t.data.item.about,this.work_as=t.data.item.work_as,this.skills=t.data.item.skills,this.interests=t.data.item.interests,this.worksat=t.data.item.works_at,this.qualifications=t.data.item.qualifications,this.achievements=t.data.item.achievements,e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](0),console.log(e.t0);case 24:case"end":return e.stop()}},e,this,[[0,21]])}));return function(){return e.apply(this,arguments)}}()},C=$,E=Object(c["a"])(C,P,q,!1,null,null,null);E.options.__file="edit_Profile.vue";var R=E.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-alert",{attrs:{value:"true",dismissible:"",type:"error"},on:{input:e.onClose}},[e._v("\n    "+e._s(e.text)+"\n")])},I=[],A={props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},T=A,B=Object(c["a"])(T,N,I,!1,null,null,null);B.options.__file="alert.vue";var F=B.exports;r["default"].config.productionTip=!1,r["default"].component("newProject",O),r["default"].component("edit_Profile",R),r["default"].component("app-alert",F),new r["default"]({router:f,store:k,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.5c5f2f9a.js.map