package com.xiushui.service;

import com.xiushui.dao.UserDao;
import com.xiushui.entity.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 16:51
 * @description user 的 service层实现类
 */

@Service
@Transactional
public class UserServiceImpl implements UserService {
    final UserDao userDao;
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public User selectById(Integer id) {
        return userDao.selectById(id);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public User selectByKey(String key) {
        return userDao.selectByKey(key);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public User selectByPhone(String telephone) {
        return userDao.selectByPhone(telephone);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<User> selectAll() {
        return userDao.selectAll();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer selectCount() {
        return userDao.selectCount();
    }

    @Override
    public Boolean selectUserState(String accountNumber) {
        return userDao.selectUserState(accountNumber);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Boolean existsWithPrimaryKey(String existUser) {
        return userDao.existsWithPrimaryKey(existUser);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Boolean existsWithPrimaryPhone(String telephone) {
        return userDao.existsWithPrimaryPhone(telephone);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer selectMaxId() {
        return userDao.selectMaxId();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Integer selectIdByKey(String key) {
        return userDao.selectIdByKey(key);
    }

    @Override
    public Boolean insertData(User user) {
        return userDao.insertData(user);
    }

    @Override
    public Boolean updateById(User user) {
        return userDao.updateById(user);
    }

    @Override
    public Boolean deleteById(Integer id) {
        return userDao.deleteById(id);
    }
}
