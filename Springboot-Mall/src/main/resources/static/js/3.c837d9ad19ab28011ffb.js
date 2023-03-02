webpackJsonp([3],{Hpao:function(t,e){},IZfQ:function(t,e){},"T/dq":function(t,e){},tBNf:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"Register_Form",components:{AuthCode:o("vAh7").a},data:function(){var t=this;return{dialogVisible:!1,sendCodeIsUsed:!1,show:!0,count:"",timer:null,loadForm:{username:"",mailbox:"",authcode:"",password:""},rules:{username:[{validator:function(t,e,o){return e?e.length>20?o(new Error("昵称最长为20位！")):void o():o(new Error("请输入昵称！"))},trigger:"blur"}],mailbox:[{validator:function(e,o,i){if(0===o.length)t.sendCodeIsUsed=!1,i(new Error("请输入邮箱"));else{if(!new RegExp("^[A-Za-z0-9.一-龥_]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$").test(o))return t.sendCodeIsUsed=!1,i(new Error("邮箱格式错误"));t.$http.post("/allow/existUser?accountNumber="+o).then(function(e){200===e.data.code&&(e.data.data?(t.sendCodeIsUsed=!1,i(new Error("邮箱已被注册"))):(t.sendCodeIsUsed=!0,i()))}).catch(function(t){console.log(t)})}},trigger:"blur"}],authcode:[{validator:function(t,e,o){0===e.length?o(new Error("请输入验证码")):o()},trigger:"blur"}],password:[{validator:function(t,e,o){if(0===e.length)o(new Error("请输入密码"));else{if(!new RegExp("^[a-zA-Z][a-zA-Z0-9_-]{5,18}$").test(e))return o(new Error("密码必须由数字和字母组合成,长度为6-18"));o(),o()}},trigger:"blur"}]}}},methods:{send:function(){var t=this;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},submitCode:function(){var t=this;this.$refs.child.submitForm("codeForm")&&(this.dialogVisible=!1,this.$refs.child.resetForm("codeForm"),this.$http.post("/allow/sendHtmlCode?sendTo="+this.loadForm.mailbox).then(function(e){200===e.data.code?(t.send(),t.sendCodeIsUsed=!1,t.$msg.success(e.data.message)):500===e.data.code&&t.$msg.warning(e.data.message)}).catch(function(e){console.log(e),t.$msg.error("验证码发送失败，请稍后重试！")}))},cancelCode:function(){this.$refs.child.resetForm("codeForm"),this.dialogVisible=!1},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var o=e.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});e.$http.post("/allow/add?accountNumber="+e.loadForm.mailbox+"&password="+e.loadForm.password+"&userName="+e.loadForm.username).then(function(t){o.close(),200===t.data.code?(e.$msg.success({message:t.data.message,duration:1500}),e.$http.post("/allow/sendHtmlRegister?sendTo="+e.loadForm.mailbox+"&pwd="+e.loadForm.password+"&name="+e.loadForm.username),e.$router.push("/loginForm")):e.$msg.error({message:t.data.message,showClose:!0,duration:1500})}).catch(function(){o.close(),e.$msg.error({message:"注册失败，请稍后再试~",showClose:!0,duration:1500})})})}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"register"},[o("el-form",{ref:"loadForm",staticClass:"demo-registerForm",attrs:{model:t.loadForm,rules:t.rules}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{staticClass:"el-input",attrs:{autocomplete:"on",placeholder:"请输入昵称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("loadForm")}},model:{value:t.loadForm.username,callback:function(e){t.$set(t.loadForm,"username",e)},expression:"loadForm.username"}},[o("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),o("el-form-item",{attrs:{prop:"mailbox"}},[o("el-input",{staticClass:"el-input",attrs:{autocomplete:"on",placeholder:"请输入邮箱"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("loadForm")}},model:{value:t.loadForm.mailbox,callback:function(e){t.$set(t.loadForm,"mailbox",e)},expression:"loadForm.mailbox"}},[o("i",{staticClass:"el-input__icon el-icon-message",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),o("el-form-item",{staticStyle:{"text-align":"left"},attrs:{prop:"authcode"}},[o("el-input",{staticClass:"el-input",staticStyle:{width:"66%"},attrs:{"auto-complete":"“new-accounts”",maxlength:"6",autocomplete:"off",placeholder:"请输入邮箱验证码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("loadForm")}},model:{value:t.loadForm.authcode,callback:function(e){t.$set(t.loadForm,"authcode",e)},expression:"loadForm.authcode"}},[o("i",{staticClass:"el-input__icon el-icon-connection",attrs:{slot:"prefix"},slot:"prefix"})]),t._v(" "),o("el-button",{staticStyle:{position:"absolute",margin:"4px 6px",width:"88px"},attrs:{type:"success",plain:"",size:"small",disabled:!t.sendCodeIsUsed},on:{click:function(e){t.dialogVisible=!0}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("获取验证码")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1),t._v(" "),o("el-dialog",{attrs:{title:"请输入验证码",visible:t.dialogVisible,width:"90%",top:"0",modal:!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[o("AuthCode",{ref:"child"})],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.cancelCode}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.submitCode}},[t._v("确 定")])],1)]),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"24px"},attrs:{prop:"password"}},[o("el-input",{staticClass:"el-input",attrs:{autocomplete:"off",type:"password",placeholder:"请输入密码（字母开头，6~20位字符）"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("loadForm")}},model:{value:t.loadForm.password,callback:function(e){t.$set(t.loadForm,"password",e)},expression:"loadForm.password"}},[o("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),o("router-link",{attrs:{to:"/loginForm"}},[o("a",{staticClass:"register-a"},[t._v("已有账户")])]),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"el-form-button",attrs:{type:"primary",plain:""},on:{click:function(e){return t.submitForm("loadForm")}}},[t._v("注册")])],1)],1)],1)},staticRenderFns:[]};var r=o("VU/8")(i,n,!1,function(t){o("T/dq")},null,null);e.default=r.exports},vAh7:function(t,e,o){"use strict";var i={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:25},fontSizeMax:{type:Number,default:30},backgroundColorMin:{type:Number,default:255},backgroundColorMax:{type:Number,default:255},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},contentWidth:{type:Number,default:90},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var e=0;e<this.identifyCode.length;e++)this.drawText(t,this.identifyCode[e],e);this.drawLine(t)},drawText:function(t,e,o){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px 黑体 border";var i=(o+1)*(this.contentWidth/(this.identifyCode.length+1)),n=this.randomNum(this.fontSizeMax,this.contentHeight-5),r=this.randomNum(-45,45);t.translate(i,n),t.rotate(r*Math.PI/180),t.fillText(e,0,0),t.rotate(-r*Math.PI/180),t.translate(-i,-n)},drawLine:function(t){for(var e=0;e<2;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s-canvas"},[e("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]};var r={name:"AuthCode",data:function(){var t=this;return{isCodeTrue:!1,codeForm:{verifyCode:""},identifyCodes:"1234567890",identifyCode:"",loginRules:{verifyCode:[{required:!0,trigger:"blur",validator:function(e,o,i){""===o?(i(new Error("请输入验证码")),t.isCodeTrue=!1):o!==t.identifyCode?(t.isCodeTrue=!1,i(new Error("验证码不正确"))):i()}}]}}},components:{SIdentify:o("VU/8")(i,n,!1,function(t){o("IZfQ")},null,null).exports},created:function(){},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},computed:{},methods:{submitForm:function(t){var e=this;return this.$refs[t].validate(function(t){if(!t)return!1;e.isCodeTrue=!0}),this.isCodeTrue},resetForm:function(t){this.$refs[t].resetFields()},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var o=0;o<e;o++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)]}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"randomised",staticStyle:{"user-select":"none"}},[o("el-form",{ref:"codeForm",staticClass:"login-form",attrs:{inline:"","status-icon":"",rules:t.loginRules,model:t.codeForm,"label-width":"50px"},nativeOn:{submit:function(t){t.preventDefault()}}},[o("el-form-item",{staticStyle:{"margin-right":"0"},attrs:{prop:"verifyCode"}},[o("el-input",{staticStyle:{"user-select":"text"},attrs:{size:"small",placeholder:"请输入验证码"},model:{value:t.codeForm.verifyCode,callback:function(e){t.$set(t.codeForm,"verifyCode",e)},expression:"codeForm.verifyCode"}})],1),t._v(" "),o("el-form-item",[o("div",{staticClass:"identifyBox"},[o("div",{on:{click:t.refreshCode}},[o("s-identify",{attrs:{identifyCode:t.identifyCode}})],1),t._v(" "),o("el-button",{attrs:{type:"text"},on:{click:t.refreshCode}},[t._v("看不清，换一张")])],1)])],1)],1)},staticRenderFns:[]};var a=o("VU/8")(r,s,!1,function(t){o("Hpao")},null,null);e.a=a.exports}});
//# sourceMappingURL=3.c837d9ad19ab28011ffb.js.map