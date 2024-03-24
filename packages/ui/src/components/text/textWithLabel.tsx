import React from 'react'
import { Label } from '@ulld/tailwind/label'
import clsx from 'clsx'



interface TextWithLabelProps {
    children: React.ReactNode
    label: React.ReactNode
    id: string
    className?: string
}

const TextWithLabel = ({ children, label, id, className }: TextWithLabelProps) => {
    return (
        <div className={clsx("space-y-2", className)}>
            <Label htmlFor={id}>{label}</Label>
            <div id={id} className={""}>{children}</div>
        </div>
    )
}


TextWithLabel.displayName = "TextWithLabel"


export default TextWithLabel;
