import React from 'react'

const CustomBtn = ({ text, myClass }) => {
    return (
        <button className={`font-semibold text-lg py-3 px-5 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-xl ${myClass}`}>
            {text}
        </button>

    )
}

export default CustomBtn
