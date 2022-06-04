import React, {useEffect, useState} from "react";
import MyHeader from "./components/Header";
import AddInput from "./components/AddInput";
import {useUpdateEffect} from "ahooks";
import TodoItem from "./components/TodoItem";

export interface Todo {
    id: number,
    completed: boolean,
    value: string
}

const App = () => {
    const [isInputShow, setIsInputShow] = useState(false)
    const [todoList, setTodoList] = useState<Todo[]>([])
    const openInput = () => setIsInputShow((arg) => !arg)
    const addTodo = (value: string) => {
        setTodoList((todoList) => [{id: Date.now(), completed: false, value: value}, ...todoList])
        setIsInputShow(() => false)
    }
    const removeTodo = (id: number) => {
        const newList = todoList.filter((todo) => todo.id !== id)
        setTodoList(newList)
    }
    const editTodo = (newTodo: Todo) => {
        const newList = todoList.map((todo) => {
            if (todo.id !== newTodo.id) {
                return todo
            } else {
                return newTodo
            }
        })
        setTodoList((a) => newList)
    }
    useEffect(() => {
        const todoData = JSON.parse(sessionStorage.getItem('todoData')!)
        setTodoList((prev) => todoData ?? [])
    }, [])

    useUpdateEffect(() => {
        sessionStorage.setItem('todoData', JSON.stringify(todoList))
    }, [todoList])
    return (
        <div className="w-80 h-[600px] mx-auto mt-20 shadow-xl rounded" id='AppComponent'>
            <MyHeader openInput={openInput}/>
            <AddInput isInputShow={isInputShow} addTodo={addTodo}/>
            <ul>
                {
                    todoList.map((todo) => (
                        <TodoItem data={todo} key={todo.id} removeTodo={removeTodo} editTodo={editTodo}/>
                    ))
                }
            </ul>

        </div>
    );
};

export default App;
