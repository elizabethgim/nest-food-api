# FOOD API

<p align="center">
  <img src="./image/image.png" width="300">
</p>

## Description
식품 영양 성분을 살펴보는 API 입니다.

[식품의약품안전처](https://various.foodsafetykorea.go.kr/nutrient/)에서 제공하는 식품 영양 성분 DB는 조리식품과 국내에 유통되는 가공식품 등에 대해 수집·분석한 정보로 구성되어 있습니다.

> 해당 API는 다음과 같은 요청 인자와 출력 정보를 보여줍니다.

### 요청  

| 번호 | 변수명 | 타입   | 변수 설명   |
| ---- | ------ | ------ | ----------- |
| 1    | name   | STRING | 식품이름    |
| 2    | year   | STRING | 연도(YYYY)  |
| 3    | maker  | STRING | 지역/제조사 |
| 4    | code   | STRING | 식품 코드   |

### 출력  

| 번호 | 항목                  | 설명                        |
| ---- | --------------------- | --------------------------- |
| 1    | id                    | 번호                        |
| 2    | code                  | 식품코드                    |
| 3    | group_name            | 식품군                      |
| 4    | name                  | 식품이름                    |
| 5    | research_year         | 조사년도                    |
| 6    | maker_name            | 지역/제조사                 |
| 7    | ref_name              | 자료출처                    |
| 8    | serving_size          | 1회 제공량                  |
| 9    | calorie               | 열량(kcal)(1회제공량당)     |
| 10   | carbohydrate          | 탄수화물(g)(1회제공량당)    |
| 11   | protein               | 단백질(g)(1회제공량당)      |
| 12   | province              | 지방(g)(1회제공량당)        |
| 13   | sugars                | 총당류(g)(1회제공량당)      |
| 14   | salt                  | 나트륨(mg)(1회제공량당)     |
| 15   | cholesterol           | 콜레스테롤(mg)(1회제공량당) |
| 16   | saturated_fatty_acids | 포화지방산(g)(1회제공량당)  |
| 17   | trans_fat             | 트랜스지방(g)(1회제공량당)  |

## Installation

### package
```bash
$ yarn install
```

## DB
```bash
$ docker-compose up -d
```

```bash
$ yarn run ts-node src/db/excel-to-csv.ts
```

```bash
$ mysql -h 127.0.0.1 -P 3308 -u root -p --local-infile=1
```


## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
