"use client"
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, {  useRef, useState } from 'react'
import { Button } from '@ulld/tailwind/button'
import { NumberInputPopover } from './numberInputPopover'
import { NumberInputProps } from './types'
import { isValidNumber } from './numberValidator'




export const NumberInput = (props: NumberInputProps) => {
    const { onChange, min, max, step, initial, value, label, integerOnly } = props
    const [modalOpen, setModalOpen] = useState(false)
    const ref = useRef<HTMLAnchorElement>(null!)

    const handleMinus = () => {
        let nv = value - step
        if (isValidNumber(nv, props)) {
            onChange(nv)
        }
    }

    const handlePlus = () => {
        let nv = value + step
        if (isValidNumber(nv, props)) {
            onChange(nv)
        }
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <NumberInputPopover 
                {...props}
                open={modalOpen}
                close={closeModal}
            />
                <div className={"w-fit flex flex-row justify-center items-center gap-4"}>
                    <Button disabled={Boolean(typeof min === "number" && value < min + step)} onClick={handleMinus} className={"bg-red-400 hover:bg-red-500 transition-colors duration-200"}>
                        <MinusIcon />
                    </Button>
                    <a onClick={() => setModalOpen(true)} ref={ref} role="button" className={"w-[3ch] min-w-fit text-center"}>{value ? value : "--"}</a>
                    <Button disabled={Boolean(typeof max === "number" && value > max - step)} onClick={handlePlus} className={"bg-green-400 hover:bg-green-500 transition-colors duration-200"}>
                        <PlusIcon />
                    </Button>
                </div>
        </>
    )
}


NumberInput.displayName = "NumberInput"


