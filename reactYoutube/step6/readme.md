## リンク

[React入門 未経験から1週間でReactをマスターする #06. コンポーネントのライフサイクル - Qiita](https://qiita.com/yassun-youtube/items/372464404ae6855e6d78)
[https://www.youtube.com/watch?v=SKrnW7PRBdk&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=6](https://www.youtube.com/watch?v=SKrnW7PRBdk&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=6)

## したこと
### reactのコンポーネントのライフサイクルを理解する
mounting -> updating -> unmounting

```
初期化時 => componentDidMount, useEffect
更新時(new props, setState, forceUpdate) => componentDidUpdate, useEffect
終了時 => componentWillUnmount, useEffect(第1引数の返り値)
```

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### function component
```
useEffect(() => {
    // monting, update
    return () => {
        // unmonting
    }
// 第二引数に変数を指定することも可能
// - 指定した変数がupdateされる時だけ実行されるようになる
// }, [variable])
})
```

### class component

```
class Test extends React.Component {
  componentDidMount() {
    // mounting時に呼ばれる
  }
  componentDidUpdate() {
    // updating時に呼ばれる
  }
  componentWillUnmount() {
    // unmounting時に呼ばれる
  }
}
```

### ライフサイクルごとのメソッドの利用方法を理解する

## **工夫したこと**