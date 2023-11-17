# FOOD API

<p align="center">
  <img src="./image/image.png" width="300">
</p>

## �Ұ�
��ǰ ���� ������ ���캸�� API �Դϴ�.

[��ǰ�Ǿ�ǰ����ó](https://various.foodsafetykorea.go.kr/nutrient/)���� �����ϴ� ��ǰ ���� ���� DB�� ������ǰ�� ������ ����Ǵ� ������ǰ � ���� �������м��� ������ �����Ǿ� �ֽ��ϴ�.

> �ش� API�� ������ ���� ��û ���ڿ� ��� ������ �����ݴϴ�.  
> ���Ǵ� ���� ������ �Ϻ� �׸���� ��� �׸���� ������� ��ó���Ǿ����ϴ�.

### ��û  

| ��ȣ | ������ | Ÿ��   | ���� ����   |
| ---- | ------ | ------ | ----------- |
| 1    | name   | STRING | ��ǰ�̸�    |
| 2    | year   | STRING | ����(YYYY)  |
| 3    | maker  | STRING | ����/������ |
| 4    | code   | STRING | ��ǰ �ڵ�   |

### ���  

| ��ȣ | �׸�                  | ����                        |
| ---- | --------------------- | --------------------------- |
| 1    | id                    | ��ȣ                        |
| 2    | code                  | ��ǰ�ڵ�                    |
| 3    | group_name            | ��ǰ��                      |
| 4    | name                  | ��ǰ�̸�                    |
| 5    | research_year         | ����⵵                    |
| 6    | maker_name            | ����/������                 |
| 7    | ref_name              | �ڷ���ó                    |
| 8    | serving_size          | 1ȸ ������                  |
| 9    | calorie               | ����(kcal)(1ȸ��������)     |
| 10   | carbohydrate          | ź��ȭ��(g)(1ȸ��������)    |
| 11   | protein               | �ܹ���(g)(1ȸ��������)      |
| 12   | province              | ����(g)(1ȸ��������)        |
| 13   | sugars                | �Ѵ��(g)(1ȸ��������)      |
| 14   | salt                  | ��Ʈ��(mg)(1ȸ��������)     |
| 15   | cholesterol           | �ݷ����׷�(mg)(1ȸ��������) |
| 16   | saturated_fatty_acids | ��ȭ�����(g)(1ȸ��������)  |
| 17   | trans_fat             | Ʈ��������(g)(1ȸ��������)  |

## Installation

### package
```bash
yarn install
```

## DB ����
[�ڼ���](/docs/DB.md)

## ���� ���

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## �׽�Ʈ

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```
