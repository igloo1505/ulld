import { Label } from "@ulld/tailwind/label";
import { Switch } from "@ulld/tailwind/switch";
import React, { ReactNode } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

export type CheckboxInputItem<T extends FieldValues> = {
    label: ReactNode;
    desc: ReactNode;
    name: Path<T>;
    value?: boolean;
    default?: boolean
};

interface CheckboxGroupItemProps<T extends FieldValues> { 
    item: CheckboxInputItem<T>
}

const CheckboxGroupItem = <T extends FieldValues>({item}: CheckboxGroupItemProps<T>) => {
    const form = useFormContext<T>()
    const value = form.watch(item.name)
    return (
        <div className="flex items-center justify-between space-x-2">
            <Label htmlFor={`checkbox-group-${item.name}`} className="flex flex-col space-y-1">
                <span>{item.label}</span>
                <span className="font-normal leading-snug text-muted-foreground">
                    {item.desc}
                </span>
            </Label>
            <Switch 
                id={`checkbox-group-${item.name}`} 
                defaultChecked={item.default} 
                value={value}
                onCheckedChange={(isChecked) => form.setValue(item.name, isChecked as PathValue<T, Path<T>>)}
            />
        </div>
    );
};

CheckboxGroupItem.displayName = "CheckboxGroupItem";

export default CheckboxGroupItem;
