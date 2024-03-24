"use client"
import React, { useState } from 'react'
import BoardListContainer from './boardListContainer';
import { Input } from '@ulld/tailwind/input';
import { Button } from '@ulld/tailwind/button';
import { BoardListProps } from './boardList';
import { PlusIcon } from 'lucide-react';

interface DefaultEmptyBoardListProps extends Omit<BoardListProps, "list"> {
    appendList: (listTitle: string) => Promise<void>
    listId: number
}

const DefaultEmptyBoardList = ({ appendList, listId, boardId, showNewBoardCardModal }: DefaultEmptyBoardListProps) => {
    const [newListInputValue, setNewListInputValue] = useState("")
    const handleAppend = async () => {
        if (newListInputValue.length < 3) return
        await appendList(newListInputValue)
        setNewListInputValue("")
    }

    return (
        <BoardListContainer
            isDefaultList
            title="Create List"
            listId={listId}
            boardId={boardId}
            showNewBoardCardModal={showNewBoardCardModal}
            titleMuteUnlessFocus
        >
            <Input
                value={newListInputValue}
                onChange={(e) => setNewListInputValue(e.target.value)}
                placeholder="New List Title"
                className={"mb-4"}
            />

            <Button
                className={"w-full"}
                disabled={newListInputValue.length < 3}
                onClick={handleAppend}
            >
                <PlusIcon className="mr-2 h-4 w-4" />
                New List
            </Button>
        </BoardListContainer>
    )
}


DefaultEmptyBoardList.displayName = "DefaultEmptyBoardList"


export default DefaultEmptyBoardList;
