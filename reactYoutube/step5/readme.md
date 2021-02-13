## リンク

[https://www.youtube.com/watch?v=kEBP9WhifX0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=5](https://www.youtube.com/watch?v=kEBP9WhifX0&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=5)

## したこと
### Reactでのフォームの利用方法

```jsx
<form onSubmit={submitFunction}>
	<input
		type="text"
		value={val}
		onChange={(e) => setVal(e.target.value)}
	/>
	<button>button</button>
</form>
```

### 親子間でのデータのやり取り
### child → parent

```jsx
function Parent() => {
	const func = () => {}
	render <Child func={func} />
}

function Child({func}) => {
	render <div onClick={() => {func}}>div</div>
}
```

### parent → child

```jsx
function Parent() => {
	render <Child parentData={parentData} />
}

function Child({parentData}) => {
	render <div>{parentData}</div>
}
```

## **工夫したこと**
table componentで削除する実装を追加してみた