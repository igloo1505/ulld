import React, { ReactNode, useEffect } from "react";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import {
    SingleNumericValueResolver,
    singleNumericValueResolver,
} from "../resolvers/singleNumericValue";
import { sendPlotValueEvent } from "../actions/sendPlotValueEvent";
import { numberBool, numberOrDefault } from "@ulld/utilities/numberUtils";

interface PlotInputFormProps {
    children: ReactNode;
    plotId: string;
    variable: string;
    initialValue?: number
}


export const PlotInputForm = ({
    children,
    plotId,
    variable,
    initialValue
}: PlotInputFormProps) => {
    const form = useForm<SingleNumericValueResolver>({
        resolver: zodResolver(singleNumericValueResolver),
    });
    form.watch(({ value }) => {
        sendPlotValueEvent({
            plotId,
            variable,
            value: numberOrDefault(value, 1),
        });
    });

    useEffect(() => {
       if(numberBool(initialValue)){
        sendPlotValueEvent({
            plotId,
            variable,
            value: initialValue as number,
        });
        } 
    }, [initialValue])
    return <Form {...form}>{children}</Form>;
};

PlotInputForm.displayName = "PlotInputForm";
