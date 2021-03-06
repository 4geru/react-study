import React, { useState } from 'react'

interface Props {
    text: string
}

interface UseData {
    id: number | null;
    name: string;
}

const TestComponent: React.FC<Props> = ({ text }) => {
    const [count, setCount] = useState<number | string>('click here');
    const countUp = () => { typeof count === 'string' ? setCount(1) : setCount(count + 1) }

    const [user, setUser] = useState<UseData>({ id: 1, name: '4geru'});

    return (
        <div>
            <h1>{text}</h1>
            <h1 onClick={countUp}>{count}</h1>
        </div>
    )
}

export default TestComponent
