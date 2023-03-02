package com.xiushui.service;

import com.xiushui.entity.UserRole;
import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 16:50
 * @description service接口，用户的权限
 */
public interface UserRoleService {
    //通过id查询
    List<UserRole> selectByUserId(Integer userId);
    //查询所有
    List<UserRole> selectAll();
    //插入一条数据
    Boolean insertData(UserRole userRole);
    //通过ID删除
    Boolean deleteById(Integer userId);
    //通过用户id查询角色信息
    List<Map<String,Object>>selectRoleByUserId(Integer userId);
    //判断角色是否存在
    Boolean existsRole(Integer roleId);
}
