package com.xiushui.dao;
import com.xiushui.entity.ShoppingCart;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description 购物车表
 */
public interface ShoppingCartDao extends BaseDao<ShoppingCart> {
    //查询所有
    List<Map<String,Object>> selectAll(String accountNumber);
    //通过用户帐号删除
    Boolean deleteByUser(String accountNumber);
}
