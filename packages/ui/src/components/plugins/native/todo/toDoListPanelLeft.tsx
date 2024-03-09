import React from 'react'
import TodoListSelector from './todoListSelector';
import ToDoListPanelContainer from './toDoListPanelContainer';
import { ToDoPageData } from '.';



interface ToDoListStatePanelProps {
    lists: ToDoPageData["lists"]
    currentList?: string | null
}

const ToDoListStatePanel = ({ lists, currentList }: ToDoListStatePanelProps) => {
    return (
        <ToDoListPanelContainer barContents={<TodoListSelector />}>
            test
        </ToDoListPanelContainer>
    )
}


ToDoListStatePanel.displayName = "ToDoListStatePanel"


export default ToDoListStatePanel;
