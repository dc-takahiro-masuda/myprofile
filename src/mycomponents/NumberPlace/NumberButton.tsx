import React from "react"

interface props {
    num: number
    onClick: () => void
}

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