package com.xiushui.controller;

import com.xiushui.entity.ProductSpecs;
import com.xiushui.entity.Specs;
import com.xiushui.service.ProductSpecsService;
import com.xiushui.service.SpecsService;
import com.xiushui.util.general.CommonResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author xishui
 * @email 3192863656@qq.com
 * @date 2022/11/17 16:15
 * @description 商品规格、商品与商品规格的关联
 */

@RestController
@CrossOrigin
public class SpecsController {
    final SpecsService specsService;
    final ProductSpecsService productSpecsService;
    public SpecsController(SpecsService specsService,ProductSpecsService productSpecsService) {
        this.specsService = specsService;
        this.productSpecsService = productSpecsService;
    }
    /*根据id查询规格*/
    @RequestMapping(value = "/specs/findById")
    private CommonResult findById(Integer specsId) {
        Specs specs = specsService.selectById(specsId);
        if(specs!=null){
            return CommonResult.success("查询成功",specs);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    /*查询所有规格信息*/
    @RequestMapping(value = "/specs/findAll")
    private CommonResult findAllSpecs() {
        List<Specs> specs = specsService.selectAll();
        if(specs!=null){
            return CommonResult.success("查询成功",specs);
        }else{
            return CommonResult.error("查询失败");
        }
    }
    
    @RequestMapping(value = "/specs/existsSpecsName")
    private CommonResult existsSpecsName(Integer specsId, String specsName, String productType) {
        Boolean isExist = specsService.existsWithSpecsName(specsId,specsName,productType);
        if(isExist!=null){
            return CommonResult.success("查询成功",isExist);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    @RequestMapping(value = "/specs/findAllByType")
    private CommonResult findAllSpecsByType(String productType) {
        List<Specs> specs = specsService.selectAllByType(productType);
        if(specs!=null){
            return CommonResult.success("查询成功",specs);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    @RequestMapping(value = "/specs/add")
    private CommonResult addSpecs(Specs specs) {
        if(specs!=null){
            if(specsService.insertData(specs)){
                return CommonResult.success("添加成功",specs);
            }else{
                return CommonResult.error("添加失败");
            }
        }
        return CommonResult.error("数据不存在");
    }

    @RequestMapping(value = "/specs/update")
    private CommonResult updateSpecs(Specs specs) {
        if(specsService.updateById(specs)){
            return CommonResult.success("更新成功",specs);
        }else{
            return CommonResult.error("更新失败");
        }
    }

    @RequestMapping(value = "/specs/delete")
    private CommonResult deleteSpecs(Integer specsId) {
        if(specsService.deleteById(specsId)){
            return CommonResult.success("删除成功",specsId);
        }else{
            return CommonResult.error("删除失败");
        }
    }



    /*商品 与 规格 的关联表*/

    /*查询所有商品规格对应信息*/
    @RequestMapping(value = "/productSpecs/findAll")
    private CommonResult findAll() {
        List<ProductSpecs> productSpecs = productSpecsService.selectAll();
        if(productSpecs!=null){
            return CommonResult.success("查询成功",productSpecs);
        }else{
            return CommonResult.error("查询失败");
        }
    }


    @RequestMapping(value = "/productSpecs/findAllByProId")
    private CommonResult findAllByProId(Integer productId) {
        List<String> specsName = productSpecsService.selectAllByProId(productId);
        if(specsName!=null){
            return CommonResult.success("查询成功",specsName);
        }else{
            return CommonResult.error("查询失败");
        }
    }

    @RequestMapping(value = "/productSpecs/add")
    private CommonResult add(ProductSpecs productSpecs) {
        if(productSpecs!=null){
            if(productSpecsService.insertData(productSpecs)){
                return CommonResult.success("添加成功",productSpecs);
            }else{
                return CommonResult.error("添加失败");
            }
        }
        return CommonResult.error("数据不存在");
    }

    @RequestMapping(value = "/productSpecs/addBatch")
    private CommonResult addBatch(Integer productId,Integer[] specsIds) {
        System.out.println(productId);
        System.out.println(Arrays.toString(specsIds));
        if(specsIds!=null){
            ProductSpecs productSpecs;
            List<ProductSpecs> productSpecsList = new ArrayList<>();
            for (Integer specsId : specsIds) {
                productSpecs = new ProductSpecs();
                productSpecs.setProductId(productId);
                productSpecs.setSpecsId(specsId);
                productSpecsList.add(productSpecs);
            }
            for (ProductSpecs specs : productSpecsList) {
                System.out.println(specs);
            }
            if(productSpecsService.insertBatch(productSpecsList)){
                return CommonResult.success("添加成功",productSpecsList);
            }else{
                return CommonResult.error("添加失败");
            }
        }
        return CommonResult.error("数据不存在");
    }

    @RequestMapping(value = "/productSpecs/update")
    private CommonResult update(ProductSpecs productSpecs) {
        if(productSpecsService.updateById(productSpecs)){
            return CommonResult.success("更新成功",productSpecs);
        }else{
            return CommonResult.error("更新失败");
        }
    }

    @RequestMapping(value = "/productSpecs/delete")
    private CommonResult delete(ProductSpecs productSpecs) {
        if(productSpecsService.deleteById(productSpecs)){
            return CommonResult.success("删除成功",productSpecs);
        }else{
            return CommonResult.error("删除失败");
        }
    }
}
