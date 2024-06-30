import React from "react";
import { SliderInput, SliderInputProps } from "@ulld/full-form/slider";
import { PlotInputForm } from "./plotInputForm";

interface PlotSliderProps extends SliderInputProps<any> {
    min: number;
    max: number;
    delta?: number;
    variable: "x" | "y" | "z";
    plotId: string;
}

export const PlotSlider = ({
    min,
    max,
    delta,
    ...props
}: PlotSliderProps) => {
    return (
        <PlotInputForm>
            <SliderInput {...props} name="value" min={min} max={max} step={delta} />
        </PlotInputForm>
    );
};

PlotSlider.displayName = "PlotSlider";
