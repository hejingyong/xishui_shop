package com.xiushui.service;

import com.xiushui.entity.Order;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:10
 * @description 订单表 service 层
 */
public interface OrderService {
    //通过ID查询
    Order selectById(Integer orderId);
    //查询所有
    List<Order> selectAll();
    /*查询订单基本信息*/
    List<Map<String,Object>> selectAllOrder(String userAccount);
    /*查询订单基本信息*/
    Map<String, Object> selectOrder(String orderNo);
    //查询记录个数
    Integer selectCount();
    //通过Key查询
    Order selectByKey(String orderNo);
    //通过Key查Id
    Integer selectIdByKey(String orderNo);
    //插入一条数据
    Boolean insertData(Order order);
    //通过ID更新
    Boolean updateById(Order order);
    //通过ID删除
    Boolean deleteById(Integer orderId);
    //查询今日订单数量、今日销售总额、昨日销售总额等信息
    Map<String,Object> orderOverview();
    //获取订单图表分析数据
    List<Map<String,Object>>selectChartDATE(String startTime,String endTime);
    //获取订单商品类别图表分析数据
    List<Map<String,Object>>selectProductTypeChart(String startTime,String endTime);
    //获取某个时间段，订单总数和销售总额
    Map<String,Object>selectCountAndAmount(String startTime,String endTime);
}
