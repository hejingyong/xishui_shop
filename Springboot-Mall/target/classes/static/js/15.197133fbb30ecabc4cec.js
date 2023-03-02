webpackJsonp([15],{DfSc:function(t,e){},MCyR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("YaEn"),a={name:"ChangePassword",data:function(){var t=this;return{active:0,show:!0,count:"",timer:null,form_0:{account:this.$store.state.user.accountNumber,code:""},form_1:{pass:"",checkPass:""},rule_0:{code:[{validator:function(t,e,s){if(!e)return s(new Error("请输入验证码！"));s()},trigger:"blur"}]},rule_1:{pass:[{validator:function(t,e,s){if(""===e)s(new Error("请输入密码"));else{if(!new RegExp("^[a-zA-Z][a-zA-Z0-9_-]{5,18}$").test(e))return s(new Error("密码必须由数字和字母组合成  长度为6~20位"));s(),s()}},trigger:"blur"}],checkPass:[{validator:function(e,s,o){""===s?o(new Error("请再次输入密码")):s!==t.form_1.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},methods:{next:function(){var t=this;this.active++>2&&(this.active=0),2===this.active&&(this.active=3,this.$confirm("密码修改成功，身份已过期，请重新登录","提示",{confirmButtonText:"确定",closeOnClickModal:!1,showCancelButton:!1,type:"warning"}).then(function(){t.exit()}))},send:function(){var t=this;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},sendCode:function(){var t=this,e=this.$loading({lock:!0,text:"验证码发送中",background:"rgba(255,255,255,0.1)"});this.$http.post("/allow/sendHtmlCode?sendTo="+this.form_0.account).then(function(s){e.close(),200===s.data.code?(t.send(),t.$msg.success(s.data.message)):t.$msg.warning(s.data.message)}).catch(function(s){e.close(),console.log("修改密码,发送验证码验证身份时，发送失败"+s),t.$msg.error("网络异常或其它原因，请联系工作人员"+s)})},submitForm:function(){var t=this,e="form_"+this.active;this.$refs[e].validate(function(e){if(!e)return!1;0===t.active?t.checkCodeInfo():1===t.active&&t.updatePwd()})},checkCodeInfo:function(){var t=this;this.$http.post("/allow/checkCode?key="+this.form_0.account+"&code="+this.form_0.code).then(function(e){200===e.data.code&&e.data.data?t.next():t.$msg.warning(e.data.message)}).catch(function(e){console.log("修改密码，确认验证码时，发送失败"+e),t.$msg.error("网络异常或其它原因，请联系工作人员"+e)})},updatePwd:function(){var t=this,e=this.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});this.$http.post("/allow/resetpwd?accountNumber="+this.form_0.account+"&password="+this.form_1.pass).then(function(s){e.close(),200===s.data.code?(t.next(),t.$http.post("/allow/sendHtmlResetPwd?sendTo="+t.form_0.account+"&pwd="+t.form_1.pass)):t.$msg.warning(s.data.message)}).catch(function(s){e.close(),console.log("修改密码时，数据库保存密码，发送失败"+s),t.$msg.error("网络异常或其它原因，请联系工作人员")})},clearInfo:function(){this.$message({showClose:!0,message:"退出成功",duration:1e3,type:"success"}),o.a.replace({path:"/loginForm"}),this.$store.commit("setToken",null),this.$store.commit("setRole",null),this.$store.commit("setUser",null),this.$store.commit("setRoleInfo",null),localStorage.clear()},exit:function(){var t=this,e=this.$loading({lock:!0,text:"正在退出",background:"rgba(255,255,255,0.5)"});t.$http.post("/logout?key="+t.$store.state.user.accountNumber+"&session="+t.$store.state.token).then(function(s){e.close(),200===s.status&&(200===s.data.code?t.clearInfo():setTimeout(function(){t.$http.post("/logout?key="+t.$store.state.user.accountNumber+"&session="+t.$store.state.token).then(function(s){e.close(),200===s.status&&(200===s.data.code?t.clearInfo():t.$message({showClose:!0,message:"退出失败,请重试",duration:1500,type:"error"}))}).catch(function(s){e.close(),console.log(s),t.$message.error("退出失败，"+s)})},1500))}).catch(function(s){setTimeout(function(){t.$http.post("/logout?key="+t.$store.state.user.accountNumber+"&session="+t.$store.state.token).then(function(s){e.close(),200===s.status&&(200===s.data.code?t.clearInfo():t.$message({showClose:!0,message:"退出失败,请重试",duration:1500,type:"error"}))}).catch(function(s){e.close(),console.log(s),t.$message.error("退出失败，"+s)})},1500)})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"change-password center"},[s("el-card",{staticClass:"box-card change-pwd",staticStyle:{width:"90%",height:"650px","min-width":"1000px"},attrs:{shadow:"hover"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("h3",[t._v("修改密码")])]),t._v(" "),s("div",{staticStyle:{"text-align":"center",width:"750px",height:"430px",margin:"auto"}},[s("el-steps",{staticStyle:{padding:"22px"},attrs:{active:t.active,"finish-status":"success","align-center":""}},[s("el-step",{attrs:{title:"验证身份"}}),t._v(" "),s("el-step",{attrs:{title:"设置密码"}}),t._v(" "),s("el-step",{attrs:{title:"改密成功"}})],1),t._v(" "),s("el-form",{directives:[{name:"show",rawName:"v-show",value:0===t.active,expression:"active===0"}],ref:"form_0",staticClass:"demo-ruleForm",staticStyle:{margin:"45px"},attrs:{model:t.form_0,"status-icon":"",rules:t.rule_0}},[s("el-form-item",{staticStyle:{margin:"0 90px 35px"},attrs:{label:"",prop:"account"}},[s("el-input",{attrs:{placeholder:"请输入帐号",disabled:""},model:{value:t.form_0.account,callback:function(e){t.$set(t.form_0,"account",e)},expression:"form_0.account"}},[s("template",{slot:"prepend"},[t._v("帐号")])],2)],1),t._v(" "),s("el-form-item",{staticStyle:{margin:"0 90px 35px","text-align":"left"},attrs:{label:"",prop:"code"}},[s("el-input",{staticStyle:{width:"73%"},attrs:{placeholder:"请输入邮箱验证码","auto-complete":"“new-accounts”"},model:{value:t.form_0.code,callback:function(e){t.$set(t.form_0,"code",e)},expression:"form_0.code"}}),t._v(" "),s("el-button",{staticStyle:{width:"120px"},attrs:{plain:"",disabled:!t.show},on:{click:t.sendCode}},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("获取验证码")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v("重新发送("+t._s(t.count)+"s)")])])],1)],1),t._v(" "),s("el-form",{directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active===1"}],ref:"form_1",staticStyle:{margin:"45px"},attrs:{model:t.form_1,"status-icon":"",rules:t.rule_1}},[s("el-form-item",{staticStyle:{margin:"0 90px 35px"},attrs:{label:"",prop:"pass"}},[s("el-input",{attrs:{type:"password",placeholder:"字母开头，6~20位字符",autocomplete:"off"},model:{value:t.form_1.pass,callback:function(e){t.$set(t.form_1,"pass",e)},expression:"form_1.pass"}},[s("template",{slot:"prepend"},[t._v("新密码")])],2)],1),t._v(" "),s("el-form-item",{staticStyle:{margin:"0 90px 35px"},attrs:{label:"",prop:"checkPass"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入确认密码",autocomplete:"off"},model:{value:t.form_1.checkPass,callback:function(e){t.$set(t.form_1,"checkPass",e)},expression:"form_1.checkPass"}},[s("template",{slot:"prepend"},[t._v("确认密码")])],2)],1)],1),t._v(" "),s("el-button",{staticStyle:{"margin-top":"12px",width:"200px"},on:{click:function(e){return t.submitForm()}}},[t._v("下一步")])],1)])],1)},staticRenderFns:[]};var n=s("VU/8")(a,r,!1,function(t){s("DfSc")},null,null);e.default=n.exports}});
//# sourceMappingURL=15.197133fbb30ecabc4cec.js.map