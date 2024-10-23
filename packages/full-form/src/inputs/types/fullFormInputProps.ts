import type { ReactNode } from "react";
import type { FieldValues, Path } from "react-hook-form";

export interface BaseInputProps<T extends FieldValues, Classes extends string | undefined> {
    label?: ReactNode
    desc?: ReactNode
    name: Path<T>
    classes?: {[k in Classes extends string ? ("formItem" | "desc" | "label" | Classes) : ("formItem" | "desc" | "label")]?:  string}
}
