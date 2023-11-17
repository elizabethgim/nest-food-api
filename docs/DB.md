
# DB 

## ȯ�� ����
1. MySQL Workbench�� Ȱ���ϴ� �͵� OK
2. ���ÿ��� ���� ������ �����ϱ�  

�ش� �������� 2�� ����� ���� �����ϰڽ��ϴ�.
docker�� Ȱ���ؼ� �͹̳ο��� �ش� ��ɾ �������ּ���.  

**��Ŀ ȯ��**
> Docker 20.10.23


## ����
### 1. MySQL ��ġ
```bash
# docker�� MySQL DB ����  
docker-compose up -d
```

### 2. csv ���Ϸ� ��ȯ
```bash
# ����(xlsx) ���� csv ���Ϸ� ��ȯ
yarn run ts-node src/db/excel-to-csv.ts
```

### 3. DB ����
```bash
# docker�� ��� db �����ϱ�
mysql -h 127.0.0.1 -P 3308 -u root -p --local-infile=1
```

## ������ ����
1. �����ͺ��̽� ����
    ```sql
    CREATE DATABASE food_db;
    ```

2. �ش� �����ͺ��̽�(food_db) ���
    ```sql
    USE food_db;
    ```

3. ���̺� ����
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
  
4. csv ���� import �ϱ�
    ```sql
    LOAD DATA LOCAL INFILE {���� ���}
    INTO TABLE foods
    FIELDS TERMINATED BY ','
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS; -- Skip header row if necessary
    ```


##

[����](https://velog.io/@bgly/MySQLcsv%ED%8C%8C%EC%9D%BC-import%ED%84%B0%EB%AF%B8%EB%84%90)