package com.springboot.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class WebApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebApplication.class, args);
    }

//    /**
//     * HiddenHttpMethodFilter
//     */
//    @Bean
//    public HiddenHttpMethodFilter hiddenHttpMethodFilter(){
//        HiddenHttpMethodFilter filter = new HiddenHttpMethodFilter();
//        return filter;
//    }

}

