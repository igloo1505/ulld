import { CellSidebarProps, notebookActions, selectActiveCell } from '@datalayer/jupyter-react';
import React, { MouseEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@ulld/tailwind/button';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, SquareIcon, XIcon } from 'lucide-react';
import clsx from 'clsx';



interface NotebookCellSidebarMenuProps extends CellSidebarProps {

}

interface NotebookSidebarMenuItemProps extends React.ComponentPropsWithoutRef<"button"> {
    label: string
    icon: React.FC<{ className?: string }>
    title: string
    action: (e: MouseEvent<HTMLButtonElement>) => void
}


const NotebookSidebarMenuItem = ({ label, icon: Icon, ...props }: NotebookSidebarMenuItemProps) => {
    const { action, ..._props } = props
    return (
        <Button
            variant="outline"
            size="sm"
            {..._props}
            className={clsx("w-full grid grid-cols-[30px_1fr] place-items-center px-2", props.className)}
            onClick={action}
        >
            <Icon className={"w-3 h-3"} />
            <div className={"text-[10px] w-full text-left"}>
                {label}
            </div>
        </Button>
    )
}


const NotebookCellSidebarMenu = ({ notebookId, cellId, nbgrader }: NotebookCellSidebarMenuProps) => {
    const [visible, setVisible] = useState(false)
    const [activeCell, setActiveCell] = useState<ReturnType<typeof selectActiveCell> | undefined | null>(null)
    const dispatch = useDispatch()
    const _activeCell = selectActiveCell(notebookId)

    useEffect(() => {
        setActiveCell(_activeCell)
    }, [notebookId])

    useEffect(() => {
        if (!activeCell) return
        /// @ts-ignore
        const cellWidget = activeCell.layout?.widgets[0];
        setVisible(cellWidget?.node.id === cellId);
    }, [cellId, activeCell])

    const menuItems: NotebookSidebarMenuItemProps[] = [
        {
            label: "Run",
            title: "Run cell",
            icon: ChevronRightIcon,
            action: (e) => {
                e.preventDefault()
                /* activeCell?.fit() */
                dispatch(notebookActions.run.started(notebookId));
            }
        },
        {
            label: "Code",
            icon: ChevronUpIcon,
            title: "Insert code cell above",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.insertAbove.started({ uid: notebookId, cellType: "code" }));
            }
        },
        {
            label: "Markdown",
            icon: ChevronUpIcon,
            title: "Insert markdown cell above",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.insertAbove.started({ uid: notebookId, cellType: "markdown" }));
            }
        },
        {
            label: "To Markdown",
            icon: SquareIcon,
            title: "Convert to markdown cell",
            className: "hidden group-[.activeCodeCell]/jupyterSideMenu:grid",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.changeCellType.started({ uid: notebookId, cellType: "markdown" }));
            }

        },
        {
            label: "To Code",
            icon: SquareIcon,
            title: "Convert to code cell",
            className: "hidden group-[.activeMarkdownCell]/jupyterSideMenu:grid",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.changeCellType.started({ uid: notebookId, cellType: "code" }));
            }

        },
        {
            label: "Markdown",
            icon: ChevronDownIcon,
            title: "Insert markdown cell below",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.insertBelow.started({ uid: notebookId, cellType: "markdown" }));
            }
        },
        {
            label: "Code",
            icon: ChevronDownIcon,
            title: "Insert code cell below",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.insertBelow.started({ uid: notebookId, cellType: "code" }));

            }
        },
        {
            label: "Delete",
            icon: XIcon,
            title: "Delete Cell",
            action: (e) => {
                e.preventDefault()
                dispatch(notebookActions.delete.started(notebookId));
            }
        },
    ]

    return (
        <div className={clsx("grid-cols-1 gap-0 group/jupyterSideMenu", activeCell?.model?.type === "code" && "activeCodeCell", activeCell?.model?.type === "markdown" && "activeMarkdownCell", visible ? "grid" : "hidden")}>
            {menuItems.map((item) => {
                return <NotebookSidebarMenuItem key={item.title} {...item} />
            })}
        </div>
    )
}


NotebookCellSidebarMenu.displayName = "NotebookCellSidebarMenu"


export default NotebookCellSidebarMenu;
