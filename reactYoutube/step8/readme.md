## リンク

[https://www.youtube.com/watch?v=9iulWDK95TY&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=8](https://www.youtube.com/watch?v=9iulWDK95TY&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=8)

## したこと
### 子供を受け取るコンポーネントの作り方

```jsx
const Container = ({ children }) => {
	return <div style={ { padding: '20px' } }>
		{ children }
	</div>
}

const Test = () => {
	return <Container>test</Container>
}

const Sample = () => {
	return <Container>sample</Container>
}
```

### higher-order componentの理解

```jsx
const withPadding = (Component) => {
	return (props) => {
		return (
			<div style={ { padding: '20px' } }>
				{ ...props }
			</div>
		)
	}
}

const Test   = withPadding(() => <div>test</div>);
const Sample = withPadding(() => <div>sample</div>);
```

## **工夫したこと**
- なし