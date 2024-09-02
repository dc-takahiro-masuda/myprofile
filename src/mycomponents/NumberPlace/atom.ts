import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import type { Getter, PrimitiveAtom, Setter } from "jotai"

type NumberPlaceBoard = number[][]
type Array2DFlag = boolean[][]

//　初期状態
const initialBoard: NumberPlaceBoard = [
    [0,2,0,0,0,0,6,0,0],
    [0,0,0,0,9,0,0,5,0],
    [0,0,0,0,0,3,0,0,1],
    [0,0,5,0,0,0,0,7,0],
    [2,0,0,0,0,2,0,0,0],
    [0,0,0,9,0,7,3,0,0],
    [0,4,0,0,0,0,0,0,5],
    [0,0,0,7,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0]
]

// 数字を置くためのインターフェースの初期状態　最初は表示しない
const initialFlag: Array2DFlag = Array.from(
    { length: 9 },
    () => Array(9).fill(false)
)

// 数字の重複メッセージを管理するアトム
export const errorAtom = atom<Array2DFlag>(initialFlag)
export const errorTypeAtom = atom<string>("none")
export const errorMessageAtom = atom<string>(
    (get) => {
        const errorType = get(errorTypeAtom)
        switch(errorType) {
            case "row-error":
                return "同じ行で数字が重複しているよ！"
            case "col-error":
                return "同じ列で数字が重複しているよ！"
            case "area-error":
                return "同じエリアで数字が重複しているよ！"
            default:
                return ""
        }
    }
)

//　ボードに書き込みをするためのatom
export const boardAtom = atomWithStorage<NumberPlaceBoard>("board",initialBoard)
export const writeBoardAtom = atom(
    (get: Getter) => get(boardAtom),
    (get: Getter, set: Setter, update: { row: number, col: number, num: number }) => {
        const { row, col, num } = update

        const currentBoard = get(boardAtom)

        if (num !== 0) {
            for (let i=0;i<9;i++) {
                if (currentBoard[row][i] === num) {
                    const newError = initialFlag.map((rowArray, rowIndex) =>
                        rowArray.map((_, colIndex) =>
                            rowIndex === row ? true : false
                        )
                    )
                    set(errorAtom,newError)
                    set(errorTypeAtom,"row-error")
                    set(placeNumberFlagAtom,initialFlag)
                    return
                }
            }
    
            for (let i=0;i<9;i++) {
                if (currentBoard[i][col] === num) {
                    const newError = initialFlag.map((rowArray, rowIndex) =>
                        rowArray.map((_, colIndex) =>
                            colIndex === col ? true : false
                        )
                    )
                    set(errorAtom,newError)
                    set(errorTypeAtom,"col-error")
                    set(placeNumberFlagAtom,initialFlag)
                    return
                }
            }
    
            const sh = Math.floor(row/3) * 3
            const sw = Math.floor(col/3) * 3
            for (let i=sh;i<sh+3;i++) {
                for (let j=sw;j<sw+3;j++) {
                    if (currentBoard[i][j] === num) {
                        for (let h=sh;h<sh+3;h++) {
                            for (let w=sw;w<sw+3;w++) {
                                const newError = initialFlag.map((rowArray, rowIndex) =>
                                    rowArray.map((_, colIndex) =>
                                        (Math.floor(rowIndex/3) === sh/3 && Math.floor(colIndex/3) === sw/3) ? true : false
                                    )
                                )
                                console.log("newError")
                                console.log(newError)
                                set(errorAtom,newError)
                                set(errorTypeAtom,"area-error")
                                set(placeNumberFlagAtom,initialFlag)
                                return
                            }
                        }
                    }
                }
            }
        }

        const newBoard = currentBoard.map((rowArray, rowIndex) =>
            rowArray.map((cell, colIndex) =>
                rowIndex === row && colIndex === col ? num : cell
            )
        );
        set(boardAtom, newBoard)
        set(placeNumberFlagAtom,initialFlag)
        set(errorTypeAtom,"none")
    }
)

// 数字を置くためのインターフェースが表示されているか否か
export const placeNumberFlagAtom = atom<Array2DFlag>(initialFlag)
export const writePlaceNumberFlagAtom = atom(
    (get: Getter) => get(placeNumberFlagAtom),
    (get: Getter, set: Setter, update: { row: number, col: number, flag: boolean }) => {
        const { row, col, flag } = update
        const currentFlag = initialFlag
        const newFlag = currentFlag.map((rowArray, rowIndex) =>
            rowArray.map((cell, colIndex) =>
                rowIndex === row && colIndex === col ? flag : cell
            )
        );
        set(placeNumberFlagAtom, newFlag)
    }
)

