package com.xiushui.service;

import com.xiushui.dao.ProductReviewDao;
import com.xiushui.entity.ProductReview;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:13
 * @description 商品评价 service 实现类
 */

@Service
@Transactional
public class ProductReviewServiceImpl implements ProductReviewService {
    private final ProductReviewDao productReviewDao;
    public ProductReviewServiceImpl(ProductReviewDao productReviewDao) {
        this.productReviewDao = productReviewDao;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public ProductReview selectById(Integer reviewId) {
        return productReviewDao.selectById(reviewId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Map<String, Object>> selectAll(String productNo) {
        return productReviewDao.selectAll(productNo);
    }

    @Override
    public Boolean insertData(ProductReview productReview) {
        return productReviewDao.insertData(productReview);
    }

    @Override
    public Boolean updateById(ProductReview productReview) {
        return productReviewDao.updateById(productReview);
    }

    @Override
    public Boolean deleteById(Integer reviewId) {
        return productReviewDao.deleteById(reviewId);
    }




}
