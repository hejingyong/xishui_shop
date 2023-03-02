package com.xiushui.service;

import com.xiushui.entity.ReturnGoods;
import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:22
 * @description 商品退货 service层接口
 */
public interface ReturnGoodsService {
    //通过ID查询
    ReturnGoods selectById(Integer returnId);
    //查询所有退货信息
    List<ReturnGoods> selectAll();
    //查询记录个数
    Integer selectCount();
    //插入一条数据
    Boolean insertData(ReturnGoods returnGoods);
    //通过ID更新
    Boolean updateById(ReturnGoods returnGoods);
    //通过ID删除
    Boolean deleteById(Integer returnId);
    //通过买家帐号查询数据
    List<ReturnGoods> selectAllByUser(String userNumber);
    /*查询全部订单基本信息*/
    List<Map<String,Object>> selectAllOrder(String userAccount);
    //查询未退款的订单
    Map<String,Object> returnGoodsOverview();
    //根据订单编号查询
    Map<String,Object> selectOrderNo(String orderNo);
}
