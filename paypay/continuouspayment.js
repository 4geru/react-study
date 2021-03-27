'use strict';
// reference https://developer.paypay.ne.jp/#refund-payment
const PAYPAY = require('@paypayopa/paypayopa-sdk-node');
const open = require('open');
PAYPAY.Configure({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SEACRET,
    merchantId: process.env.MERCHANT_ID,
    productionMode: false,
  });

const aggreement = async () => {
    let payload = {
        scopes: [
            "continuous_payments"
        ],
        nonce: "random_generated_string",
        redirectType: "WEB_LINK",
        redirectUrl: "https://merchant.domain",
        referenceId: "reference_id",
        phoneNumber: "phone_number",
        deviceId: "device_id"
    };
    // Calling the method to create the account linking QR Code
    await PAYPAY.AccountLinkQRCodeCreate(payload, (response) => {
        console.log(JSON.stringify(response))
        const mew = open(JSON.parse(response.BODY).data.linkQRCodeURL);
        console.log({mew})
    });
}
// aggreement();
// https://merchant.domain/?apiKey=a_K86OGgHiIW_kX6a&responseToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXN1bHQiOiJzdWNjZWVkZWQiLCJhdWQiOiJhX0s4Nk9HZ0hpSVciLCJpc3MiOiJwYXlwYXkubmUuanAiLCJwcm9maWxlSWRlbnRpZmllciI6IioqKioqKio0MTgwIiwiZXhwIjoxNjE2MjEzNzg1LCJub25jZSI6InJhbmRvbV9nZW5lcmF0ZWRfc3RyaW5nIiwidXNlckF1dGhvcml6YXRpb25JZCI6ImRhYzFhZGQ0LTRhMzctNDU0Ny04YjQxLTFhMGUzYWRjMjU1NyIsInJlZmVyZW5jZUlkIjoicmVmZXJlbmNlX2lkIn0.7QgVGnQjxAZF7Sq6XYNuqFDUpBqLdmY6VtyQ2o3BFXQ

const atob = (base64) => {
    var buffer = Buffer.from(base64, 'base64');
    var utf8 = buffer.toString('utf8'); // Not "ascii"
    return utf8;
};
const decodeJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    var encodeURI = encodeURIComponent(atob(base64));
    var decodeString = decodeURIComponent(encodeURI);
    return JSON.parse(decodeString);
};

// subscription
const subscription = (userAuthorizationId) => {
    const payload = {
        merchantPaymentId: new Date().toISOString(),
        userAuthorizationId: userAuthorizationId,
        amount: {
            amount: 2,
            currency: "JPY"
        },
        requestedAt: Date.now(),
        agreeSimilarTransaction: true
    };
    console.log({ payload })
    // Calling the method to create a continuous payment 
    PAYPAY.CreateSubscriptionPayment(payload, (response) => {
        // Printing if the method call was SUCCESS 
        console.log(JSON.stringify(response));
    });
}
// const res = decodeJwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXN1bHQiOiJzdWNjZWVkZWQiLCJhdWQiOiJhX0s4Nk9HZ0hpSVciLCJpc3MiOiJwYXlwYXkubmUuanAiLCJwcm9maWxlSWRlbnRpZmllciI6IioqKioqKio0MTgwIiwiZXhwIjoxNjE2MjE0ODk2LCJub25jZSI6InJhbmRvbV9nZW5lcmF0ZWRfc3RyaW5nIiwidXNlckF1dGhvcml6YXRpb25JZCI6ImRhYzFhZGQ0LTRhMzctNDU0Ny04YjQxLTFhMGUzYWRjMjU1NyIsInJlZmVyZW5jZUlkIjoicmVmZXJlbmNlX2lkIn0.X64c7MU2p7BzYLu3b9eZsQ9trvVTw4X8krkvth7GZnc')
// const userAuthorizationId = res.userAuthorizationId;
// subscription(userAuthorizationId)

const auth = () => {
    const res = decodeJwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXN1bHQiOiJzdWNjZWVkZWQiLCJhdWQiOiJhX0s4Nk9HZ0hpSVciLCJpc3MiOiJwYXlwYXkubmUuanAiLCJwcm9maWxlSWRlbnRpZmllciI6IioqKioqKio0MTgwIiwiZXhwIjoxNjE2MjE0ODk2LCJub25jZSI6InJhbmRvbV9nZW5lcmF0ZWRfc3RyaW5nIiwidXNlckF1dGhvcml6YXRpb25JZCI6ImRhYzFhZGQ0LTRhMzctNDU0Ny04YjQxLTFhMGUzYWRjMjU1NyIsInJlZmVyZW5jZUlkIjoicmVmZXJlbmNlX2lkIn0.X64c7MU2p7BzYLu3b9eZsQ9trvVTw4X8krkvth7GZnc')
    console.log({ res })
    console.log(res.userAuthorizationId)
    let userAuthorizationId = res.userAuthorizationId
    PAYPAY.GetUserAuthorizationStatus([userAuthorizationId], async (response) => {
        // Printing if the method call was SUCCESS
        console.log(JSON.stringify(response));
        const userAuthorizationId = JSON.parse(response.BODY).data.userAuthorizationId;
        console.log(subscription(userAuthorizationId))
    });
}
auth();
