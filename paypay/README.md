## 関連

- python SDK [https://github.com/paypay/paypayopa-sdk-python](https://github.com/paypay/paypayopa-sdk-python)
- 公式API [https://www.paypay.ne.jp/opa/doc/jp/v1.0/account_link.html](https://www.paypay.ne.jp/opa/doc/jp/v1.0/account_link.html)

## PayPayの登録方法

PayPay for Developersに新規登録をする

[PayPay for Developers](https://developer.paypay.ne.jp/account/signup)

## サンプルコードを動かす上で必要な情報

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/721b248a-844e-4f9e-bc00-554844c5ceb3/_2021-04-28_08-35-27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/721b248a-844e-4f9e-bc00-554844c5ceb3/_2021-04-28_08-35-27.png)

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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa7f236d-1d9e-49a3-90f9-c8e0391e0a3b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa7f236d-1d9e-49a3-90f9-c8e0391e0a3b/Untitled.png)