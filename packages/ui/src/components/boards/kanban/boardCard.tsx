import { Card, CardHeader, CardTitle } from '@ulld/tailwind/card'
import React from 'react'
import { KanBanBoardDetails } from './types'



interface KanBanBoardCardProps {
    card: NonNullable<KanBanBoardDetails>["lists"][number]["cards"][number]
}


const KanBanBoardCard = ({ card }: KanBanBoardCardProps) => {
    return (
        <Card className={"w-full h-fit"}>
            <CardHeader>
                <CardTitle>{card.label}</CardTitle>
            </CardHeader>

        </Card>
    )
}


KanBanBoardCard.displayName = "KanBanBoardCard"


export default KanBanBoardCard;
