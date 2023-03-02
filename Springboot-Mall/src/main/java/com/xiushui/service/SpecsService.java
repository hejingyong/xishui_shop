package com.xiushui.service;

import com.xiushui.entity.Specs;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:25
 * @description 商品规格 service 接口
 */
public interface SpecsService {
    //通过ID查询
    Specs selectById(Integer specsId);
    //查询所有
    List<Specs> selectAll();
    //根据类型查询所有
    List<Specs> selectAllByType(String productType);
    //插入一条数据
    Boolean insertData(Specs specs);
    //通过ID更新
    Boolean updateById(Specs specs);
    //通过ID删除
    Boolean deleteById(Integer specsId);
    //判断商品规格是否存在
    Boolean existsWithSpecsName(Integer specsId,String specsName,String productType);
}
