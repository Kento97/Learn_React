import {useState, useEffect} from "react";

export default function useLocalStorage(key: string, defaultValue: any) {
    const [message, setMessage] = useState(defaultValue);
    //每次 messages 变化就会自动同步到本地local
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(message))
    }, [message, key])
    return [message, setMessage]
}