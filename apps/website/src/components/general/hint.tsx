import React, { HTMLProps } from "react";
import clsx from "clsx";
import cn from "@ulld/utilities/cn";
/* import { Callout } from "fumadocs-ui/components/callout"; */
import {
    AlertTriangleIcon,
    AmpersandsIcon,
    BellIcon,
    InfoIcon,
    ShieldAlertIcon,
} from "lucide-react";

interface HintProps extends HTMLProps<HTMLDivElement> {
    note?: boolean;
    alias?: boolean;
    warn?: boolean;
    error?: boolean;
    title?: string;
    callout?: boolean;
}

const Hint = ({
    children,
    note,
    alias,
    warn,
    error,
    callout = true,
    title,
    ...props
}: HintProps) => {
    const label = note ? "Note" : alias ? "Alias" : "Hint";
    /* if (callout || title) { */
    /*     let icon = warn ? ( */
    /*         <AlertTriangleIcon /> */
    /*     ) : alias ? ( */
    /*         <AmpersandsIcon /> */
    /*     ) : error ? ( */
    /*         <ShieldAlertIcon /> */
    /*     ) : note ? ( */
    /*         <BellIcon /> */
    /*     ) : ( */
    /*         <InfoIcon /> */
    /*     ); */
    /*     return ( */
    /*         <Callout */
    /*             title={title || label} */
    /*             type={error ? "error" : warn ? "warn" : "info"} */
    /*             icon={icon} */
    /*         > */
    /*             {children} */
    /*         </Callout> */
    /*     ); */
    /* } */
    return (
        <div {...props} className={cn("text-sm mb-6", props.className)}>
            <span
                className={clsx(
                    "font-bold",
                    label === "Hint"
                        ? "text-hint"
                        : label === "Alias"
                            ? "text-violet-400"
                            : "text-sky-400",
                )}
            >{`${label}:`}</span>
            <span className={"text-sm pl-2 [&_*]:inline whitespace-break-spaces"}>
                {children}
            </span>
        </div>
    );
};

Hint.displayName = "Hint";

export default Hint;
