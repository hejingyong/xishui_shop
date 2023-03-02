webpackJsonp([22],{HN3k:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"ProductList",data:function(){return{dialogImageUrl:"",dialogVisible:!1,dialogFormVisible:!1,purchaseFormVisible:!1,handleIndex:0,productTotal:6,pageIndex:1,pageSize:10,pageSizes:[10,30,60,100,200],supplierIndex:0,supplierInfo:"",tableSource:{},tableTemp:{},ruleForm:{name:"",goodsNo:"",sort:"",brand:"",put_status:"",new_status:"",stockout_status:""},alterForm:{productId:"",productName:"",productType:"",productBrand:"",outPrice:"",inPrice:"",lowestStock:"",productDescribe:"",productUrl:"",isStockOut:""},alterRules:{productName:[{required:!0,message:"请输入商品名称",trigger:"blur"},{min:1,max:30,message:"名称长度不允许超过 30 个字符",trigger:"blur"}],outPrice:[{required:!0,message:"请输入商品售价",trigger:"blur"}],inPrice:[{required:!0,message:"请输入商品进价",trigger:"blur"}],productDescribe:[{required:!0,message:"请输入商品描述",trigger:"blur"},{min:1,max:100,message:"描述信息长度不允许超过 100 个字符",trigger:"blur"}]},purchaseForm:{purchaseNo:"",productNo:"",productName:"",purchaseNumber:"",supplierNo:"",supplierName:"",accountNumber:"",userName:"",receiptStatus:!1},purchaseRules:{},productSort:[],productBrand:[],putStatus:["上架","下架"],newStatus:["新品","正常"],stockoutStatus:["正常","缺货"],tableData:[]}},created:function(){var t=this;this.$http.post("/product/findCount").then(function(e){200===e.data.code?(t.pageSize=t.productTotal=e.data.data,t.pageSizes.push(t.productTotal)):t.$msg.error(e.data.message)}).catch(function(e){t.$msg.error(e)}),this.$http.post("/productBrand/findAllName").then(function(e){200===e.data.code?t.productBrand=e.data.data:t.$msg.error(e.data.message)}).catch(function(e){t.$msg.error(e)}),this.$http.post("/productType/findAllName").then(function(e){200===e.data.code?t.productSort=e.data.data:t.$msg.error(e.data.message)}).catch(function(e){t.$msg.error(e)}),this.reqInfo(),this.$http.post("/supplier/findAllUsable").then(function(e){200===e.data.code?t.supplierInfo=e.data.data:t.$msg.error(e.data.message)}).catch(function(e){t.$msg.error(e)})},methods:{reqInfo:function(){var t=this,e=this.$loading({lock:!0,text:"数据加载中",background:"rgba(255,255,255,0.1)"});this.$http.post("/product/findAll").then(function(a){e.close(),200===a.data.code?(t.tableData=a.data.data,t.tableSource=t.tableTemp=t.tableData,t.handleSizeChange(t.pageSize)):t.$msg.error(a.data.message)}).catch(function(a){e.close(),t.$msg.error(a)})},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a="image/gif"===t.type,r="image/png"===t.type,o="image/bmp"===t.type,l="image/webp"===t.type,s=t.size/1024/1024<5;return e||a||r||o||l?s||this.$msg.error("上传图片大小不能超过 5MB!"):this.$msg.error("仅支持上传 JPG、JPEG、PNG、GIF、BMP、WEBP 格式文件"),(e||a||r||o||l)&&s},openChange:function(t){this.alterForm.productId=this.tableData[t].productId,this.alterForm.productName=this.tableData[t].productName,this.alterForm.productType=this.tableData[t].productType,this.alterForm.inPrice=this.tableData[t].inPrice,this.alterForm.outPrice=this.tableData[t].outPrice,this.alterForm.productBrand=this.tableData[t].productBrand,this.alterForm.lowestStock=this.tableData[t].lowestStock,this.alterForm.productDescribe=this.tableData[t].productDescribe,this.alterForm.productUrl=this.tableData[t].productUrl,this.alterForm.isStockOut=this.tableData[t].isStockOut,this.dialogFormVisible=!0,this.handleIndex=t},submitChange:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.alterForm.isStockOut=e.tableData[e.handleIndex].productStock<e.alterForm.lowestStock;var a=e.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});e.$http.post("/product/update",e.$qs.stringify(e.alterForm)).then(function(t){a.close(),200===t.data.code?(e.tableData[e.handleIndex].productName=e.alterForm.productName,e.tableData[e.handleIndex].productType=e.alterForm.productType,e.tableData[e.handleIndex].inPrice=e.alterForm.inPrice,e.tableData[e.handleIndex].outPrice=e.alterForm.outPrice,e.tableData[e.handleIndex].productBrand=e.alterForm.productBrand,e.tableData[e.handleIndex].lowestStock=e.alterForm.lowestStock,e.tableData[e.handleIndex].productDescribe=e.alterForm.productDescribe,e.tableData[e.handleIndex].productUrl=e.alterForm.productUrl,e.tableData[e.handleIndex].isStockOut=e.alterForm.isStockOut,e.dialogFormVisible=!1,e.$notify({title:"成功",message:"商品信息更新成功",type:"success"})):e.$msg.error(t.data.message)}).catch(function(t){a.close(),e.$msg.error(t)})})},cancelChange:function(t){this.$refs[t].resetFields(),this.dialogFormVisible=!1},isSaleState:function(t){var e=this,a=this.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});this.$http.post("/product/update?productId="+this.tableData[t].productId+"&isSale="+this.tableData[t].isSale).then(function(r){a.close(),200===r.data.code&&(e.tableData[t].isSale?e.$notify({title:"成功",message:e.tableData[t].productName+"\t已上架",type:"success"}):e.$notify({title:"成功",message:e.tableData[t].productName+"\t已下架",type:"success"}))}).catch(function(t){a.close(),e.$msg.error(t)})},isNewState:function(t){var e=this,a=this.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});this.$http.post("/product/update?productId="+this.tableData[t].productId+"&isNew="+this.tableData[t].isNew).then(function(r){a.close(),200===r.data.code&&(e.tableData[t].isNew?(e.reqInfo(),e.$notify({title:"成功",message:e.tableData[t].productName+"\t设为新品",type:"success"})):e.$notify({title:"成功",message:e.tableData[t].productName+"\t设为正常",type:"success"}))}).catch(function(t){a.close(),e.$msg.error(t)})},resetForm:function(t){this.$refs[t].resetFields()},queryProduct:function(t){this.tableTemp=[];var e=this.ruleForm,a=0;if(0===e.name.length&&0===e.goodsNo.length&&0===e.brand.length&&0===e.put_status.length&&0===e.new_status.length&&0===e.stockout_status.length&&0===e.sort.length)this.tableTemp=this.tableSource,this.productTotal=this.tableSource.length;else{for(var r=0;r<t.length;r++)0!==e.name.length&&-1!==t[r].productName.indexOf(e.name)&&(this.tableTemp.push(t[r]),a++),0!==e.goodsNo.length&&t[r].productNo===e.goodsNo&&(this.tableTemp.push(t[r]),a++),0!==e.sort.length&&t[r].productType===e.sort&&(this.tableTemp.push(t[r]),a++),0!==e.brand.length&&t[r].productBrand===e.brand&&(this.tableTemp.push(t[r]),a++),0!==e.put_status.length&&("上架"===e.put_status&&t[r].isSale?(this.tableTemp.push(t[r]),a++):"下架"!==e.put_status||t[r].isSale||(this.tableTemp.push(t[r]),a++)),0!==e.new_status.length&&("新品"===e.new_status&&t[r].isNew?(this.tableTemp.push(t[r]),a++):"正常"!==e.new_status||t[r].isNew||(this.tableTemp.push(t[r]),a++)),0!==e.stockout_status.length&&("缺货"===e.stockout_status&&t[r].isStockOut?(this.tableTemp.push(t[r]),a++):"正常"!==e.stockout_status||t[r].isStockOut||(this.tableTemp.push(t[r]),a++));this.productTotal=a}this.handleSizeChange(this.pageSize)},handleSizeChange:function(t){this.pageSize=t,this.handleCurrentChange(this.pageIndex)},handleCurrentChange:function(t){this.pageIndex=t,this.currentChangePage(this.tableTemp,t)},currentChangePage:function(t,e){var a=(e-1)*this.pageSize,r=e*this.pageSize;for(r>this.productTotal&&(r=this.productTotal),this.tableData=[];a<r;a++)this.tableData.push(t[a])},deleteCheck:function(t,e){var a=this;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var r=a.tableData[t].productName;a.$http.post("/product/delete?productId="+a.tableData[t].productId).then(function(o){200===o.data.code&&(e.splice(t,1),a.$notify({title:"成功",message:r+"\t商品移除成功",type:"success"}))}).catch(function(t){a.$msg.error(t)})}).catch(function(){a.$notify({title:"成功",message:"操作取消",type:"success"})})},uploadProductUrlSuccess:function(t){200===t.code?(this.$msg.success("商品图片上传成功！"),this.alterForm.productUrl=t.data,this.$refs.productUpload.clearFiles()):this.$msg.error("商品图片上传失败！")},numberChange:function(){this.purchaseForm.purchaseNumber=parseInt(this.purchaseForm.purchaseNumber)},getPurchaseNo:function(){var t=new Date,e=String(t.getFullYear()),a=String(t.getMonth()+1),r=String(t.getDate()),o=String(t.getSeconds());o.length<2&&(o="0"+o);var l=Math.floor(9e3*Math.random()+1e3+1);this.purchaseForm.purchaseNo="P"+e+a+r+o+l},purchase:function(t){this.purchaseForm.productNo=this.tableData[t].productNo,this.purchaseForm.productName=this.tableData[t].productName,this.purchaseForm.purchaseNumber=0,this.purchaseForm.accountNumber=this.$store.state.user.accountNumber,this.purchaseForm.userName=this.$store.state.user.userName,this.purchaseForm.receiptStatus=!1,this.purchaseFormVisible=!0},submitPurchaseInfo:function(){var t=this;this.getPurchaseNo(),this.purchaseForm.supplierNo=this.supplierInfo[this.supplierIndex].supplierNo,this.purchaseForm.supplierName=this.supplierInfo[this.supplierIndex].supplierName;var e=this.$loading({lock:!0,text:"数据提交中",background:"rgba(255,255,255,0.1)"});this.$http.post("/purchase/addPurchase",this.$qs.stringify(this.purchaseForm)).then(function(a){e.close(),200===a.data.code?(e.close(),t.$notify({title:"成功",message:t.purchaseForm.productName+"\t采购信息提交成功",type:"success"}),t.purchaseFormVisible=!1):t.$notify.error({title:"失败",message:t.purchaseForm.productName+"\t采购信息提交失败"})}).catch(function(a){e.close(),t.$msg.error(a)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list"},[a("el-card",{staticClass:"box-card product-list-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticClass:"el-button-search",attrs:{type:"primary"},on:{click:function(e){return t.queryProduct(t.tableSource)}}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"el-button-search",on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1),t._v(" "),a("el-form",{ref:"ruleForm",staticClass:"el-form",attrs:{model:t.ruleForm,inline:""}},[a("el-form-item",{attrs:{label:"商品名称：",prop:"name"}},[a("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品货号：",prop:"goodsNo"}},[a("el-input",{attrs:{placeholder:"商品货号"},model:{value:t.ruleForm.goodsNo,callback:function(e){t.$set(t.ruleForm,"goodsNo",e)},expression:"ruleForm.goodsNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品分类：",prop:"sort"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择分类",clearable:""},model:{value:t.ruleForm.sort,callback:function(e){t.$set(t.ruleForm,"sort",e)},expression:"ruleForm.sort"}},t._l(t.productSort,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品品牌：",prop:"brand"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择品牌",clearable:""},model:{value:t.ruleForm.brand,callback:function(e){t.$set(t.ruleForm,"brand",e)},expression:"ruleForm.brand"}},t._l(t.productBrand,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"上架状态：",prop:"put_status"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.ruleForm.put_status,callback:function(e){t.$set(t.ruleForm,"put_status",e)},expression:"ruleForm.put_status"}},t._l(t.putStatus,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"新品状态：",prop:"new_status"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.ruleForm.new_status,callback:function(e){t.$set(t.ruleForm,"new_status",e)},expression:"ruleForm.new_status"}},t._l(t.newStatus,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"缺货状态：",prop:"stockout_status"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.ruleForm.stockout_status,callback:function(e){t.$set(t.ruleForm,"stockout_status",e)},expression:"ruleForm.stockout_status"}},t._l(t.stockoutStatus,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1)],1)],1),t._v(" "),a("el-card",{staticClass:"box-card product-list-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-coin"}),t._v(" "),a("span",[t._v("数据列表")]),t._v(" "),a("el-button",{staticClass:"el-button-search",on:{click:function(e){return t.$router.push("/ProductAdd")}}},[t._v("添加")])],1),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{slot:"empty",data:t.tableData,height:"500px",border:"",stripe:"","highlight-current-row":""},slot:"empty"},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"productId",label:"编号",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品图片",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.tableData[e.$index]?a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.tableData[e.$index].productUrl,fit:"fit"}}):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称",align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("货号："+t._s(t.tableData[e.$index].productNo))]),t._v(" "),a("p",{domProps:{textContent:t._s(t.tableData[e.$index].productName)}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类/品牌",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("分类："+t._s(t.tableData[e.$index].productType))]),t._v(" "),a("p",[t._v("品牌："+t._s(t.tableData[e.$index].productBrand))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"价格",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("进价：￥"+t._s(t.tableData[e.$index].inPrice))]),t._v(" "),a("p",[t._v("售价：￥"+t._s(t.tableData[e.$index].outPrice))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"标签",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("上架："),a("el-switch",{on:{change:function(a){return t.isSaleState(e.$index)}},model:{value:t.tableData[e.$index].isSale,callback:function(a){t.$set(t.tableData[e.$index],"isSale",a)},expression:"tableData[scope.$index].isSale"}})],1),t._v(" "),a("p",[t._v("新品："),a("el-switch",{on:{change:function(a){return t.isNewState(e.$index)}},model:{value:t.tableData[e.$index].isNew,callback:function(a){t.$set(t.tableData[e.$index],"isNew",a)},expression:"tableData[scope.$index].isNew"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"库存",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.tableData?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"right",content:"最低库存："+t.tableData[e.$index].lowestStock}},[a("p",{staticStyle:{cursor:"pointer"},domProps:{textContent:t._s(t.tableData[e.$index].productStock)}})]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"缺货状态",align:"center",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.tableData[e.$index].isStockOut?a("span",{staticStyle:{color:"#ff0000"}},[t._v("缺货")]):a("span",[t._v("正常")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"开售时间",align:"center",width:"100",prop:"saleTime"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{staticStyle:{"margin-bottom":"20px!important"},attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return t.purchase(e.$index)}},slot:"reference"},[t._v("商品采购")])],1),t._v(" "),a("div",[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.openChange(e.$index)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){return t.deleteCheck(e.$index,t.tableData)}},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":t.pageSizes,"page-size":t.pageSize,"current-page":t.pageIndex,layout:"total, sizes, prev, pager, next, jumper",total:t.productTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)]),t._v(" "),t.tableData[t.handleIndex]?a("el-dialog",{staticClass:"chang-product",attrs:{title:"编辑商品",visible:t.dialogFormVisible,center:""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"changeFrom",staticClass:"el-form",attrs:{inline:"",rules:t.alterRules,model:t.alterForm}},[a("el-form-item",{attrs:{label:"商品名称：",prop:"productName"}},[a("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.alterForm.productName,callback:function(e){t.$set(t.alterForm,"productName",e)},expression:"alterForm.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品分类：",prop:"productType"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择分类"},model:{value:t.alterForm.productType,callback:function(e){t.$set(t.alterForm,"productType",e)},expression:"alterForm.productType"}},t._l(t.productSort,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品进价：",prop:"inPrice"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"商品进价"},model:{value:t.alterForm.inPrice,callback:function(e){t.$set(t.alterForm,"inPrice",e)},expression:"alterForm.inPrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品品牌：",prop:"productBrand"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择品牌"},model:{value:t.alterForm.productBrand,callback:function(e){t.$set(t.alterForm,"productBrand",e)},expression:"alterForm.productBrand"}},t._l(t.productBrand,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品售价：",prop:"outPrice"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"商品售价"},model:{value:t.alterForm.outPrice,callback:function(e){t.$set(t.alterForm,"outPrice",e)},expression:"alterForm.outPrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最低库存：",prop:"lowestStock"}},[a("el-input-number",{attrs:{size:"medium",min:"0",max:"1000",placeholder:"最低库存"},model:{value:t.alterForm.lowestStock,callback:function(e){t.$set(t.alterForm,"lowestStock",e)},expression:"alterForm.lowestStock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品描述：",prop:"productDescribe"}},[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"商品描述"},model:{value:t.alterForm.productDescribe,callback:function(e){t.$set(t.alterForm,"productDescribe",e)},expression:"alterForm.productDescribe"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品图片：",prop:"productUrl"}},[a("el-upload",{ref:"productUpload",staticClass:"product-upload",staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"155px",width:"217px"},attrs:{action:this.$VAR.http+"/uploadImage?name=productImage","on-success":t.uploadProductUrlSuccess,"before-upload":t.beforeAvatarUpload,drag:!0,"list-type":"picture"}},[a("el-image",{staticStyle:{height:"155px",width:"217px"},attrs:{src:t.alterForm.productUrl}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{padding:"12px 54px",margin:"0 55px"},attrs:{type:"primary"},on:{click:function(e){return t.submitChange("changeFrom")}}},[t._v("确 定")]),t._v(" "),a("el-button",{staticStyle:{padding:"12px 54px",margin:"0 55px"},on:{click:function(e){return t.cancelChange("changeFrom")}}},[t._v("取 消")])],1)],1):t._e(),t._v(" "),a("el-dialog",{staticClass:"chang-purchase",attrs:{title:"商品采购","close-on-click-modal":!1,visible:t.purchaseFormVisible,width:"500px",center:""},on:{"update:visible":function(e){t.purchaseFormVisible=e}}},[a("el-form",{ref:"changeFrom",staticClass:"info-form",attrs:{inline:"",model:t.purchaseForm,rules:t.purchaseRules}},[a("el-form-item",{attrs:{label:"商品编号：",prop:"productNo"}},[a("el-input",{attrs:{size:"small",readonly:"",placeholder:"商品编号"},model:{value:t.purchaseForm.productNo,callback:function(e){t.$set(t.purchaseForm,"productNo",e)},expression:"purchaseForm.productNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品名称：",prop:"productName"}},[a("el-input",{attrs:{size:"small",readonly:"",placeholder:"商品名称"},model:{value:t.purchaseForm.productName,callback:function(e){t.$set(t.purchaseForm,"productName",e)},expression:"purchaseForm.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"供应商：",prop:"supplierNo"}},[a("el-select",{attrs:{size:"small",filterable:"",placeholder:"请选择供应商"},model:{value:t.supplierIndex,callback:function(e){t.supplierIndex=e},expression:"supplierIndex"}},t._l(t.supplierInfo,function(t,e){return a("el-option",{key:e,attrs:{label:t.supplierName,value:e}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"采购数量：",prop:"purchaseNumber"}},[a("el-input-number",{staticStyle:{width:"186px"},attrs:{size:"small",min:1,max:1e3,label:"采购数量"},on:{change:t.numberChange},model:{value:t.purchaseForm.purchaseNumber,callback:function(e){t.$set(t.purchaseForm,"purchaseNumber",e)},expression:"purchaseForm.purchaseNumber"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{padding:"10px 35px",margin:"0 30px 0 60px"},attrs:{type:"primary"},on:{click:t.submitPurchaseInfo}},[t._v("确 定")]),t._v(" "),a("el-button",{staticStyle:{padding:"10px 35px",margin:"0 30px"},on:{click:function(e){t.purchaseFormVisible=!1}}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(t){a("JJQi")},null,null);e.default=l.exports},JJQi:function(t,e){}});
//# sourceMappingURL=22.55ef167f4732a178dcaf.js.map