package com.xiushui.service;

import com.xiushui.dao.LogisticsDao;
import com.xiushui.entity.Logistics;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:10
 * @description 物流表 service层实现类
 */
@Service
@Transactional
public class LogisticsServiceImpl implements LogisticsService {
    final LogisticsDao logisticsDao;
    LogisticsServiceImpl(LogisticsDao logisticsDao){
        this.logisticsDao = logisticsDao;
    }

    @Override
    public Logistics selectById(Integer logisticId) {
        return logisticsDao.selectById(logisticId);
    }

    @Override
    public List<Logistics> selectAll() {
        return logisticsDao.selectAll();
    }

    @Override
    public Logistics selectOrderNo(String orderNo) {
        return logisticsDao.selectOrderNo(orderNo);
    }

    @Override
    public Boolean insertData(Logistics logistics) {
        return logisticsDao.insertData(logistics);
    }

    @Override
    public Boolean deleteById(Integer logisticId) {
        return logisticsDao.deleteById(logisticId);
    }
}
