import ContentBody from "@/mycomponents/ContentBody"
import NumberPlace from "@/mycomponents/NumberPlace/NumberPlace"
import React from "react"

const Game: React.FC = () => {
    return (
        <ContentBody>
            <h2 className="text-xl font-bold mb-2">数独ゲームに挑戦！</h2>
            <NumberPlace constPos={
                [
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
            }/>
        </ContentBody>
    )
}

export default Game