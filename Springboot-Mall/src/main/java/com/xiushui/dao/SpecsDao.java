package com.xiushui.dao;
import com.xiushui.entity.Specs;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description 商品规格表的数据库操作接口
 */
public interface SpecsDao extends BaseDao<Specs>{
    //根据类型查询所有
    List<Specs> selectAllByType(String productType);
    //判断商品规格是否存在
    Boolean existsWithSpecsName(@Param("specsId") Integer specsId,@Param("specsName") String specsName,@Param("productType") String productType);
}
