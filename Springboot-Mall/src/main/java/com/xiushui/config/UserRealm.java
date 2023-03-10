package com.xiushui.config;

import com.xiushui.entity.Role;
import com.xiushui.entity.User;
import com.xiushui.entity.UserRole;
import com.xiushui.service.RoleService;
import com.xiushui.service.UserRoleService;
import com.xiushui.service.UserService;
import com.xiushui.util.general.MyByteSource;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Async;
import java.util.List;
import java.util.Set;

public class UserRealm extends AuthorizingRealm {
    @Autowired
    UserService userService;
    @Autowired
    RoleService roleService;
    @Autowired
    UserRoleService userRoleService;
    @Autowired
    RedisTemplate<String,String> redisTemplate;

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("执行了-> 授权 doGetAuthorizationInfo方法");
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        User user = (User)principalCollection.getPrimaryPrincipal();//拿到user对象
        List<UserRole> userRoles = userRoleService.selectByUserId(user.getUserId());
        UserRole userRole;
        for (UserRole value : userRoles) {
            userRole = value;//得到角色列表
            if (userRole != null) {
                Role role = roleService.selectById(userRole.getRoleId()); //获得角色
                authorizationInfo.addRole(role.getRoleName()); //添加 角色
            }
        }
        return authorizationInfo;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        System.out.println("执行了-> 认证 doGetAuthenticationInfo方法");
        UsernamePasswordToken userToken = (UsernamePasswordToken) token;
        User user;
        if(userToken.getUsername().contains("@")){
            //包含@符号，代表用户通过邮箱帐号登录
            user = userService.selectByKey(userToken.getUsername());
        }else{
            //不包含@符号，代表用户通过手机号登录
            user = userService.selectByPhone(userToken.getUsername());
        }

        if(user==null){
            return null; //抛出异常 UnknownAccountException
        }

        if (!user.getUserState()) {
            throw new LockedAccountException();  // 账号被锁定
        }

        //密码认证：shiro 做
        return new SimpleAuthenticationInfo(user,user.getPassword(),MyByteSource.Util.bytes(user.getAccountNumber()),getName());
    }

    /**
     * 清除当前用户的权限认证缓存
     * @param principals 权限信息 身份集合
     */
    @Override
    @Async
    public void clearCache(PrincipalCollection principals) {
        super.clearCache(principals);
    }
    @Async
    public void clearRedis(User user,String session){
        redisTemplate.delete("shiro:session:"+session);
        redisTemplate.delete("shiro:cache:"+user.getAccountNumber());
        redisTemplate.delete("shiro:cache:"+user.getTelephone());
        Set<String> keys = redisTemplate.keys("shiro:cache:User{id="+user.getUserId() + "*");
        if(keys!=null){
            redisTemplate.delete(keys);
        }
    }
}
