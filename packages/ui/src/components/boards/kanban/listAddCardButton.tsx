import { Button } from '@ulld/tailwind/base'
import { PlusIcon } from 'lucide-react'
import React from 'react'

interface ListAddCardButtonProps {
    showNewBoardCardModal: () => void
    listId: number
    boardId: number
}

const ListAddCardButton = ({ listId, boardId, showNewBoardCardModal }: ListAddCardButtonProps) => {
    return (
        <Button
            className={"w-full"}
            onClick={showNewBoardCardModal}
        >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Card
        </Button>
    )
}


ListAddCardButton.displayName = "ListAddCardButton"


export default ListAddCardButton;
