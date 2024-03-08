"use client"
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import clsx from 'clsx';
import { RootState, store, showNoteSheet, setTocPanelContent, initialState } from '@ulld/state';




const connector = connect((state: RootState, props: any) => ({
    activeTocId: state.functionality.tocNoteId,
    currentToc: state.functionality.currentToc,
    props: props
}))

interface PanelTocProps {
    noteId: number
    activeTocId: typeof initialState.functionality.tocNoteId
    currentToc: typeof initialState.functionality.currentToc
}

const plMap: { [k: string]: string } = {
    "1": "pl-[0px]",
    "2": "pl-[16px]",
    "3": "pl-[32px]",
    "4": "pl-[48px]",
    "5": "pl-[64px]",
    "6": "pl-[80px]",
}


const TocItem = ({ item }: { item: NonNullable<typeof initialState.functionality.currentToc>[number] }) => {
    return (
        <a
            href={`#${item[2]}`}
            className={clsx("text-sm", plMap[`${item[0]}`])}
            onClick={() => store.dispatch(showNoteSheet(false))}
            dangerouslySetInnerHTML={{ __html: item[1] }}
        />
    )
}

const PanelToc = connector(({ noteId, currentToc, activeTocId }: PanelTocProps) => {

    useEffect(() => {
        if (activeTocId !== noteId || !currentToc) {
            setTocPanelContent(noteId)
        }
    }, [])

    return (
        <div
            id="sheet-toc"
            className={"flex flex-col justify-start items-start overflow-y-auto mt-3 max-h-full pb-4"}
        >
            {currentToc && currentToc.map((item, i) => {
                return <TocItem item={item} key={`toc-${i}`} />
            })}
        </div>
    )
})


PanelToc.displayName = "PanelToc"


export default PanelToc;
