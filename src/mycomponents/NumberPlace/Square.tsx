import React, { useEffect, useRef } from "react"
import PlaceIcon from '@mui/icons-material/Place';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import PlaceRealNumber from "./PlaceRealNumber";
import { useAtom, useAtomValue } from "jotai";
import { errorAtom, errorTypeAtom, writePlaceNumberFlagAtom } from "./atom";

interface props {
    constFlag:boolean,
    col: number,
    row: number,
    num: number,
    className?: string
}

const Square: React.FC<props> = ({ constFlag, col, row, num, className }) => {
    const [flag, writeFlag] = useAtom(writePlaceNumberFlagAtom)
    const error = useAtomValue(errorAtom)
    const ref = useRef<HTMLDivElement>(null!)
    const errorType = useAtomValue(errorTypeAtom)

    const handleRealPlaceNumberClick = () => {
        console.log("clicked!")
        writeFlag({ row, col, flag: true })
        console.log(flag)
    }

    useEffect(() => {
        if (error[row][col]) {
            if (errorType === "row-error") {
                const timer1 = setTimeout(() => {
                    ref.current.classList.add("animate-duplicate-warning")
                }, col * 50)
                const timer2 = setTimeout(() => {
                    ref.current.classList.remove("animate-duplicate-warning")
                }, 600)
                return () => {
                    clearTimeout(timer1)
                    clearTimeout(timer2)
                }
            }
            if (errorType === "col-error") {
                const timer1 = setTimeout(() => {
                    ref.current.classList.add("animate-duplicate-warning")
                }, row * 50)
                const timer2 = setTimeout(() => {
                    ref.current.classList.remove("animate-duplicate-warning")
                }, 600)
                return () => {
                    clearTimeout(timer1)
                    clearTimeout(timer2)
                }
            }
            if (errorType === "area-error") {
                ref.current.classList.add("animate-duplicate-warning")
                const timer2 = setTimeout(() => {
                    ref.current.classList.remove("animate-duplicate-warning")
                }, 600)
                return () => {
                    clearTimeout(timer2)
                }
            }
        }
    }, [error])

    return (
        <div
            ref={ref}
            className={`border-box w-12 flex flex-col items-center p-3 border border-slate-300 bg-neutral-50 ${className} `}>
            <span className={`text-lg font-bold ${num === 0 && "invisible"}`}>
                {num}
            </span>
            <div className="h-4">
                <PlaceIcon
                    onClick={handleRealPlaceNumberClick}
                    color="primary"
                    className={`hover:scale-110 active:scale-90 ${constFlag && "hidden"}`}
                />
            </div>
        </div>
    )
}

export default Square