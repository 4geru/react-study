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

1. テンプレートなしで Lambda Function を設定する
2. メモリ・タイムアウトを知る
3. IAM について
4. Log の出力を見る
