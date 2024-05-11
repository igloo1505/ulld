import clsx from "clsx";
import React, { ReactNode } from "react";

interface TableFitProps {
    children: ReactNode;
    center?: boolean;
}

export const TableFit = ({ children, center }: TableFitProps) => {
    return (
        <div
            className={clsx(
                "w-full flex flex-col justify-center [&_table]:!w-fit",
                center ? "items-center" : "items-start",
            )}
        >
            {children}
        </div>
    );
};

TableFit.displayName = "TableFit";
