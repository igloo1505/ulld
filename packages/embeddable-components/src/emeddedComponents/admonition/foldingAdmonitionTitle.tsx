import type { HTMLProps, ReactNode } from "react";
import { cn } from "@ulld/utilities/cn";
import { ChevronDown } from "lucide-react";
import type { ValidIconName } from "@ulld/types";
import { DynamicIcon } from "@ulld/icons";

export interface FoldingAdmonitionTitleProps
    extends Omit<HTMLProps<HTMLDivElement>, "title"> {
    dropdown?: boolean;
    titleBold?: boolean;
    iconName?: ValidIconName;
}

export const FoldingAdmonitionTitle = ({
    dropdown,
    titleBold,
    iconName,
    children,
    ...props
}: FoldingAdmonitionTitleProps): ReactNode => {
    if (!children) {
        return null;
    }

    return (
        <div
            {...props}
            className={cn(
                "title not-prose w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] place-items-center min-h-[44px]",
                dropdown ? "grid-cols-[1fr_2rem] cursor-pointer" : "grid-cols-1",
                props.className,
            )}
        >
            <div className="w-full flex flex-row flex-nowrap gap-2 justify-start items-center">
                {iconName ? <DynamicIcon className="w-4 h-4" name={iconName} /> : null}
                <div
                    className={cn(
                        "admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath relative",
                        titleBold && "font-semibold",
                        dropdown && "mr-8",
                    )}
                >
                    {children}
                </div>
                {dropdown ? (
                    <ChevronDown className="absolute right-4 top-[50%] translate-y-[-50%] group-data-[state=open]/fold:rotate-180 transition-transform duration-300" />
                ) : null}
            </div>
        </div>
    );
};

FoldingAdmonitionTitle.displayName = "FoldingAdmonitionTitle";
