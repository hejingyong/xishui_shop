package com.xiushui.controller;

import com.xiushui.entity.Order;
import com.xiushui.entity.ProductReview;
import com.xiushui.service.OrderService;
import com.xiushui.service.ProductReviewService;
import com.xiushui.util.general.CommonResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/4 11:12
 * @description 商品评价 业务类
 */
@RestController
@CrossOrigin
public class ProductReviewController {
    final ProductReviewService ProductReviewService;
    final OrderService orderService;
    public ProductReviewController(ProductReviewService ProductReviewService,OrderService orderService){
        this.ProductReviewService = ProductReviewService;
        this.orderService = orderService;
    }


    /*商品类别*/
    @RequestMapping(value = "/productReview/add")
    private CommonResult addProductReview(ProductReview productReview) {
        if(ProductReviewService.insertData(productReview)){
            Integer orderId = orderService.selectIdByKey(productReview.getOrderNo());
            Order order = new Order();
            order.setOrderId(orderId);
            order.setOrderState("已评价");
            orderService.updateById(order);
            return CommonResult.success("商品评论添加成功",productReview);
        }else{
            return CommonResult.error("商品评论添加失败");
        }
    }

    @RequestMapping(value = "/productReview/update")
    private CommonResult updateProductReview(ProductReview productReview) {
        if(ProductReviewService.updateById(productReview)){
            return CommonResult.success("商品评论修改成功",productReview);
        }else{
            return CommonResult.error("商品评论修改失败");
        }
    }

    @RequestMapping(value = "/productReview/deleteById")
    private CommonResult deleteProductReview(Integer reviewId) {
        if(ProductReviewService.deleteById(reviewId)){
            return CommonResult.success("商品评论删除成功","reviewId: "+reviewId);
        }else{
            return CommonResult.error("商品评论删除失败");
        }
    }


    @RequestMapping(value = "/productReview/findAll")
    private CommonResult findAllProductReview(String productNo) {
        List<Map<String, Object>> productReviewInfo = ProductReviewService.selectAll(productNo);
        if(productReviewInfo!=null){
            return CommonResult.success("商品评论查询成功",productReviewInfo);
        }else{
            return CommonResult.error("商品评论查询失败");
        }
    }

    @RequestMapping(value = "/productReview/findById")
    private CommonResult findById(Integer reviewId) {
        ProductReview productReview = ProductReviewService.selectById(reviewId);
        if(productReview!=null){
            return CommonResult.success("商品评论查询成功",productReview);
        }else{
            return CommonResult.error("商品评论查询失败");
        }
    }

}
