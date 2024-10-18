"use client";
import React, { CSSProperties, ForwardedRef, forwardRef, useMemo } from "react";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import clsx from "clsx";
import cn from "@ulld/utilities/cn";
import type { validIconNameList } from "@ulld/utilities/validIconNameList";

interface IconSelectOptionProps {
    item: (typeof validIconNameList)[number];
    className?: string;
    iconClasses?: string;
    setValue: (newVal: (typeof validIconNameList)[number]) => void;
    setOpen: (newOpen: boolean) => void;
    style: CSSProperties
}

const IconSelectOption = forwardRef(
    (
        { item, setValue, setOpen, className, iconClasses, style }: IconSelectOptionProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const icon = useMemo(() => {
            return (
                <DynamicIcon
                    className={cn(
                        "place-self-center w-3 h-3 text-foreground stroke-foreground",
                        iconClasses,
                    )}
                    style={{ gridColumn: "icon" }}
                    name={item as ValidIconName}
                />
            );
        }, [item]);

        /* if (!icon) return null; */
        return (
            <div
                ref={ref}
                className={clsx(
                    "not-prose h-12 text-sm grid w-full cursor-pointer hover:bg-secondary/50 text-foreground",
                    className,
                )}
                style={{
                    ...style,
                    gridTemplateColumns: "[icon] 32px [content] 1fr",
                }}
                key={item}
                onClick={() => {
                    setValue(item);
                    setOpen(false);
                }}
            >
                <div className={"w-full h-full flex justify-center items-center"}>
                    {icon ? icon : ""}
                </div>
                <span
                    className={
                        "h-full w-full min-w-full flex flex-row justify-start items-center text-foreground"
                    }
                    style={{
                        gridColumn: "content",
                    }}
                >
                    {item}
                </span>
            </div>
        );
    },
);

IconSelectOption.displayName = "IconSelectOption";

export default IconSelectOption;
