(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"186e":function(t,a,s){},5771:function(t,a,s){"use strict";var n=s("186e"),e=s.n(n);e.a},a55b:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"item__img pic pic3"}),s("b-container",[s("b-row",{staticClass:"mb-n4",attrs:{id:"tch_logo"}},[s("b-col",{staticClass:"login__text"},[s("h1",{staticClass:"login__menu__item mb-5 animate__animated animate__fadeInUp col-12 d-flex justify-content-center align-center"},[t._v("Manager Only")])])],1),s("b-row",{staticClass:"d-flex",attrs:{id:"tch_form"}},[s("b-col",{staticClass:"mx-auto col-lg-4 col-md-6 col-sm-8",attrs:{cols:"10"}},[s("b-form",{staticClass:"d-flex flex-column animate__animated animate__fadeInDown",on:{submit:t.submit}},[s("b-form-group",{staticClass:"mt-4",attrs:{label:"Manager Account","label-for":"input-account",state:t.state("account")}},[s("b-form-input",{attrs:{id:"input-account",type:"text",state:t.state("account"),placeholder:"管理員帳號"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),s("b-form-group",{attrs:{label:"Manager Password","label-for":"input-password",state:t.state("password")}},[s("b-form-input",{attrs:{id:"input-account",type:"password",state:t.state("password"),placeholder:"管理員密碼"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),s("div",{staticClass:"mx-auto mt-4 text-center"},[s("b-button",{attrs:{type:"submit",variant:"outline-dark"}},[t._v("登入")])],1)],1)],1)],1)],1)],1)},e=[],o={name:"login",data:function(){return{account:"",password:""}},methods:{state:function(t){return"account"===t?(this.account.length<4||this.account.length,null):"password"===t?(this.password.length<4||this.password.length,null):void 0},submit:function(t){var a=this;t.preventDefault(),this.account.length<4||this.account.length>10?alert("帳號格式不符"):(this.password.length<4||this.password.length>10)&&alert("密碼格式不符"),this.axios.post("http://localhost:3000/login",{account:this.account,password:this.password}).then((function(t){var s=t.data;s.success?(alert("登入成功"),a.$store.commit("login",a.account),a.$router.push("manage")):alert(s.message)})).catch((function(t){alert(t.response.data.message)}))}}},c=o,i=(s("5771"),s("2877")),l=Object(i["a"])(c,n,e,!1,null,"1dbfb393",null);a["default"]=l.exports}}]);
//# sourceMappingURL=login.93c953af.js.map