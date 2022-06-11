import ListStore from "./list.Store";
import CounterStore from "./counter.Store";
import React from "react";


class RootStore {
    counterStore: CounterStore;
    listStore: ListStore;

    constructor() {
        this.counterStore = new CounterStore()
        this.listStore = new ListStore()
    }
}

const rootStore = new RootStore();

const context = React.createContext(rootStore);
const useStore = () => React.useContext(context);

export default useStore
