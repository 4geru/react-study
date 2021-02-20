## リンク

[https://www.youtube.com/watch?v=j-c7qQNNRa8&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=10](https://www.youtube.com/watch?v=j-c7qQNNRa8&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=10)

## したこと

refを追加して、ツールチップを表示させた

### refの利用

```jsx
## function components
import { useRef } from 'react';
const Test = () => {
	const ref = useRef(null);

	return (
		<div>
			<div ref={ref}>focus</div>
		</div>
	)
}

## react components
class Test extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	render() {
		return (
			<div>
				<div ref={this.ref}>focus</div>
			</div>
		)
	}
}
```

## **工夫したこと**

- ツールチップに表示させるメッセージをpropsで渡せるように修正
