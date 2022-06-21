/*! For license information please see main.3a2a6b97.chunk.js.LICENSE.txt */
(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{127:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(43),o=a.n(c),i=a(151),l=a(50),u=a(10),s=a(2),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],originalProducts:[],isLoading:!1},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_ALL":return Object(s.a)(Object(s.a)({},t),{},{products:a.payload,originalProducts:a.payload});case"FETCH_PRODUCT":return Object(s.a)(Object(s.a)({},t),{},{product:a.payload});case"ADD_PRODUCT":return Object(s.a)(Object(s.a)({},t),{},{products:[].concat(Object(u.a)(t.products),[a.payload]),originalProducts:e});case"UPDATE_PRODUCT":t.products=Object(u.a)(t.products).map((function(e){return e._id!==a.payload._id?e:a.payload})),t.originalProducts=t.products;case"REMOVE_PRODUCT":var r=a.payload,n=Object(u.a)(t.products).filter((function(e){return e._id!==r}));return Object(s.a)(Object(s.a)({},t),{},{products:n,originalProducts:n});case"START_LOADING":return Object(s.a)(Object(s.a)({},t),{},{isLoading:!0});case"STOP_LOADING":return Object(s.a)(Object(s.a)({},t),{},{isLoading:!1});case"LOAD_SEARCH_PRODUCTS":if(""===a.payload)return Object(s.a)(Object(s.a)({},t),{},{products:t.originalProducts});var c=t.originalProducts.filter((function(e){return!0===e.title.toLowerCase().includes(a.payload.toLowerCase())}));return Object(s.a)(Object(s.a)({},t),{},{products:c});default:return t}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],isLoading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var a,r=null===(a=e.cartItems)||void 0===a?void 0:a.findIndex((function(e){var a;return(null===e||void 0===e?void 0:e._id)===(null===(a=t.payload)||void 0===a?void 0:a._id)})),n=null;return-1===r?(n=Object(s.a)(Object(s.a)({},t.payload),{},{currentCount:1}),e.cartItems=[].concat(Object(u.a)(e.cartItems),[n])):(n=Object(s.a)(Object(s.a)({},t.payload),{},{currentCount:e.cartItems[r].currentCount+1}),e.cartItems[r]=n),localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),{cartItems:e.cartItems};case"INCREMENT_ITEM":var c,o=null===(c=e.cartItems)||void 0===c?void 0:c.findIndex((function(e){return e._id===t.payload}));return e.cartItems[o].currentCount+=1,localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),{cartItems:e.cartItems};case"DECREMENT_ITEM":var i,l=null===(i=e.cartItems)||void 0===i?void 0:i.findIndex((function(e){return e._id===t.payload}));return e.cartItems[l].currentCount-=1,localStorage.setItem("cartItems",JSON.stringify(e.cartItems)),{cartItems:e.cartItems};case"REMOVE_ITEM":var d=Object(u.a)(e.cartItems).filter((function(e){return e._id!==t.payload}));return localStorage.setItem("cartItems",JSON.stringify(d)),{cartItems:d};case"LOAD_CART_ITEMS":var p=JSON.parse(localStorage.getItem("cartItems"));return{cartItems:p||[],isLoading:!1};default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{success:!1,message:"default",error:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":return{success:!0,message:t.payload};case"ERROR":return{error:!0,message:t.payload};default:return e}},f=Object(l.b)({products:d,cart:p,alert:m}),h=a(20),v=a(87),y=(a(99),a(5)),g=a(82),b=a.n(g),E=a(157),O=a(158),x=a(61),w=a(153),j=a(152),A=a(84),C=a(40),I=a(18),N=a(45),T=a(69),L=function(){var e=Object(r.useRef)(),t=Object(I.g)(),a=Object(h.b)(),c=Object(h.c)((function(e){return e.cart})).cartItems,o=Object(r.useState)(""),i=Object(y.a)(o,2),l=i[0],u=i[1],s=Object(h.c)((function(e){return e.alert})),d=function(e,t){T.b[e](t)};Object(r.useEffect)((function(){a({type:"LOAD_CART_ITEMS"})}),[a]);var p=(null===c||void 0===c?void 0:c.reduce((function(e,t){return e+t.currentCount}),0))||0;return Object(r.useEffect)((function(){s.success?d("success",s.message):s.error&&d("error",s.message)}),[s]),n.a.createElement(E.a,null,n.a.createElement(T.a,{toastOptions:{style:{padding:"16px",color:"#6f66e5"}}}),n.a.createElement(O.a,{style:{backgroundColor:"#12134"}},n.a.createElement("div",{className:"d-flex navbar justify-content-between"},n.a.createElement("div",{className:"navbar__links d-flex align-items-center gap-5 "},n.a.createElement(N.b,{to:"/"},n.a.createElement(x.a,{width:70,onClick:d,height:70,src:b.a,alt:"Default Image",objectFit:"cover"})),n.a.createElement(w.a,{auto:!0,color:"primary",onClick:function(){return t.push("/")}},"All Products"),n.a.createElement(w.a,{onClick:function(){return t.push("/products/create")},auto:!0,color:"secondary",bordered:!0,iconRight:n.a.createElement(C.c,null)},"Create Product")),n.a.createElement("div",{className:"navbar__cart"},n.a.createElement("span",{className:"mx-5 navbar__search"},n.a.createElement(j.a,{onChange:function(){var t=e.current.value;u(t),a({type:"LOAD_SEARCH_PRODUCTS",payload:t})},ref:e,"aria-label":"close",clearable:!0,value:l,contentRightStyling:!0,placeholder:"Your Favorite Here..",contentRight:n.a.createElement(C.d,null)})),n.a.createElement("span",{style:{position:"relative"}},n.a.createElement("span",{style:{position:"absolute",zIndex:21212,backgroundColor:"purple",color:"white",width:"25px",top:-14,left:14,height:"25px",textAlign:"center",borderRadius:"50%"}},p),n.a.createElement(N.b,{to:"/cart"},n.a.createElement(A.a,{size:30,color:"blue"})))))))},R=a(154),P=a(161),S=a(162),k=a(155),D=a(156),U=a(37),M=a(85),q=a.n(M).a.create({baseURL:"https://ecommerce-api-react-skill-test.herokuapp.com/api"}),z=function(e){return q.get("/products/".concat(e))},V=function(e){return q.post("/products",e)},B=function(e,t){return q.patch("/products/".concat(t),e)},F=function(e){return q.delete("/products/".concat(e))};function G(){G=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,a){return e[t]=a}}function l(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,c=Object.create(n.prototype),o=new w(r||[]);return c._invoke=function(e,t,a){var r="suspendedStart";return function(n,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw c;return A()}for(a.method=n,a.arg=c;;){var o=a.delegate;if(o){var i=E(o,a);if(i){if(i===s)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,o),c}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var s={};function d(){}function p(){}function m(){}var f={};i(f,n,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(j([])));v&&v!==t&&a.call(v,n)&&(f=v);var y=m.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(n,c){function o(){return new t((function(r,o){!function r(n,c,o,i){var l=u(e[n],e,c);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,i)}))}i(l.arg)}(n,c,r,o)}))}return r=r?r.then(o,o):o()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,c=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=m,i(y,"constructor",m),i(m,"constructor",p),p.displayName=i(m,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),i(b.prototype,c,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,r,n,c){void 0===c&&(c=Promise);var o=new b(l(t,a,r,n),c);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(y),i(y,o,"Generator"),i(y,n,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],o=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var i=a.call(c,"catchLoc"),l=a.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var W=function(){var e=Object(U.a)(G().mark((function e(t,a){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SUCCESS",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(U.a)(G().mark((function e(t,a){return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ERROR",payload:a});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=a(159),Y=a(160),K=a(150),J=function(e){var t=e.item,a=Object(h.b)(),c=Object(I.g)(),o=Object(r.useState)(!1),i=Object(y.a)(o,2),l=i[0],u=i[1];return n.a.createElement(K.a.div,{animate:{opacity:1,scale:1,x:l?-500:0,rotate:l?45:0},initial:{opacity:0,scale:0}},n.a.createElement(O.a,{cover:!0,hoverable:!0,css:{w:"100%",p:0,cursor:"pointer"}},n.a.createElement(O.a.Header,{css:{position:"absolute",zIndex:1,top:0,backgroundColor:"#e6f1fe",opacity:".9"}},n.a.createElement(_.a,null,n.a.createElement(R.a,{size:12,weight:"bold",className:"px-2",transform:"uppercase",color:"#001731"},t.category),n.a.createElement(R.a,{h5:!0,size:15,color:"#002e62",className:"px-2",style:{maxWidth:"400px",overflow:"hidden",textOverflow:"ellipsis"}},t.title))),n.a.createElement(O.a.Body,{onClick:function(){return c.push("products/".concat(t._id))}},n.a.createElement(O.a.Image,{src:t.image,showSkeleton:!0,height:400,width:400,alt:"Relaxing app background"})),n.a.createElement(O.a.Footer,{blur:!0,css:{position:"absolute",bgBlur:"#0f1114",borderTop:"$borderWeights$light solid $gray700",bottom:0,zIndex:1}},n.a.createElement(Y.a,null,n.a.createElement(_.a,null,n.a.createElement(Y.a,null,n.a.createElement(_.a,null,n.a.createElement(R.a,{color:"#d1d1d1",size:12},"Price"),n.a.createElement(R.a,{color:"#ffffff",size:17,weight:"extrabold"},"$",t.price)))),n.a.createElement(_.a,null,n.a.createElement(Y.a,{justify:"flex-end",align:"center"},n.a.createElement(w.a,{flat:!0,auto:!0,rounded:!0,onClick:function(){a({type:"SUCCESS",payload:"Product added to cart \ud83d\udc5c"}),a({type:"ADD_ITEM",payload:t})},css:{color:"#94f9f0",bg:"#338ef7"}},n.a.createElement(R.a,{css:{color:"inherit"},size:12,weight:"bold",transform:"uppercase"},"Add to Cart")),n.a.createElement("span",{onClick:function(){var e;u((function(e){return!e})),a((e=null===t||void 0===t?void 0:t._id,function(){var t=Object(U.a)(G().mark((function t(a){return G().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(e);case 3:a({type:"REMOVE_PRODUCT",payload:e}),W(a,"Product deleted"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),W(a,"Some error! Please try again");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},className:"mx-3 shadow-sm",style:{width:"25px",height:"25px",borderRadius:"50%",backgroundColor:"white",textAlign:"center"}},n.a.createElement(C.a,{size:15,color:"#ff8080"}))))))))},X=function(){var e=Object(h.b)(),t=Object(r.useState)(!1),a=Object(y.a)(t,2),c=a[0],o=a[1],i=Object(h.c)((function(e){return e.products})),l=i.products,s=i.isLoading,d=null;Object(r.useEffect)((function(){e(function(){var e=Object(U.a)(G().mark((function e(t){var a,r;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"START_LOADING"}),e.next=4,q.get("/products");case 4:a=e.sent,r=a.data.data,t({type:"FETCH_ALL",payload:r}),t({type:"STOP_LOADING"}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);c&&(d=Object(u.a)(l).sort((function(e,t){return e.price-t.price})));var p=d||l;return n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement(E.a,{className:"py-5"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement(R.a,{weight:"semibold",color:"#005bc4",h2:!0},"Shop from wide range of products"),n.a.createElement("span",{className:"d-flex gap-3 align-items-center"},"Sort By Price",n.a.createElement(P.a,{onChange:function(){o((function(e){return!e}))},checked:c}))),n.a.createElement(S.a,{y:4}),n.a.createElement(E.a,null,n.a.createElement(k.a.Container,{gap:4},null===p||void 0===p?void 0:p.map((function(e){return n.a.createElement(k.a,{key:e._id,xs:12,md:4},n.a.createElement(J,{item:e}))}))))),s&&n.a.createElement("div",{className:"text-center",style:{paddingTop:"10rem"}},n.a.createElement(D.a,{size:"xl"})),!s&&0===p.length&&n.a.createElement("div",{className:"text-center",style:{paddingTop:"10rem"}},n.a.createElement(R.a,{h3:!0,color:"gray"},"No products Found")))},H=a(163),Q=a(86),$=a.n(Q),ee=function(e){var t=e.isUpdating,a=e.currentProduct,c=Object(I.g)(),o=Object(h.b)(),i={title:(null===a||void 0===a?void 0:a.title)||"",price:(null===a||void 0===a?void 0:a.price)||"",description:(null===a||void 0===a?void 0:a.description)||"",rating:(null===a||void 0===a?void 0:a.rating)||""},l=Object(r.useState)(i),u=Object(y.a)(l,2),d=u[0],p=u[1],m=Object(h.c)((function(e){return e.products})).isLoading;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,{className:"py-5"},n.a.createElement(O.a,null,n.a.createElement(R.a,{className:"py-3",h3:!0,weight:"semibold",color:"secondary"},t?"Update":"Create"," a Product"),n.a.createElement(S.a,{y:2}),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(t?function(e,t,a){return function(){var r=Object(U.a)(G().mark((function r(n){var c,o;return G().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"START_LOADING"}),r.next=4,B(e,a);case 4:c=r.sent,o=c.data.data,n({type:"UPDATE_PRODUCT",payload:o}),W(n,"Product updated"),setTimeout((function(){t.push("/")}),1500),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),Z(n,"something went wrong");case 14:n({type:"STOP_LOADING"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(d,c,a._id):function(e,t){return function(){var a=Object(U.a)(G().mark((function a(r){var n,c;return G().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:"START_LOADING"}),a.next=4,V(e);case 4:n=a.sent,c=n.data,r({type:"ADD_PRODUCT",payload:c.data}),W(r,c.message),setTimeout((function(){t.push("/")}),1500),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),Z(a.t0.message);case 14:r({type:"STOP_LOADING"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(d,c))}},n.a.createElement(k.a.Container,{gap:5,md:12},n.a.createElement(k.a,null,n.a.createElement(j.a,{size:"md",onChange:function(e){return p(Object(s.a)(Object(s.a)({},d),{},{title:e.target.value}))},color:"primary",fullWidth:!0,type:"text",clearable:!0,underlined:!0,value:d.title,labelPlaceholder:"Title of product"})),n.a.createElement(k.a,null,n.a.createElement(j.a,{size:"md",onChange:function(e){return p(Object(s.a)(Object(s.a)({},d),{},{price:e.target.value}))},color:"primary",fullWidth:!0,clearable:!0,underlined:!0,type:"number",value:d.price,labelPlaceholder:"Price of product"}))," ",n.a.createElement(k.a,null,n.a.createElement(j.a,{size:"md",onChange:function(e){return p(Object(s.a)(Object(s.a)({},d),{},{description:e.target.value}))},color:"primary",type:"text",fullWidth:!0,clearable:!0,underlined:!0,value:d.description,labelPlaceholder:"Description of product"}))," ",n.a.createElement(k.a,null,n.a.createElement(j.a,{size:"md",onChange:function(e){return p(Object(s.a)(Object(s.a)({},d),{},{rating:e.target.value}))},color:"primary",fullWidth:!0,type:"number",clearable:!0,value:d.rating,underlined:!0,labelPlaceholder:"Rating out of 5"}))),n.a.createElement(w.a,{color:"success",type:"submit",className:"m-4",auto:!0},!m&&(t?"Update Product":"Add Product"),m&&n.a.createElement(D.a,{color:"currentColor",size:"sm"}))),n.a.createElement(H.a,null))))},te=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.products})),a=t.product,c=t.isLoading,o=Object(I.h)().id,i=Object(r.useState)(!1),l=Object(y.a)(i,2),u=l[0],s=l[1];Object(r.useEffect)((function(){e(function(e){return function(){var t=Object(U.a)(G().mark((function t(a){var r,n;return G().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,z(e);case 4:r=t.sent,n=r.data.data,a({type:"FETCH_PRODUCT",payload:n}),a({type:"STOP_LOADING"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[e,o]);return n.a.createElement(E.a,{style:{padding:"3rem 0px"}},c&&n.a.createElement("div",{className:"text-center",style:{paddingTop:"10rem"}},n.a.createElement(D.a,{size:"xl"})),!c&&n.a.createElement(O.a,{className:"py-1"},n.a.createElement(k.a.Container,{gap:2,justify:"center"},n.a.createElement(k.a,{md:7},n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement(R.a,{h4:!0,weight:"medium"},null===a||void 0===a?void 0:a.title),n.a.createElement($.a,{rating:null===a||void 0===a?void 0:a.rating,starRatedColor:"rgb(204, 249, 83)",numberOfStars:5,name:"rating",starDimension:"20px",starSpacing:"1px"})),n.a.createElement(H.a,{className:"mt-3"}),n.a.createElement(R.a,{className:"py-2",size:19},null===a||void 0===a?void 0:a.description),n.a.createElement(R.a,{h2:!0,weight:"hairline",className:"mt-2",color:"#aaa"},"$",null===a||void 0===a?void 0:a.price),n.a.createElement("div",{className:"btns d-flex align-items-center gap-3 "},n.a.createElement(w.a,{onClick:function(){e({type:"SUCCESS",payload:"Product added to cart \ud83d\udc5c"}),e({type:"ADD_ITEM",payload:a})},shadow:!0,className:"mt-4",color:"gradient",auto:!0},"Add to Cart"),n.a.createElement(w.a,{onClick:function(){s(!0)},disabled:u,className:"mt-4",auto:!0,bordered:!0},"Edit product")))),n.a.createElement(k.a,{md:5,className:"bg-light rounded"},n.a.createElement(x.a,{width:320,height:180,src:null===a||void 0===a?void 0:a.image,alt:null===a||void 0===a?void 0:a.image,objectFit:"cover"})))),u&&n.a.createElement(ee,{isUpdating:u,currentProduct:a}))},ae=(a(127),function(e){var t=e.item,a=Object(h.b)(),r=function(){a({type:"REMOVE_ITEM",payload:t._id})};return n.a.createElement(O.a,{className:"py-2 my-5"},n.a.createElement(k.a.Container,{alignItems:"center"},n.a.createElement(k.a,{md:3,alignContent:"flex-start"},n.a.createElement(x.a,{autoResize:"true",width:240,height:150,src:t.image,alt:"Default Image",objectFit:"cover"})),n.a.createElement(k.a,{md:7},n.a.createElement("div",{className:"d-flex flex-column gap-1"},n.a.createElement(R.a,{h5:!0},t.title),n.a.createElement(H.a,null),n.a.createElement(R.a,null,t.description),n.a.createElement("div",{className:"d-flex align-items-center  gap-2  "},n.a.createElement(R.a,{className:"py-2",weight:"thin",h5:!0,color:"#8fa7ef"},"$ ",t.price),n.a.createElement(C.b,{size:"20",onClick:r,cursor:"pointer",color:"#005"})))),n.a.createElement(k.a,{md:2,justify:"center"},n.a.createElement("div",{className:"d-flex align-items-center gap-2 flex-column  "},n.a.createElement(w.a.Group,{size:"sm"},n.a.createElement(w.a,{bordered:!0,onClick:function(){1===t.currentCount?r():a({type:"DECREMENT_ITEM",payload:t._id})}},"-"),n.a.createElement(w.a,{style:{cursor:"not-allowed"},color:"blue"},t.currentCount),n.a.createElement(w.a,{bordered:!0,onClick:function(){a({type:"INCREMENT_ITEM",payload:t._id})}},"+")),n.a.createElement(w.a,{rounded:!0,bordered:!0,size:"sm",css:{maxWidth:"150px"},className:"p-3 mt-3",color:"secondary"},"Only ",t.count," left")))))}),re=function(){var e=Object(h.c)((function(e){return e.cart})),t=e.cartItems,a=e.isLoading,r=null===t||void 0===t?void 0:t.reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.currentCount)*(null===t||void 0===t?void 0:t.price)}),0);return n.a.createElement(E.a,{className:"py-3"},n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement(R.a,{h3:!0,className:"py-4",weight:"semibold",color:"purple"},(null===t||void 0===t?void 0:t.length)>0?"Items are waiting for You!":""),(null===t||void 0===t?void 0:t.length)>0&&n.a.createElement(R.a,{h5:!0},"Total Bill Amount : $",r.toFixed(2))),n.a.createElement(S.a,{y:2}),!a&&(null===t||void 0===t?void 0:t.map((function(e){return n.a.createElement(ae,{key:Math.random()+e._id,item:e})}))),!a&&0===(null===t||void 0===t?void 0:t.length)&&n.a.createElement(R.a,{className:"text-center mt-5",h1:!0},"No Items in cart"," ",n.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\uded2")),a&&n.a.createElement("div",{className:"text-center",style:{paddingTop:"10rem"}},n.a.createElement(D.a,{size:"xl"})))};var ne=function(){return n.a.createElement(N.a,null,n.a.createElement(L,null),n.a.createElement(I.d,null,n.a.createElement(I.b,{path:"/",exact:!0,component:function(){return n.a.createElement(I.a,{to:"/products"})}}),n.a.createElement(I.b,{path:"/products",exact:!0,component:X}),n.a.createElement(I.b,{path:"/products/create",exact:!0,component:ee}),n.a.createElement(I.b,{path:"/cart",exact:!0,component:re}),n.a.createElement(I.b,{path:"/products/:id",exact:!0,component:te})))},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,164)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))},oe=Object(l.d)(f,Object(l.c)(Object(l.a)(v.a)));o.a.render(n.a.createElement(h.a,{store:oe},n.a.createElement(i.a,null,n.a.createElement(ne,null))),document.getElementById("root")),ce()},82:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,a){e.exports=a(138)}},[[91,1,2]]]);
//# sourceMappingURL=main.3a2a6b97.chunk.js.map