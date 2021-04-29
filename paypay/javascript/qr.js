'use strict';
require('dotenv').config();
const PAYPAY = require('@paypayopa/paypayopa-sdk-node');
PAYPAY.Configure({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SEACRET,
  merchantId: process.env.MERCHANT_ID,
  productionMode: false,
});
var rand = Math.floor( Math.random() * 100 ) ;
let payload = {
    merchantPaymentId: new Date().toISOString(),
    amount: {
      amount: 100,
      currency: "JPY"
    },
    orderDescription: '説明',
    codeType: "ORDER_QR",
    orderDescription: "メニュー名",
    isAuthorization: false,
    redirectUrl: "https://miniapps.paypay.ne.jp/",
    redirectType: "WEB_LINK",
  };


const open = require('open');
PAYPAY.QRCodeCreate(payload, (response) => {
  let body_arr = JSON.parse(response.BODY);
  if(body_arr.resultInfo.code === 'SUCCESS'){
    open(body_arr.data.url);
  }
});
