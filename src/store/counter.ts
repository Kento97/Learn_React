import {makeAutoObservable} from "mobx";

class CounterStore {
    //定义数据
    count = 0;

    constructor() {
        makeAutoObservable(this)
    }

    addCount = () => {
        this.count++
    }

}

const counterStore = new CounterStore()

export default counterStore
