# AWS lambda の公式の勉強会

登録 URL: https://aws.amazon.com/jp/blogs/news/aws-hands-on-for-beginners-01/

## 01. Serverless アーキテクチャの概要

Labmda は汎用性が高い
今回のハンズオンで使うもの

- AWS Lambda
- AWS Gateway
- AWS DynamoDB

## 02. AWS Lambda の概要

料金 = 実行回数 x 利用時間

Java, Go, Power shell, Node.js, C#, Python, Ruby が対応

ハンドラ関数が呼び出される

### 設定できるもの

- 利用するメモリ
  - CPU は指定できない
- タイムアウト 15 分まで
- IAM ロールで権限を絞ることができる

### 利用例

- 非同期処理

  - S3 からの呼び出し

- 同期処理
  - API Gateway

### ライフサイクル

- コールドスタート
- ウォームスタート

## 03. AWS Lambda ハンズオン ① Lambda を単体で使ってみる

全体の流れ

1. テンプレートなしで Lambda Function を設定する
2. メモリ・タイムアウトを知る
3. IAM について
4. Log の出力を見る

### Lambda Function を作る

#### メモリタイムアウトの設定

<img width="1653" alt="translate-function - Lambda 2021-03-28 12-21-52" src="https://user-images.githubusercontent.com/8898432/112741656-93247700-8fc2-11eb-9cdb-554d7f18d0d7.png">

#### IAM role の確認

<img width="889" alt="translate-function - Lambda 2021-03-28 12-28-51" src="https://user-images.githubusercontent.com/8898432/112741654-90c21d00-8fc2-11eb-9cd5-00fcc8dac4c1.png">

#### log の作成方法

https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/python-logging.html

```python
import json
import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):

    logger.info(event)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
```

ログも見ることができる
<img width="877" alt="translate-function - Lambda 2021-03-28 12-45-26" src="https://user-images.githubusercontent.com/8898432/112741785-85232600-8fc3-11eb-9b99-988a1efb02f1.png">

モニタリングタブから今までのログを見ることができる

## 04. AWS Lambda ハンズオン ② 他のサービスを呼び出してみる

おはようを翻訳する

```python
import json
import boto3

translate_client = boto3.client('translate')

def lambda_handler(event, context):
    input_tet = 'おはよう'

    response = translate_client.translate_text(
        Text=input_tet,
        SourceLanguageCode='ja',
        TargetLanguageCode='en'
    )

    output_text = response.get('TranslatedText')

    return {
        'statusCode': 200,
        'body': json.dumps({
            'output_text': output_text
        })
    }
```

## 05. Amazon API Gateway の概要

API Gateway は REST と Websocet に対応
料金体系：API の実行回数 + キャッシュメモリ量

リクエストからデータを返すまでの流れ
ユーザー → メソッドリクエスト → 統合リクエスト → 　統合バックエンド
ユーザー ← メソッドレスポンス ← 統合レスポンス ← 　統合バックエンド

- その他の機能

  - バージョニング
  - API キーと使用量 プラン
  - ログとモニタリング

## 06. Amazon API Gateway ハンズオン ① API Gateway を単体で使ってみる

GET メソッドを作成する
モックデータを作成する
dev ステージを作成する

### API Gateway

- sample メソッドの作成

<img width="1029" alt="API Gateway 2021-03-28 13-10-00" src="https://user-images.githubusercontent.com/8898432/112742161-ebf60e80-8fc6-11eb-958e-3b426625cce7.png">

#### 固定の JSON を返す

統合レスポンス から application/json を選択し返したい JSON を記述する。
保存したものを簡単にテストすることも可能

<img width="1792" alt="API Gateway 2021-03-28 13-15-22" src="https://user-images.githubusercontent.com/8898432/112742238-b271d300-8fc7-11eb-9e85-f7d3cadc45c3.png">

#### dev を作成する

リソース > アクション > デプロイ > デプロイされるステージ: 新しいステージ
ステージ名 が出てくるので stg に設定をする

## 07. Amazon API Gateway ハンズオン ② API Gateway と Lambda を組み合わせる

### API Gateway と lambda の連携

