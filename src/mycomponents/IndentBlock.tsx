import React from 'react'

interface IndentBlockProps {
    title: string,
    content: React.ReactNode
}

const IndentBlock : React.FC<IndentBlockProps> = ({title,content}) => {
    return (
        <div className='p-1'>
            <h2 className='font-bold text-xl mt-4'>{title}</h2>
            <div className='transform translate-x-4'>
                {content}
            </div>
        </div>
    )
}

export default IndentBlock