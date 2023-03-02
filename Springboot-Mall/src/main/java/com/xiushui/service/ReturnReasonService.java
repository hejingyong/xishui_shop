package com.xiushui.service;

import com.xiushui.entity.ReturnReason;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:22
 * @description 退货原因 service层
 */
public interface ReturnReasonService {
    //通过ID查询
    ReturnReason selectById(Integer reasonId);
    //查询所有
    List<ReturnReason> selectAll();
    /*查询所有退货原因*/
    List<String> selectAllName();
    //判断退货原因名称是否存在
    Boolean existsWithReasonName(Integer reasonId,String reasonName);
    //插入一条数据
    Boolean insertData(ReturnReason returnReason);

    //通过ID更新
    Boolean updateById(ReturnReason returnReason);

    //通过ID删除
    Boolean deleteById(Integer reasonId);
}
