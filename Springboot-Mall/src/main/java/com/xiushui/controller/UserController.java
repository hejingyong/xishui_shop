package com.xiushui.controller;
import com.xiushui.entity.User;
import com.xiushui.entity.UserRole;
import com.xiushui.entity.Vip;
import com.xiushui.service.RoleService;
import com.xiushui.service.UserRoleService;
import com.xiushui.service.UserService;
import com.xiushui.service.VipService;
import com.xiushui.util.general.CommonResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 18:11
 * @description 用户相关业务
 */

@RestController
@CrossOrigin
public class UserController {
    final RoleService roleService;
    final UserService userService;
    final UserRoleService userRoleService;
    final VipService vipService;
    public UserController(UserService userService, RoleService roleService,VipService vipService, UserRoleService userRoleService) {
        this.userService = userService;
        this.roleService = roleService;
        this.userRoleService = userRoleService;
        this.vipService = vipService;
    }

    /*根据id查询用户*/
    @RequestMapping(value = "/user/findById")
    private CommonResult findById(Integer id) {
        User user = userService.selectById(id);
        if(user!=null){
            return CommonResult.success("查询成功",user);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*根据帐号查询用户*/
    @RequestMapping(value = "/user/findByKey")
    private CommonResult findByKey(String key) {
        User user = userService.selectByKey(key);
        if(user!=null){
            return CommonResult.success("查询成功",user);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询所有用户*/
    @RequestMapping(value = "/user/findAll")
    private CommonResult findAll() {
        List<User> users = userService.selectAll();
        if(users!=null){
            return CommonResult.success("查询成功",users);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*判断某个用户是否还存在*/
    @RequestMapping(value = "/user/existKey")
    private CommonResult existKey(String key) {
        Boolean isExist = userService.existsWithPrimaryKey(key);
        if(isExist!=null){
            return CommonResult.success("查询成功",isExist);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询用户状态*/
    @RequestMapping(value = "/user/userState")
    private CommonResult userState(String accountNumber) {
        Boolean state = userService.selectUserState(accountNumber);
        if(state!=null){
            return CommonResult.success("查询成功",state);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询用户记录的总条数*/
    @RequestMapping(value = "/user/count")
    private CommonResult findCount() {
        Integer count = userService.selectCount();
        if(count!=null){
            if(count!=0){
                return CommonResult.success("查询成功",count);
            }else{
                return CommonResult.error("查询失败");
            }
        }else{
            return CommonResult.error("查询失败");
        }

    }

    //通过用户帐号去查询用户的id
    @RequestMapping(value = "/user/findIdByKey")
    private CommonResult findIdByKey(String key) {
        Integer id = userService.selectIdByKey(key);
        if(id!=null){
            if(id!=0){
                return CommonResult.success("查询成功","id: "+id);
            }else{
                return CommonResult.error("未查询到");
            }
        }else{
            return CommonResult.error("查询失败");
        }
    }

    //删除用户
    @RequestMapping(value = "/user/delete")
    private CommonResult delete(Integer userId) {
        if(userService.deleteById(userId)){
            return CommonResult.success("删除成功",userId);
        }else{
            return CommonResult.error("删除失败");
        }
    }

    @RequestMapping(value = "/user/author")
    private CommonResult author(Integer userId,@RequestParam List<Integer> roleId) {
        System.out.println(userId);
        System.out.println(roleId);
        if(userId!=null && roleId!=null && roleId.size()!=0){
            if(userRoleService.deleteById(userId)){
                UserRole userRole = new UserRole();
                userRole.setUserId(userId);
                for (Integer id : roleId) {
                    userRole.setRoleId(id);
                    userRoleService.insertData(userRole);
                }
            }
            return CommonResult.success("授权成功");
        }else{
            return CommonResult.error("角色授权数据不完整！");
        }
    }

    /*查询所有VIP用户*/
    @RequestMapping(value = "/vip/findAllVip")
    private CommonResult findAllVip() {
        List<Vip> vips = vipService.selectAll();
        if(vips!=null){
            return CommonResult.success("查询成功",vips);
        }else{
            return CommonResult.error("查询失败");
        }
    }
    /*查询VIP用户信息根据id*/
    @RequestMapping(value = "/vip/findVipById")
    private CommonResult findVipById(Integer vipId) {
        Vip vip = vipService.selectById(vipId);
        if(vip!=null){
            return CommonResult.success("查询成功",vip);
        }else{
            return CommonResult.error("查询失败");
        }
    }
    /*查询VIP用户信息根据id*/
    @RequestMapping(value = "/vip/findVipByKey")
    private CommonResult findVipByKey(String accountNumber) {
        Vip vip = vipService.selectByKey(accountNumber);
        if(vip!=null){
            return CommonResult.success("查询成功",vip);
        }else{
            return CommonResult.error("查询失败");
        }
    }
    /*判断用户信息是否存在*/
    @RequestMapping(value = "/vip/existsVip")
    private CommonResult existsVip(String accountNumber) {
        Boolean isExist = vipService.existsVip(accountNumber);
        if(isExist!=null){
            return CommonResult.success("查询成功",isExist);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    //创建vip信息
    @RequestMapping(value = "/vip/addVip")
    private CommonResult addVip(Vip vip) {
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);//设置起时间
        cal.add(Calendar.YEAR, 1);//增加一年
        vip.setOverdueTime(cal.getTime());
        if(vipService.insertData(vip)){
            return CommonResult.success("vip信息插入成功",vip);
        }else{
            return CommonResult.error("vip信息插入失败");
        }
    }

    //更新vip信息
    @RequestMapping(value = "/vip/updateVip")
    private CommonResult updateVip(Vip vip) {
        if(vipService.updateById(vip)){
            return CommonResult.success("vip信息更新成功",vip);
        }else{
            return CommonResult.error("vip信息更新失败");
        }
    }

    //删除vip信息
    @RequestMapping(value = "/vip/deleteVip")
    private CommonResult deleteVip(Integer vipId) {
        if(vipService.deleteById(vipId)){
            return CommonResult.success("删除成功",vipId);
        }else{
            return CommonResult.error("删除失败");
        }
    }
}
