import {useState, useEffect, useRef} from 'react';
import useLocalStorage from "@/hooks/useLocalStorage";

const Hooks = () => {
    const [message, setMessage] = useLocalStorage('hook-key', {a: 1, b: 3});
    setTimeout(() => {
        setMessage({a: 0, b: 2});
    }, 5000)
    return <div>{JSON.stringify(message)}</div>
}

export default Hooks;