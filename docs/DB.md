
# DB 

## 환경 설정
1. MySQL Workbench를 활용하는 것도 OK
2. 로컬에서 직접 데이터 삽입하기  

해당 문서에서 2번 방법에 대해 설명하겠습니다.
docker를 활용해서 터미널에서 해당 명령어를 실행해주세요.  

**도커 환경**
> Docker 20.10.23


## 로컬
### 1. MySQL 설치
```bash
# docker로 MySQL DB 생성  
docker-compose up -d
```

### 2. csv 파일로 변환
```bash
# 엑셀(xlsx) 파일 csv 파일로 변환
yarn run ts-node src/db/excel-to-csv.ts
```

### 3. DB 접속
```bash
# docker로 띄운 db 접속하기
mysql -h 127.0.0.1 -P 3308 -u root -p --local-infile=1
```

## 데이터 삽입
1. 데이터베이스 생성
    ```sql
    CREATE DATABASE food_db;
    ```

2. 해당 데이터베이스(food_db) 사용
    ```sql
    USE food_db;
    ```

3. 테이블 생성
    ```sql
    CREATE TABLE `foods` (
        `id` int NOT NULL,
        `code` varchar(255) NOT NULL,
        `group_name` varchar(255) NOT NULL,
        `name` varchar(255) NOT NULL,
        `year` int NOT NULL,
        `maker_name` varchar(255) NOT NULL,
        `ref_name` varchar(255) NOT NULL,
        `serving_size` int NOT NULL,
        `calorie` double NOT NULL,
        `carbohydrate` double NOT NULL,
        `protein` double NOT NULL,
        `province` double NOT NULL,
        `sugars` double NOT NULL,
        `salt` double NOT NULL,
        `cholesterol` double NOT NULL,
        `saturated_fatty_acids` double NOT NULL,
        `trans_fat` double NOT NULL,
        PRIMARY KEY (`id`)
    );
    ```
  
4. csv 파일 import 하기
    ```sql
    LOAD DATA LOCAL INFILE {파일 경로}
    INTO TABLE foods
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS; -- Skip header row if necessary
    ```


##

[참고](https://velog.io/@bgly/MySQLcsv%ED%8C%8C%EC%9D%BC-import%ED%84%B0%EB%AF%B8%EB%84%90)