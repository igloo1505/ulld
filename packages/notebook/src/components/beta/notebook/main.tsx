"use client";
import React, { useId, useMemo } from "react";
import JupyterContextWrapper from "../contextProvider/main.tsx";
import {
    INotebookProps,
    Notebook as JupyterNotebook,
} from "@datalayer/jupyter-react";
import NotebookToolbar from "./toolbar.tsx";
import NotebookCellSidebarMenu from "./sideMenu.tsx";
import { makeValidId } from "@ulld/utilities/identity";
import { useAppConfig } from "@ulld/hooks/useAppConfig";

type NotebookProps =
    | {
        path: string;
        content?: undefined;
    }
    | {
        path?: undefined | string;
        content: string;
    };

const Notebook = ({ path, content }: NotebookProps) => {
    const id = useId();
    const [appConfig] = useAppConfig();
    const notebookProps = useMemo((): Partial<INotebookProps> | null => {
        if (!appConfig) {
            return null;
        }
        return {
            uid: path ? makeValidId(path) : `notebook-${id}`,
            CellSidebar: NotebookCellSidebarMenu,
            height:
                typeof window === "undefined" ? "100vh" : `${window.innerHeight}px`,
            path: path,
            nbformat: Boolean(content && !path)
                ? typeof content === "string"
                    ? JSON.parse(content)
                    : content
                : undefined,
            Toolbar: NotebookToolbar,
            ...appConfig.jupyter.jupyterNotebookProps,
        };
    }, [appConfig]);

    if (!appConfig) {
        return null;
    }

    return (
        <div
            className={
                "jupyterUI jupyter-foldable-outputs w-full max-w-full h-fit relative"
            }
        >
            <JupyterContextWrapper startKernel jupyterConfig={appConfig.jupyter}>
                <JupyterNotebook {...notebookProps} />
            </JupyterContextWrapper>
        </div>
    );
};

Notebook.displayName = "Notebook";

export default Notebook;