![image](https://user-images.githubusercontent.com/8898432/112742352-e7325a00-8fc8-11eb-85e1-b6db555ed94e.png)

### 受け入れるメソッドリクエストの設定

<img width="1539" alt="API Gateway 2021-03-28 13-26-37" src="https://user-images.githubusercontent.com/8898432/112742406-4db77800-8fc9-11eb-8db9-686a33c37950.png">

### レスポンスの設定

統合レスポンスの形式について

https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/api-gateway-integration-settings-integration-response.html

テストデータの作成
<img width="816" alt="translate-function - Lambda 2021-03-28 13-32-32" src="https://user-images.githubusercontent.com/8898432/112742524-3cbb3680-8fca-11eb-8845-33986f990ba0.png">

ここまでのコード

```python
import json
import boto3

translate_client = boto3.client('translate')

def lambda_handler(event, context):
    input_text = event['queryStringParameters']['input_text']

    response = translate_client.translate_text(
        Text=input_text,
        SourceLanguageCode='ja',
        TargetLanguageCode='en'
    )

    output_text = response.get('TranslatedText')

    return {
        'statusCode': 200,
        'body': json.dumps({
            'output_text': output_text
        }),
        'isBase64Encoded': False,
        'headers': {}
    }
```

## 08. Amazon DynamoDB の概要

AWS の DB

- Amazon RDS
- Amazon Aurora
- Amazon DynamoDB
- Amazon Redshift
- Amazon ElasticCache
- Amazon Netptune

### DynamoDB について

- 3 つの AZ に保存される

### 料金体系

- Read/Write キャパシティユニット
- ストレージ利用料

### 構造

- Table
  - primary key: 重複は禁止
  - sort key: 重複しても良い
  - item

今回の対象外

- Local Secondary Index
- Global Secondary Index

## 09. Amazon DynamoDB ハンズオン ① テーブルを作ってみる

- 手動でカラムを追加する
  <img width="1792" alt="DynamoDB · AWS Console 2021-03-28 17-56-26" src="https://user-images.githubusercontent.com/8898432/112747262-22478400-8fef-11eb-8ded-ae3227400a29.png">

## 10. Amazon DynamoDB ハンズオン ② API Gateway と Lambda と DynamoDB を組み合わせる

API ドキュメント https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.get_item

- put_item を利用して、実際にデータを保存するように修正した

```python
import json
import boto3
import datetime

translate_client = boto3.client('translate')

dynamodb = boto3.resource('dynamodb')
translate_history_table = dynamodb.Table('translate-history')

def lambda_handler(event, context):
    input_text = event['queryStringParameters']['input_text']

    response = translate_client.translate_text(
        Text=input_text,
        SourceLanguageCode='ja',
        TargetLanguageCode='en'
    )

    output_text = response.get('TranslatedText')

    translate_history_table.put_item(
        Item = {
            'timestamp': datetime.datetime.now().strftime("%Y%m%d%H%M%S"),
            'input_text': input_text,
            'output_text': output_text
        }
    )

    return {
        'statusCode': 200,
        'body': json.dumps({
            'output_text': output_text
        }),
        'isBase64Encoded': False,
        'headers': {}
    }
```

## その他

- get_item を利用して保存したデータを読んでみた

```
import json
import boto3

dynamodb = boto3.resource('dynamodb')
translate_history_table = dynamodb.Table('translate-history')

def lambda_handler(event, context):
    response = translate_history_table.get_item(
        Key={
            'timestamp': '20210328090941'
        }
    )

    return {
        'statusCode': 200,
        'body': json.dumps({
            'output_text': response['Item']['output_text']
        }),
        'isBase64Encoded': False,
        'headers': {}
    }
```

- BlackBelt: AWS Lambda Part1 https://d1.awsstatic.com/webinars/jp/pdf/services/20190402_AWSBlackbelt_AWSLambda%20Part1%262.pdf
- AWS Lambda 料⾦ https://aws.amazon.com/jp/lambda/pricing/
- Python の AWS Lambda 関数ログ作成 https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/python-logging.html
- AWS SDK for Python (Boto3) https://aws.amazon.com/jp/sdk-for-python/
- BlackBelt: Amazon API Gateway https://d1.awsstatic.com/webinars/jp/pdf/services/20190514_AWS-Blackbelt_APIGateway.pdf
- BlackBelt: Amazon DynamoDB https://d1.awsstatic.com/webinars/jp/pdf/services/20170809_AWS-BlackBelt-DynamoDB.pdf
- Amazon DynamoDB 料⾦ https://aws.amazon.com/jp/dynamodb/pricing/
- Amazon DynamoDB 結果整合性のある読み込み / 強⼒な整合性のある読み込み https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html
- Amazon DynamoDB API https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/HowItWorks.API.html
- Amazon DynamoDB クエリとスキャンデータのベストプラクティス https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/bp-query-scan.html
- ホワイトペーパー: サーバーレスアーキテクチャでのアプリケーションの構築 https://aws.amazon.com/jp/lambda/serverless-architectures-learn-more/
- ホワイトペーパー: AWS Lambda を使⽤した サーバーレスアーキテクチャ https://d1.awsstatic.com/whitepapers/ja_JP/serverless-architectures-with-awslambda.pdf?did=wp_card&trk=wp_card
- 形で考えるサーバーレス設計 https://aws.amazon.com/jp/serverless/patterns/serverless-pattern/
