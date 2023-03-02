package com.xiushui.service;

import com.xiushui.entity.Purchase;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:22
 * @description 采购表 service层接口
 */
public interface PurchaseService {
    //通过ID查询
    Purchase selectById(Integer purchaseId);
    //查询所有供应商
    List<Purchase> selectAll();
    //判断供应商是否存在
    Boolean existsWithPrimaryKey(String purchaseNo);
    //插入一条数据
    Boolean insertData(Purchase purchase);

    //通过ID更新
    Boolean updateById(Purchase purchase);

    //通过ID删除
    Boolean deleteById(Integer purchaseId);
}
