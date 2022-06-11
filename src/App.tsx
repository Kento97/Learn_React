import React, {FC} from 'react';
import {Button} from 'antd';
import './App.css';
import {observer} from 'mobx-react-lite'
import useStore from "./store";

const App: FC = () => {
    const {counterStore: {count, filterList, addCount, reset}, listStore: {list, addList, resetList}} = useStore()

    return (
        <div className='container'>
            {filterList.join("-")}
            <br/>
            <Button type={'primary'} onClick={addCount}>
                {count}
            </Button>
            <br/>
            <Button type={"dashed"} onClick={reset}>Reset</Button>
            <br/>
            {list.join("-")}
            <br/>
            <Button type={"primary"} onClick={addList}>pushList</Button>
            <br/>
            <Button type={"dashed"} onClick={resetList}>resetList</Button>
        </div>
    )
};

export default observer(App);
