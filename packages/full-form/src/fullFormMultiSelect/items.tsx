"use client";
import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef,
    useState,
} from "react";
import { MultiSelectInputProps } from "./main";
import cn from "@ulld/utilities/cn";
import { Check } from "lucide-react";
import { FieldValues } from "react-hook-form";
import PopoverBtnIndicator from "./buttonIndicators";
import {
    FloatingFocusManager,
    FloatingOverlay,
    FloatingPortal,
    useFloating,
} from "@floating-ui/react";

interface FullFormMultiSelectItemsProps<
    T extends FieldValues,
    H extends HTMLElement,
    L extends string,
> extends Pick<
    MultiSelectInputProps<T, H, L>,
    "options" | "contentClasses" | "itemClasses" | "asFloat" | "asInt"
> {
    className?: string;
    context: ReturnType<typeof useFloating>["context"]
    appendValue: (newValue: string | number) => void;
    currentValues: string[];
    open: boolean;
    setOpen: (newOpen: boolean) => void;
    isMounted: boolean;
    styles: CSSProperties;
    getFloatingProps: () => any
}

const FullFormMultiSelectItems = forwardRef(
    <T extends FieldValues, L extends string>(
        {
            itemClasses,
            contentClasses,
            options,
            asFloat,
            asInt,
            appendValue,
            currentValues,
            open,
            setOpen,
            isMounted,
            styles,
            context,
            getFloatingProps
        }: FullFormMultiSelectItemsProps<T, HTMLSelectElement, L>,
        ref: ForwardedRef<any>,
    ) => {
        const [ready, setReady] = useState(false);

        const close = () => setOpen(false);

        if (isMounted) {
            return (
                <FloatingPortal>
                    <FloatingOverlay
                        onClick={close} 
                        className={"bg-black bg-opacity-30"}
                    />
                    <FloatingFocusManager context={context} modal={false}>
                        <div
                            ref={ref}
                            data-state={open ? "open" : "closed"}
                            className={cn(
                                "relative z-50 max-h-96 min-w-[8rem] overflow-auto min-scrollbar scrollbarMuted rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:scale-y-100 data-[state=closed]:scale-y-0",
                                contentClasses,
                            )}
                            style={styles}
                            onAnimationEnd={() => {
                                setReady(true)
                            }}
                            {...getFloatingProps()}
                        >
                            <PopoverBtnIndicator
                                ready={ready}
                                container={ref as any}
                                dir="up"
                            />
                            {options.map((o) => {
                                return (
                                    <div
                                        key={o.value}
                                        className={cn(
                                            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                            itemClasses,
                                        )}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            appendValue(
                                                asFloat
                                                    ? parseFloat(o.value)
                                                    : asInt
                                                        ? parseInt(o.value)
                                                        : o.value,
                                            );
                                        }}
                                    >
                                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                            {currentValues.includes(o.value) && (
                                                <Check className="h-4 w-4" />
                                            )}
                                        </span>
                                        <span>{o.content}</span>
                                    </div>
                                );
                            })}
                            <PopoverBtnIndicator
                                ready={ready}
                                container={ref as any}
                                dir="down"
                            />
                        </div>
                    </FloatingFocusManager>
                </FloatingPortal>
            );
        }
        return null;
    },
);

FullFormMultiSelectItems.displayName = "FullFormMultiSelectItems";

export default FullFormMultiSelectItems;
