import { useAtom, useAtomValue } from "jotai"
import { useRef, useEffect } from "react"
import { writePlaceNumberFlagAtom, errorAtom, errorTypeAtom } from "./atom"

interface props {
    col: number,
    row: number,
}

const useSquare = ({ col, row }: props) => {
    const [flag, writeFlag] = useAtom(writePlaceNumberFlagAtom)
    const error = useAtomValue(errorAtom)
    const ref = useRef<HTMLDivElement>(null!)
    const errorType = useAtomValue(errorTypeAtom)

    // ボードに数字を書き込む
    const handleRealPlaceNumberClick = () => {
        writeFlag({ row, col, flag: true })
    }

    // エラーがあった際にアニメーションのつけ外しをするためのuseEffect
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

    return {
        flag,
        writeFlag,
        handleRealPlaceNumberClick,
        error,
        ref,
        errorType
    }
}

export default useSquare
