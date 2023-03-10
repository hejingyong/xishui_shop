package com.xiushui.service;

import com.xiushui.entity.ProductBrand;
import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:13
 * @description 商品品牌 service 接口
 */
public interface ProductBrandService {
    //通过ID查询
    ProductBrand selectById(Integer brandId);
    //查询所有
    List<ProductBrand> selectAll();
    //查询所有分类名
    List<String> selectAllName();
    //判断商品类别是否存在
    Boolean existsWithBrandName(Integer brandId,String brandName);
    //插入一条数据
    Boolean insertData(ProductBrand productBrand);
    //通过ID更新
    Boolean updateById(ProductBrand productBrand);
    //通过ID删除
    Boolean deleteById(Integer brandId);
    //通过分类名删除
    Boolean deleteByName(String brandName);
}
