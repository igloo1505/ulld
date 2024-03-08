import { VanCunBoardDetails } from '#/types/contentTypeSpecific/vancun'
import React from 'react'
import KanBanBoardCard from './boardCard'
import BoardListContainer from './boardListContainer'



export interface BoardListProps {
    list: NonNullable<VanCunBoardDetails>["lists"][number]
    boardId: number
    showNewBoardCardModal: () => void
}


const BoardList = ({ list, boardId, showNewBoardCardModal }: BoardListProps) => {
    return (
        <BoardListContainer
            title={list.title}
            listId={list.id}
            boardId={boardId}
            showNewBoardCardModal={showNewBoardCardModal}
        >
            {list.cards.map((l) => {
                return <KanBanBoardCard card={l} key={l.id} />
            })}
        </BoardListContainer>
    )
}


BoardList.displayName = "BoardList"


export default BoardList;
