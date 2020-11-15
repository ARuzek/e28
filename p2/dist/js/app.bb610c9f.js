(function(t){function e(e){for(var n,a,i=e[0],p=e[1],u=e[2],c=0,d=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var p=o[i];0!==s[p]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=p;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("Name of Blog")]),o("nav",[o("ul",[o("li",t._l(t.links,(function(e){return o("router-link",{key:e,attrs:{to:t.paths[e],exact:""}},[t._v(t._s(e))])})),1)])]),o("router-view",{attrs:{posts:t.posts},on:{"update-posts":function(e){return t.updatePosts()}}})],1)},r=[],a=o("bc3a").create({baseURL:"http://e28-api.e28aruzek.me",responseType:"json"}),i={name:"App",data:function(){return{posts:[],links:["home","posts","create new post"],paths:{home:"/",posts:"/posts","create new post":"/posts/new"}}},methods:{updatePosts:function(){var t=this;a.get("post").then((function(e){t.posts=e.data.post}))}},mounted:function(){this.updatePosts()}},p=i,u=o("2877"),l=Object(u["a"])(p,s,r,!1,null,null,null),c=l.exports,d=o("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("This is a blog.")])])}],h={},m=h,_=Object(u["a"])(m,f,v,!1,null,null,null),b=_.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"posts"}},[o("h1",[t._v("Blog")]),t._l(t.posts,(function(t){return o("router-link",{key:t.id,attrs:{to:"/posts/"+t.id,exact:""}},[o("show-post",{attrs:{post:t}})],1)}))],2)},w=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post"},[o("div",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),t.includeDetails?o("p",{staticClass:"content"},[t._v(" "+t._s(t.post.content)+" ")]):t._e()])},x=[],O={name:"show-post",props:["post","includeDetails"],data:function(){return{}}},P=O,j=Object(u["a"])(P,y,x,!1,null,null,null),k=j.exports,$={name:"",components:{"show-post":k},props:["posts"],data:function(){return{}}},C=$,M=Object(u["a"])(C,g,w,!1,null,null,null),E=M.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"post-page"}},[t.post?o("div",[o("show-post",{attrs:{post:t.post,includeDetails:!0}})],1):t._e(),t.postNotFound?o("div",[o("p",[t._v("post "+t._s(t.id)+" not found.")]),o("router-link",{attrs:{to:"/posts"}},[t._v("Go to all posts ")])],1):t._e()])},T=[],B=(o("4de4"),{name:"",props:["id","posts"],components:{"show-post":k},data:function(){return{}},computed:{post:function(){var t=this;return this.posts.filter((function(e){return e.id==t.id}),this.id)[0]},postNotFound:function(){return null==this.post}}}),S=B,A=Object(u["a"])(S,N,T,!1,null,null,null),D=A.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Add a New Blog Post")]),o("div",{attrs:{id:"inputs"}},[o("label",{attrs:{for:"title"}},[t._v("Add Title Here")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],attrs:{type:"text",id:"title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),o("label",{attrs:{for:"content"}},[t._v("Write Your Blog Post")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.content,expression:"post.content"}],attrs:{id:"content"},domProps:{value:t.post.content},on:{input:function(e){e.target.composing||t.$set(t.post,"content",e.target.value)}}})]),o("button",{on:{click:t.addPost}},[t._v("Create New Blog Post")]),t.showConfirmationMessage?t._e():o("p",[t._v(" "+t._s(t.errors)+" ")]),t.showConfirmationMessage?o("p",[t._v("Congrats! Your post is now published!")]):t._e()])},F=[],J={data:function(){return{errors:null,showConfirmationMessage:!1,post:{title:"Add Title Here",content:"Write Blog Here"}}},methods:{addPost:function(){var t=this;a.post("/post",this.post).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$emit("update-posts"),t.showConfirmationMessage=!0,t.post.title="",t.post.content="")}))}}},W=J,Y=Object(u["a"])(W,H,F,!1,null,null,null),z=Y.exports;n["a"].config.productionTip=!1,n["a"].use(d["a"]);var G=new d["a"]({mode:"history",routes:[{path:"/",component:b},{path:"/posts",component:E},{path:"/posts/new",component:z},{path:"/posts/:id",component:D,props:!0}]});new n["a"]({router:G,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.bb610c9f.js.map