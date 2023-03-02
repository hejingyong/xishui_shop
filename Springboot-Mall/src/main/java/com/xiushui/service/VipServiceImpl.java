package com.xiushui.service;

import com.xiushui.dao.VipDao;
import com.xiushui.entity.Vip;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 16:51
 * @description 描述
 */
@Service
@Transactional
public class VipServiceImpl implements VipService {
    private final VipDao vipDao;
    VipServiceImpl(VipDao vipDao){
        this.vipDao = vipDao;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Vip selectById(Integer vipId) {
        return vipDao.selectById(vipId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Vip> selectAll() {
        return vipDao.selectAll();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Boolean existsVip(String accountNumber) {
        return vipDao.existsVip(accountNumber);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Vip selectByKey(String accountNumber) {
        return vipDao.selectByKey(accountNumber);
    }

    @Override
    public Boolean insertData(Vip vip) {
        return vipDao.insertData(vip);
    }

    @Override
    public Boolean updateById(Vip vip) {
        return vipDao.updateById(vip);
    }

    @Override
    public Boolean deleteById(Integer vipId) {
        return vipDao.deleteById(vipId);
    }
}
