package com.xiushui.service;

import com.xiushui.entity.ProductType;
import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:16
 * @description 商品分类 service 接口
 */
public interface ProductTypeService {
    //通过ID查询
    ProductType selectById(Integer typeId);
    //查询所有
    List<ProductType> selectAll();
    //判断商品类别是否存在
    Boolean existsWithTypeName(Integer typeId,String typeName);
    //查询所有分类名
    List<String> selectAllName();

    //插入一条数据
    Boolean insertData(ProductType productType);
    //通过ID更新
    Boolean updateById(ProductType productType);
    //通过ID删除
    Boolean deleteById(Integer typeId);
    //通过分类名删除
    Boolean deleteByName(String typeName);
}
