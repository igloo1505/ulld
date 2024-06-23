"use client";
import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import { Label } from "@ulld/tailwind/label";
import { Input } from "@ulld/tailwind/input";
import { NumberInputProps } from "./types";
import { handleNumberInput } from "./numberValidator";
import { onEnter } from "@ulld/state/listeners/keyDown";
import cn from "@ulld/utilities/cn";

export interface NumberInputPopoverProps extends NumberInputProps {
    modalTitle?: string;
    modalDesc?: string;
    maxLength?: number
    classes?: {
        button?: string
    }
}

const defaultMaxLength = 6

const removeTrailingZeros = (_val: string | number): string => {
    let val = typeof _val === "string" ? _val : `${_val}`
       if(val.indexOf(".") === -1){
        return val
        } 
    if([".", "0"].includes(val[val.length - 1])){
        return removeTrailingZeros(val.slice(0, val.length - 1))
    }
    return val
    }

const formatValue = (
    val: string | number,
    decimals?: number,
    maxLength?: number,
) => {
    if (typeof decimals !== "number") {
        return typeof val === "string"
            ? val.slice(0, Math.min(maxLength || defaultMaxLength, val.length))
            : removeTrailingZeros(val.toFixed(maxLength || defaultMaxLength))
    }
    let i = typeof val === "string" ? val.indexOf(".") : -1;
    return typeof val === "string"
        ? i === -1 ? val.slice(0, Math.min(maxLength || defaultMaxLength, val.length)) :
            val.slice(0, Math.min(i + decimals + 1, maxLength || defaultMaxLength, val.length))
        : removeTrailingZeros(val.toFixed(maxLength || defaultMaxLength))
};

export const NumberInputPopover = (props: NumberInputPopoverProps) => {
    const [internalOpen, setInternalOpen] = useState(false);
    return (
        <Popover open={internalOpen} onOpenChange={setInternalOpen}>
            <PopoverTrigger className={cn("w-fit min-w-[3ch] text-center", props.classes?.button)}>
                {props.value ? formatValue(props.value, props.decimals, props.maxLength) : "--"}
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                            {props.modalTitle || "Numbers Only"}
                        </h4>
                        {props.modalDesc && (
                            <p className="text-sm text-muted-foreground">{props.modalDesc}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="number-input-modal-input">{props.label}</Label>
                            <Input
                                autoFocus
                                id="number-input-modal-input"
                                value={props.value || ""}
                                onChange={(e) => {
                                    let res = handleNumberInput(e, props);
                                    if (res.success) {
                                        props.onChange(
                                            typeof res.value === "undefined" ? "" : res.value,
                                        );
                                    }
                                }}
                                className="col-span-2 h-8"
                                onKeyDown={(e) => onEnter(e, () => setInternalOpen(false))}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

NumberInputPopover.displayName = "NumberInputPopover";
