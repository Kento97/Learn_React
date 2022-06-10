import {computed, makeAutoObservable} from "mobx";

class CounterStore {
    //定义数据
    count = 0;
    list = [1, 2, 3, 4, 5]

    constructor() {
        makeAutoObservable(this, {
            filterList: computed
        })
    }
    //计算属性 filterList
    get filterList() {
        return this.list.filter(item => item > this.count)
    }

    addCount = () => {
        this.count++
    }

    reset = () => this.count = 0;
}

const counterStore = new CounterStore()

export default counterStore
