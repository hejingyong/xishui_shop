package com.xiushui.service;

import com.xiushui.entity.Supplier;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:25
 * @description 供应商 service 接口
 */
public interface SupplierService {
    //通过ID查询
    Supplier selectById(Integer supplierId);
    //查询所有供应商
    List<Supplier> selectAll();
    /*查询所有供应商名称*/
    List<String> selectAllName();
    //判断供应商是否存在
    Boolean existsWithSupplierName(Integer supplierId,String supplierName);
    //插入一条数据
    Boolean insertData(Supplier supplier);
    //查询所有启用的供应商
    List<Supplier> selectAllUsable();
    //通过ID更新
    Boolean updateById(Supplier supplier);
    //通过ID删除
    Boolean deleteById(Integer supplierId);
}
