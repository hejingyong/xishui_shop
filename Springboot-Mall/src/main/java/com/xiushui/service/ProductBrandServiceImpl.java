package com.xiushui.service;
import com.xiushui.dao.ProductBrandDao;
import com.xiushui.entity.ProductBrand;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:13
 * @description 商品品牌 service 实现类
 */
@Service
@Transactional
public class ProductBrandServiceImpl implements ProductBrandService {
    final ProductBrandDao productBrandDao;
    public ProductBrandServiceImpl(ProductBrandDao productBrandDao) {
        this.productBrandDao = productBrandDao;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public ProductBrand selectById(Integer brandId) {
        return productBrandDao.selectById(brandId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<ProductBrand> selectAll() {
        return productBrandDao.selectAll();
    }


    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<String> selectAllName() {
        return productBrandDao.selectAllName();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Boolean existsWithBrandName(Integer brandId, String brandName) {
        return productBrandDao.existsWithBrandName(brandId,brandName);
    }

    @Override
    public Boolean insertData(ProductBrand productBrand) {
        return productBrandDao.insertData(productBrand);
    }

    @Override
    public Boolean updateById(ProductBrand productBrand) {
        return productBrandDao.updateById(productBrand);
    }

    @Override
    public Boolean deleteById(Integer brandId) {
        return productBrandDao.deleteById(brandId);
    }

    @Override
    public Boolean deleteByName(String brandName) {
        return productBrandDao.deleteByName(brandName);
    }
}
