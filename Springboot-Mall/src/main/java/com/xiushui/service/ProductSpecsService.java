package com.xiushui.service;

import com.xiushui.entity.ProductSpecs;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:16
 * @description 商品规格 service层
 */
public interface ProductSpecsService {
    //查询所有
    List<ProductSpecs> selectAll();

    //根据商品id查询所有商品规格名称
    List<String> selectAllByProId(Integer productId);

    //插入一条数据
    Boolean insertData(ProductSpecs productSpecs);

    //通过ID更新
    Boolean updateById(ProductSpecs productSpecs);

    //通过ID删除
    Boolean deleteById(ProductSpecs productSpecs);

    //批量添加
    Boolean insertBatch(List<ProductSpecs> productSpecsList);
}
