"use client"
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { ChangeEvent, useId, useRef, useState } from 'react'
import { Button } from '../shad/ui/button'
import { Popover, PopoverContent } from '../shad/ui/popover'
import { FieldValues } from 'react-hook-form'
import { BaseFullFormInputProps } from '../layout/uniqueLayouts/fullForm/types'
import { Input } from '../shad/ui/input'
import { onEnter } from '#/actions/listeners'
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Label } from '../shad/ui/label'




interface NumberInputProps<T extends FieldValues, H extends HTMLElement> extends Omit<BaseFullFormInputProps<T, H>, "onChange" | "name"> {
    onChange: (n: string) => void
    value: string
    min?: number
    max?: number
    step?: number
    initial?: number
    integerOnly?: boolean
}


type J<T extends boolean> = T extends true ? number : string

const NumberInput = <T extends FieldValues>(props: NumberInputProps<T, HTMLInputElement>) => {
    const { onChange, min, max, step: _step, initial, value, label, integerOnly, ..._props } = props
    const [modalOpen, setModalOpen] = useState(false)
    const id = useId()
    const ref = useRef<HTMLAnchorElement>(null!)
    const getVal = <T extends boolean>(asNumber: T): J<T> => {
        if (asNumber) {
            return parseFloat(value ? value : `0`) as J<T>
        } else {
            return value as J<T> || "0" as J<T>
        }
    }
    const step = _step || 1
    const isValid = (nv: number) => {
        let v: boolean[] = []
        if (typeof min == "number") {
            v.push(nv >= min)
        }
        if (typeof max == "number") {
            v.push(nv <= max)
        }
        if (integerOnly) {
            v.push(!`${nv}`.includes("."))
        }
        return v.every((a) => a)
    }
    const handleMinus = () => {
        let nv = getVal(true) - step
        if (isValid(nv)) {
            onChange(`${nv}`)
        }
    }

    const handlePlus = () => {
        let nv = getVal(true) + step
        if (isValid(nv)) {
            onChange(`${nv}`)
        }
    }

    const handleNumberInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let val = e.target.value
        if (/[^\d|.]/gmi.test(val) || val.indexOf(".") !== val.lastIndexOf(".")) {
            console.log(`Returning preventDefault()`)
            return
        }
        onChange(val)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <Popover
                open={modalOpen}
                onOpenChange={setModalOpen}
            >
                <div className={"w-fit flex flex-row justify-center items-center gap-4"}>
                    <Button disabled={Boolean(typeof min === "number" && parseFloat(value) < min + step)} onClick={handleMinus} className={"bg-red-400 hover:bg-red-500 transition-colors duration-200"}>
                        <MinusIcon />
                    </Button>
                    <PopoverPrimitive.PopoverAnchor asChild>
                        <a onClick={() => setModalOpen(true)} ref={ref} role="button" className={"w-[3ch] min-w-fit text-center"}>{value ? value : "--"}</a>
                    </PopoverPrimitive.PopoverAnchor>
                    <PopoverContent>
                        <div className="grid grid-cols-1 items-center gap-4">
                            {label && <Label htmlFor={id}>{label}</Label>}
                            <Input
                                {..._props}
                                autoFocus
                                value={value}
                                onChange={handleNumberInput}
                                className="col-span-2 h-8"
                                onKeyDown={(e) => onEnter(e, closeModal)}
                            />
                            <div>
                            </div>
                        </div>
                    </PopoverContent>
                    <Button disabled={Boolean(typeof max === "number" && parseFloat(value) > max - step)} onClick={handlePlus} className={"bg-green-400 hover:bg-green-500 transition-colors duration-200"}>
                        <PlusIcon />
                    </Button>
                </div>
            </Popover>
        </>
    )
}


NumberInput.displayName = "NumberInput"


export default NumberInput;
