package com.xiushui.dao;

import com.xiushui.entity.Vip;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description vip表 dao 层
 */
public interface VipDao extends BaseDao<Vip> {
    //判断主键是否存在
    Boolean existsVip(String accountNumber);
}
