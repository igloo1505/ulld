import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@ulld/tailwind/popover";
import React, { ReactNode } from "react";
import { HslStringColorPicker } from "react-colorful";
import styles from "./styles.module.scss"

interface ColorPopoverProps {
    children: ReactNode;
    label?: ReactNode;
    desc?: ReactNode;
    value?: string
    setValue: (newColor: string) => void
}

const ColorPopover = ({ children, label, desc, value, setValue }: ColorPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">{label}</h4>
                        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
                    </div>
                    <div className={styles.colorfulLayout}>
                        <HslStringColorPicker
                            color={value}
                            onChange={setValue}
                        />
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

ColorPopover.displayName = "ColorPopover";

export default ColorPopover;
