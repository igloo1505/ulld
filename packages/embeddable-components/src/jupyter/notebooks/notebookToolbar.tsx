"use client"
import { useDispatch } from 'react-redux';
import { notebookActions, selectActiveCell, selectKernelStatus, selectNotebookModel } from "@datalayer/jupyter-react";
import { useMemo } from 'react';
import { ValidIconName, DynamicIcon } from '../../icons/DynamicIcon';
import { Button } from "@ulld/tailwind/button"


interface IconItem {
    name: ValidIconName
    disabled: boolean
    label: string
    onClick: () => void
}

const IconButton = ({ name, onClick, disabled }: { name: ValidIconName, disabled: boolean, onClick: () => void }) => {
    const Icon = useMemo(() => {
        return <DynamicIcon
            name={name}
            className={"w-4 h-4"}
        />
    }, [])

    return (
        <Button
            className={"flex justify-center items-center"}
            onClick={onClick}
            size="icon"
            disabled={disabled}
        >
            {Icon}
        </Button>
    )
}

type CellType = "code" | "cell" | "raw"

export const NotebookToolbar = (props: { notebookId: string }) => {
    const { notebookId } = props;
    /* const [type, setType] = useState<CellType>('code'); */
    const dispatch = useDispatch();
    const kernelStatus = selectKernelStatus(notebookId);
    const activeCell = selectActiveCell(notebookId)
    const notebookModel = selectNotebookModel(notebookId)

    const addCell = (type: CellType, loc: "Above" | "Below") => {
        dispatch(notebookActions[`insert${loc}`].started({
            uid: notebookId,
            cellType: type,
        }));
    }

    const getActiveCellIndex = () => {
        let l = notebookModel?.model?.cells.length || 0
        if (!activeCell?.id) return -1
        for (var i = 0; i < l; i++) {
            const item = notebookModel?.model?.cells.get(i)
            if (item?.id === activeCell.id) {
                return i
            }
        }
        return -1
    }

    const iconsLeft: IconItem[] = [
        {
            name: "play",
            onClick: () => dispatch(notebookActions.run.started(notebookId)),
            label: "Run Cell",
            disabled: kernelStatus !== 'idle'
        },
        {
            name: "chevron-right-square",
            onClick: () => dispatch(notebookActions.runAll.started(notebookId)),
            label: "Run All Cells",
            disabled: kernelStatus !== 'idle'
        },
        {
            name: "ban",
            onClick: () => dispatch(notebookActions.interrupt.started(notebookId)),
            label: "Interrupt",
            disabled: kernelStatus === 'idle'
        },
    ]


    const saveNotebook = () => {
        dispatch(notebookActions.save.started({ uid: notebookId, date: new Date() }))
        /* toast({ */
        /*     title: "Success", */
        /*     description: "This notebook has been saved successfully." */
        /* }) */
    }

    const SaveButton = useMemo(() => <DynamicIcon
        name="hard-drive-download"
        className="mr-2 h-4 w-4"
    />, [])

    return (
        <div className={"w-full flex flex-row justify-between items-center px-6 my-2"}>
            <div className={"flex flex-row justify-start items-center gap-3"}>
                {iconsLeft.map((item, i) => {
                    return <IconButton
                        {...item}
                        key={`notebookId-left-${i}`}
                    />
                })}
            </div>
            <div className={"flex flex-row justify-start items-center gap-3"}>
                <Button onClick={saveNotebook}>
                    {SaveButton}
                    Save
                </Button>
            </div>
        </div>
    )
};
export default NotebookToolbar;
//# sourceMappingURL=NotebookToolbar.js.map
