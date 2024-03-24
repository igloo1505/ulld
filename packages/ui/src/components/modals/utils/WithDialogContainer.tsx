import React from 'react'
import clsx from 'clsx'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@ulld/tailwind/dialog'
import type { ButtonProps } from '@ulld/tailwind/button'


interface WithDialogContainerProps {
    Trigger: React.FC<ButtonProps>
    children: React.ReactNode
    open: boolean
    title?: string
    desc?: React.ReactNode
    footer?: React.FC<{ open: boolean, setOpen: (open: boolean) => void }>
    setOpen: (o: boolean) => void
    className?: string
}

const WithDialogContainer = ({ children, Trigger, open, setOpen, desc, title, footer, className }: WithDialogContainerProps) => {
    const Footer = footer
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                <Trigger
                    aria-expanded={open}
                />
            </DialogTrigger>
            {title && <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {desc && <DialogDescription>
                        {desc}
                    </DialogDescription>}
                </DialogHeader>
                <div className={clsx("p-4", className)}>
                    {children}
                </div>
                {Footer && <DialogFooter>
                    <Footer
                        open={open}
                        setOpen={setOpen}
                    />
                </DialogFooter>}
            </DialogContent>}
        </Dialog>

    )
}


WithDialogContainer.displayName = "WithDialogContainer"


export default WithDialogContainer;
