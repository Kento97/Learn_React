// @flow
import React, {ChangeEvent, useRef, useState} from 'react';
import {Todo} from "../../App";
import Modal from 'react-modal';
import dayjs from 'dayjs'

type Props = {
    data: Todo,
    removeTodo: (arg: number) => void,
    editTodo: (arg: Todo) => void,
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement("#root")
const TodoItem = ({data, removeTodo, editTodo}: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isShowEditModal, setIsShowEdit] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        editTodo({
            id: data.id,
            value: e.target.value,
            completed: false
        })
    }
    const handleCheck = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        editTodo({
            id: data.id,
            value: data.value,
            completed: (e.target as HTMLInputElement).checked
        })
    }
    return (
        <>
            <li className='flex text-[12px] py-2'>
                <div className='p-1 flex items-center'>
                    <input type="checkbox" className='my-auto' defaultChecked={data.completed} onClick={(e) => {
                        handleCheck(e)
                    }}/>
                </div>
                <span
                    className={data.completed
                        ? 'line-through  w-[150px] flex flex-1 items-center'
                        : 'w-[150px] flex flex-1 items-center'}>
                    <p className='items-center whitespace-nowrap overflow-hidden overflow-ellipsis'>{data.value}</p>
                </span>
                <div className='flex'>
                    <button className='bg-blue-300 px-2 py-1 rounded' onClick={openModal}>查看</button>
                    <button className='bg-amber-200 px-2 py-1 mx-1 rounded'
                            onClick={() => setIsShowEdit((arg) => true)}>编辑
                    </button>
                    <button className='bg-red-600 px-2 py-1 mr-1 rounded' onClick={() => removeTodo(data.id)}>删除
                    </button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <div>时间:{dayjs(data.id).format('YYYY MMMM DD')}</div>
                    <div>内容:{data.value}</div>
                    <div>状态:{data.completed ? '已完成' : '未完成'}</div>
                    <button onClick={closeModal} className='border rounded w-full bg-black text-white'>close</button>
                </Modal>

                <Modal
                    isOpen={isShowEditModal}
                    onRequestClose={() => setIsShowEdit((arg) => false)}
                    style={customStyles}
                >
                    <div>时间:{dayjs(data.id).format('YYYY MMMM DD')}</div>
                    <div>内容:<input type='text' value={data.value} onChange={handleChange}/></div>
                    <div>状态:{data.completed ? '已完成' : '未完成'}</div>
                    <button onClick={() => setIsShowEdit((arg) => false)}
                            className='border rounded w-full bg-black text-white'>close
                    </button>
                </Modal>
            </li>

        </>
    );
};

export default TodoItem;
