import React, { ReactNode } from "react";
import clsx from 'clsx'

interface FormSectionHeadingProps {
    children: ReactNode;
    subtitle?: ReactNode;
    classes?: {
        subtitle?: string
        title?: string
    }
}

const FormSectionHeading = ({
    children,
    subtitle,
    classes = {}
}: FormSectionHeadingProps) => {
    return (
        <>
            <h3 className={clsx("text-lg font-medium", !subtitle && "mb-4", classes.title)}>{children}</h3>
            {subtitle && <p className={clsx("text-muted-foreground text-sm mb-4 !mt-0", classes.subtitle)}>{subtitle}</p>}
        </>
    );
};

FormSectionHeading.displayName = "FormSectionHeading";

export default FormSectionHeading;
