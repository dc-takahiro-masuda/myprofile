import { useAtom, useAtomValue } from "jotai"
import React, { useEffect, useLayoutEffect, useRef } from "react"
import { boardAtom, errorAtom, placeNumberFlagAtom, writeBoardAtom, writePlaceNumberFlagAtom } from "./atom"
import NumberButton from "./NumberButton"

interface props {
    row: number,
    col: number
}

const PlaceRealNumber: React.FC<props> = ({ row, col }) => {
    const ref = useRef<HTMLDivElement>(null!)
    const flag = useAtomValue(writePlaceNumberFlagAtom)
    const error = useAtomValue(errorAtom)
    const [board, setBoard] = useAtom(writeBoardAtom)
    const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            ref.current.style.display = "none";
        }
    };

    useEffect(() => {
        if (flag[row][col]) {
            ref.current.style.display = "inline"
        } else {
            ref.current.style.display = "none"
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [flag, error])

    return (
        <div ref={ref}
            className="transform whitespace-nowrap hidden rounded bg-black p-2 text-white
        absolute left-1/2 -translate-x-1/2 -translate-y-full
        before:content-[''] before:absolute before:-translate-x-1/2
        before:left-1/2 before:top-full before:border-[12px] before:border-transparent
        before:border-t-black">
            どの数字を置く？
            <div className="flex flex-col items-center">
                {
                    numbers.map((arr, i) => (
                        <div>
                            {arr.map((num, j) => {
                                return (
                                    <NumberButton
                                        key={j}
                                        num={num}
                                        onClick={() => {
                                            setBoard({ row, col, num })
                                        }} />
                                )
                            })}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PlaceRealNumber
