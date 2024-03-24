"use client";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "@ulld/tailwind/button";
import { NumberInputPopover } from "./numberInputPopover";
import { NumberInputProps } from "./types";
import { isValidNumber } from "./numberValidator";

export const NumberInput = (props: NumberInputProps) => {
    const { onChange, min, max, step, initial, value, label, integerOnly } =
        props;
    const ref = useRef<HTMLAnchorElement>(null!);

    const handleMinus = () => {
        let nv = value - step;
        const _nv = typeof props.min === "number" ? Math.max(nv, props.min) : nv
        if (isValidNumber(_nv, props)) {
            onChange(_nv);
        }
    };

    const handlePlus = () => {
        let nv = Number(value) + step;
        let _nv = typeof props.max === "number" ? Math.min(nv, props.max) : nv
        if (isValidNumber(_nv, props)) {
            onChange(_nv);
        }
    };


    return (
        <div className={"w-fit flex flex-row justify-center items-center gap-4"}>
            <Button
                disabled={Boolean(typeof min === "number" && value <= min)}
                onClick={handleMinus}
                className={"bg-red-400 hover:bg-red-500 transition-colors duration-200"}
            >
                <MinusIcon />
            </Button>
            <NumberInputPopover {...props} />
            <Button
                disabled={Boolean(typeof max === "number" && value >= max)}
                onClick={handlePlus}
                className={
                    "bg-green-400 hover:bg-green-500 transition-colors duration-200"
                }
            >
                <PlusIcon />
            </Button>
        </div>
    );
};

NumberInput.displayName = "NumberInput";
