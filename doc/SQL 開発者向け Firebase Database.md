## リンク

[https://www.youtube.com/watch?v=WacqhiI-g_o&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&index=2](https://www.youtube.com/watch?v=WacqhiI-g_o&list=PLl-K7zZEsYLlP-k-RKFa7RyNPa9_wCH2s&index=2)

## したこと

### part1 SQL データベースと Firebase Database

- validation ができる
- SQL は限られたカラムしか追加できない

### part2 SQL 構造を　 Firebase 構造に変換するには

- SQL
  - foregin_key を使って DB を連携している
- Firebase
  - 連携を示す部分は別のテーブルとして切り分ける

### part3 Firebase Database クエリの基本

- SQL
  - カラムを絞る
  - 条件を絞る
- Firebase
  - 親キーを選択
  - オーダー関数 & クエリ関数を使う
- オーダー関数
  - orderByKey()
  - orderByChild('child_propaty')
    - child_propaty = name, age
  - orderByValue()
  - orderByPriority()
    - 古いやつっぽい
- クエリ関数
  - startAt('value')
  - endAt('value')
  - equalTo('child_key')
  - limitToFirst(10)
  - limitToLast(10)

### part4 一般的な SQL のクエリを Firebase データベース用に変換

- uid で探す

```jsx
// SQL
select * from Users where UId = 1;

// firebase query
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').child('1');
```

- email で探す

```jsx
// SQL
select * from Users where email = 'test@example.com';

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByChild('email').equalTo('test@example.com');
```

- 10 件だけ探す

```jsx
// SQL
select * from Users limit 10;

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByKey().limitToFirst(10);
```

- 名前が d から始まるユーザーを探す

```jsx
// SQL
select * from Users where name LIKE 'D%';

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByChild('name')startAt('D').endAt('D\u8ff');
```

- 50 歳以下のユーザーを探す

```jsx
// SQL
select * from Users where age < 50;

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByChild('age').endAt(49);
```

- 50 歳以上のユーザーを探す

```jsx
// SQL
select * from Users where age > 50;

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByKey().startAt(51);
```

- 20-100 歳のユーザーを探す

```jsx
// SQL
select * from Users where 20 <= age && age <= 100;

// firebase
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByChild('age').startAt(20).endAt(100);
```

- 28 歳でベルリンにいる人を探す

```jsx
// SQL
select * from Users where age = 28 && Location = 'Berlin';

// firebase
// 複合検索ができないので、新たに、キーを追加する
const rootRef = firebase.dotabase().ref();
const oneRef = rootRef.child('users').orderByChild('age_location').equalTo('28_Berlin');
```

### part5 Firebase データベースでの結合

- SQL
  - user { attendee_id }
  - attendees { event_id }
  - events
- firebase
  - { users: [], events: { fm: [] }, eventAttendees: { fm: [] } }

```jsx
const rootRef = firebase.dotabase().ref();
const attendees = rootRef.child('eventAttendees/fm');
let handles = [];
attendees.on('child_added', snap => {
  // joinする必要があるよね
  let userRef = db.child('users/' + snap.key);
  // userRef.once('value').then(userSnap => {});
  let fn = userRef.on('value', userSpan => {});
	handles.push(fn);
});

handles.forEach(fn => userRef.off('value', fn);
```

- once を使って呼び出すことができる
- realtime データベースを使いたい場合は、on → off を使って、紐付けと削除する必要がある

### part 6 Firebase Database で非正規化は正規です

- データの複製をする
- UI をイメージしてから構造を考える
- データの生合成について
  - 次の動画で！

### part7 マルチパス更新でのデータの整合性

- 手動でする

```jsx
"userEvents": {
	"1": {
		"fm": true,
		"other": true,
		"coolEvent": true,
	}
}

const rootRef = firebase.dotabase().ref();
const daveEvents = rootRef.child('userEvents/1');
const attendees = rootRef.child('eventAttendees');

// BAD
// 一つ一つ更新するのはダメ
daveEvents.once('value', snap => {
	snap.forEach(eventSnap => {
		let eventRef = attendees.child(eventSnap.key).child(snap.key);
		eventRef.update({ name: 'Dave' });
	}
});

// Good
// 指定するpathを全て指定する
let updateObject = {
	'user/1/name': 'Dave',
	'eventAttendees/fm/1/name': 'Dave',
	'eventAttendees/other/1/name': 'Dave',
    'eventAttendees/coolEvent/1/name': 'Dave'
}
firebase.database().ref().update(updateObject);
```

- lookup でいい感じにする

```jsx
function updateName({ roofRef, uid, name }) {
  const userEvents = rootRef.child(`userEvents/${uid}`);
  return userEvents.once("value").then((snap) => {
    let eventKeys = Object.keys(snap.val());
    let updateObj = {};

    eventKeys.forEach((key) => {
      updateObj[`eventAttendees/${key}/${uid}/name`] = name;
    });

    updateObj[`users/${uid}/name`] = name;

    return rootRef.update(updateObj);
  });
}
```

### part8 Firebase セキュリティルールでデータ構造を守る

- path & rule

  - セキュリティルールも JSON でかかれる

  ```json
  {
    "rules": {
      "users": {
        "$uid": {
          ".read": true,
          ".write": true,
          ".validate": true
        }
      }
    }
  }
  ```

- server variable

  - auth
  - data
  - new data
  - now → 時間
  - root
  - $id → ワイルドカード

  ```json
  {
  	"rules": {
  	  "users": {
  			"$uid": {
  				".read": "auth.uid == $uid",
  				".write": "auth.uid == $uid",
  				".validate": "newData.exists()",
  				".validate": "
  					newData.child('name').isString() &&
  					newData.child('body').val().length < 300
  				"
  			}
  		}
  	}
  }
  ```

- foreign_key

  ```json
  {
  	".validate": "
  		root.child('locations')
          .child(newData.child('location').val())
  		.exists()
  	"
  }

  ```

## **工夫したこと**
