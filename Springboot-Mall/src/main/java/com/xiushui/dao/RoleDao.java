package com.xiushui.dao;
import com.xiushui.entity.Role;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description role 的 dao层接口
 */
public interface RoleDao extends BaseDao<Role> {
    //查询所有可用的
    List<Role> selectAllUsable();
    //判断角色名称是否存在
    Boolean existsRoleName(@Param("roleId") Integer roleId,@Param("roleName") String roleName);
}
