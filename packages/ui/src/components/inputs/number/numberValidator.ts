import { ChangeEvent } from "react"
import { NumberInputProps } from "./types"

export const isValidNumber = (nv: number, props: NumberInputProps) => {
        let v: boolean[] = []
        if (typeof props.min == "number") {
            v.push(nv >= props.min)
        }
        if (typeof props.max == "number") {
            v.push(nv <= props.max)
        }
        if (props.integerOnly) {
            v.push(!`${nv}`.includes("."))
        }
        return v.every((a) => a)
    }




export const handleNumberInput = (e: ChangeEvent<HTMLInputElement>, props: NumberInputProps) => {
        e.preventDefault()
        let val = e.target.value
        if (/[^\d|.]/gmi.test(val) || val.indexOf(".") !== val.lastIndexOf(".")) {
            return {success: false}
        }
    return {success: true, value: props.integerOnly ? parseInt(val) : parseFloat(val)}
    }
