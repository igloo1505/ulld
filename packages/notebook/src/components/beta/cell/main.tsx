"use client";
import React, { useEffect, useRef, useState } from "react";
import JupyterContextWrapper from "../contextProvider/main.tsx";
import { Cell } from "@datalayer/jupyter-react";
import clsx from "clsx";
import { JupyterCellProps } from "../../../lib/types/main.tsx";
import { useJupyterCellData } from "../../../lib/hooks/useCellData.ts";

const NotebookCell = (jupyterProps: JupyterCellProps) => {

    const { source, jupyterConfig } = useJupyterCellData(jupyterProps)

    const [hasAppendedListener, setHasAppendedListener] = useState<
        false | "setting"
    >(false);
    const [mutationObserver, setMutationObserver] =
        useState<null | MutationObserver>(null);
    const parent = useRef<HTMLDivElement>(null!);

    const getMenubarEm = () => {
        return parent.current.querySelector<HTMLDivElement>(".jp-Toolbar");
    };

    const handleMenubarClick = () => {
        parent.current.classList.toggle("jupyter-fold");
    };

    const appendListener = () => {
        let menubar: HTMLDivElement | null = getMenubarEm();
        if (menubar) {
            setHasAppendedListener("setting");
            menubar.addEventListener("click", handleMenubarClick);
            menubar.style.cursor = "pointer";
        }
    };

    /* NOTE: Could this actually be running too soon? And therefor not gathering the menubar or childList appropriately? Will check that approach out later if this doesn't work as a quick fix. */
    const setObserver = (r: typeof parent, idx: number = 1) => {
        if (!r.current && idx <= 5) {
            setTimeout(() => setObserver(r, idx + 1), 500);
        } else {
            let observer = new MutationObserver((mutations) => {
                if (mutations.map((m) => m.type).includes("childList")) {
                    if (hasAppendedListener === false) {
                        appendListener();
                    }
                }
            });
            observer.observe(r.current, {
                childList: true,
                subtree: true,
            });
            setMutationObserver(observer);
        }
    };

    useEffect(() => {
        setObserver(parent);
        return () => {
            mutationObserver && mutationObserver.disconnect();
        };
    }, []);

    if (!source || !jupyterConfig) return null;

    return (
        <div
            className={clsx(
                "jupyterUI cell-container jupyter-foldable w-full h-fit",
                jupyterProps.foldInput && "jupyter-fold",
            )}
            ref={parent}
        >
            <JupyterContextWrapper 
                /* TODO: Try moving this context to wrap the entire note, and see if that will allow passing data between cells. */
                startKernel
                jupyterConfig={jupyterConfig}
            >
                <Cell source={source || ""} />
            </JupyterContextWrapper>
        </div>
    );
};

NotebookCell.displayName = "NotebookCell";

export default NotebookCell;
