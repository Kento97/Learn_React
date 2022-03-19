import {useState, useEffect, useRef} from 'react';

type Props = {
    [key: string]: number
}

function getDefaultValue() {
    for (let i = 0; i < 100000; i++) {
        if (i === 9999) return i;
    }
    return 0;
}

const Counter = (props: Props) => {
    const [count, setCount] = useState(() => props.count);
    const addCounter = () => setCount(count + 1)
    return (
        <div>
            <button onClick={addCounter}>{count}</button>
        </div>
    )
}

const Hooks = () => {

    return (
        <div>
            <Counter count={10}/>
            <Counter count={getDefaultValue()}/>
        </div>
    )
}

export default Hooks;