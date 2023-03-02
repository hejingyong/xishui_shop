package com.xiushui.service;

import com.xiushui.entity.ShoppingCart;
import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:25
 * @description 购物车 service 接口
 */
public interface ShoppingCartService {
    //通过ID查询
    ShoppingCart selectById(Integer cartId);
    //查询所有
    List<Map<String,Object>> selectAll(String accountNumber);

    //插入一条数据
    Boolean insertData(ShoppingCart shoppingCart);
    //通过ID更新
    Boolean updateById(ShoppingCart shoppingCart);
    //通过ID删除
    Boolean deleteById(Integer cartId);
    //通过用户删除
    Boolean deleteByUser(String accountNumber);
}
