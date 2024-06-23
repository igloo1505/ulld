import { ReactNode } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface BaseFullFormInputProps<
  T extends FieldValues,
  H extends HTMLElement,
> extends Omit<React.InputHTMLAttributes<H>, "form"> {
  label?: string;
  name: Path<T>;
  desc?: ReactNode;
  formItemClasses?: string;
  placeholder?: string;
}

export type SelectOption<T extends unknown = string> = {
  value: T;
  content: ReactNode;
};

export type { FieldValues, Path, UseFormReturn };
