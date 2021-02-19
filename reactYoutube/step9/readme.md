## リンク

[https://www.youtube.com/watch?v=Kx3cOJWXS8c&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=9](https://www.youtube.com/watch?v=Kx3cOJWXS8c&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=9)

## したこと

### reactのPortalの理解

- ReactのPortalを利用すると任意の場所にコンポーネントを表示することができる

```jsx
## react
<Parent>
	<Child> // => Portalを利用する
	</Child>
</Parent>

## html
<div id="root">
	<div class="parent">
	</div>
</div>
<div id="portal">
	<div class="child">
	</div>	
</div>
```

- Portalの違いはreturnの値

```jsx
import ReactDOM from 'react-dom';
const elem = document.getElementById('portal-root')

const Test = () => {
	return ReactDom.createPortal(
		<div>test</div>,
		elem
	)
}
```

### Portalを利用したモーダルの実装

## **工夫したこと**