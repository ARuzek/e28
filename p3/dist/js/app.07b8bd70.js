(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},r=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"03e8":function(t,e,s){t.exports=s.p+"img/Snuggle-Time.d63b1908.png"},"0596":function(t,e,s){},"0841":function(t,e,s){"use strict";s("c834")},"285b":function(t,e,s){var o={"./ar":"8b23","./ar.js":"8b23","./az":"0fd6","./az.js":"0fd6","./be":"a1de","./be.js":"a1de","./bg":"102b","./bg.js":"102b","./bs":"d1c3","./bs.js":"d1c3","./ca":"1b37","./ca.js":"1b37","./cs":"8981","./cs.js":"8981","./cy":"3ced","./cy.js":"3ced","./da":"7f8d","./da.js":"7f8d","./de":"be39","./de.js":"be39","./el":"1866","./el.js":"1866","./en":"6788","./en.js":"6788","./es":"8b4b","./es.js":"8b4b","./et":"df57","./et.js":"df57","./eu":"b9bc","./eu.js":"b9bc","./fa":"83c4","./fa.js":"83c4","./fi":"1137","./fi.js":"1137","./fr":"2849","./fr.js":"2849","./hr":"2e0c","./hr.js":"2e0c","./hu":"62a6","./hu.js":"62a6","./id":"7fc0","./id.js":"7fc0","./it":"d6e0","./it.js":"d6e0","./ja":"7d74","./ja.js":"7d74","./ka":"14c9","./ka.js":"14c9","./ko":"58ac","./ko.js":"58ac","./lt":"845c","./lt.js":"845c","./lv":"c6c3","./lv.js":"c6c3","./mk":"9fc9","./mk.js":"9fc9","./mn":"a3d2","./mn.js":"a3d2","./ms":"f45d","./ms.js":"f45d","./nb_NO":"bfd4","./nb_NO.js":"bfd4","./nl":"7ab1","./nl.js":"7ab1","./pl":"8ef3","./pl.js":"8ef3","./pt":"61d8","./pt.js":"61d8","./pt_BR":"1911","./pt_BR.js":"1911","./ro":"937f","./ro.js":"937f","./ru":"7f57","./ru.js":"7f57","./se":"c47d","./se.js":"c47d","./sl":"7f0b","./sl.js":"7f0b","./sq":"f373","./sq.js":"f373","./sr":"6f79","./sr.js":"6f79","./sv":"0c56","./sv.js":"0c56","./tr":"4bda","./tr.js":"4bda","./ua":"626a","./ua.js":"626a","./uk":"0874","./uk.js":"0874","./vi":"ee20","./vi.js":"ee20","./zh":"0ede","./zh.js":"0ede","./zh_TW":"4690","./zh_TW.js":"4690"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="285b"},"378e":function(t,e,s){t.exports=s.p+"img/Eucii-Big-Run.c237919c.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",[s("ul",[t.user?s("li",t._l(t.userlinks,(function(e){return s("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1):s("li",t._l(t.strangerlinks,(function(e){return s("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1)])]),s("h1",[t._v("My Super Cute Baby-Cats")]),s("router-view",{attrs:{posts:t.posts},on:{"update-posts":function(e){return t.updatePosts()}}})],1)},r=[],a=s("bc3a").create({baseURL:"http://e28-api.e28aruzek.me",responseType:"json"}),i={name:"App",data:function(){return{posts:[],userlinks:["home","create new post"],strangerlinks:["home","login / register"],paths:{home:"/","create new post":"/posts/new","login / register":"/posts/new"}}},methods:{updatePosts:function(){var t=this;a.get("post").then((function(e){t.posts=e.data.post}))}},computed:{user:function(){return this.$store.state.user}},mounted:function(){this.updatePosts(),this.$store.dispatch("authUser")}},c=i,u=(s("5a50"),s("2877")),l=Object(u["a"])(c,n,r,!1,null,"9fae4854",null),d=l.exports,p=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("This is a blog about my two super cute baby cats: Euclid (Eucii) and Jupiter (Doopider). I adopted them when they were kittens, but they've grown up so fast. They are almost 2 years old now! Read the blog to find out what they're up to every day. :) ")]),s("div",{staticClass:"gridview"},t._l(t.posts,(function(t){return s("router-link",{key:t.id,attrs:{to:"/posts/"+t.id,exact:""}},[s("show-post",{attrs:{post:t}})],1)})),1)])},f=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("div",{class:{onHomePage:!t.includeDetails}},[s("img",{class:{postimage:t.includeDetails},attrs:{src:t.imageSource}}),t.includeDetails?s("div",[s("div",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),s("p",{staticClass:"post-content"},[t._v(" "+t._s(t.post.content)+" ")])]):t._e()]),t.includeDetails?s("div",[t.user?s("div",[s("comment-section",{attrs:{associatedBlogPost:t.post.title}}),t._l(t.comments,(function(e){return s("div",{key:e.id},[t.post.title==e.associatedBlogPost?s("div",{staticClass:"commentsection"},[s("p",[t._v(t._s(e.content))]),s("cite",[t._v("Author: "+t._s(e.name))])]):t._e()])}))],2):s("router-link",{attrs:{to:"/posts/new"}},[t._v("Login to View Comments")])],1):t._e()])},v=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Write a Comment")]),s("div",{attrs:{id:"inputs"}},[s("cite",[t._v("Author: "+t._s(t.comment.name))]),s("label",{attrs:{for:"content"}},[t._v("Write Your Comment Here:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.content,expression:"comment.content"}],attrs:{id:"content",rows:"10",cols:"116"},domProps:{value:t.comment.content},on:{input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value)}}})]),s("button",{on:{click:t.addComment}},[t._v("Add Comment")]),t.showConfirmationMessage?t._e():s("p",[t._v(" "+t._s(t.errors)+" ")]),t.showConfirmationMessage?s("p",[t._v("Congrats! Your comment is now published!")]):t._e()])},b=[],w=(s("b0c0"),{name:"comment-section",props:["associatedBlogPost"],data:function(){return{errors:null,showConfirmationMessage:!1,comment:{name:this.$store.state.user.name,content:"",associatedBlogPost:this.associatedBlogPost}}},methods:{addComment:function(){var t=this;a.post("/comment",this.comment).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$emit("update-comments"),t.showConfirmationMessage=!0,t.comment.content="")}))}}}),_=w,j=(s("0841"),Object(u["a"])(_,h,b,!1,null,"3005a1bf",null)),y=j.exports,k={name:"show-post",props:["post","includeDetails"],components:{"comment-section":y},data:function(){return{comments:[]}},methods:{updateComments:function(){var t=this;a.get("comment").then((function(e){t.comments=e.data.comment}))}},mounted:function(){this.updateComments()},computed:{user:function(){return this.$store.state.user},imageSource:function(){try{return null!=this.post.drawing?JSON.parse(this.post.drawing):s("9e01")("./"+this.post.image+".png")}catch(t){return s("cbd0")}}}},C=k,x=(s("8240"),Object(u["a"])(C,g,v,!1,null,"6c115e32",null)),P=x.exports,O={name:"",components:{"show-post":P},props:["posts"],data:function(){return{}}},E=O,$=(s("facd"),Object(u["a"])(E,m,f,!1,null,"03a3b3ff",null)),N=$.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"post-page"}},[t.post?s("div",[s("show-post",{attrs:{post:t.post,includeDetails:!0}})],1):t._e(),t.postNotFound?s("div",[s("p",[t._v("post "+t._s(t.id)+" not found.")]),s("router-link",{attrs:{to:"/posts"}},[t._v("Go to all posts ")])],1):t._e()])},S=[],T=(s("4de4"),{name:"",props:["id","posts"],components:{"show-post":P},data:function(){return{}},computed:{post:function(){var t=this;return this.posts.filter((function(e){return e.id==t.id}),this.id)[0]},postNotFound:function(){return null==this.post}}}),M=T,Y=Object(u["a"])(M,D,S,!1,null,null,null),B=Y.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.user?s("div",[s("h2",[t._v("Add More Stories About Your Cats")]),s("div",{attrs:{id:"inputs"}},[s("label",{attrs:{for:"title"}},[t._v("Add Your Blog Post Title Here: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.post.title},on:{blur:function(e){return t.validate()},input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),s("cite",[t._v("Required. Must be 3 - 100 characters. ")]),s("label",[t._v("Draw A Comic of Your Cat:")]),s("canvas",{staticStyle:{border:"1px solid"},attrs:{width:"200px",height:"150px",id:"canvas"},on:{mousedown:function(e){return t.startDrawingComic(e)},mousemove:function(e){return t.drawHere(e)},mouseup:t.stopDrawingComic}}),s("label",{attrs:{for:"content"}},[t._v("Write Your Blog Post Here:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],attrs:{id:"content",rows:"10",cols:"116"},domProps:{value:t.post.content},on:{blur:function(e){return t.validate()},input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value)}}})]),s("button",{on:{click:t.addPost}},[t._v("Create New Blog Post")]),t.showConfirmationMessage?s("p",[t._v(" Congrats! Your post is now published! ")]):s("p",[t._v(" "+t._s(t.errors)+" ")])]):s("div",{staticClass:"account"},[s("div",[s("h2",[t._v("Login")]),s("div",[s("label",[t._v("Email: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text","data-test":"email-input"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})])]),s("div",[s("label",[t._v("Password: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],attrs:{type:"password","data-test":"password-input"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}})])]),s("button",{directives:[{name:"touch",rawName:"v-touch:tap",value:t.login,expression:"login",arg:"tap"}],attrs:{"data-test":"login-button"},on:{click:t.login}},[t._v(" Login ")]),t.loginErrors?s("ul",t._l(t.loginErrors,(function(e,o){return s("li",{key:o,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),s("div",[s("h2",[t._v("Or Register")]),s("label",[t._v("Name Please: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.name,expression:"registration.name"}],attrs:{type:"text","data-test":"register-name-input"},domProps:{value:t.registration.name},on:{input:function(e){e.target.composing||t.$set(t.registration,"name",e.target.value)}}})]),s("label",[t._v("Set an Email: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.email,expression:"registration.email"}],attrs:{type:"text","data-test":"register-email-input"},domProps:{value:t.registration.email},on:{input:function(e){e.target.composing||t.$set(t.registration,"email",e.target.value)}}})]),s("label",[t._v("Set Your Password: "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.registration.password,expression:"registration.password"}],attrs:{type:"password","data-test":"register-password-input"},domProps:{value:t.registration.password},on:{input:function(e){e.target.composing||t.$set(t.registration,"password",e.target.value)}}})]),s("button",{attrs:{"data-test":"register-button"},on:{click:t.register}},[t._v("Register")]),t.successfulRegistry?s("p",[t._v(" You've successfully registered. Now log in and start drawing comics of your cats!! ")]):t._e(),t.registryErrors?s("ul",t._l(t.registryErrors,(function(e,o){return s("li",{key:o,staticClass:"error"},[t._v(" "+t._s(e)+" ")])})),0):t._e(),s("p")])])])},U=[],L=s("1c4a"),A=s.n(L),J={data:function(){return{data:{email:"",password:""},registration:{name:"",email:"",password:""},successfulRegistry:!1,registryErrors:null,loginErrors:null,errors:null,showConfirmationMessage:!1,post:{title:"",image:"",content:"",drawing:""},paint:!1,clickX:[],clickY:[],clickDrag:[]}},computed:{user:function(){return this.$store.state.user}},methods:{login:function(){var t=this;a.post("login",this.data).then((function(e){e.data.authenticated?t.$store.commit("setUser",e.data.user):t.loginErrors=e.data.errors}))},register:function(){var t=this;a.post("register",this.registration).then((function(e){e.data.errors?t.registryErrors=e.data.errors:(t.$store.dispatch("authUser"),t.successfulRegistry=!0)}))},logout:function(){var t=this;a.post("logout").then((function(e){e.data.success&&t.$store.commit("setUser",null)}))},addPost:function(){var t=this,e=document.getElementById("canvas").toDataURL();this.post.drawing=JSON.stringify(e),0==this.errors.length&&a.post("/post",this.post).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$emit("update-posts"),t.showConfirmationMessage=!0,t.post.title="",t.post.content="",t.post.image="",t.post.drawing="")}))},validate:function(){var t=new A.a(this.post,{title:"required|between:3,100",comment:"required|min:10"});return this.errors=t.errors.all(),t.passes()},startDrawingComic:function(t){console.log("Start drawing"),this.paint=!0,this.addClick(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop),this.redraw(t.target)},drawHere:function(t){console.log("Draw Here"),this.paint&&(this.addClick(t.pageX-t.target.offsetLeft,t.pageY-t.target.offsetTop,!0),this.redraw(t.target))},stopDrawingComic:function(){console.log("Stop drawing"),this.paint=!1},redraw:function(t){t=t.getContext("2d"),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.strokeStyle="#000000",t.lineJoin="round",t.lineWidth=5;for(var e=0;e<this.clickX.length;e++)t.beginPath(),this.clickDrag[e]&&e?t.moveTo(this.clickX[e-1],this.clickY[e-1]):t.moveTo(this.clickX[e]-1,this.clickY[e]),t.lineTo(this.clickX[e],this.clickY[e]),t.closePath(),t.stroke()},addClick:function(t,e,s){this.clickX.push(t),this.clickY.push(e),this.clickDrag.push(s)}}},X=J,z=(s("5ca1"),Object(u["a"])(X,R,U,!1,null,"5c13f3c4",null)),H=z.exports,W=s("2f62");o["a"].use(W["a"]);var q=new W["a"].Store({state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{authUser:function(t){a.post("auth").then((function(e){e.data.authenticated&&t.commit("setUser",e.data.user)}))}}});o["a"].config.productionTip=!1,o["a"].use(p["a"]);var F=new p["a"]({mode:"history",routes:[{path:"/",component:N},{path:"/posts/new",component:H},{path:"/posts/:id",component:B,props:!0}]});new o["a"]({router:F,store:q,render:function(t){return t(d)}}).$mount("#app")},"5a50":function(t,e,s){"use strict";s("a984")},"5ca1":function(t,e,s){"use strict";s("7c7b")},"77bd":function(t,e,s){},"7c7b":function(t,e,s){},8240:function(t,e,s){"use strict";s("77bd")},"8e66":function(t,e,s){t.exports=s.p+"img/Jupiter-Looks.dfd2c4ca.png"},"9e01":function(t,e,s){var o={"./Eucii-Big-Run.png":"378e","./Jupiter-Looks.png":"8e66","./Snuggle-Time.png":"03e8","./image-not-found.png":"cbd0"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id="9e01"},a984:function(t,e,s){},c834:function(t,e,s){},cbd0:function(t,e,s){t.exports=s.p+"img/image-not-found.15bc58ea.png"},facd:function(t,e,s){"use strict";s("0596")}});
//# sourceMappingURL=app.07b8bd70.js.map