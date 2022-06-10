import React, {FC, useEffect} from 'react';
import {Button, Input, Space} from 'antd';
import './App.css';
import counterStore from "./store/counter";
import {observer} from 'mobx-react-lite'

const App: FC = () => {

    return (
        <div className='container'>
            <Button type={'ghost'} onClick={counterStore.addCount}>
                {counterStore.count}
            </Button>
        </div>
    )
};

export default observer(App);
