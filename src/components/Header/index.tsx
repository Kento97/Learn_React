import React from 'react'

interface Props {
    openInput: () => void
}

export default function Header(props: Props) {
    const {openInput} = props
    return (
        <div className='bg-blue-400 flex text-white relative rounded-t'>
            <h1 className='mx-auto my-2 '>事件待办</h1>
            <span className='text-2xl font-bold absolute right-3 top-0 bottom-0 cursor-pointer select-none' onClick={openInput}>&#43;</span>
        </div>
    )
}
