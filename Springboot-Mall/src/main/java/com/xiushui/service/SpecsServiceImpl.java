package com.xiushui.service;

import com.xiushui.dao.SpecsDao;
import com.xiushui.entity.Specs;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/28 15:25
 * @description 商品规格 service 实现类
 */
@Service
@Transactional
public class SpecsServiceImpl implements SpecsService {
    final SpecsDao specsDao;
    public SpecsServiceImpl(SpecsDao specsDao) {
        this.specsDao = specsDao;
    }


    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Specs selectById(Integer specsId) {
        return specsDao.selectById(specsId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Specs> selectAll() {
        return specsDao.selectAll();
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<Specs> selectAllByType(String productType) {
        return specsDao.selectAllByType(productType);
    }

    @Override
    public Boolean insertData(Specs specs) {
        return specsDao.insertData(specs);
    }

    @Override
    public Boolean updateById(Specs specs) {
        return specsDao.updateById(specs);
    }

    @Override
    public Boolean deleteById(Integer specsId) {
        return specsDao.deleteById(specsId);
    }

    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public Boolean existsWithSpecsName(Integer specsId, String specsName, String productType) {
        return specsDao.existsWithSpecsName(specsId,specsName,productType);
    }
}
