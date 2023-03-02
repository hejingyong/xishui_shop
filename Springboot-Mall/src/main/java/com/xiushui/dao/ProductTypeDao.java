package com.xiushui.dao;

import com.xiushui.entity.ProductType;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author xishui
 * @email 3182863656@qq.com
 * @date 2022/11/18 15:33
 * @description 描述
 */
public interface ProductTypeDao extends BaseDao<ProductType> {
    /*查询所有分类名*/
    List<String> selectAllName();
    //通过分类名删除
    Boolean deleteByName(String typeName);
    //判断商品类别是否存在
    Boolean existsWithTypeName(@Param("typeId") Integer typeId,@Param("typeName") String typeName);
}
