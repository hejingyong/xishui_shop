package com.xiushui.controller;

import com.xiushui.entity.UserRole;
import com.xiushui.service.UserRoleService;
import com.xiushui.util.general.CommonResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email  3192863656@qq.com
 * @date 2022/11/31 15:52
 * @description 用户授权类
 */

@RestController
@CrossOrigin
public class UserRoleController {

    final UserRoleService userRoleService;
    public UserRoleController(UserRoleService userRoleService) {
        this.userRoleService = userRoleService;
    }
    /*根据id查询用户*/
    @RequestMapping(value = "/userRole/findById")
    private CommonResult findById(Integer userId) {
        List<UserRole> userRoles = userRoleService.selectByUserId(userId);
        if(userRoles!=null){
            return CommonResult.success("查询成功",userRoles);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    @RequestMapping(value = "/userRole/findRoleById")
    private CommonResult findRoleById(Integer userId) {
        List<Map<String, Object>> maps = userRoleService.selectRoleByUserId(userId);
        if(maps!=null){
            return CommonResult.success("查询成功",maps);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询所有用户*/
    @RequestMapping(value = "/userRole/findAll")
    private CommonResult findAll() {
        List<UserRole> userRoles = userRoleService.selectAll();
        if(userRoles!=null){
            return CommonResult.success("查询成功",userRoles);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询所有用户*/
    @RequestMapping(value = "/userRole/existsRole")
    private CommonResult existsRole(Integer roleId) {
        Boolean isExist = userRoleService.existsRole(roleId);
        if(isExist!=null){
            return CommonResult.success("查询成功",isExist);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    @RequestMapping(value = "/userRole/add")
    private CommonResult add(UserRole userRole) {
        if(userRole!=null){
            if(userRoleService.insertData(userRole)){
                return CommonResult.success("添加成功",userRole);
            }else{
                return CommonResult.error("添加失败");
            }
        }
        return CommonResult.error("用户数据不存在");
    }

    @RequestMapping(value = "/userRole/delete")
    private CommonResult delete(Integer userId) {
        Boolean bool = userRoleService.deleteById(userId);
        System.out.println(bool);
        if(bool){
            return CommonResult.success("删除成功",userId);
        }else{
            return CommonResult.error("删除失败");
        }
    }


}
