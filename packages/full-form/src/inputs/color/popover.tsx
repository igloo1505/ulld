import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import React, { ReactNode, useEffect, useState } from "react";
import { HslStringColorPicker } from "react-colorful";
import "./styles.scss";
import { Input } from "@ulld/tailwind/input";
import tinycolor from "tinycolor2";
import { onEnter } from "@ulld/state/listeners/keydown";
import clsx from "clsx";

interface ColorPopoverProps {
    children: ReactNode;
    label?: ReactNode;
    desc?: ReactNode;
    value?: string;
    setValue: (newColor: string) => void;
}

const isValidInput = (value: string): boolean => {
    return tinycolor(value).isValid();
};

const ColorPopover = ({
    children,
    label,
    desc,
    value,
    setValue,
}: ColorPopoverProps) => {
    const [inputValue, setInputValue] = useState("");
    const [inputIsValid, setInputIsValid] = useState<boolean | undefined>(
        undefined,
    );
    const [open, setOpen] = useState(false);

    const handleEnter = () => {
        if (!inputIsValid) return;
        setValue(tinycolor(inputValue).toHslString());
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex flex-col gap-4">
                    {(label || desc) && (
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">{label}</h4>
                            {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
                        </div>
                    )}
                    <Input
                        placeholder="Any CSS supported color format"
                        className={clsx(
                            "border border-border focus-visible:ring-none focus-visible:border-border focus-visible:outline-none focus-visible:shadow-[0px_transparent] focus-visible:ring-0",
                            inputIsValid === false && "focus-visible:outline-red-500",
                            inputIsValid === true && "focus-visible:outline-lime-500",
                        )}
                        value={inputValue}
                        onKeyDown={(e) => onEnter(e, handleEnter, "onEnter")}
                        onChange={(e) => {
                            setInputIsValid(
                                e.target.value.length
                                    ? isValidInput(e.target.value)
                                    : undefined,
                            );
                            setInputValue(e.target.value);
                        }}
                    />
                    <div className={"styles.colorfulLayout [&_.react-colorful]:w-full"}>
                        <HslStringColorPicker color={value} onChange={setValue} />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

ColorPopover.displayName = "ColorPopover";

export default ColorPopover;
