"use client"
import React, { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
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
    const handleClick = async () => {
        const content = ref.current?.parentElement?.innerText
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
    const removeLiMarker = () => {
        if(!ref.current) return
        if(ref.current.parentElement?.nodeName?.toLowerCase() === "li"){
            ref.current.parentElement.classList.add("hide-li-marker")
        }
        }

    useEffect(() => {
        removeLiMarker()
    }, [])
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
