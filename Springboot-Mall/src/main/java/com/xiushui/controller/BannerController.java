package com.xiushui.controller;

import com.xiushui.entity.Banner;
import com.xiushui.service.BannerService;
import com.xiushui.util.general.CommonResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/12/31 16:23
 * @description 描述
 */
@RestController
@CrossOrigin
public class BannerController {
    final BannerService bannerService;
    public BannerController(BannerService bannerService){
        this.bannerService = bannerService;
    }

    /*商品类别*/
    @RequestMapping(value = "/banner/add")
    private CommonResult addBanner(Banner banner) {
        if(bannerService.insertData(banner)){
            return CommonResult.success("商品轮播图添加成功",banner);
        }else{
            return CommonResult.error("商品轮播图添加失败");
        }
    }

    @RequestMapping(value = "/banner/update")
    private CommonResult updateType(Banner banner) {
        if(bannerService.updateById(banner)){
            return CommonResult.success("商品轮播图修改成功",banner);
        }else{
            return CommonResult.error("商品轮播图修改失败");
        }
    }

    @RequestMapping(value = "/banner/deleteById")
    private CommonResult deleteTypeById(Integer bannerId) {
        if(bannerService.deleteById(bannerId)){
            return CommonResult.success("商品轮播图删除成功","bannerId: "+bannerId);
        }else{
            return CommonResult.error("商品轮播图删除失败");
        }
    }


    @RequestMapping(value = "/banner/findAll")
    private CommonResult findAllType() {
        List<Banner> banners = bannerService.selectAll();
        if(banners!=null){
            return CommonResult.success("商品轮播图查询成功",banners);
        }else{
            return CommonResult.error("商品轮播图查询失败");
        }
    }

    @RequestMapping(value = "/banner/findById")
    private CommonResult findById(Integer bannerId) {
        Banner banner = bannerService.selectById(bannerId);
        if(banner!=null){
            return CommonResult.success("商品轮播图查询成功",banner);
        }else{
            return CommonResult.error("商品轮播图查询失败");
        }
    }

}
