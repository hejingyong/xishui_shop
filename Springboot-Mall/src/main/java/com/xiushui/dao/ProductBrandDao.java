package com.xiushui.dao;
import com.xiushui.entity.ProductBrand;
import org.apache.ibatis.annotations.Param;
import java.util.List;
/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/12 16:51
 * @description 商品品牌  dao层
 */
public interface ProductBrandDao extends BaseDao<ProductBrand>{
    /*查询所有品牌名*/
    List<String> selectAllName();
    //通过品牌名删除
    Boolean deleteByName(@Param("typeName") String typeName);
    //判断商品类别是否存在
    Boolean existsWithBrandName(@Param("brandId")Integer brandId,@Param("brandName") String brandName);
}
