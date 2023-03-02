package com.xiushui.dao;

import com.xiushui.entity.ReturnReason;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/24 20:57
 * @description 退货原因 dao层
 */
public interface ReturnReasonDao extends BaseDao<ReturnReason>{
    /*查询所有退货原因*/
    List<String> selectAllName();
    //判断退货原因名称是否存在
    Boolean existsWithReasonName(@Param("reasonId") Integer reasonId,@Param("reasonName") String reasonName);
}
