webpackJsonp([29],{e63k:function(t,s){},nKos:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"MallProduct",components:{MallFooter:e("loKF").a},data:function(){return{keyword:null,by:null,byC:null,productInfo:null}},methods:{buy:function(t){null===this.$store.state.user?(this.$notify({title:"警告",message:"请先登录",type:"warning"}),this.$router.push({path:"/loginForm"})):this.$router.push({path:"/MallPurchase",query:{id:t}})}},created:function(){var t=this;null!=this.$route.query.keyword&&(this.keyword=this.$route.query.keyword),null!=this.$route.query.by&&(this.by=this.$route.query.by),null!==this.keyword&&null!=this.by&&("name"===this.by?(this.byC="商品名称",this.$http.post("/product/findAllLikeName?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})):"type"===this.by?(this.byC="商品类型",this.$http.post("/product/findAllLikeType?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})):"brand"===this.by&&(this.byC="商品品牌",this.$http.post("/product/findAllLikeBrand?keyWord="+this.keyword).then(function(s){200===s.data.code&&(t.productInfo=s.data.data)}).catch(function(t){console.log(t)})))}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mall-product"},[e("el-backtop",{staticStyle:{height:"50px",width:"50px"},attrs:{target:".mall-product"}},[e("i",{staticClass:"el-icon-top"})]),t._v(" "),e("div",{staticClass:"mall-info clearfix"},[e("div",{staticClass:"product-hd"},[e("div",{staticClass:"product-box"},[e("div",{staticStyle:{position:"absolute",padding:"23px"}},[e("span",[t._v(t._s(this.byC))]),t._v(" "),e("span",{staticStyle:{"padding-right":"12px"}},[t._v(":")]),t._v(" "),e("span",{staticStyle:{color:"#FF7918",cursor:"pointer"}},[t._v(t._s(this.keyword))])])])]),t._v(" "),t.productInfo?e("div",{staticClass:"mall-container clearfix"},[0!==t.productInfo.length?e("ul",t._l(this.productInfo,function(s,o){return e("li",{key:o,on:{click:function(e){return t.buy(s.productId)}}},[e("div",{staticStyle:{float:"left",width:"44%",height:"100%"}},[e("el-image",{staticStyle:{width:"100%"},attrs:{src:s.productUrl}})],1),t._v(" "),e("div",{staticClass:"pro-con"},[e("span",{staticClass:"name",attrs:{title:s.productName}},[t._v(t._s(s.productName))]),t._v(" "),e("span",{staticClass:"desc"},[t._v(t._s(s.productDescribe))]),t._v(" "),e("span",{staticClass:"price"},[t._v(t._s(s.outPrice)+"元")]),t._v(" "),e("div",{staticStyle:{position:"absolute",bottom:"30px"}},[e("el-button",{staticStyle:{padding:"9px 29px"},attrs:{size:"small",type:"danger"}},[null!=t.$store.state.user?e("span",[t._v("立即抢购")]):e("span",[t._v("登录后抢购")])])],1)])])}),0):e("div",{staticClass:"no-product"},[e("el-image",{staticStyle:{width:"400px",height:"388px"},attrs:{src:"http://127.0.0.1:9000/local/img/noproduct.png"}})],1)]):t._e()]),t._v(" "),e("MallFooter")],1)},staticRenderFns:[]};var a=e("VU/8")(o,i,!1,function(t){e("e63k")},null,null);s.default=a.exports}});
//# sourceMappingURL=29.4f60566b42eef4cef563.js.map