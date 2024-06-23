"use client"
import React, { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import { useToast } from '@ulld/tailwind/use-toast';
import {Checkbox} from "@ulld/tailwind/checkbox"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import clsx from 'clsx'



export interface MdxInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type?: HTMLInputTypeAttribute
    defaultChecked?: boolean
}

const MdxCheckbox = (props: MdxInputProps) => {
    const _checked = props.checked || props.defaultChecked
    const [checked, setChecked] = useState(_checked)
    const ref = useRef<HTMLButtonElement>(null!)
    const { toast } = useToast()
    const path = usePathname()
    const handleClick = async () => {
        const content = ref.current?.parentElement?.innerText
        console.log("content: ", content)
        if (!content) {
            toast({
                title: "Uh oh.",
                description: "Currently only checkboxes in lists can be toggled directly from the UI."
            })
        }
        if (content) {
            console.log(`Toggle checkbox functionality not yet implemented.`)
            /* const { success, checkedState } = await toggleCheckbox(content, path) */

        }
    }
    return (
        <Checkbox
            {...props as React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>}
            className={clsx("not-prose", props.className)}
            ref={ref}
            disabled={false}
            checked={checked}
            onClick={handleClick}
        />
    )
}


MdxCheckbox.displayName = "MdxCheckbox"


export default MdxCheckbox;
