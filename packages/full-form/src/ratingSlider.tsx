import * as Slider from '@radix-ui/react-slider';
import clsx from 'clsx';
import React, { useId } from 'react'
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { TriPos } from './triPosSlider';



export interface RatingSliderProps<T extends FieldValues> {
    item: Omit<TriPos<T>, "label"> & { label?: string };
    label?: string
    disabled?: boolean
    className?: string
}


export const RatingSlider = <T extends FieldValues>({ label, item, disabled, className }: RatingSliderProps<T>) => {
    const id = useId()
    const form = useFormContext<T>()

    const handleChange = (e: number[]) => {
        form.setValue(item.id, e[0] as PathValue<T, Path<T>>)
    }

    return (
        <div className={clsx("grid gap-4 space-y-0 rounded-md border p-4 @container/triPos", className)}>
            {label && <div className="flex items-center justify-between">
                <label
                    className={clsx("text-sm font-medium leading-none", disabled && "opacity-70 cursor-not-allowed")}
                    htmlFor={id}
                >
                    {label}
                </label>
                <span className="rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border flex flex-col justify-start items-end @[600px]/triPos:flex-row @[600px]/triPos:gap-4">
                    {`${item.value?.toFixed(1) || "5.0"} / 10`}
                </span>
            </div>}
            <Slider.Root
                id={id}
                defaultValue={[item.value]}
                max={10}
                step={0.1}
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
            </Slider.Root>
        </div>

    )
}


RatingSlider.displayName = "RatingSlider"
