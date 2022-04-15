import {useState} from 'react';

interface IProps {
    initialCount: number
}

function Counter(props: IProps) {
    const {initialCount} = props
    const [count, setCount] = useState(initialCount);
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

const UseState = () => {

    return (
        <>
            <Counter initialCount={0}/>
        </>
    );

}

export default UseState;
