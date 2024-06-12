import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "@ulld/tailwind/card";
import React, { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import CheckboxGroupItem, { CheckboxInputItem } from "./item";
import clsx from 'clsx'

export interface CheckboxGroupProps<T extends FieldValues> {
    label?: ReactNode;
    desc?: ReactNode;
    items: CheckboxInputItem<T>[];
    footer?: ReactNode
}


export const CheckboxGroup = <T extends FieldValues>({
    label,
    desc,
    items,
    footer
}: CheckboxGroupProps<T>) => {
    return (
        <Card>
            {(label || desc) && <CardHeader>
                {label && <CardTitle>{label}</CardTitle>}
                {desc && <CardDescription>{desc}</CardDescription>}
            </CardHeader>}
            <CardContent className={clsx("grid gap-6", (!label && !desc) && "pt-6")}>
                {items.map((item) => <CheckboxGroupItem item={item} key={item.name} />)}
            </CardContent>
            {footer && <CardFooter>
                {footer}
            </CardFooter>}
        </Card>
    );
};

CheckboxGroup.displayName = "CheckboxGroup";
