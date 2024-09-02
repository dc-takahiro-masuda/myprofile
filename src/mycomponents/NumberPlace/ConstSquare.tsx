import React from "react"

// 初期からおかれている数字のコンポーネント
const ConstSquare: React.FC<{num: number,className:string}> = ({num,className}) => {
    return (
        <div
            className={`border-box w-12 flex flex-col items-center p-3 border border-slate-300 bg-neutral-50 ${className}`}>
            <span className={`text-lg font-bold text-green-500`}>
                {num}
            </span>
        </div>
    )
}

export default ConstSquare
