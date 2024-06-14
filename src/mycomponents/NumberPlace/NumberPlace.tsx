"use client"

import { useAtom, useAtomValue } from "jotai"
import React from "react"
import { boardAtom, errorMessageAtom, errorTypeAtom } from "./atom"
import Square from "./Square"
import PlaceRealNumber from "./PlaceRealNumber"
import ConstSquare from "./ConstSquare"

interface props {
    constPos: number[][]
}


const NumberPlace: React.FC<props> = ({ constPos }) => {
    const [board, setBoard] = useAtom(boardAtom)
    const errorMessage = useAtomValue(errorMessageAtom)

    return (
        <div>
            <div className="flex justify-center h-6 font-semibold text-orange-400 mb-1">
                {errorMessage}
            </div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((cell, colIndex) => {
                        let className = ""
                        if (rowIndex === 0) {
                            className += "border-t-2 border-t-slate-700 "
                        }
                        if (rowIndex === 2) {
                            className += "border-b-slate-700 "
                        }
                        if (rowIndex === 5) {
                            className += "border-b-slate-700 "
                        }
                        if (rowIndex === 8) {
                            className += "border-b-2 border-b-slate-700 "
                        }
                        if (colIndex === 0) {
                            className += "border-l-2 border-l-slate-700 "
                        }
                        if (colIndex === 2) {
                            className += "border-r-slate-700 "
                        }
                        if (colIndex === 5) {
                            className += "border-r-slate-700 "
                        }
                        if (colIndex === 8) {
                            className += "border-r-2 border-r-slate-700 "
                        }
                        return (
                            <div className="relative">
                                <PlaceRealNumber col={colIndex} row={rowIndex} />
                                <Square 
                                constFlag={
                                    constPos[rowIndex][colIndex] !== 0 ? true : false
                                }
                                col={colIndex} 
                                row={rowIndex} 
                                className={className} 
                                key={colIndex} 
                                num={cell} />
                            </div>
                        )
                    })}
                </div>
            ))}

        </div>
    )
}

export default NumberPlace