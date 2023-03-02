package com.xiushui.service;

import com.xiushui.entity.Logistics;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:10
 * @description 物流表 service层接口
 */
public interface LogisticsService {
    //通过ID查询
    Logistics selectById(Integer logisticId);
    //查询所有退货信息
    List<Logistics> selectAll();
    //根据订单编号查询
    Logistics selectOrderNo(String orderNo);
    //插入一条数据
    Boolean insertData(Logistics logistics);
    //通过ID删除
    Boolean deleteById(Integer logisticId);
}
