(function(t){function e(e){for(var s,a,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],s=!0,i=1;i<o.length;i++){var u=o[i];0!==n[u]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},r=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"03e8":function(t,e,o){t.exports=o.p+"img/Snuggle-Time.d63b1908.png"},"0596":function(t,e,o){},"06a8":function(t,e,o){"use strict";o("c959")},"1a68":function(t,e,o){},"378e":function(t,e,o){t.exports=o.p+"img/Eucii-Big-Run.c237919c.png"},"40e1":function(t,e,o){"use strict";o("ae5c")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",[o("ul",[t.user?o("li",t._l(t.userlinks,(function(e){return o("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1):o("li",t._l(t.strangerlinks,(function(e){return o("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1)])]),o("h1",[t._v("My Super Cute Baby-Cats")]),o("router-view",{attrs:{posts:t.posts},on:{"update-posts":function(e){return t.updatePosts()}}})],1)},r=[],a=o("bc3a").create({baseURL:"http://e28-api.e28aruzek.me",responseType:"json"}),i={name:"App",data:function(){return{posts:[],userlinks:["home","create new post"],strangerlinks:["home","login / register"],paths:{home:"/","create new post":"/posts/new","login / register":"/posts/new"}}},methods:{updatePosts:function(){var t=this;a.get("post").then((function(e){t.posts=e.data.post}))}},computed:{user:function(){return this.$store.state.user}},mounted:function(){this.updatePosts(),this.$store.dispatch("authUser")}},u=i,c=(o("5a50"),o("2877")),p=Object(c["a"])(u,n,r,!1,null,"9fae4854",null),l=p.exports,d=o("8c4f"),m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("This is a blog about my two super cute baby cats: Euclid (Eucii) and Jupiter (Doopider). I adopted them when they were kittens, but they've grown up so fast. They are almost 2 years old now! Read the blog to find out what they're up to every day. :) ")]),o("div",{staticClass:"gridview"},t._l(t.posts,(function(t){return o("router-link",{key:t.id,attrs:{to:"/posts/"+t.id,exact:""}},[o("show-post",{attrs:{post:t}})],1)})),1)])},g=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("div",{class:{onHomePage:!t.includeDetails}},[o("img",{class:{postimage:t.includeDetails},attrs:{src:t.imageSource}}),t.includeDetails?o("div",[o("div",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),o("p",{staticClass:"post-content"},[t._v(" "+t._s(t.post.content)+" ")])]):t._e()]),t.includeDetails?o("div",[t.user?o("div",[o("comment-section",{attrs:{associatedBlogPost:t.post.title}}),t._l(t.comments,(function(e){return o("div",{key:e.id},[t.post.title==e.associatedBlogPost?o("div",{staticClass:"commentsection"},[o("p",[t._v(t._s(e.content))]),o("cite",[t._v("Author: "+t._s(e.name))])]):t._e()])}))],2):o("router-link",{attrs:{to:"/posts/new"}},[t._v("Login to View Comments")])],1):t._e()])},v=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Write a Comment")]),o("div",{attrs:{id:"inputs"}},[o("cite",[t._v("Author: "+t._s(t.comment.name))]),o("label",{attrs:{for:"content"}},[t._v("Write Your Comment Here:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.content,expression:"comment.content"}],attrs:{id:"content",rows:"10",cols:"116"},domProps:{value:t.comment.content},on:{input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value)}}})]),o("button",{on:{click:t.addComment}},[t._v("Add Comment")]),t.showConfirmationMessage?t._e():o("p",[t._v(" "+t._s(t.errors)+" ")]),t.showConfirmationMessage?o("p",[t._v("Congrats! Your comment is now published!")]):t._e()])},w=[],_=(o("b0c0"),{name:"comment-section",props:["associatedBlogPost"],data:function(){return{errors:null,showConfirmationMessage:!1,comment:{name:this.$store.state.user.name,content:"",associatedBlogPost:this.associatedBlogPost}}},methods:{addComment:function(){var t=this;a.post("/comment",this.comment).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$emit("update-comments"),t.showConfirmationMessage=!0,t.comment.content="")}))}}}),b=_,y=(o("40e1"),Object(c["a"])(b,h,w,!1,null,"c3de3e0a",null)),k=y.exports,x={name:"show-post",props:["post","includeDetails"],components:{"comment-section":k},data:function(){return{comments:[]}},methods:{updateComments:function(){var t=this;a.get("comment").then((function(e){t.comments=e.data.comment}))}},mounted:function(){this.updateComments()},computed:{user:function(){return this.$store.state.user},imageSource:function(){try{return o("9e01")("./"+this.post.image+".png")}catch(t){return o("cbd0")}}}},C=x,P=(o("e689"),Object(c["a"])(C,f,v,!1,null,"8e05164c",null)),$=P.exports,O={name:"",components:{"show-post":$},props:["posts"],data:function(){return{}}},S=O,j=(o("facd"),Object(c["a"])(S,m,g,!1,null,"03a3b3ff",null)),D=j.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"post-page"}},[t.post?o("div",[o("show-post",{attrs:{post:t.post,includeDetails:!0}})],1):t._e(),t.postNotFound?o("div",[o("p",[t._v("post "+t._s(t.id)+" not found.")]),o("router-link",{attrs:{to:"/posts"}},[t._v("Go to all posts ")])],1):t._e()])},M=[],T=(o("4de4"),{name:"",props:["id","posts"],components:{"show-post":$},data:function(){return{}},computed:{post:function(){var t=this;return this.posts.filter((function(e){return e.id==t.id}),this.id)[0]},postNotFound:function(){return null==this.post}}}),Y=T,E=Object(c["a"])(Y,N,M,!1,null,null,null),B=E.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.user?o("div",[o("h2",[t._v("Add More Stories About Your Cats")]),o("div",{attrs:{id:"inputs"}},[o("label",{attrs:{for:"title"}},[t._v("Add Your Blog Post Title Here: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),o("cite",[t._v("Required. Must be 3 - 100 characters. ")]),o("label",{attrs:{for:"image"}},[t._v("Add An Image Name: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.image,expression:"post.image"}],attrs:{type:"text",id:"image"},domProps:{value:t.post.image},on:{input:function(e){e.target.composing||t.$set(t.post,"image",e.target.value)}}})]),o("canvas",{staticStyle:{border:"1px solid"},attrs:{width:"200px",height:"400px",id:"canvas"},on:{mousedown:function(e){return t.startDrawingComic(e)},mousemove:function(e){return t.drawHere(e)},mouseup:t.stopDrawingComic}}),o("label",{attrs:{for:"content"}},[t._v("Write Your Blog Post Here:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],attrs:{id:"content",rows:"50",cols:"116"},domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value)}}})]),o("button",{on:{click:t.addPost}},[t._v("Create New Blog Post")]),t.showConfirmationMessage?t._e():o("p",[t._v(" "+t._s(t.errors)+" ")]),t.showConfirmationMessage?o("p",[t._v(" Congrats! Your post is now published! ")]):t._e()]):o("div",{staticClass:"account"},[o("div",[o("h2",[t._v("Login")]),o("div",[o("label",[t._v("Email: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),o("div",[o("label",[t._v("Password: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),o("button",{attrs:{"data-test":"login-button"},on:{click:t.login}},[t._v("Login")]),t.errors?o("ul",t._l(t.errors,(function(e,s){return o("li",{key:s,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),o("div",[o("h2",[t._v("Or Register")]),o("label",[t._v("Name Please: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.name,expression:"registration.name"}],attrs:{type:"text","data-test":"register-name-input"},domProps:{value:t.registration.name},on:{input:function(e){e.target.composing||t.$set(t.registration,"name",e.target.value)}}})]),o("label",[t._v("Set an Email: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.email,expression:"registration.email"}],attrs:{type:"text","data-test":"register-email-input"},domProps:{value:t.registration.email},on:{input:function(e){e.target.composing||t.$set(t.registration,"email",e.target.value)}}})]),o("label",[t._v("Set Your Password: "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.password,expression:"registration.password"}],attrs:{type:"password","data-test":"register-password-input"},domProps:{value:t.registration.password},on:{input:function(e){e.target.composing||t.$set(t.registration,"password",e.target.value)}}})]),o("button",{attrs:{"data-test":"register-button"},on:{click:t.register}},[t._v("Register")]),t.successfulRegistry?o("p",[t._v(" You've successfully registered. Now log in and start drawing comics of your cats!! ")]):t._e(),o("p")])])])},U=[],A={data:function(){return{data:{email:"",password:""},registration:{name:"",email:"",password:""},successfulRegistry:!1,errors:null,showConfirmationMessage:!1,post:{title:"",image:"",content:""},paint:!1,clickX:[],clickY:[],clickDrag:[]}},computed:{user:function(){return this.$store.state.user}},methods:{login:function(){var t=this;a.post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.errors=e.data.errors}))},register:function(){var t=this;a.post("register",this.registration).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$store.dispatch("authUser"),t.successfulRegistry=!0)}))},logout:function(){var t=this;a.post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))},addPost:function(){var t=this;a.post("/post",this.post).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$emit("update-posts"),t.showConfirmationMessage=!0,t.post.title="",t.post.content="",t.post.image="")}))},startDrawingComic:function(t){console.log("Start drawing"),this.paint=!0,this.addClick(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop),this.redraw(t.target)},drawHere:function(t){console.log("Draw Here"),this.paint&&(this.addClick(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop,!0),this.redraw(t.target))},stopDrawingComic:function(){console.log("Stop drawing"),this.paint=!1},redraw:function(t){t=t.getContext("2d"),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.strokeStyle="#df4b26",t.lineJoin="round",t.lineWidth=5;for(var e=0;e<this.clickX.length;e++)t.beginPath(),this.clickDrag[e]&&e?t.moveTo(this.clickX[e-1],this.clickY[e-1]):t.moveTo(this.clickX[e]-1,this.clickY[e]),t.lineTo(this.clickX[e],this.clickY[e]),t.closePath(),t.stroke()},addClick:function(t,e,o){this.clickX.push(t),this.clickY.push(e),this.clickDrag.push(o)}}},L=A,X=(o("06a8"),Object(c["a"])(L,R,U,!1,null,"9d3eb61e",null)),H=X.exports,J=o("2f62");s["a"].use(J["a"]);var W=new J["a"].Store({state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{authUser:function(t){a.post("auth").then((function(e){e.data.authenticated&&t.commit("setUser",e.data.user)}))}}});s["a"].config.productionTip=!1,s["a"].use(d["a"]);var F=new d["a"]({mode:"history",routes:[{path:"/",component:D},{path:"/posts/new",component:H},{path:"/posts/:id",component:B,props:!0}]});new s["a"]({router:F,store:W,render:function(t){return t(l)}}).$mount("#app")},"5a50":function(t,e,o){"use strict";o("a984")},"8e66":function(t,e,o){t.exports=o.p+"img/Jupiter-Looks.dfd2c4ca.png"},"9e01":function(t,e,o){var s={"./Eucii-Big-Run.png":"378e","./Jupiter-Looks.png":"8e66","./Snuggle-Time.png":"03e8","./image-not-found.png":"cbd0"};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="9e01"},a984:function(t,e,o){},ae5c:function(t,e,o){},c959:function(t,e,o){},cbd0:function(t,e,o){t.exports=o.p+"img/image-not-found.15bc58ea.png"},e689:function(t,e,o){"use strict";o("1a68")},facd:function(t,e,o){"use strict";o("0596")}});
//# sourceMappingURL=app.eabe6a9e.js.map