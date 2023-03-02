/*
Navicat MySQL Data Transfer

Source Server         : mysql5.0
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : db_xishuimall

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2023-03-02 09:45:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `banner_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '商品广告牌id',
  `product_name` varchar(30) NOT NULL COMMENT '商品名称',
  `product_url` varchar(200) NOT NULL COMMENT '商品链接',
  `banner_url` varchar(200) NOT NULL COMMENT '广告宣传栏链接',
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='商品广告轮播图';

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', '灵越14pro', 'http://127.0.0.1:9999/#/MallPurchase?id=9', 'http://127.0.0.1:9000/local/bannerImage/banner_dell_3511.jpg');
INSERT INTO `banner` VALUES ('2', '联想', 'http://127.0.0.1:9999/#/MallPurchase?id=8', 'http://127.0.0.1:9000/local/bannerImage/banner_thinkpad_x1.jpg');

-- ----------------------------
-- Table structure for logistics
-- ----------------------------
DROP TABLE IF EXISTS `logistics`;
CREATE TABLE `logistics` (
  `logistic_id` int(6) NOT NULL AUTO_INCREMENT COMMENT '物流id',
  `order_no` varchar(30) NOT NULL COMMENT '订单编号',
  `sender` varchar(30) NOT NULL COMMENT '发货人',
  `sender_tel` varchar(30) NOT NULL COMMENT '发货人联系方式',
  `sender_add` varchar(50) NOT NULL COMMENT '发货人联系地址',
  `receiver` varchar(30) NOT NULL COMMENT '收货人',
  `receiver_tel` varchar(30) NOT NULL COMMENT '收货人联系方式',
  `receiver_add` varchar(50) NOT NULL COMMENT '收货人联系地址',
  `parcel_name` varchar(30) NOT NULL COMMENT '物流公司',
  PRIMARY KEY (`logistic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COMMENT='物流表';

-- ----------------------------
-- Records of logistics
-- ----------------------------
INSERT INTO `logistics` VALUES ('2', '21111319667', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('3', '21111111271', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷', '400-626-1123', '河北师范大学', '花卷物流');
INSERT INTO `logistics` VALUES ('5', '21111447921', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷', '400-626-1123', '河北师范大学', '花卷物流');
INSERT INTO `logistics` VALUES ('7', '21111420537', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷', '400-626-1123', '河北师范大学', '花卷物流');
INSERT INTO `logistics` VALUES ('8', '211322314850', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('9', '211322311410', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('11', '211322312375', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('12', '211511323447', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('13', '211517184317', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '中通快递');
INSERT INTO `logistics` VALUES ('14', '211518238993', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('15', '211518588512', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('16', '211521424925', '花卷', '400-626-1123', '河北师范大学', 'z', '15233187989', '河北省 衡水市 桃城区 (aaa)', '花卷物流');
INSERT INTO `logistics` VALUES ('17', '211521426089', '花卷', '400-626-1123', '河北师范大学', 'z', '15233187989', '河北省 衡水市 桃城区 (aaa)', '花卷物流');
INSERT INTO `logistics` VALUES ('18', '211518557886', '花卷', '400-626-1123', '河北师范大学', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷物流');
INSERT INTO `logistics` VALUES ('19', '211322599987', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷', '400-626-1123', '河北师范大学', '花卷物流');
INSERT INTO `logistics` VALUES ('20', '211322315037', 'M', '15233088662', '河北省 石家庄市 裕华区 (河北师范大学)', '花卷', '400-626-1123', '河北师范大学', '花卷物流');
INSERT INTO `logistics` VALUES ('21', '231820496309', '溪水', '18723025086', '重庆师范大学', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水物流');
INSERT INTO `logistics` VALUES ('23', '2311420343229', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水', '400-626-1123', '重庆师范大学', '溪水物流');
INSERT INTO `logistics` VALUES ('24', '2322814102920', '溪水', '400-626-1123', '重庆师范大学', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水物流');
INSERT INTO `logistics` VALUES ('25', '2322814005095', '溪水', '400-626-1123', '重庆师范大学', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水物流');
INSERT INTO `logistics` VALUES ('26', '2322815431171', '溪水', '400-626-1123', '重庆师范大学', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水物流');
INSERT INTO `logistics` VALUES ('28', '2322815434934', '溪水', '400-626-1123', '重庆师范大学', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水物流');
INSERT INTO `logistics` VALUES ('29', '2322815435700', 'test', '18723025086', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '溪水', '400-626-1123', '重庆师范大学', '溪水物流');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `order_id` int(7) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `order_no` varchar(30) NOT NULL COMMENT '订单编号',
  `order_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '下单时间',
  `product_no` varchar(30) NOT NULL COMMENT '商品编号',
  `product_specs` varchar(30) DEFAULT NULL COMMENT '商品规格',
  `user_account` varchar(30) NOT NULL COMMENT '用户账号',
  `user_name` varchar(30) NOT NULL COMMENT '用户名称',
  `contact_way` varchar(30) NOT NULL COMMENT '联系方式',
  `pay_price` double NOT NULL COMMENT '商品金额',
  `pay_amount` int(6) NOT NULL COMMENT '购买数量',
  `pay_type` varchar(20) NOT NULL COMMENT '支付方式',
  `order_from` varchar(20) NOT NULL COMMENT '订单来源',
  `order_state` varchar(20) NOT NULL COMMENT '订单状态',
  `accept_address` varchar(100) NOT NULL COMMENT '收货地址',
  `return_state` tinyint(1) NOT NULL DEFAULT '0' COMMENT '退货状态',
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `UNIQUE` (`order_no`),
  KEY `product_no` (`product_no`),
  KEY `order_ibfk_2` (`user_account`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`user_account`) REFERENCES `user` (`account_number`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COMMENT='订单表';

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('26', '2322815525151', '2023-02-28 15:13:15', '20232271623196', 'i7+16G+1T', '18723025086@139.com', 'test', '18723025086', '15000', '1', '支付宝', '网页商城', '已退款', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '1');
INSERT INTO `order` VALUES ('27', '2322815431171', '2023-02-28 15:15:44', '20231132108173', '8GB+128GB', '18723025086@139.com', 'test', '18723025086', '10000', '2', '支付宝', '网页商城', '已评价', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '0');
INSERT INTO `order` VALUES ('28', '2322815435700', '2023-02-28 15:15:44', '20231132111074', '8GB+256GB', '18723025086@139.com', 'test', '18723025086', '2500', '1', '支付宝', '网页商城', '已退货', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '1');
INSERT INTO `order` VALUES ('29', '2322815434934', '2023-02-28 15:15:44', '20232271627047', 'i5+16G+512G', '18723025086@139.com', 'test', '18723025086', '3500', '1', '支付宝', '网页商城', '已拒绝', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '0');
INSERT INTO `order` VALUES ('30', 'Vip23228156101', '2023-02-28 15:59:01', 'Vip0001', null, '18723025086@139.com', 'test', '18723025086', '88', '1', '支付宝', '网页商城', '开通成功', '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', '0');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `product_no` varchar(30) NOT NULL COMMENT '商品编号',
  `product_name` varchar(30) NOT NULL COMMENT '商品名称',
  `product_type` varchar(30) NOT NULL COMMENT '商品类别',
  `product_describe` varchar(100) NOT NULL COMMENT '副标题',
  `product_brand` varchar(30) NOT NULL COMMENT '品牌',
  `in_price` double NOT NULL COMMENT '进价',
  `out_price` double NOT NULL COMMENT '售价',
  `product_stock` int(6) NOT NULL COMMENT '库存',
  `lowest_stock` int(6) NOT NULL COMMENT '最低库存',
  `is_stockout` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否缺货',
  `is_new` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否新品',
  `is_sale` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否上架',
  `sale_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上架时间',
  `product_url` varchar(200) NOT NULL COMMENT '商品图片',
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `UNIQUE` (`product_no`),
  KEY `product_type` (`product_type`),
  KEY `product_brand` (`product_brand`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_type`) REFERENCES `product_type` (`type_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`product_brand`) REFERENCES `product_brand` (`brand_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='商品表';

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('2', '20231112155480', 'Redmi Note10 Pro', '手机', '联发科天玑1100处理器,VC液冷散热,120Hz变速高刷屏,67w闪充,JBL立体声双扬声器', '小米', '1400', '1700', '601', '50', '0', '1', '1', '2023-01-13 20:56:35', 'http://127.0.0.1:9000/local/productImage/Redmi_Note_10_Pro.jpg');
INSERT INTO `product` VALUES ('3', '20231132039331', 'Redmi K60 2K', '手机', '高光屏【品胜三合一数据线套餐】手机', '小米', '2500', '2700', '200', '100', '0', '1', '1', '2023-01-13 20:56:36', 'http://127.0.0.1:9000/local/productImage/Rdedmi K60 2K.jpg');
INSERT INTO `product` VALUES ('4', '20231132042242', 'nova 9 SE 华为', '手机', '创新Vlog体验 手机', '华为', '1000', '1300', '500', '50', '0', '1', '1', '2023-01-13 20:45:46', 'http://127.0.0.1:9000/local/productImage/nova9_se.jpg');
INSERT INTO `product` VALUES ('5', '20231132108173', 'Mate50', '手机', '【华为原装Type-C耳机套装】全网通4G手机', '华为', '4000', '5000', '998', '50', '0', '1', '1', '2023-01-13 21:09:12', 'http://127.0.0.1:9000/local/productImage/mate50.jpg');
INSERT INTO `product` VALUES ('6', '20231132111074', '红米Redmi K50', '手机', '天玑8100 三星2K直屏 液冷散热', '小米', '2000', '2500', '499', '50', '0', '1', '1', '2023-01-13 21:12:20', 'http://127.0.0.1:9000/local/productImage/Redmi_k50.jpg');
INSERT INTO `product` VALUES ('7', '20231132114565', '华为 nova10', '手机', '前置6000万超广角全网通4G手机', '华为', '2000', '2300', '500', '50', '0', '1', '1', '2023-01-13 21:16:01', 'http://127.0.0.1:9000/local/productImage/nova10.jpg');
INSERT INTO `product` VALUES ('8', '20232271623196', '联想ThinkPad X1 Carbon', '笔记本电脑', '联想ThinkPad X1 Carbon 商务轻薄本', '联想', '14000', '15000', '549', '50', '0', '1', '1', '2023-02-27 16:25:10', 'http://127.0.0.1:9000/local/productImage/ThinkPad_X1_Carbon.jpg');
INSERT INTO `product` VALUES ('9', '20232271627047', '戴尔灵越3511酷睿i5轻薄办公学生笔记本电脑', '笔记本电脑', '戴尔灵越3511酷睿i5轻薄办公学生笔记本电脑', '戴尔', '3400', '3500', '1549', '50', '0', '1', '1', '2023-02-27 16:27:53', 'http://127.0.0.1:9000/local/productImage/dell_3511.jpg');

-- ----------------------------
-- Table structure for product_brand
-- ----------------------------
DROP TABLE IF EXISTS `product_brand`;
CREATE TABLE `product_brand` (
  `brand_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '品牌id',
  `brand_name` varchar(30) NOT NULL COMMENT '品牌名称',
  `brand_describe` varchar(100) NOT NULL COMMENT '品牌描述',
  PRIMARY KEY (`brand_id`),
  UNIQUE KEY `UNIQUE` (`brand_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='商品品牌表';

-- ----------------------------
-- Records of product_brand
-- ----------------------------
INSERT INTO `product_brand` VALUES ('1', '小米', '为发烧而生');
INSERT INTO `product_brand` VALUES ('2', '华为', '华为,不仅仅是世界500强!');
INSERT INTO `product_brand` VALUES ('3', '戴尔', '让你充满信息,非凡品质');
INSERT INTO `product_brand` VALUES ('4', '联想', '只要你想,联想在你身边');

-- ----------------------------
-- Table structure for product_review
-- ----------------------------
DROP TABLE IF EXISTS `product_review`;
CREATE TABLE `product_review` (
  `review_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '用户评论id',
  `account_number` varchar(30) NOT NULL COMMENT '用户帐号',
  `product_no` varchar(30) NOT NULL COMMENT '商品编号',
  `product_specs` varchar(30) DEFAULT NULL COMMENT '商品规格',
  `order_no` varchar(30) NOT NULL COMMENT '订单编号',
  `review_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '评论时间',
  `star_level` double NOT NULL COMMENT '商品评星',
  `product_review` varchar(300) NOT NULL COMMENT '商品评价',
  PRIMARY KEY (`review_id`),
  KEY `account_number` (`account_number`),
  KEY `product_no` (`product_no`),
  KEY `order_no` (`order_no`),
  CONSTRAINT `product_review_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `user` (`account_number`),
  CONSTRAINT `product_review_ibfk_2` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`),
  CONSTRAINT `product_review_ibfk_3` FOREIGN KEY (`order_no`) REFERENCES `order` (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='商品评价';

-- ----------------------------
-- Records of product_review
-- ----------------------------
INSERT INTO `product_review` VALUES ('1', '18723025086@139.com', '20231132108173', '8GB+128GB', '2322815431171', '2023-02-28 15:21:59', '4', '好');

-- ----------------------------
-- Table structure for product_specs
-- ----------------------------
DROP TABLE IF EXISTS `product_specs`;
CREATE TABLE `product_specs` (
  `product_id` int(5) NOT NULL COMMENT '商品id',
  `specs_id` int(5) NOT NULL COMMENT '规格id',
  KEY `product_id` (`product_id`),
  KEY `specs_id` (`specs_id`),
  CONSTRAINT `product_specs_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_specs_ibfk_2` FOREIGN KEY (`specs_id`) REFERENCES `specs` (`specs_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品规格表';

-- ----------------------------
-- Records of product_specs
-- ----------------------------
INSERT INTO `product_specs` VALUES ('2', '1');
INSERT INTO `product_specs` VALUES ('3', '4');
INSERT INTO `product_specs` VALUES ('4', '3');
INSERT INTO `product_specs` VALUES ('5', '3');
INSERT INTO `product_specs` VALUES ('6', '4');
INSERT INTO `product_specs` VALUES ('7', '3');
INSERT INTO `product_specs` VALUES ('8', '7');
INSERT INTO `product_specs` VALUES ('9', '8');

-- ----------------------------
-- Table structure for product_type
-- ----------------------------
DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type` (
  `type_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '类别id',
  `type_name` varchar(30) NOT NULL COMMENT '类别名称',
  `type_describe` varchar(100) NOT NULL COMMENT '类别描述',
  `type_url_left` varchar(200) NOT NULL COMMENT '左侧宣传图',
  `type_url_top` varchar(200) NOT NULL COMMENT '横幅宣传图',
  PRIMARY KEY (`type_id`),
  UNIQUE KEY `UNIQUE` (`type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='商品类别表';

-- ----------------------------
-- Records of product_type
-- ----------------------------
INSERT INTO `product_type` VALUES ('1', '手机', '关于手机', 'http://127.0.0.1:9000/local/productTypeImage/phone_left.jpg', 'http://127.0.0.1:9000/local/productTypeImage/phone_top.JPG');
INSERT INTO `product_type` VALUES ('2', '笔记本电脑', '关于笔记本电脑', 'http://127.0.0.1:9000/local/productTypeImage/notebook_left.JPG', 'http://127.0.0.1:9000/local/productTypeImage/notebook_top.jpg');

-- ----------------------------
-- Table structure for purchase
-- ----------------------------
DROP TABLE IF EXISTS `purchase`;
CREATE TABLE `purchase` (
  `purchase_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '采购id',
  `purchase_no` varchar(30) NOT NULL COMMENT '采购编号',
  `purchase_number` int(6) NOT NULL COMMENT '进货数量',
  `purchase_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '进货时间',
  `receipt_time` timestamp NULL DEFAULT NULL COMMENT '收货时间',
  `product_no` varchar(30) NOT NULL COMMENT '商品编号',
  `product_name` varchar(30) NOT NULL COMMENT '商品名称',
  `supplier_no` varchar(30) NOT NULL COMMENT '供应商编号',
  `supplier_name` varchar(30) NOT NULL COMMENT '供应商名称',
  `account_number` varchar(30) NOT NULL COMMENT '操作员编号',
  `user_name` varchar(30) NOT NULL COMMENT '操作员名称',
  `receipt_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '收货状态',
  PRIMARY KEY (`purchase_id`),
  UNIQUE KEY `UNIQUE` (`purchase_no`),
  KEY `product_no` (`product_no`),
  KEY `supplier_no` (`supplier_no`),
  KEY `account_number` (`account_number`),
  CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON UPDATE CASCADE,
  CONSTRAINT `purchase_ibfk_2` FOREIGN KEY (`supplier_no`) REFERENCES `supplier` (`supplier_no`) ON UPDATE CASCADE,
  CONSTRAINT `purchase_ibfk_3` FOREIGN KEY (`account_number`) REFERENCES `user` (`account_number`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='采购表';

-- ----------------------------
-- Records of purchase
-- ----------------------------
INSERT INTO `purchase` VALUES ('6', 'P2023228058710', '500', '2023-02-28 15:20:05', '2023-02-28 15:20:22', '20232271627047', '戴尔灵越3511酷睿i5轻薄办公学生笔记本电脑', '2023113205341511', '唯品会', '3192863656@qq.com', 'admin', '1');

-- ----------------------------
-- Table structure for return_goods
-- ----------------------------
DROP TABLE IF EXISTS `return_goods`;
CREATE TABLE `return_goods` (
  `return_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '退货id',
  `apply_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请时间',
  `order_no` varchar(30) NOT NULL COMMENT '订单编号',
  `user_number` varchar(30) NOT NULL COMMENT '用户账号',
  `user_name` varchar(30) NOT NULL COMMENT '用户名称',
  `return_price` double NOT NULL COMMENT '退款金额',
  `operator_number` varchar(30) NOT NULL COMMENT '操作员账号',
  `operator_name` varchar(30) NOT NULL COMMENT '操作员名称',
  `deal_time` timestamp NULL DEFAULT NULL COMMENT '处理时间',
  `return_reason` varchar(30) NOT NULL COMMENT '退货原因',
  `return_state` varchar(20) NOT NULL COMMENT '退货状态',
  PRIMARY KEY (`return_id`),
  KEY `user_name` (`user_name`),
  KEY `return_goods_ibfk_3` (`operator_number`),
  KEY `return_goods_ibfk_1` (`order_no`),
  KEY `return_goods_ibfk_2` (`user_number`),
  KEY `return_goods_ibfk_4` (`return_reason`),
  CONSTRAINT `return_goods_ibfk_2` FOREIGN KEY (`user_number`) REFERENCES `user` (`account_number`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `return_goods_ibfk_4` FOREIGN KEY (`return_reason`) REFERENCES `return_reason` (`reason_name`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='商品退货表';

-- ----------------------------
-- Records of return_goods
-- ----------------------------
INSERT INTO `return_goods` VALUES ('7', '2023-02-28 15:17:23', '2322815525151', '18723025086@139.com', 'test', '15000', '3192863656@qq.com', 'admin', '2023-02-28 15:18:52', '价格有点贵', '退款完成');
INSERT INTO `return_goods` VALUES ('8', '2023-02-28 15:22:05', '2322815435700', '18723025086@139.com', 'test', '2500', '3192863656@qq.com', 'admin', '2023-02-28 15:31:05', '七天无理由退换', '退货完成');
INSERT INTO `return_goods` VALUES ('9', '2023-02-28 15:22:27', '2322815434934', '18723025086@139.com', 'test', '3500', '3192863656@qq.com', 'admin', '2023-02-28 15:26:44', '质量问题', '已拒绝');

-- ----------------------------
-- Table structure for return_reason
-- ----------------------------
DROP TABLE IF EXISTS `return_reason`;
CREATE TABLE `return_reason` (
  `reason_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '退货id',
  `reason_name` varchar(30) NOT NULL COMMENT '退货理由',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否启用',
  PRIMARY KEY (`reason_id`),
  UNIQUE KEY `UNIQUE` (`reason_name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='退货原因表';

-- ----------------------------
-- Records of return_reason
-- ----------------------------
INSERT INTO `return_reason` VALUES ('1', '七天无理由退换', '1');
INSERT INTO `return_reason` VALUES ('2', '质量问题', '1');
INSERT INTO `return_reason` VALUES ('3', '大小不合适', '1');
INSERT INTO `return_reason` VALUES ('4', '价格有点贵', '1');
INSERT INTO `return_reason` VALUES ('5', '规格 / 款式 /  数量拍错', '1');
INSERT INTO `return_reason` VALUES ('6', '收货地址拍错', '1');
INSERT INTO `return_reason` VALUES ('7', '暂时不需要了', '1');
INSERT INTO `return_reason` VALUES ('8', '其他', '1');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `role_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `role_name` varchar(30) NOT NULL COMMENT '角色名称',
  `role_describe` varchar(50) NOT NULL COMMENT '角色描述',
  `role_state` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否启用',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPRESSED COMMENT='角色表';

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', '超级管理员', '1');
INSERT INTO `role` VALUES ('2', '订单管理员', '订单管理员', '1');
INSERT INTO `role` VALUES ('3', '商品管理员', '商品管理员', '1');
INSERT INTO `role` VALUES ('4', '人事管理员', '人事管理员', '1');
INSERT INTO `role` VALUES ('5', '顾客', '顾客', '1');

-- ----------------------------
-- Table structure for shopping_cart
-- ----------------------------
DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart` (
  `cart_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `account_number` varchar(30) NOT NULL COMMENT '用户帐号',
  `product_id` int(5) NOT NULL COMMENT '商品id',
  `pay_amount` int(5) NOT NULL COMMENT '购买数量',
  `product_specs` varchar(100) DEFAULT NULL COMMENT '商品规格',
  PRIMARY KEY (`cart_id`),
  KEY `account_number` (`account_number`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `user` (`account_number`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `shopping_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopping_cart
-- ----------------------------
INSERT INTO `shopping_cart` VALUES ('10', '18723025086@139.com', '5', '2', '8GB+128GB');
INSERT INTO `shopping_cart` VALUES ('11', '18723025086@139.com', '6', '1', '8GB+256GB');
INSERT INTO `shopping_cart` VALUES ('12', '18723025086@139.com', '9', '1', 'i5+16G+512G');

-- ----------------------------
-- Table structure for specs
-- ----------------------------
DROP TABLE IF EXISTS `specs`;
CREATE TABLE `specs` (
  `specs_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '规格id',
  `specs_name` varchar(50) NOT NULL COMMENT '规格类型',
  `product_type` varchar(30) NOT NULL COMMENT '商品类别',
  PRIMARY KEY (`specs_id`),
  KEY `product_type` (`product_type`),
  CONSTRAINT `specs_ibfk_1` FOREIGN KEY (`product_type`) REFERENCES `product_type` (`type_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='商品规格表';

-- ----------------------------
-- Records of specs
-- ----------------------------
INSERT INTO `specs` VALUES ('1', '6GB+128GB', '手机');
INSERT INTO `specs` VALUES ('2', '6GB+256GB', '手机');
INSERT INTO `specs` VALUES ('3', '8GB+128GB', '手机');
INSERT INTO `specs` VALUES ('4', '8GB+256GB', '手机');
INSERT INTO `specs` VALUES ('5', '12GB+128GB', '手机');
INSERT INTO `specs` VALUES ('6', '12GB+256G', '手机');
INSERT INTO `specs` VALUES ('7', 'i7+16G+1T', '笔记本电脑');
INSERT INTO `specs` VALUES ('8', 'i5+16G+512G', '笔记本电脑');

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `supplier_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '供应商id',
  `supplier_no` varchar(30) NOT NULL COMMENT '供应商编号',
  `supplier_name` varchar(30) NOT NULL COMMENT '供应商名称',
  `product_type` varchar(30) NOT NULL COMMENT '商品类别',
  `principal` varchar(30) NOT NULL COMMENT '负责人',
  `contact_way` varchar(30) NOT NULL COMMENT '联系方式',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否可用',
  PRIMARY KEY (`supplier_id`),
  UNIQUE KEY `UNIQUE` (`supplier_no`),
  KEY `product_type` (`product_type`),
  CONSTRAINT `supplier_ibfk_1` FOREIGN KEY (`product_type`) REFERENCES `product_type` (`type_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='供应商表';

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES ('1', '2023113205341511', '唯品会', '手机', '溪水', '18723025086', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `account_number` varchar(30) NOT NULL COMMENT '用户账号',
  `user_name` varchar(30) NOT NULL COMMENT '用户昵称',
  `password` varchar(50) NOT NULL COMMENT '用户密码',
  `user_sex` varchar(6) DEFAULT NULL COMMENT '用户性别',
  `telephone` varchar(11) DEFAULT NULL COMMENT '用户手机号',
  `creat_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
  `login_time` timestamp NULL DEFAULT NULL COMMENT '登录时间',
  `user_state` tinyint(1) NOT NULL DEFAULT '1' COMMENT '用户状态',
  `summary` varchar(50) DEFAULT NULL COMMENT '个人简介',
  `user_address` varchar(100) DEFAULT NULL COMMENT '用户地址',
  `avatar_url` varchar(200) DEFAULT NULL COMMENT '用户头像',
  `background_url` varchar(200) DEFAULT NULL COMMENT '背景图片',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UNIQUE` (`account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '3192863656@qq.com', 'admin', 'f0ee581b059830505b8d7a347c47d4cb', '男', '', '2022-12-30 17:17:13', '2023-02-28 15:30:50', '1', '重剑无峰，大巧不工', '重庆市 市辖区 沙坪坝区 (大学城重师)', 'http://127.0.0.1:9000/local/userAvatar/admin.jpg', null);
INSERT INTO `user` VALUES ('2', '13330239457@163.com', '溪水商品管理', '2d4ad1da51d67ba25c69318f84d4f515', '男', '13330239457', '2022-12-31 12:56:00', '2023-02-28 15:25:37', '1', '重剑无峰，大巧不工', '重庆市 市辖区 沙坪坝区 (大学城重师)', 'http://127.0.0.1:9000/local/userAvatar/06a09d3c6fc94301a9f805f08c65a8db-QQ图片20181002195720.jpg', 'http://127.0.0.1:9000/local/background/41d5e85813bb44369546e873d64c0dd4-01_mclaren_senna_black_livery_2_resized.jpg');
INSERT INTO `user` VALUES ('3', '18723025086@163.com', '溪水人事管理', '000ba0871fca57b662f2215aaf6ca7f8', '', '', '2022-12-01 21:22:56', '2023-02-28 15:27:53', '1', '重剑无峰，大巧不工', '重庆市 市辖区 沙坪坝区 (大学城重师)', 'http://127.0.0.1:9000/local/userAvatar/6cbb40daf2734d9a8dfca80eee25cf9c-QQ图片20201231194001.jpg', '');
INSERT INTO `user` VALUES ('4', '2982359710@qq.com', '溪水订单管理', 'ef8fd296857a7efa590c38d83c23a853', null, '', '2022-12-26 13:35:08', '2023-02-28 15:23:13', '1', '重剑无峰，大巧不工', '重庆市 市辖区 沙坪坝区 (大学城重师)', null, 'http://127.0.0.1:9000/local/background/41d5e85813bb44369546e873d64c0dd4-01_mclaren_senna_black_livery_2_resized.jpg');
INSERT INTO `user` VALUES ('5', '18723025086@139.com', 'test', '31b5caf20be686e7c599963780b5fe1e', null, '18723025086', '2023-01-05 10:31:24', '2023-02-28 15:58:11', '1', null, '重庆市 市辖区 江津区 (重庆市江津区朱杨镇)', 'http://127.0.0.1:9000/local/userAvatar/1646008092912.jpg', null);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `user_id` int(5) NOT NULL COMMENT '用户id',
  `role_id` int(5) NOT NULL COMMENT '角色id',
  KEY `user_id` (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户角色表';

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '1');
INSERT INTO `user_role` VALUES ('3', '4');
INSERT INTO `user_role` VALUES ('5', '5');
INSERT INTO `user_role` VALUES ('4', '2');
INSERT INTO `user_role` VALUES ('2', '3');

-- ----------------------------
-- Table structure for vip
-- ----------------------------
DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `vip_id` int(6) NOT NULL AUTO_INCREMENT COMMENT 'vipid',
  `account_number` varchar(30) NOT NULL COMMENT '用户帐号',
  `creat_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '充值时间',
  `overdue_time` timestamp NULL DEFAULT NULL COMMENT '过期时间',
  PRIMARY KEY (`vip_id`),
  KEY `account_number` (`account_number`),
  CONSTRAINT `vip_ibfk_1` FOREIGN KEY (`account_number`) REFERENCES `user` (`account_number`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='vip表';

-- ----------------------------
-- Records of vip
-- ----------------------------
INSERT INTO `vip` VALUES ('1', '13330239457@163.com', '2021-01-01 11:55:05', '2022-01-01 11:55:05');
INSERT INTO `vip` VALUES ('2', '3192863656@qq.com', '2021-01-03 21:48:07', '2022-01-03 21:48:08');
INSERT INTO `vip` VALUES ('3', '2982359710@qq.com', '2022-12-27 10:50:11', '2023-12-27 10:50:12');
INSERT INTO `vip` VALUES ('4', '18723025086@139.com', '2023-02-28 16:01:14', '2024-02-28 16:01:14');

-- ----------------------------
-- Event structure for product_event
-- ----------------------------
DROP EVENT IF EXISTS `product_event`;
DELIMITER ;;
CREATE DEFINER=`root`@`%` EVENT `product_event` ON SCHEDULE EVERY 1 DAY STARTS '2021-01-07 02:00:00' ON COMPLETION PRESERVE ENABLE DO BEGIN
		UPDATE product SET is_new = 0 WHERE sale_time<(CURRENT_TIMESTAMP() + INTERVAL -15 DAY);#修改15天前的新品数据
		DELETE FROM qiu.`order` WHERE order_time < DATE_SUB(CURDATE(),INTERVAL 1 DAY) AND order_state='待付款';	#清除24小时内未付款的订单信息
		DELETE FROM vip WHERE overdue_time <= CURDATE(); #清除 VIP表 会员过期的信息
	END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `order_delete`;
DELIMITER ;;
CREATE TRIGGER `order_delete` BEFORE DELETE ON `order` FOR EACH ROW BEGIN
	UPDATE product SET product_stock = product_stock + old.pay_amount WHERE product_no = old.product_no;
    END
;;
DELIMITER ;
DROP TRIGGER IF EXISTS `user_insert`;
DELIMITER ;;
CREATE TRIGGER `user_insert` AFTER INSERT ON `user` FOR EACH ROW BEGIN
	DECLARE roleId INT;
	SET roleId = (SELECT role_id FROM role WHERE role_name ='顾客');
		INSERT user_role VALUES(new.user_id,roleId);
    END
;;
DELIMITER ;
