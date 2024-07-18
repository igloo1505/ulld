"use client";
import React, { ReactNode, useEffect, useRef } from "react";

interface TypeTableWrapperProps {
    children: ReactNode;
}

const TypeTableWrapper = ({ children }: TypeTableWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null!);
    const removeColumnIndex = (index: number) => {
        ref.current.querySelectorAll("tr").forEach((tr) => {
            tr.deleteCell(index);
        });
    };
    const checkDefaultColumn = () => {
        const table = ref.current.querySelector("table");
        let headCols = table?.querySelectorAll("thead tr th");
        if (headCols && headCols.length) {
            let index = -1;
            headCols.forEach((h, i) => {
                if (h.textContent === "Default") {
                    index = i;
                }
            });
            if (index < 0) {
                return;
            }
            let defaultIsEmpty = true;
            ref.current.querySelectorAll("tbody tr").forEach((tr) => {
                if (tr.children[index].textContent !== "-") {
                    defaultIsEmpty = false;
                }
            });
            if (defaultIsEmpty) {
                removeColumnIndex(index);
            }
        }
    };

    useEffect(() => {
        checkDefaultColumn();
    }, []);

    return <div ref={ref}>{children}</div>;
};

TypeTableWrapper.displayName = "TypeTableWrapper";

export default TypeTableWrapper;
