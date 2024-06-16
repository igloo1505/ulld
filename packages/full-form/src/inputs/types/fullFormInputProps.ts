import { ReactNode } from "react";
import { FieldValues, Path } from "react-hook-form";

export interface BaseInputProps<T extends FieldValues, Classes extends string> {
    label?: ReactNode
    desc?: ReactNode
    name: Path<T>
    // classes?: Record<"formItem" | Classes, string | undefined>
    classes?: {[k in "formItem" | "desc" | "label" | Classes]?:  string}
}
