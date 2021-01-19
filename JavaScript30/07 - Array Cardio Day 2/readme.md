- Arrayの使い方
  - some, every
  - find, findIndex

- 配列から要素を切り取るときは、既存の配列を `splice` するより `[...slice(0, index), ...slice(index + 1)]` で新しい配列をつくる方法もある
  - こちらの方が既存のデータに影響しないので良い
  - 関数的な話で、呼び出し元の関数がバグらなくなるメリットもある
- console.log({hoge}) -> console.log({hoge: hoge}) の書き方ができる