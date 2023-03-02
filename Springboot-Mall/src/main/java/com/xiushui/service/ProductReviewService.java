package com.xiushui.service;

import com.xiushui.entity.ProductReview;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:13
 * @description 商品评价 表
 */
public interface ProductReviewService {
    //通过ID查询
    ProductReview selectById(Integer reviewId);
    //查询所有
    List<Map<String,Object>> selectAll(String productNo);

    //插入一条数据
    Boolean insertData(ProductReview productReview);
    //通过ID更新
    Boolean updateById(ProductReview productReview);
    //通过ID删除
    Boolean deleteById(Integer reviewId);
}
