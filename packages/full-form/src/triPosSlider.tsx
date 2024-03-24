import React, { useId } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import * as Slider from '@radix-ui/react-slider';
import clsx from "clsx";

export interface TriPos<T extends FieldValues> {
    value: number
    id: Path<T>
    label: string
}

interface TriPosSliderProps<T extends FieldValues> {
    items: [TriPos<T>, TriPos<T>, TriPos<T>];
    label?: string
    disabled?: boolean
}

export const TriPosSlider = <T extends FieldValues>({
    items,
    label,
    disabled
}: TriPosSliderProps<T>) => {
    const form = useFormContext<T>()
    const id = useId()
    const val1 = form.watch(items[0].id)
    const val2 = form.watch(items[1].id)
    const val3 = form.watch(items[2].id)
    const handleChange = (value: number[]) => {
        form.setValue(items[0].id, value[0] as PathValue<T, Path<T>>)
        form.setValue(items[1].id, (value[1] - value[0]) as PathValue<T, Path<T>>)
        form.setValue(items[2].id, 100 - value[1] as PathValue<T, Path<T>>)
    }

    return (
        <div className="grid gap-4 @container/triPos">
            {label && <div className="flex items-center justify-between">
                <label
                    className={clsx("text-sm font-medium leading-none", disabled && "opacity-70 cursor-not-allowed")}
                    htmlFor={id}
                >
                    {label}
                </label>
                <span className="rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border flex flex-col justify-start items-end @[600px]/triPos:flex-row @[600px]/triPos:gap-4">
                    {typeof val1 === "number" && <span className={"whitespace-nowrap break-keep"}>{`${items[0].label}: ${disabled ? "--" : val1}%`}</span>}
                    {typeof val2 === "number" && <span className={"whitespace-nowrap break-keep"}>{`${items[1].label}: ${disabled ? "--" : val2}%`}</span>}
                    {typeof val3 === "number" && <span className={"whitespace-nowrap break-keep"}>{`${items[2].label}: ${disabled ? "--" : val3}%`}</span>}
                </span>
            </div>}
            <Slider.Root
                id={id}
                defaultValue={[items[0].value || 33.3, 100 - items[2].value || 66.6]}
                max={100}
                step={1}
                className={"relative flex items-center select-none touch-none w-full max-w-full h-5"}
                onValueChange={handleChange}
                disabled={disabled}
            >
                <Slider.Track
                    className={"bg-muted-foreground relative grow rounded-full h-[3px] data-[disabled]:bg-muted-foreground/50"}
                >
                    <Slider.Range
                        className={"absolute bg-foreground rounded-full h-full data-[disabled]:bg-muted-foreground"}
                    />
                </Slider.Track>
                <Slider.Thumb
                    className={"bg-primary block w-5 h-5 shadow-[0_2px_10px] shadow-black rounded-[10px] focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-gray-950 data-[disabled]:bg-primary/80 data-[disabled]:w-4 data-[disabled]:h-4"}
                />
                <Slider.Thumb
                    className={"bg-primary block w-5 h-5 shadow-[0_2px_10px] shadow-black rounded-[10px] focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-gray-950 data-[disabled]:bg-primary/80 data-[disabled]:w-4 data-[disabled]:h-4"}
                />
            </Slider.Root>
        </div>
    );
};

TriPosSlider.displayName = "TriPosSlider";
