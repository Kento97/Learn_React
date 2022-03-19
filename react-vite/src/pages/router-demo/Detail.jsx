import {useLocation} from "react-router-dom";


const Detail = () => {
    const location = useLocation()
    console.log('state:',location.state)
    const state = location.state
    return (
        <>
            <div>详情-{state && state.name || "暂无"}</div>
        </>
    );

}

export default Detail;
