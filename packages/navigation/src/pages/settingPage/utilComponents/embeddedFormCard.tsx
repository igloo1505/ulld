import type { FieldValues, UseFormReturn } from "@ulld/full-form/form";
import { cn } from "@ulld/utilities/cn";
import type { HTMLProps, ReactNode } from "react";
import React from "react";

interface EmbeddedFormCardProps<T extends FieldValues> extends Omit<HTMLProps<HTMLFormElement>, "form" | "onSubmit">{
    form: UseFormReturn<T>;
    onSubmit: (data: T) => void;
    children: ReactNode;
}

const EmbeddedFormCard = <T extends FieldValues>(
    { form, children, onSubmit, className, ...props }: EmbeddedFormCardProps<T>,
): ReactNode => {
    return (
        <form
            {...props}
            className={
                cn("w-full flex flex-col justify-center items-start bg-secondary/20 border rounded p-4 mb-4", className)
            }
            onSubmit={form.handleSubmit(onSubmit) as () => void}
        >
            {children}
        </form>
    );
};

EmbeddedFormCard.displayName = "EmbeddedFormCard";

export default EmbeddedFormCard;
