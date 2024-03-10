import React from 'react'
import "./flipcard.scss"
import { QAPairInput } from '../flipcardTypes'
import "../../../../styles/mdx.scss"
import "../../../../styles/compactMdx.scss"

interface FlipCardProps {
    item: QAPairInput
}

const FlipCard = ({ item }: FlipCardProps) => {
    return (
        <div
            className={"flipCardContainer question w-[560px] h-[400px]"}
            style={{
                perspective: "1000px"
            }}
        >
            <div className={"relative w-full h-full transition-transform duration-500"}
                style={{
                    transformStyle: "preserve-3d"
                }}
            >
            </div>
        </div>
    )


}

/* <FlipCardFront */
/*     question={item.question} */
/* /> */
/* <FlipCardBack answer={item.answer} /> */

FlipCard.displayName = "FlipCard"


export default FlipCard;
