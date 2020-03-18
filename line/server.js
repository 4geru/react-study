'use strict';

const express = require('express');
const line = require('@line/bot-sdk');
const PORT = process.env.PORT || 3000;

require('dotenv').config()

const config = {
    channelSecret: process.env.channelSecret,
    channelAccessToken: process.env.channelAccessToken
};

const app = express();

app.get('/', (req, res) => res.send('Hello LINE BOT!(GET)')); //ブラウザ確認用(無くても問題ない)
app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events);

    //ここのif分はdeveloper consoleの"接続確認"用なので削除して問題ないです。
    if(req.body.events[0].replyToken === '00000000000000000000000000000000' && req.body.events[1].replyToken === 'ffffffffffffffffffffffffffffffff'){
        res.send('Hello LINE BOT!(POST)');
        console.log('疎通確認用');
        return;
    }

    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result));
});

const client = new line.Client(config);

function handleEvent(event) {
  if (event.type === 'message' && event.message.type === 'text' && false) {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: event.message.text //実際に返信の言葉を入れる箇所
    });
  }

  if (event.type === 'message' && event.message.type === 'sticker') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: 'それはスタンプだから' //実際に返信の言葉を入れる箇所
    });
  }

  if (event.type === 'message' && event.message.type === 'image') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: 'それは画像だから' //実際に返信の言葉を入れる箇所
    });
  }

  return Promise.resolve(null);
}

app.listen(PORT);
console.log(`Server running at ${PORT}`);