(function(e){function t(t){for(var o,n,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},a={app:0},i=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1229:function(e,t,r){e.exports=r.p+"img/4.793712c2.jpg"},"1f02":function(e,t,r){e.exports=r.p+"img/driscolls-strawberries.418d31d2.jpg"},"23a0":function(e,t,r){e.exports=r.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"2ef8":function(e,t,r){e.exports=r.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},"30af":function(e,t,r){e.exports=r.p+"img/1.418d31d2.jpg"},"34ff":function(e,t,r){e.exports=r.p+"img/2.f2dfb55e.jpg"},"3b07":function(e,t,r){e.exports=r.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"4c00":function(e,t,r){e.exports=r.p+"img/gold-medal-flour.793712c2.jpg"},"4f35":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},"4fff":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"ZipFoods logo",id:"logo",src:r("58dd")}}),o("nav",[o("ul",[o("li",e._l(e.links,(function(t){return o("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t))])})),1)])]),o("router-view",{attrs:{products:e.products},on:{"update-products":function(t){return e.updateProducts()}}})],1)},i=[],n=r("bc3a").create({baseURL:"http://e28-api.e28aruzek.me",responseType:"json"}),s={name:"App",data:function(){return{products:[],links:["home","products","categories","add a product"],paths:{home:"/",products:"/products",categories:"/categories","add a product":"/products/new"}}},methods:{updateProducts:function(){var e=this;n.get("product").then((function(t){e.products=t.data.product}))}},mounted:function(){this.updateProducts()}},c=s,u=(r("5c0b"),r("2877")),p=Object(u["a"])(c,a,i,!1,null,null,null),l=p.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("p",[e._v("ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.")]),r("show-featured",{attrs:{category:"snacks"}})],1)},g=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"featured"}},[r("h2",[e._v("Featured Products")]),r("ul",{staticClass:"cleanList"},e._l(e.featuredProducts,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])},m=[],b=(r("4de4"),r("caad"),r("2532"),[{id:1,name:"Driscoll’s Strawberries",sku:"driscolls-strawberries",description:"Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.",price:4.99,available:0,weight:1,perishable:!0,categories:["produce","fruits"]},{id:2,name:"Nestle Toll House Cookie Dough",sku:"nestle-toll-house-cookie-dough",description:"Get the classic taste that America loves in a ready to bake dough. Full of our famous morsels, these cookies deliver the chocolate flavor you’ve come to expect from Nestle Toll House.",price:7.49,available:325,weight:2.25,perishable:!0,categories:["snacks","baking"]},{id:3,name:"Gotham Greens Gourmet Lettuce Medley",sku:"gotham-greens-lettuce-medley",description:"This lovely blend features Gotham Greens’ Tropicana green leaf, Red Sail red leaf, Oak leaf, Lollo Rossa and tender Butterhead lettuces. Perfect for a colorful salad that's (almost) grown right in your own backyard!",price:3.49,available:10,weight:.3,perishable:!0,categories:["produce","vegetables"]},{id:4,name:"Gold Medal All Purpose Flour",sku:"gold-medal-flour",description:"All-purpose bleached flour is great for just about everything but doesn’t add any color. It’s perfect for baked goods like white sandwich bread and cake.",price:2.09,available:299,weight:2,perishable:!1,categories:["baking"]},{id:5,name:"Honey Nut Cheerios",sku:"honey-nut-cheerios",description:"You already know that Honey Nut Cheerios Naturally Flavored has the irresistible taste of golden honey, making it a family favorite. Something that everyone can smile about! ",price:3.99,available:400,weight:.68,perishable:!1,categories:["breakfast"]},{id:6,name:"Eggo Nutri-Grain Whole Wheat Waffles",sku:"eggo-nutri-grain-whole-wheat-waffles",description:"Eggo® Nutri-Grain® waffles made with whole wheat have the same light and crispy texture as our original Eggo® Waffles, only with the added bonus of nutritious whole grain! ",price:3.79,available:236,weight:.25,perishable:!0,categories:["breakfast","frozen"]},{id:7,name:"Amy’s Cheese Pizza",sku:"amys-cheese-pizza",description:"The classic favorite, made with our savory pizza sauce and grated part-skim mozzarella cheese.",price:8.49,available:125,weight:.81,perishable:!0,categories:["frozen","snacks"]},{id:8,name:"Birds Eye Steamfresh Fresh Frozen Vegetable Mix",sku:"birds-eye-vegetable-mix",description:"Delicious Birds Eye vegetables in blends that are just right for side dishes and your recipes.",price:2.99,available:99,weight:.68,perishable:!0,categories:["frozen","vegetables"]},{id:9,name:"Bare Coconut Chips",sku:"bare-coconut-chips",description:"Simply made with coconuts, cane sugar, and sea salt.",price:4.99,available:3,weight:.21,perishable:!1,categories:["snacks"]},{id:10,name:"Snapple Peach Tea",sku:"snapple-peach-tea",description:"To Peach their own. Smooth Snapple tea, perfect peach flavor. We made it just for you from the Best Stuff on Earth.",price:12.99,available:4,weight:12,perishable:!1,categories:["beverages"]}]),v={name:"ShowFeatured",props:["category"],computed:{featuredProducts:function(){var e=this;return this.products.filter((function(t){return t.categories.includes(e.category)}),this.category)}},data:function(){return{products:b}}},y=v,w=Object(u["a"])(y,h,m,!1,null,"d063442e",null),j=w.exports,k={name:"App",components:{ShowFeatured:j}},x=k,_=Object(u["a"])(x,f,g,!1,null,null,null),P=_.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"products"}},[r("h1",[e._v("Products")]),e._l(e.products,(function(e){return r("router-link",{key:e.id,attrs:{to:"/products/"+e.id,exact:""}},[r("show-product",{attrs:{product:e}})],1)}))],2)},S=[],N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"product"},[o("div",{staticClass:"product-name"},[e._v(e._s(e.product.name))]),o("img",{staticClass:"product-thumb",attrs:{src:r("634a")("./"+e.product.id+".jpg")}})])},z=[],$={name:"ShowProduct",props:["product"],data:function(){return{}}},C=$,E=Object(u["a"])(C,N,z,!1,null,"62c13612",null),F=E.exports,T={name:"",components:{"show-product":F},props:["products"],data:function(){return{}}},A=T,G=Object(u["a"])(A,O,S,!1,null,"ef9c0baa",null),M=G.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Categories")]),r("ul",{staticClass:"cleanList"},e._l(e.categories,(function(t,o){return r("li",{key:o},[e._v(" "+e._s(t)+" ")])})),0)])},B=[],H=(r("99af"),r("d81d"),r("d3b7"),r("ac1f"),r("6062"),r("3ca3"),r("1276"),r("ddb0"),r("2909")),L={name:"",props:["products"],data:function(){return{}},computed:{categories:function(){var e=this.products.map((function(e){return e.categories.split(",")})),t=[].concat.apply([],e);return Object(H["a"])(new Set(t)).sort()}}},W=L,U=Object(u["a"])(W,D,B,!1,null,"1d285d3a",null),R=U.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"product-page"}},[e.product?r("div",[r("show-product",{attrs:{product:e.product,includeDetails:!0}})],1):e._e(),e.productNotFound?r("div",[r("p",[e._v("Product "+e._s(e.id)+" not found.")]),r("router-link",{attrs:{to:"/products"}},[e._v("Go to all products ")])],1):e._e()])},Z=[],q={name:"",props:["id","products"],components:{"show-product":F},data:function(){return{}},computed:{product:function(){var e=this;return this.products.filter((function(t){return t.id==e.id}),this.id)[0]},productNotFound:function(){return null==this.product}}},I=q,K=Object(u["a"])(I,J,Z,!1,null,null,null),Q=K.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Product")]),r("div",{attrs:{id:"inputs"}},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.name,expression:"product.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.product.name},on:{input:function(t){t.target.composing||e.$set(e.product,"name",t.target.value)}}}),r("label",{attrs:{for:"sku"}},[e._v("SKU:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.sku,expression:"product.sku"}],attrs:{type:"text",id:"sku"},domProps:{value:e.product.sku},on:{input:function(t){t.target.composing||e.$set(e.product,"sku",t.target.value)}}}),r("label",{attrs:{for:"price"}},[e._v("Price:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.price,expression:"product.price"}],attrs:{type:"text",id:"price"},domProps:{value:e.product.price},on:{input:function(t){t.target.composing||e.$set(e.product,"price",t.target.value)}}}),r("label",{attrs:{for:"available"}},[e._v("Quantity available:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.available,expression:"product.available"}],attrs:{type:"text",id:"available"},domProps:{value:e.product.available},on:{input:function(t){t.target.composing||e.$set(e.product,"available",t.target.value)}}}),r("label",{attrs:{for:"weight"}},[e._v("Weight (in lbs):")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.weight,expression:"product.weight"}],attrs:{type:"text",id:"weight"},domProps:{value:e.product.weight},on:{input:function(t){t.target.composing||e.$set(e.product,"weight",t.target.value)}}}),r("label",{staticClass:"form-checkbox-label",attrs:{for:"perishable"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.product.perishable,expression:"product.perishable"}],attrs:{type:"checkbox",id:"perishable"},domProps:{checked:Array.isArray(e.product.perishable)?e._i(e.product.perishable,null)>-1:e.product.perishable},on:{change:function(t){var r=e.product.perishable,o=t.target,a=!!o.checked;if(Array.isArray(r)){var i=null,n=e._i(r,i);o.checked?n<0&&e.$set(e.product,"perishable",r.concat([i])):n>-1&&e.$set(e.product,"perishable",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.product,"perishable",a)}}}),e._v(" Perishable? ")]),r("label",{attrs:{for:"description"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.product.description,expression:"product.description"}],attrs:{id:"description"},domProps:{value:e.product.description},on:{input:function(t){t.target.composing||e.$set(e.product,"description",t.target.value)}}})]),r("button",{on:{click:e.addProduct}},[e._v("Add Product")]),e._v(" "+e._s(e.errors)+" ")])},Y=[],X={data:function(){return{errors:null,showConfirmationMessage:!1,product:{name:"Candy Heart Grapes",sku:"candy-heart-grapes-"+(new Date).valueOf(),price:5.99,available:25,weight:2,perishable:!0,description:"Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!"}}},methods:{addProduct:function(){var e=this;n.post("/product",this.product).then((function(t){t.data.errors?e.errors=t.data.errors:(e.$emit("update-products"),e.showConfirmationMessage=!0)}))}}},ee=X,te=(r("e74e"),Object(u["a"])(ee,V,Y,!1,null,"6fad648c",null)),re=te.exports;o["a"].config.productionTip=!1,o["a"].use(d["a"]);var oe=new d["a"]({mode:"history",routes:[{path:"/",component:P},{path:"/products",component:M},{path:"/categories",component:R},{path:"/products/new",component:re},{path:"/products/:id",component:Q,props:!0}]});new o["a"]({router:oe,render:function(e){return e(l)}}).$mount("#app")},"58dd":function(e,t,r){e.exports=r.p+"img/zipfoods-logo.a23a3a29.png"},"5a9a":function(e,t,r){e.exports=r.p+"img/9.16db8a64.jpg"},"5c0b":function(e,t,r){"use strict";r("4fff")},"634a":function(e,t,r){var o={"./1.jpg":"30af","./10.jpg":"e29a","./2.jpg":"34ff","./3.jpg":"a774","./4.jpg":"1229","./5.jpg":"e6f8","./6.jpg":"dd98","./7.jpg":"e61b","./8.jpg":"6740","./9.jpg":"5a9a","./amys-cheese-pizza.jpg":"8bcd","./bare-coconut-chips.jpg":"ba90","./birds-eye-vegetable-mix.jpg":"3b07","./driscolls-strawberries.jpg":"1f02","./eggo-nutri-grain-whole-wheat-waffles.jpg":"23a0","./gold-medal-flour.jpg":"4c00","./gotham-greens-lettuce-medley.jpg":"2ef8","./honey-nut-cheerios.jpg":"f9e0","./image-not-available.jpg":"4f35","./nestle-toll-house-cookie-dough.jpg":"c905","./snapple-peach-tea.jpg":"88c8"};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="634a"},6740:function(e,t,r){e.exports=r.p+"img/8.7226e9df.jpg"},"88c8":function(e,t,r){e.exports=r.p+"img/snapple-peach-tea.410f9d36.jpg"},"89b7":function(e,t,r){},"8bcd":function(e,t,r){e.exports=r.p+"img/amys-cheese-pizza.491e93f2.jpg"},a774:function(e,t,r){e.exports=r.p+"img/3.08a0e118.jpg"},ba90:function(e,t,r){e.exports=r.p+"img/bare-coconut-chips.16db8a64.jpg"},c905:function(e,t,r){e.exports=r.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},dd98:function(e,t,r){e.exports=r.p+"img/6.baf64196.jpg"},e29a:function(e,t,r){e.exports=r.p+"img/10.410f9d36.jpg"},e61b:function(e,t,r){e.exports=r.p+"img/7.491e93f2.jpg"},e6f8:function(e,t,r){e.exports=r.p+"img/5.baffccef.jpg"},e74e:function(e,t,r){"use strict";r("89b7")},f9e0:function(e,t,r){e.exports=r.p+"img/honey-nut-cheerios.baffccef.jpg"}});
//# sourceMappingURL=app.cf58c7de.js.map