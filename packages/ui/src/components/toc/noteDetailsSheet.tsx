"use client"
import React from 'react'
import { RootState, store, showNoteSheet } from '@ulld/state';
import { connect } from 'react-redux';
import PanelToc from './toc';
import { SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from '@ulld/tailwind/base';
import { CalendarAndDateManager } from '@ulld/api';
import clsx from 'clsx';



const connector = connect((state: RootState, props: any) => ({
    open: state.UI.panels.noteSheet,
    props: props
}))


interface NoteDetailsSheetProps {
    noteId: number
    open: boolean
    firstSync?: Date | string
    lastSync?: Date | string
}


export const NoteDetailsSheet = connector(({ noteId, firstSync, lastSync, open, }: NoteDetailsSheetProps) => {
    const setOpen = (o: boolean) => {
        store.dispatch(showNoteSheet(o))
    }

    return (
        <Sheet
            open={open}
            onOpenChange={(_open: boolean) => {
                if (_open !== open) {
                    setOpen(_open)
                }
            }}
        >
            <SheetContent
                forceMount
            >
                <SheetHeader>
                    <SheetTitle>Table of Contents</SheetTitle>
                </SheetHeader>
                <div
                    className={clsx("grid h-full")}
                    style={{
                        gridTemplateRows: `1fr ${firstSync && lastSync ? "4rem" : firstSync || lastSync ? "2rem" : "0px"}`
                    }}
                >
                    <PanelToc noteId={noteId} />
                    <SheetDescription
                        className={"flex flex-col justify-center items-start h-full"}
                    >
                        {Boolean(firstSync || lastSync) && (
                            <>
                                {firstSync && <span>{`Created: ${CalendarAndDateManager.formatDate(firstSync)}`}</span>}
                                {lastSync && <span>{`Last Sync: ${CalendarAndDateManager.formatDate(lastSync)}`}</span>}
                            </>
                        )}
                    </SheetDescription>
                </div>
            </SheetContent>
        </Sheet>
    )
})


NoteDetailsSheet.displayName = "NoteDetailsSheet"
