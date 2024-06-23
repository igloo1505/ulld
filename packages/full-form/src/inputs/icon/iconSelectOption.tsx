"use client";
import React, { ForwardedRef, forwardRef, useMemo } from "react";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import clsx from "clsx";
import allIcons from "@ulld/icons/names";
import cn from "@ulld/utilities/cn";

interface IconSelectOptionProps {
    item: (typeof allIcons)[number];
    className?: string;
    iconClasses?: string
    /* index: number; */
    setValue: (newVal: (typeof allIcons)[number]) => void;
    setOpen: (newOpen: boolean) => void;
}

const IconSelectOption = forwardRef(({
    item,
    setValue,
    setOpen,
    className,
    iconClasses
}: IconSelectOptionProps, ref: ForwardedRef<HTMLDivElement>) => {
    const icon = useMemo(() => {
        return (
            <DynamicIcon
                className={cn("place-self-center w-3 h-3 text-foreground stroke-foreground", iconClasses)}
                style={{ gridColumn: "icon" }}
                name={item as ValidIconName}
            />
        );
    }, [item]);

    if (!icon) return null;
    return (
        <div
            ref={ref}
            className={clsx(
                "not-prose grid h-12 text-sm grid w-full cursor-pointer hover:bg-secondary/50",
                className,
            )}
            style={{
                gridTemplateColumns: "[icon] 32px [content] 1fr",
            }}
            key={item}
            onClick={() => {
                setValue(item);
                setOpen(false);
            }}
        >
            {icon}
            <span
                className={
                    "h-full w-full min-w-full flex flex-row justify-start items-center"
                }
                style={{
                    gridColumn: "content",
                }}
            >
                {item}
            </span>
        </div>
    );
});

IconSelectOption.displayName = "IconSelectOption";

export default IconSelectOption;
