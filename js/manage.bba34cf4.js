(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manage"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),o=n("2d00"),a=i("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("5a34"),o=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),a=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,o(0,n)):t[a]=n}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),a=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),f=n("1dde"),l=n("ae40"),d=f("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var n,r,f,l,d,p,g=c(this),y=a(g.length),x=i(t,y),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=y-x):(n=w-2,r=h(m(o(e),0),y-x)),y+n-r>b)throw TypeError(v);for(f=s(g,r),l=0;l<r;l++)d=x+l,d in g&&u(f,l,g[d]);if(f.length=r,n<r){for(l=x;l<y-r;l++)d=l+r,p=l+n,d in g?g[p]=g[d]:delete g[p];for(l=y;l>y-r+n;l--)delete g[l-1]}else if(n>r)for(l=y-r;l>x;l--)d=l+r-1,p=l+n-1,d in g?g[p]=g[d]:delete g[p];for(l=0;l<n;l++)g[l+x]=arguments[l+2];return g.length=y-r+n,f}})},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),m=n("825a"),h=n("7b0b"),b=n("fc6a"),v=n("c04e"),g=n("5c6c"),y=n("7c73"),x=n("df75"),w=n("241c"),S=n("057f"),_=n("7418"),O=n("06cf"),C=n("9bf2"),k=n("d1e7"),j=n("9112"),E=n("6eeb"),A=n("5692"),P=n("f772"),T=n("d012"),N=n("90e3"),$=n("b622"),F=n("e538"),M=n("746f"),R=n("d44e"),J=n("69f3"),D=n("b727").forEach,I=P("hidden"),q="Symbol",z="prototype",B=$("toPrimitive"),Q=J.set,U=J.getterFor(q),W=Object[z],G=i.Symbol,H=o("JSON","stringify"),K=O.f,L=C.f,V=S.f,X=k.f,Y=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),nt=A("wks"),rt=i.QObject,it=!rt||!rt[z]||!rt[z].findChild,ot=c&&f((function(){return 7!=y(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(W,e);r&&delete W[e],L(t,e,n),r&&t!==W&&L(W,e,r)}:L,at=function(t,e){var n=Y[t]=y(G[z]);return Q(n,{type:q,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},st=function(t,e,n){t===W&&st(Z,e,n),m(t);var r=v(e,!0);return m(n),l(Y,r)?(n.enumerable?(l(t,I)&&t[I][r]&&(t[I][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,I)||L(t,I,g(1,{})),t[I][r]=!0),ot(t,r,n)):L(t,r,n)},ut=function(t,e){m(t);var n=b(e),r=x(n).concat(mt(n));return D(r,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===W&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,I)&&this[I][e])||n)},dt=function(t,e){var n=b(t),r=v(e,!0);if(n!==W||!l(Y,r)||l(Z,r)){var i=K(n,r);return!i||!l(Y,r)||l(n,I)&&n[I][r]||(i.enumerable=!0),i}},pt=function(t){var e=V(b(t)),n=[];return D(e,(function(t){l(Y,t)||l(T,t)||n.push(t)})),n},mt=function(t){var e=t===W,n=V(e?Z:b(t)),r=[];return D(n,(function(t){!l(Y,t)||e&&!l(W,t)||r.push(Y[t])})),r};if(s||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===W&&n.call(Z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),ot(this,e,g(1,t))};return c&&it&&ot(W,e,{configurable:!0,set:n}),at(e,t)},E(G[z],"toString",(function(){return U(this).tag})),E(G,"withoutSetter",(function(t){return at(N(t),t)})),k.f=lt,C.f=st,O.f=dt,w.f=S.f=pt,_.f=mt,F.f=function(t){return at($(t),t)},c&&(L(G[z],"description",{configurable:!0,get:function(){return U(this).description}}),a||E(W,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:G}),D(x(nt),(function(t){M(t)})),r({target:q,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=G(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(h(t))}}),H){var ht=!s||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,H.apply(null,i)}})}G[z][B]||j(G[z],B,G[z].valueOf),R(G,q),T[I]=!0},ab13:function(t,e,n){var r=n("b622"),i=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(r){}}return!1}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),o=n("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var n=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,f=o(e,0)?e[0]:s,l=o(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,f,l)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,m,h,b){for(var v,g,y=o(p),x=i(y),w=r(m,h,3),S=a(x.length),_=0,O=b||c,C=e?O(p,S):n?O(p,0):void 0;S>_;_++)if((d||_ in x)&&(v=x[_],g=w(v,_,y),t))if(e)C[_]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:s.call(C,v)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b9ec:function(t,e,n){},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2"),a=n("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),c=o("map"),s=a("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},de7c:function(t,e,n){"use strict";var r=n("b9ec"),i=n.n(r);i.a},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var m=p.toString,h="Symbol(test)"==String(f("test")),b=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(a(l,t))return"";var n=h?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f74b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"manage"}},[n("div",{staticClass:"item__img pic pic3"}),n("b-row",{staticClass:"mb-n4",attrs:{id:"tch_logo"}},[n("b-col",{staticClass:"manager__text"},[n("h1",{staticClass:"manager__menu__item mb-5 animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center"},[t._v("Manager Only")])])],1),n("b-col",{staticClass:"mx-auto col-lg-4 col-md-6 col-sm-8",attrs:{cols:"10"}},[n("h2",{staticClass:"text-center"},[t._v("檔案上傳")]),n("br"),n("b-form",{on:{submit:t.submit}},[n("b-form-file",{attrs:{state:t.state,placeholder:"選擇檔案或拖曳至此","drop-placeholder":"將檔案拖曳至此",required:"required","browse-text":"瀏覽",accept:"image/*"},on:{input:t.validateFile},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),n("p",{staticClass:"text-dark"},[t._v("僅支援 1MB 以下的圖片")]),n("b-form-textarea",{attrs:{placeholder:"相片說明",rows:"3","max-rows":"6",maxlength:"200",state:t.textstate},on:{input:t.validateText},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("br"),n("div",{staticClass:"mx-auto mt-4 text-center"},[n("b-button",{attrs:{type:"submit",variant:"outline-dark"}},[t._v("上傳")])],1)],1)],1),n("Photoswipe",[n("b-container",[n("b-row",t._l(t.images,(function(e,r){return n("b-col",{key:r,attrs:{cols:"12",md:"6",lg:"3"}},[n("b-card",{staticClass:"card d-flex text-center"},[n("b-card-img",{directives:[{name:"pswp",rawName:"v-pswp",value:e,expression:"image"}],staticClass:"mt-4",attrs:{src:e.src}}),n("b-card-body",[e.edit?n("b-btn",{staticClass:"mt-2 mr-1 ml-1",attrs:{variant:"outline-dark"},on:{click:function(n){return t.cancel(e)}}},[t._v("取消")]):n("b-btn",{staticClass:"mt-2 mr-1 ml-1",attrs:{variant:"outline-dark"},on:{click:function(n){return t.edit(e)}}},[t._v("編輯")]),e.edit?n("b-btn",{staticClass:"mt-2 mr-1 ml-1",attrs:{variant:"outline-dark"},on:{click:function(n){return t.update(e)}}},[t._v("更新")]):n("b-btn",{staticClass:"mt-2 mr-1 ml-1",attrs:{variant:"outline-dark"},on:{click:function(n){return t.del(e,r)}}},[t._v("刪除")]),e.edit?n("b-form-textarea",{model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"image.model"}}):n("pre",{staticClass:"pt-3 text"},[t._v(t._s(e.title))])],1)],1)],1)})),1)],1)],1)],1)},i=[],o=(n("a4d3"),n("e01a"),n("caad"),n("d81d"),n("a434"),n("b0c0"),n("2532"),{name:"manage",data:function(){return{file:null,description:"",state:null,textstate:null,images:[]}},computed:{user:function(){return this.$store.getters.user}},methods:{validateFile:function(){null!=this.file&&(this.file.size>=1048576||!this.file.type.includes("image")?(this.state=!1,this.file=null):this.state=!0)},validateText:function(){this.description.length>200?this.textstate=!1:this.textstate=!0},submit:function(t){var e=this;if(t.preventDefault(),null===this.file||this.file.size>=1048576||!this.file.type.includes("image"))alert("檔案格式不符");else{var n=new FormData;n.append("image",this.file),n.append("description",this.description),this.axios.post("https://tch-studio.herokuapp.com/file",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.images.push({title:e.description,src:"https://tch-studio.herokuapp.com/file/"+t.data.name,_id:t.data._id,edit:!1,model:t.data.name}),e.file=null,e.description=""})).catch((function(t){alert(t.response.data.message)}))}},edit:function(t){t.edit=!0,t.model=t.title},update:function(t){this.axios.patch("https://tch-studio.herokuapp.com/file/"+t._id,{description:t.model}).then((function(e){t.edit=!1,t.title=t.model})).catch((function(){alert("發生錯誤")}))},cancel:function(t){t.edit=!1,t.model=t.title},del:function(t,e){var n=this;this.axios.delete("https://tch-studio.herokuapp.com/file/"+t._id).then((function(t){n.images.splice(e,1)})).catch((function(){alert("發生錯誤")}))}},mounted:function(){var t=this,e=this.$store.getters.user;this.axios.get("https://tch-studio.herokuapp.com/manage/"+e).then((function(e){t.images=e.data.result.map((function(t){return{title:t.description,src:"https://tch-studio.herokuapp.com/file/"+t.name,_id:t._id,edit:!1,model:t.name}}))})).catch((function(){alert("發生錯誤")}))}}),a=o,c=(n("de7c"),n("2877")),s=Object(c["a"])(a,r,i,!1,null,"0f681b94",null);e["default"]=s.exports}}]);
//# sourceMappingURL=manage.bba34cf4.js.map