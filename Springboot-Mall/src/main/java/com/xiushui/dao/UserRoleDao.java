package com.xiushui.dao;
import com.xiushui.entity.UserRole;
import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description userRole 的 dao层接口
 */
public interface UserRoleDao extends BaseDao<UserRole> {
    List<UserRole> selectByUserId(Integer userId);
    //通过ID删除
    Boolean deleteById(Integer userId);
    //通过用户id查询角色信息
    List<Map<String,Object>>selectRoleByUserId(Integer userId);
    //判断角色是否存在
    Boolean existsRole(Integer roleId);
}
