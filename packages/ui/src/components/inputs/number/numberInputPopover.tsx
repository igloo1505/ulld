import React from "react";
import {
    Popover,
    PopoverContent,
} from "@ulld/tailwind/popover";
import { Button } from "@ulld/tailwind/button";
import { Label } from "@ulld/tailwind/label";
import { Input } from "@ulld/tailwind/input";
import { NumberInputProps } from "./types";
import { handleNumberInput } from "./numberValidator";
import { onEnter } from "@ulld/state/listeners/keyDown";

export interface NumberInputPopoverProps extends NumberInputProps {
    open: boolean;
    close: () => void;
    modalTitle?: string;
    modalDesc?: string;
}

export const NumberInputPopover = (props: NumberInputPopoverProps) => {
    const { open, close, onChange, value, label, modalTitle, modalDesc } = props;
    return (
        <Popover open={open} onOpenChange={(o) => o === false && close()}>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                            {modalTitle || "Numbers Only"}
                        </h4>
                        {modalDesc && (
                            <p className="text-sm text-muted-foreground">{modalDesc}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">{label}</Label>
                            <Input
                                autoFocus
                                value={value}
                                onChange={(e) => {
                                    let res = handleNumberInput(e, props);
                                    if (res.success) {
                                        onChange(res.value as number);
                                    }
                                }}
                                className="col-span-2 h-8"
                                onKeyDown={(e) => onEnter(e, close)}
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

NumberInputPopover.displayName = "NumberInputPopover";
