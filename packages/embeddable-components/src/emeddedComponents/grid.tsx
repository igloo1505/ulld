import type { ReactNode } from "react";
import React from "react";
import { cn } from "@ulld/utilities/cn";
import type { ContainerSize, GridItemProps, GridProps } from "./gridProps";

const columnMap = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-6",
    "7": "grid-cols-7",
    "8": "grid-cols-8",
    "9": "grid-cols-9",
    "10": "grid-cols-10",
    "11": "grid-cols-11",
    "12": "grid-cols-12",
};

const smallColumnMap = {
    "1": "@[640px]/mdx:grid-cols-1",
    "2": "@[640px]/mdx:grid-cols-2",
    "3": "@[640px]/mdx:grid-cols-3",
    "4": "@[640px]/mdx:grid-cols-4",
    "5": "@[640px]/mdx:grid-cols-5",
    "6": "@[640px]/mdx:grid-cols-6",
    "7": "@[640px]/mdx:grid-cols-7",
    "8": "@[640px]/mdx:grid-cols-8",
    "9": "@[640px]/mdx:grid-cols-9",
    "10": "@[640px]/mdx:grid-cols-10",
    "11": "@[640px]/mdx:grid-cols-11",
    "12": "@[640px]/mdx:grid-cols-12",
};

const mediumColumnMap = {
    "1": "@[768px]/mdx:grid-cols-1",
    "2": "@[768px]/mdx:grid-cols-2",
    "3": "@[768px]/mdx:grid-cols-3",
    "4": "@[768px]/mdx:grid-cols-4",
    "5": "@[768px]/mdx:grid-cols-5",
    "6": "@[768px]/mdx:grid-cols-6",
    "7": "@[768px]/mdx:grid-cols-7",
    "8": "@[768px]/mdx:grid-cols-8",
    "9": "@[768px]/mdx:grid-cols-9",
    "10": "@[768px]/mdx:grid-cols-10",
    "11": "@[768px]/mdx:grid-cols-11",
    "12": "@[768px]/mdx:grid-cols-12",
};
const lgColumnMap = {
    "1": "@[1240px]/mdx:grid-cols-1",
    "2": "@[1240px]/mdx:grid-cols-2",
    "3": "@[1240px]/mdx:grid-cols-3",
    "4": "@[1240px]/mdx:grid-cols-4",
    "5": "@[1240px]/mdx:grid-cols-5",
    "6": "@[1240px]/mdx:grid-cols-6",
    "7": "@[1240px]/mdx:grid-cols-7",
    "8": "@[1240px]/mdx:grid-cols-8",
    "9": "@[1240px]/mdx:grid-cols-9",
    "10": "@[1240px]/mdx:grid-cols-10",
    "11": "@[1240px]/mdx:grid-cols-11",
    "12": "@[1240px]/mdx:grid-cols-12",
};

export const GridItem = ({ children, background, center }: GridItemProps): ReactNode => {
    return (
        <div
            className={cn(
                "w-full min-h-full p-4 rounded-lg",
                center && " flex flex-col justify-center items-center",
                background && "bg-gray-100 dark:bg-gray-800",
            )}
        >
            {children}
        </div>
    );
};

const getColumnClasses = (cols: Record<ContainerSize, number>): string => {
    const s: string[] = [];

    if (`${cols.sm}` in smallColumnMap) {
        s.push(smallColumnMap[`${cols.sm}` as keyof typeof smallColumnMap]);
    }
    if (`${cols.base}` in columnMap) {
        s.push(columnMap[`${cols.base}` as keyof typeof columnMap]);
    }
    if (`${cols.md}` in mediumColumnMap) {
        s.push(mediumColumnMap[`${cols.md}` as keyof typeof mediumColumnMap]);
    }
    if (`${cols.lg}` in lgColumnMap) {
        s.push(lgColumnMap[`${cols.lg}` as keyof typeof lgColumnMap]);
    }
    return s.join(" ");
};


/* TODO: Consider adding an auto class based on number of children. It might not be reliably stylable (probably not a word) but could be useful for a default case instead of just blowing up entirely. */
export const Grid = ({
    cols: _cols,
    columns,
    minMax,
    children,
    autoFit,
}: GridProps): ReactNode => {
    let cols = _cols || columns;
    if (typeof cols === "number") {
        cols = {
            base: cols,
        };
    }
    if (!cols) {
        cols = {
            base: 1,
            md: 2,
            lg: 4,
        };
    }
    return (
        <div
            className={cn(
                "grid gap-2 md:gap-4 place-items-center w-full",
                !minMax &&
                getColumnClasses(cols as Record<ContainerSize, number>),
            )}
            style={{
                ...(minMax && {
                    gridTemplateColumns: `repeat(${autoFit ? "auto-fit" : "auto-fill"}, minmax(${minMax}${typeof minMax === "number" ? "px" : ""}, 1fr))`,
                }),
            }}
        >
            {children}
        </div>
    );
};

Grid.displayName = "Grid";
