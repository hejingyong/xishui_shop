package com.xiushui.dao;

import com.xiushui.entity.Logistics;

/**
 *  * @author xishui
 *  * @email 3192863656@qq.com
 *  * @date 2022/11/26 17:44
 * @description 物流表 dao层
 */
public interface LogisticsDao extends BaseDao<Logistics> {
    //根据订单编号查询
    Logistics selectOrderNo(String orderNo);
}
