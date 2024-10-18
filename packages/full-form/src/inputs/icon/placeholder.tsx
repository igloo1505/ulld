import React, { useMemo } from "react";
import type allIcons from "@ulld/icons/names";
import { DynamicIcon, ValidIconName } from "@ulld/icons";
import cn from "@ulld/utilities/cn";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface PlaceHolderProps {
    value: (typeof allIcons)[number];
    placeholder?: string;
    iconClasses?: string
    open?: boolean
    placeHolderClasses?: string;
}

const ValuePlaceholder = ({ value, iconClasses }: Pick<PlaceHolderProps, "value" | "iconClasses">) => {
    const icon = useMemo(
        () => <DynamicIcon className={cn("place-self-center w-3 h-3 stroke-foreground", iconClasses)} name={value as ValidIconName} />,
        [value],
    );
    return (
        <span
            className={
                "not-prose h-12 text-sm grid grid-cols-[32px_1fr] w-full cursor-pointer"
            }
        >
            {icon}
            <span
                className={"h-full w-full flex flex-row justify-start items-center"}
            >
                {value}
            </span>
        </span>
    );
};

const PlaceHolder = ({
    value,
    placeholder = "+ Set Icon",
    iconClasses,
    placeHolderClasses,
    open
}: PlaceHolderProps) => {
    return <span className={"flex flex-row justify-between items-center gap-6 w-full"}>
    {value ? <ValuePlaceholder iconClasses={iconClasses} value={value} />: <span>{placeholder}</span>}
        <ChevronDown className={clsx("w-4 h-4 text-muted-foreground/50 placeholder-icon group-hover:text-muted-foreground transition-colors duration-200", placeHolderClasses, open && "rotate-180")}/>
    </span>
};

PlaceHolder.displayName = "PlaceHolder";

export default PlaceHolder;
