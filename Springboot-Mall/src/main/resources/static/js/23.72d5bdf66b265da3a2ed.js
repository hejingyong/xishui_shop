webpackJsonp([23],{POLg:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"OrderDetail",data:function(){return{orderInfo:{orderId:"",orderNo:"",orderTime:"",productNo:"",userAccount:"",userName:"",contactWay:"",payPrice:"",payAmount:"",payType:"",orderFrom:"",orderState:""},logistics:{logisticId:"",orderNo:"",sender:"",senderTel:"",senderAdd:"",receiver:"",receiverTel:"",receiverAdd:"",parcelName:""}}},methods:{},created:function(){var t=this,i=this.$route.query.orderNo,s=this.$route.query.state;"0"===s?this.$http.post("/orderDetail/orderInfo?orderNo="+i).then(function(i){200===i.data.code&&(t.orderInfo=i.data.data[0],null!=i.data.data[1]?t.logistics=i.data.data[1]:t.logistics.parcelName="暂无信息")}).catch(function(t){console.log(t)}):"1"===s&&this.$http.post("/orderDetail/returnInfo?orderNo="+i).then(function(i){200===i.data.code&&(t.orderInfo=i.data.data[0],null!=i.data.data[1]?t.logistics=i.data.data[1]:t.logistics.parcelName="暂无信息")}).catch(function(t){console.log(t)})}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"order-detail"},[s("div",{staticClass:"order-box"},[s("div",{staticClass:"box-title"},[s("el-alert",{staticClass:"order-state",attrs:{type:"warning","show-icon":""}},[t._v("当前订单状态："+t._s(t.orderInfo.orderState))])],1),t._v(" "),s("div",{staticClass:"order-info"},[t._m(0),t._v(" "),s("div",{staticClass:"info-content"},[s("div",{staticClass:"info-row"},[s("div",{staticClass:"info-item order-no"},[s("div",{staticClass:"item-title"},[t._v("订单编号")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.orderNo))])]),t._v(" "),s("div",{staticClass:"info-item user-account"},[s("div",{staticClass:"item-title"},[t._v("用户帐号")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.userAccount))])]),t._v(" "),s("div",{staticClass:"info-item user-name"},[s("div",{staticClass:"item-title"},[t._v("用户名称")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.userName))])]),t._v(" "),s("div",{staticClass:"info-item pay-type"},[s("div",{staticClass:"item-title"},[t._v("支付方式")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.payType))])]),t._v(" "),s("div",{staticClass:"info-item order-form"},[s("div",{staticClass:"item-title"},[t._v("订单来源")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.orderFrom))])])]),t._v(" "),s("div",{staticClass:"info-row"},[s("div",{staticClass:"info-item product-no"},[s("div",{staticClass:"item-title"},[t._v("商品编号")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.productNo))])]),t._v(" "),s("div",{staticClass:"info-item pay-amount"},[s("div",{staticClass:"item-title"},[t._v("购买数量")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.payAmount))])]),t._v(" "),s("div",{staticClass:"info-item pay-price"},[s("div",{staticClass:"item-title"},[t._v("支付金额")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.payPrice))])]),t._v(" "),s("div",{staticClass:"info-item order-time"},[s("div",{staticClass:"item-title"},[t._v("下单时间")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.orderInfo.orderTime))])]),t._v(" "),s("div",{staticClass:"info-item logistics-company"},[s("div",{staticClass:"item-title"},[t._v("物流公司")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.parcelName))])])])])]),t._v(" "),0!==t.logistics.receiver.length?s("div",{staticClass:"order-info"},[t._m(1),t._v(" "),s("div",{staticClass:"info-content",staticStyle:{height:"120px"}},[s("div",{staticClass:"info-row"},[s("div",{staticClass:"info-item delivery-item receiver"},[s("div",{staticClass:"item-title"},[t._v("收货人")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.receiver))])]),t._v(" "),s("div",{staticClass:"info-item delivery-item receiver-tel"},[s("div",{staticClass:"item-title"},[t._v("手机号码")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.receiverTel))])]),t._v(" "),s("div",{staticClass:"info-item delivery-item receiver-add",staticStyle:{width:"40%!important"}},[s("div",{staticClass:"item-title"},[t._v("收货地址")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.receiverAdd))])])])])]):t._e(),t._v(" "),0!==t.logistics.sender.length?s("div",{staticClass:"order-info"},[t._m(2),t._v(" "),s("div",{staticClass:"info-content",staticStyle:{height:"120px"}},[s("div",{staticClass:"info-row"},[s("div",{staticClass:"info-item delivery-item sender"},[s("div",{staticClass:"item-title"},[t._v("发货人")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.sender))])]),t._v(" "),s("div",{staticClass:"info-item delivery-item sender-tel"},[s("div",{staticClass:"item-title"},[t._v("手机号码")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.senderTel))])]),t._v(" "),s("div",{staticClass:"info-item delivery-item sender-add",staticStyle:{width:"40%!important"}},[s("div",{staticClass:"item-title"},[t._v("发货地址")]),t._v(" "),s("div",{staticClass:"item-content"},[t._v(t._s(t.logistics.senderAdd))])])])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"info-title"},[i("i",{staticClass:"el-icon-edit"}),this._v("\n        基本信息\n      ")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"info-title"},[i("i",{staticClass:"el-icon-user"}),this._v("\n        收货人信息\n      ")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"info-title"},[i("i",{staticClass:"el-icon-user-solid"}),this._v("\n        发货人信息\n      ")])}]};var o=s("VU/8")(e,a,!1,function(t){s("fGF4")},null,null);i.default=o.exports},fGF4:function(t,i){}});
//# sourceMappingURL=23.72d5bdf66b265da3a2ed.js.map