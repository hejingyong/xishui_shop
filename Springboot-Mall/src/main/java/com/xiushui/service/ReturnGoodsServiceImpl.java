package com.xiushui.service;

import com.xiushui.dao.ReturnGoodsDao;
import com.xiushui.entity.ReturnGoods;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Map;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:22
 * @description 商品退货 service层 实体类
 */
@Service
@Transactional
public class ReturnGoodsServiceImpl implements ReturnGoodsService{
    private final ReturnGoodsDao returnGoodsDao;
    public ReturnGoodsServiceImpl(ReturnGoodsDao returnGoodsDao) {
        this.returnGoodsDao = returnGoodsDao;
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public ReturnGoods selectById(Integer returnId) {
        return returnGoodsDao.selectById(returnId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<ReturnGoods> selectAll() {
        return returnGoodsDao.selectAll();
    }

    @Override
    public Integer selectCount() {
        return returnGoodsDao.selectCount();
    }

    @Override
    public Boolean insertData(ReturnGoods returnGoods) {
        return returnGoodsDao.insertData(returnGoods);
    }

    @Override
    public Boolean updateById(ReturnGoods returnGoods) {
        return returnGoodsDao.updateById(returnGoods);
    }

    @Override
    public Boolean deleteById(Integer returnId) {
        return returnGoodsDao.deleteById(returnId);
    }

    @Override
    public List<ReturnGoods> selectAllByUser(String userNumber) {
        return returnGoodsDao.selectAllByUser(userNumber);
    }

    @Override
    public List<Map<String, Object>> selectAllOrder(String userAccount) {
        return returnGoodsDao.selectAllOrder(userAccount);
    }

    @Override
    public Map<String, Object> returnGoodsOverview() {
        return returnGoodsDao.returnGoodsOverview();
    }

    @Override
    public Map<String, Object> selectOrderNo(String orderNo) {
        return returnGoodsDao.selectOrderNo(orderNo);
    }
}
