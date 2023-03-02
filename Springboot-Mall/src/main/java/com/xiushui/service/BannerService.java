package com.xiushui.service;

import com.xiushui.entity.Banner;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:10
 * @description 商品轮播图 service 接口
 */
public interface BannerService {
    //通过ID查询
    Banner selectById(Integer bannerId);
    //查询所有
    List<Banner> selectAll();

    //插入一条数据
    Boolean insertData(Banner banner);
    //通过ID更新
    Boolean updateById(Banner banner);
    //通过ID删除
    Boolean deleteById(Integer bannerId);
}
