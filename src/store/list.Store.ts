import {makeAutoObservable} from "mobx";

class ListStore {
    list = ['react', 'vue']

    constructor() {
        makeAutoObservable(this)
    }

    addList = () => {
        this.list.push("angular")
    }
    resetList = () => this.list.length = 2
}

export default ListStore
