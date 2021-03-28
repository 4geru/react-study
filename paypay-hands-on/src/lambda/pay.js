"use strict"
import { URLSearchParams } from 'url'
const { v4: uuidv4 } = require('uuid')
const pay_pay = require("../pay-pay/pay-pay")
const APP_HOST_NAME = process.env.VUE_APP_HOST_NAME

const pay = new pay_pay();
exports.handler = async function(event) {
    const body = event.body
    let params = new URLSearchParams(body)
    const type = params.get('type')
  
    const headers = {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type': 'application/json'
    }

    if (type === 'reserve') {
        // 決済予約
        let merchantId = uuidv4()

        let options = {
            merchantPaymentId: merchantId,
            amount: {
                amount: 10,         /* 決済金額 */
                currency: "JPY"
            },
            codeType: "ORDER_QR",
            orderDescription: "決済ハンズオン",
            isAuthorization: false,
            redirectUrl: `${APP_HOST_NAME}/pay/confirm?merchantId=${merchantId}`,
            redirectType: "WEB_LINK"
        };

        // 決済予約実行
        let myBody = {}
        await pay.reserve(options).then(function (response) {
            // 決済用ページ取得
            let reservation = options
            reservation.paymentUrl = response.data.url
            myBody = JSON.stringify(reservation);
        });

        return {
            statusCode: 200,
            body: myBody,
            headers: headers
        }

    } else if (type === 'confirm') {
        // 決済処理
        const merchantId = params.get('merchantId')
        await pay.confirm(merchantId).then((response) => {
        })
        return {
            statusCode: 200,
            body: '決済完了しました！',
            headers: headers
        }

    } else {
        return {
            statusCode: "400",
            body: 'APIエラー',
            headers: headers
        }
    }
}