package com.xiushui.dao;

import com.xiushui.entity.Supplier;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description 供应商 dao层
 */
public interface SupplierDao extends BaseDao<Supplier>{
    /*查询所有供应商名称*/
    List<String> selectAllName();
    //查询所有启用的供应商
    List<Supplier> selectAllUsable();
    //判断供应商是否存在
    Boolean existsWithSupplierName(@Param("supplierId") Integer supplierId,@Param("supplierName") String supplierName);
}
