package com.xiushui.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@Configuration
@ConfigurationProperties(prefix = "minio")
public class MinioProperties {
	private String accessKey;
	private String secretKey;
	private String endpoint;
	private String bucketName;
}
