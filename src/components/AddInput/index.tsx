// @flow
import React, {useState} from 'react';

type Props = {
    isInputShow: boolean,
    addTodo: (arg: string) => void
};
const AddInput = ({isInputShow = false, addTodo}: Props) => {
    const [inputValue, setInputValue] = useState('')
    const handleClick = () => {
        if (inputValue) {
            addTodo(inputValue)
            setInputValue((arg) => '')
        }
    }
    return (
        <>
            {
                isInputShow
                && (
                    <div className="flex justify-between text-white pl-2 mt-1">
                        <input
                            type='text' placeholder='请输入待办事件'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value.trim())}
                            className='shadow rounded outline-none w-[250px] text-gray-500 pl-1'/>
                        <button
                            className='mr-1 border text-[14px] px-2 py-1 rounded bg-green-500 active:bg-green-700'
                            onClick={handleClick}>新增
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default AddInput;
