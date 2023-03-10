package com.xiushui.dao;


import com.xiushui.entity.ReturnGoods;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/25 22:11
 * @description 商品退货表 dao层
 */
public interface ReturnGoodsDao extends BaseDao<ReturnGoods> {
    //通过买家帐号查询数据
    List<ReturnGoods> selectAllByUser(String userNumber);
    /*查询全部订单基本信息*/
    List<Map<String,Object>> selectAllOrder(String userAccount);
    //查询未退款的订单
    Map<String,Object> returnGoodsOverview();
    //根据订单编号查询
    Map<String,Object> selectOrderNo(String orderNo);
}
