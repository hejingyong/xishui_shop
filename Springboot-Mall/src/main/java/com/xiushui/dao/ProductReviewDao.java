package com.xiushui.dao;

import com.xiushui.entity.ProductReview;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/1 10:52
 * @description 商品评价
 */
public interface ProductReviewDao extends BaseDao<ProductReview> {
    //查询所有
    List<Map<String,Object>> selectAll(String productNo);

}
