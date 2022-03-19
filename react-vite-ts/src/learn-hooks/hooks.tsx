import {
    useState,
    useEffect,
    useRef,
    useContext,
    createContext,
} from 'react';


const Context = createContext(0)
const B = () => {
    const count = useContext(Context);
    return <div>{count}</div>
}


const A = () => {
    return <div>
        A
        <B/>
    </div>
}

const Hooks = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Context.Provider value={count}>
                <A/>
            </Context.Provider>

        </div>
    )
}

export default Hooks;