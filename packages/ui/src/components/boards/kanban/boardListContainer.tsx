import clsx from 'clsx'
import React from 'react'
import ListAddCardButton from './listAddCardButton'

interface BoardListContainerProps {
    children: React.ReactNode
    listId: number
    boardId: number
    title: string | null
    titleMuteUnlessFocus?: boolean
    showNewBoardCardModal: () => void
    isDefaultList?: boolean
}


const BoardListContainer = ({ children, title, listId, boardId, titleMuteUnlessFocus, showNewBoardCardModal, isDefaultList }: BoardListContainerProps) => {
    return (
        <div className={"group/boardList w-full h-fit max-h-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center"}>
            {title && <H4 className={clsx("w-full text-center", titleMuteUnlessFocus && "text-muted-foreground group-focus-within/boardList:text-foreground transition-colors duration-150")}>{title}</H4>}
            <div className={"w-full h-full px-2 py-3 border rounded-md"}>
                {children}
                {!isDefaultList && <ListAddCardButton
                    listId={listId}
                    boardId={boardId}
                    showNewBoardCardModal={showNewBoardCardModal}
                />}
            </div>
        </div>
    )
}


BoardListContainer.displayName = "BoardListContainer"


export default BoardListContainer;
