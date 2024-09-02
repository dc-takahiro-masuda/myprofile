import React, { useEffect, useRef } from "react"
import PlaceIcon from '@mui/icons-material/Place';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import PlaceRealNumber from "./PlaceRealNumber";
import { useAtom, useAtomValue } from "jotai";
import { errorAtom, errorTypeAtom, writePlaceNumberFlagAtom } from "./atom";
import useSquare from "./useSquare";

interface props {
    constFlag: boolean,
    col: number,
    row: number,
    num: number,
    className?: string
}

const Square: React.FC<props> = ({ constFlag, col, row, num, className }) => {
    const {
        handleRealPlaceNumberClick,
        ref,
    } = useSquare({ col, row })

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
