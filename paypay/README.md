## 関連

- python SDK [https://github.com/paypay/paypayopa-sdk-python](https://github.com/paypay/paypayopa-sdk-python)
- 公式API [https://www.paypay.ne.jp/opa/doc/jp/v1.0/account_link.html](https://www.paypay.ne.jp/opa/doc/jp/v1.0/account_link.html)

## PayPayの登録方法

PayPay for Developersに新規登録をする

[PayPay for Developers](https://developer.paypay.ne.jp/account/signup)

## サンプルコードを動かす上で必要な情報

<img width="723" alt="_2021-04-28_08-35-27" src="https://user-images.githubusercontent.com/8898432/116487661-746c1580-a8cb-11eb-9a2e-82d3c1903b5e.png">

## pip install

```bash
pip install paypayopa --user
```

## QRコードのサンプル

```bash
import paypayopa
import time

API_KEY = 'xxx'
API_SECRET = 'yyy'
client = paypayopa.Client(auth=(API_KEY, API_SECRET), production_mode=False)
client.set_assume_merchant("zzz")

# requestの送信情報について
# => https://www.paypay.ne.jp/opa/doc/jp/v1.0/preauth_capture#operation/createAuth
request = {
    "merchantPaymentId": round(time.time()), # => 加盟店発番のユニークな決済取引ID
    "codeType": "ORDER_QR",
    "redirectUrl": "http://foobar.com", # => ここを任意のフロントのアプリにしてあげれば良さそう
    "redirectType": "WEB_LINK",
    "orderDescription":"Example - Mune Cake shop",
    "orderItems": [{
        "name": "Moon cake",
        "category": "pasteries",
        "quantity": 1,
        "productId": "67678",
        "unitPrice": {
            "amount": 1,
            "currency": "JPY"
        }
    }],
    "amount": {
        "amount": 1,
        "currency": "JPY"
    },
}

response = client.Code.create_qr_code(request)
print(response['data']['url'])
```

## QRコード支払い

### テストアカウントへのログイン方法

PayPay APIを試すためには、テストユーザーでログインする必要がある

PayPayアプリのサンドボックスへのログイン方法

1. 普段使っているPayPayアプリを開く
2. PayPayアプリの中で新規登録／ログイン画面で、PayPayのロゴを７回タップして開発者モードにする
3. テストアカウントでログアウトする
4. 認証コード確認画面に1234を入力する

[サンドボックスアプリはどうすれば使えますか？ - PayPay for Developers FAQ](https://paypay.ne.jp/developers-faq/sandbox_environment/post-43/)

### テストアカウントについて

- [https://developer.paypay.ne.jp/dashboard/home](https://developer.paypay.ne.jp/dashboard/home) にアクセスし、テストユーザータブを選択する

![Untitled](https://user-images.githubusercontent.com/8898432/116487662-759d4280-a8cb-11eb-9e95-3ccf13b030e1.png)