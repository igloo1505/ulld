import { NewBoardCardConfig } from '#/types/contentTypeSpecific/vancun'
import React from 'react'



export interface NewBoardCardModalProps {
    listId: number
    boardId: number
    open: boolean
    addCard: (data: NewBoardCardConfig) => void
}

const NewBoardCardModal = (props: NewBoardCardModalProps) => {
    return (
        <div></div>
    )
}


NewBoardCardModal.displayName = "NewBoardCardModal"


export default NewBoardCardModal;
