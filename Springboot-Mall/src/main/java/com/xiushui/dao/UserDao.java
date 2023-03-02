package com.xiushui.dao;

import com.xiushui.entity.User;
import org.springframework.stereotype.Component;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 13:31
 * @description user 的 dao层接口
 */
@Component
public interface UserDao extends BaseDao<User> {
    //判断手机号telephone是否存在
    Boolean existsWithPrimaryPhone(String telephone);
    //查询用户状态
    Boolean selectUserState(String accountNumber);
    //通过手机号查询用户
    User selectByPhone(String telephone);
}
