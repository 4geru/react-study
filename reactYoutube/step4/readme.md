## リンク

[https://www.youtube.com/watch?v=ZLEMN2pCE8E&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=4](https://www.youtube.com/watch?v=ZLEMN2pCE8E&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=4)

## したこと

### 条件分岐
コンポーネントを切り替えたい場合は三項演算子を使う or functionの中で定義して、returnのところで書いてあげる

```jsx
function App() {
  const [flag, setFlag] = useState(true);
	const component = flag ? <ComponentA /> : <ComponentB />
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => {setFlat(!flag)}}>切り替え</li>
        </ul>
      </header>
      <hr />
			<div>
				<h3>三項演算子</h3>
				{ component }
			</div>
			<div>
				<h3>functionの中で定義</h3>
				{ flag ? <ComponentA /> : <ComponentB /> }
			</div>
    </div>
  );
}
```

### 繰り返し
繰り返しをする場合には、keyはuniqな必要がある。
mapの第二引数で、indexを取れるので、indexを使う

```jsx
array.map((item, index) => {
	return <div key={index}>{item}</div>
})
```

### カスタマイズ
新しくテーブルコンポーネントを追加した