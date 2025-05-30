import React from 'react'

const Button = ({text,className,type="button",onClick,disabled}) => {
  return (
    <>
       <button className={`bg-gradient-to-r from-[#FD644F] to-[#FF8871] text-white px-4 py-2 cursor-pointer rounded-md font-semibold hover:shadow-lg transition duration-300 ease-in-out ${className}`}
       type={type}
       onClick={onClick}
       disabled={disabled}>
            {text}
        </button>
    </>
  )
}

export default Button
