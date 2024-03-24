import { ChangeEvent } from "react";
import { NumberInputProps } from "./types";

export const isValidNumber = (nv: number, props: NumberInputProps) => {
        console.log("nv: ", nv, typeof nv)
    if (Number.isNaN(nv)) {
        return false;
    }
    let v: boolean[] = [];
    if (typeof props.min == "number") {
        v.push(nv >= props.min);
    }
    if (typeof props.max == "number") {
        v.push(nv <= props.max);
    }
    if (props.integerOnly) {
        v.push(!`${nv}`.includes("."));
    }
    return v.every((a) => a);
};

export const handleNumberInput = (
    e: ChangeEvent<HTMLInputElement>,
    props: NumberInputProps,
) => {
    e.preventDefault();
    let val = e.target.value;
    let s = val.split(".")
    if (/[^\d|.]/gim.test(val) || val.indexOf(".") !== val.lastIndexOf(".") || ((s.length === 2 && props.decimals) && s[1].length > props.decimals)) {
        return { success: false };
    }
    return {
        success: true,
        value: val,
    };
};
