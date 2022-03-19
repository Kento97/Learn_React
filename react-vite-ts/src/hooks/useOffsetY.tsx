import {useEffect, useState} from 'react'

const useOffsetY = () => {
    const [offset, setOffset] = useState<number>(0);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const h: number = document.documentElement.scrollTop;
            setOffset(h)
        })
    }, [offset])
    return offset;
}
export default useOffsetY;

