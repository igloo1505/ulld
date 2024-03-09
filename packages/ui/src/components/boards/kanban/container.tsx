"use client"
import React, { useState } from 'react'
import BoardList from './boardList'
import DefaultEmptyBoardList from './defaultEmptyList'
import { client } from '@ulld/api'
import { KanBanBoardDetails } from './types'


interface VanCunBoardContainerProps {
    board: NonNullable<KanBanBoardDetails>
}

const columnWidth = `250px`

const VanCunBoardContainer = ({ board }: VanCunBoardContainerProps) => {
    const [currentBoard, setCurrentBoard] = useState(board)
    const [showNewCardModal, setShowNewCardModal] = useState(false)
    const appendNewList = async (listTitle: string) => {
        let newList = await client.boards.appendNewListToBoard.mutate({
            boardId: board.id,
            list: {
                title: listTitle
            }
        })
        setCurrentBoard({
            ...currentBoard,
            lists: newList?.lists ? newList.lists : currentBoard.lists
        })
    }
    return (
        <div
            className={"group/boardContainerOuter w-full max-w-full max-h-screen overflow-x-auto overflow-y-hidden "}
        >
            <div
                className={"group/boardContainerInner grid grid-rows-1 gap-x-2"}
                style={{
                    gridTemplateColumns: `repeat(${currentBoard.lists.length + 1}, ${columnWidth})`
                }}
            >
                {currentBoard.lists.map((l) => {
                    return <BoardList
                        list={l}
                        boardId={currentBoard.id}
                        showNewBoardCardModal={() => setShowNewCardModal(true)}
                        key={l.id}
                    />
                })}
                <DefaultEmptyBoardList
                    listId={-1}
                    boardId={currentBoard.id}
                    showNewBoardCardModal={() => setShowNewCardModal(true)}
                    appendList={appendNewList}
                />
            </div>
        </div>
    )
}


VanCunBoardContainer.displayName = "VanCunBoardContainer"


export default VanCunBoardContainer;
