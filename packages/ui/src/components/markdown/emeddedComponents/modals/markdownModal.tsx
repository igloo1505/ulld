import { Separator } from '@ulld/tailwind/separator'
import clsx from 'clsx'
import React, { useId } from 'react'
import "../../../../styles/modal.scss"
import CloseModalListener from './closeModalListener'


interface MarkdownModalProps {
    defaultOpen?: boolean
    title?: string
    id?: string
    children: React.ReactNode
}


export const MarkdownModal = ({ defaultOpen, id, title, children }: MarkdownModalProps) => {
    const _id = useId()
    const emId = id || _id
    return (
        <div
            className={clsx("modalContainer fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-4 bg-black bg-opacity-70 transition-transform duration-300", defaultOpen && "open")}
            id={emId}
        >
            <div className={"bg-popover max-w-[calc(100vw-2rem)] md:max-w-screen-sm lg:max-w-screen-md text-popover-foreground relative border border-border rounded-lg"}>
                <CloseModalListener id={emId} />
                {title && (
                    <>
                        <h2 className={"text-lg md:text-xl font-semibold tracking-wide pl-3 pr-4 py-2"}>{title}</h2>
                        <Separator />
                    </>
                )}
                <div className={"px-4 py-3 md:px-5 md:py-4"}>
                    {children}
                </div>
            </div>
        </div>
    )
}




MarkdownModal.displayName = "MarkdownModal"

