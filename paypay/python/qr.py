import paypayopa
import time

API_KEY = 'a_K86OGgHiIW_kX6a'
API_SECRET = 'BErO7ESgBqWz7nSeSO+FqZIp/pUMXdeJfY2E2pUG'
client = paypayopa.Client(auth=(API_KEY, API_SECRET), production_mode=False)
client.set_assume_merchant("302793184549576704")

request = {
    "merchantPaymentId": round(time.time()),
    "codeType": "ORDER_QR",
    "redirectUrl": "http://foobar.com",
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