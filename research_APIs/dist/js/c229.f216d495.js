(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c229"],{c229:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.projects,function(e,r){return o("v-flex",{key:r,attrs:{xs12:"",md6:"","px-2":"","mb-4":""}},[o("v-card",{staticStyle:{"border-radius":"10px"}},[o("v-card-title",[o("h3",[t._v(t._s(e.title))]),o("v-spacer"),o("v-card-actions",[o("v-btn",{attrs:{flat:"",icon:""},on:{click:function(o){t.dobookmark(e.id,e.__v,e.owner_id)}}},[o("v-icon",[t._v(t._s(t.bookmark[e.__v]?"bookmark":"bookmark_border"))])],1)],1)],1),o("v-card-text",[o("p",[t._v(t._s(e.abstract)+" ")])]),o("v-expansion-panel",{staticClass:"elevation-0",attrs:{focusable:"",focusable:""}},[o("v-expansion-panel-content",[o("div",{attrs:{slot:"header"},slot:"header"},[t._v("Show More")]),o("v-card",{staticClass:"grey lighten-3"},[o("v-card-text",[o("h4",[t._v("Stack: ")]),o("ul",t._l(e.stack,function(e,r){return o("li",{key:r},[t._v(t._s(e))])}))]),o("v-card-text",[o("h4",[t._v("Collaborators: ")]),o("p",[o("ul",t._l(e.collaborators,function(e,r){return o("li",{key:r},[t._v(t._s(e))])}))])])],1)],1)],1),o("v-card-actions",[o("v-btn",{attrs:{round:"",color:"secondary"},on:{click:function(o){t.viewProject(e.id)}}},[t._v("\n            VIEW PROJECT")]),o("v-spacer"),e.owner_id!=t.uid?o("v-btn",{attrs:{round:""},on:{click:function(o){t.sendRequest(e.id)}}},[t._v("Request\n            "),o("v-icon",{attrs:{right:"",small:""}},[t._v("send")])],1):t._e()],1)],1)],1)}))],1)},n=[],s=o("8afe"),a=(o("96cf"),o("3040")),i=(o("7f7f"),o("bc3a")),c=o.n(i),u={name:"popularProject",data:function(){return{bookmark:[],projects:[],scrollPosition:0,limit:5,offset:0,stop:!1}},created:function(){this.getProjects()},mounted:function(){this.handleScroll()},computed:{loading:function(){return this.$store.getters.loading},uid:function(){return this.$store.getters.userId},reg_no:function(){return this.$store.getters.regNo},name:function(){return this.$store.getters.name}},methods:{dobookmark:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,o,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.bookmark[o]||this.uid===r){t.next=15;break}return this.bookmark[o]=!0,this.$forceUpdate(),t.prev=3,t.next=6,c.a.post("http://localhost:80/upvote/".concat(e),{reg_no:this.reg_no});case 6:t.sent,this.bookmark[o]=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:t.next=28;break;case 15:if(!this.bookmark[o]||this.uid===r){t.next=28;break}return this.bookmark[o]=!1,this.$forceUpdate(),t.prev=18,t.next=21,c.a.post("http://localhost:80/downvote/".concat(e),{reg_no:this.reg_no});case 21:t.sent,this.bookmark[o]=!1,t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](18),console.log(t.t1);case 28:case"end":return t.stop()}},t,this,[[3,10],[18,25]])}));return function(e,o,r){return t.apply(this,arguments)}}(),handleScroll:function(){var t=this;window.addEventListener("scroll",function(e){var o=window.scrollY,r=document.documentElement.clientHeight,n=document.documentElement.scrollHeight,s=r+o>=n;s&&(t.offset+=t.limit,t.getProjects())})},sendRequest:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.dispatch("loading",!0),t.prev=1,t.next=4,c.a.post("http://localhost:80/request/".concat(e),{requester_id:this.uid,requester_name:this.name});case 4:this.$store.dispatch("loading",!1),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$store.dispatch("loading",!1);case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}(),viewProject:function(t){this.$router.push("/".concat(this.reg_no,"/read/").concat(t))},getProjects:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,o,r,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.stop){t.next=12;break}return t.next=4,c.a.post("http://localhost:80/feed",{offset:this.offset,limit:this.limit,uid:this.uid});case 4:return o=t.sent,o.data.item.total<this.offset&&(this.stop=!0),(e=this.projects).push.apply(e,Object(s["a"])(o.data.item.docs)),t.next=9,c.a.post("http://localhost:80/user/read/".concat(this.uid));case 9:for(r=t.sent,n=this.offset;n<this.offset+this.limit;n++){for(this.projects[n].__v=n,a=0;a<r.data.item.bookmarks.length;a++)r.data.item.bookmarks[a]===this.projects[n]._id&&(console.log(!0),this.bookmark[n]=!0);!0!==this.bookmark[n]&&(this.bookmark[n]=!1),console.log(this.projects[n])}console.log(this.bookmark);case 12:t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[0,14]])}));return function(){return t.apply(this,arguments)}}()}},l=u,h=o("2877"),d=Object(h["a"])(l,r,n,!1,null,null,null);d.options.__file="home.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=c229.f216d495.js.map