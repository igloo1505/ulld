import { Card, CardHeader, CardTitle } from '#/components/shad/ui/card'
import { VanCunBoardDetails } from '#/types/contentTypeSpecific/vancun'
import React from 'react'



interface KanBanBoardCardProps {
    card: NonNullable<VanCunBoardDetails>["lists"][number]["cards"][number]
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
