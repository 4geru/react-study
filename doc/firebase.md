# 100 Firebase Tips, Tricks, and Screw-ups

YouTube: https://www.youtube.com/watch?v=iWEgpdVSZyg

- 100 個の tips が乗っている

### timestamp, increment を使いたい場合

```javascript
const { serverTiemstamp, increment } = firebase.store.FieldValue;

ref.update({
  timestamp: serverTiemstamp(),
  counter: increment(-1),
});
```

### batch 処理

- データの生合成を保って transaction 的な処理をしたい場合

```javascript
const batch = db.batch();

batch.set(game, { score });
batch.set(user, { lifetimeScore });

batch.commit();
```
