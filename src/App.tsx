import React, {FC, useEffect} from 'react';
import {Button, Input, Space} from 'antd';
import './App.css';
import counterStore from "./store/counter";
import {observer} from 'mobx-react-lite'

const App: FC = () => {
    const {filterList, addCount, reset, count} = counterStore
    return (
        <div className='container'>
            {filterList.join("-")}
            <br/>
            <Button type={'primary'} onClick={addCount}>
                {count}
            </Button>
            <br/>
            <Button type={"dashed"} onClick={reset}>Reset</Button>
        </div>
    )
};

export default observer(App);
