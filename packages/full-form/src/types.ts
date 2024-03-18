import { FieldValues, Path } from "react-hook-form";

export interface BaseFullFormInputProps<T extends FieldValues, H extends HTMLElement>
    extends Omit<React.InputHTMLAttributes<H>, "form"> {
    label?: string;
    name: Path<T>;
    desc?: string
}
