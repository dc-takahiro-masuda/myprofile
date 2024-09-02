import React from "react"

interface props {
    num: number
    onClick: () => void
}

//　数字1マスを表示するためのコンポーネント
const NumberButton: React.FC<props> = ({ num, onClick }) => {
    return (
        <button
            className="w-6 border border-1"
            onClick={onClick}
        >
            {num}
        </button>
    )
}

export default NumberButton
