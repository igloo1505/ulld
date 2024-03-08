"use client"
import React, { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useRef, useState } from 'react'
import { Checkbox } from '../shad/ui/checkbox';
import { usePathname } from 'next/navigation';
import { toggleCheckbox } from '#/actions/client/async';
import { useToast } from '../shad/ui/use-toast';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"



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
            const { success, checkedState } = await toggleCheckbox(content, path)
            if (success && checkedState !== undefined) {
                setChecked(checkedState)
            }
        }
    }
    return (
        <Checkbox
            {...props as React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>}
            ref={ref}
            disabled={false}
            checked={checked}
            onClick={handleClick}
        />
    )
}


MdxCheckbox.displayName = "MdxCheckbox"


export default MdxCheckbox;
