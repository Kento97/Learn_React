import {useState, useEffect, useRef} from 'react';


const Hooks = () => {
    const [value, setValue] = useState<number>(0)
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);
    const saveCallBack: any = useRef();
    const callBack = () => {
        const random: number = (Math.random() * 10) | 0;
        setValue(value + random);
    };
    useEffect(() => {
        saveCallBack.current = callBack;
        return () => {};
    })
    useEffect(() => {
        const tick = () => {
            saveCallBack.current();
        };
        const timer: NodeJS.Timeout = setInterval(tick, 5000);
        timers.push(timer);
        setTimers(timers);
        console.log(timers);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <div>{value}</div>;
}

export default Hooks;