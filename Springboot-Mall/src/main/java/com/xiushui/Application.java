package com.xiushui;

import com.xiushui.util.general.PropertiesUtil;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
@MapperScan("com.xiushui.dao")	//指定Dao包
public class Application {
    public static void main(String[] args) {
        //得到配置信息
        try {
            new PropertiesUtil().getProperties();
        } catch (Exception e) { e.printStackTrace(); }
        SpringApplication.run(Application.class,args);
    }
}
