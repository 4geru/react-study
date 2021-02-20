## リンク

[https://www.youtube.com/watch?v=cYa8-3lfCn4&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=11](https://www.youtube.com/watch?v=cYa8-3lfCn4&list=PL0ATFRXu9uECMPBV7GspaLz3KqKILfa13&index=11)

## したこと

## function component

ReactのContext

入れ子になっているときに解決する

```jsx
const Granpa = () => <Parent user={} />
const Parent = ({ user }) => <Child user={user} />
const Children = ({ user }) => <GrandChild user={user} />
const GrandChild = ({ user}) => <div>{user}</div>
```

```jsx
// Parent Component
import React from 'react';
export const UserNameContext = React.createContext('user name')

userName='user name'
const ParentComponent = () => {
	return (
		<UserNameContext.Provider value={userName}>
			<ChildComponent />
		</UserNameContext>
	)
}
```

```jsx
// Child Component
import { useContext } from 'react'
const ChildComponent = () => {
	const userName = useContext(UserNameContext);

	return {
		<div>{ userName }</div>
	}
}
```

### 子供からContextを更新する

```jsx
import React from 'react';

// use stateと同じように扱える
export const UseNameContext = React.createContext(['user name', () => {}])
```

```jsx
// Parent Component
import React from 'react';
export const UserNameContext = React.createContext('user name')

userName='user name'
const ParentComponent = () => {
	return (
		<UserNameContext.Provider value={[userName, setUserName}}>
			<ChildComponent />
		</UserNameContext>
	)
}
```

```jsx
// Child Component
import { useContext } from 'react'
const ChildComponent = () => {
	const [userName, setUserName] = useContext(UserNameContext);

	return {
		<div>{ userName }</div>
		<button onClick={(value) => setUserName(value)} />
	}
}
```

- Hoge = React.createContext → 作成
- setContextで初期値を入れる
- useContext(Hoge) で呼び出す

## class compnent

```jsx
class Children extends React.Component {
	static contextType = UserNameContext;

	render() {
		const userName = this.context

		return (
			<OtherContext.Consumer>
				{
					otherValue => {
						<div>{userName} : {otherValue}</div>
					}
				}
			</OtherContext.Consumer>
		)
	}
}
```

## **工夫したこと**