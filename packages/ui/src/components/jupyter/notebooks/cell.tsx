"use client"
import React, { useEffect, useRef, useState } from 'react'
import JupyterContextWrapper from '../../wrappers/jupyter';
import { Cell } from '@datalayer/jupyter-react';
import { client } from '#/trpc/client';
import clsx from 'clsx';
import { ParsedAppConfig } from '#/lib/config/zod/secondaryConfigParse/main';
import { getInternalConfig } from '#/lib/config/zod/getInternalConfig';


interface NotebookCellProps {
    children: string | { type: string, [k: string]: any }
    file?: string
    content?: string
    hide?: boolean
    hideInput?: boolean
    noInput?: boolean
    common?: true | "imports" | "variables" | "sympy"
    _config?: ParsedAppConfig
}


/* TODO: Move these auto-prefixes to the appConfig object and allow selecting these based on keys of the object or an array of other keys of the same appConfig object. (Similar to applying 'true' currently.) */
const wrapSource = (src: string, common: NotebookCellProps["common"]): string => {
    if (!common) return src
    if (common === "sympy") {
        return `%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/sympyVariables.py

${src}`
    }

    if (common === "variables") {
        return `%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/commonVariables.py

${src}`
    }
    if (common === "imports") {
        return `%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/commonImports.py

${src}`
    }
    return `%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/sympyVariables.py
%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/commonVariables.py
%run /Users/bigsexy/Desktop/python/_utils/templates/commonImportsAndVariables/commonImports.py

${src}`
}


const NotebookCell = ({ children, file, content, hide, hideInput, noInput, common, _config }: NotebookCellProps) => {
    const config = _config || getInternalConfig()
    const shouldHideInput = Boolean(config.jupyter.initiallyFoldCells || hide || hideInput || noInput)
    const [source, _setSource] = useState<null | string>(typeof content === "string" ? wrapSource(content, common) : null)
    const [hasAppendedListener, setHasAppendedListener] = useState<false | "setting">(false)
    const [mutationObserver, setMutationObserver] = useState<null | MutationObserver>(null)
    const parent = useRef<HTMLDivElement>(null!)

    const setSource = (s: string | null) => {
        if (s) {
            _setSource(wrapSource(s, common))
        } else {
            _setSource(s)
        }

    }

    const getMenubarEm = () => {
        return parent.current.querySelector<HTMLDivElement>(".jp-Toolbar")
    }

    const setFile = async () => {
        if (!file) return
        let content = await client.getUtf8File.query(file)
        setSource(content)
    }

    useEffect(() => {
        if (file) {
            setFile()
            return
        }
        if (typeof content === "string") {
            setSource(content)
        }
        if (typeof children === "string") {
            setSource(children)
            return
        }
        if (typeof children === "object" && children?.type === "p" && typeof children?.props?.children === "string") {
            setSource(children.props.children)
            return
        }
    }, [children, content])


    const handleMenubarClick = () => {
        parent.current.classList.toggle("jupyter-fold")
    }

    const appendListener = () => {
        let menubar: HTMLDivElement | null = getMenubarEm()
        if (menubar) {
            setHasAppendedListener("setting")
            menubar.addEventListener("click", handleMenubarClick)
            menubar.style.cursor = "pointer"
        }
    }

    /* NOTE: Could this actually be running too soon? And therefor not gathering the menubar or childList appropriately? Will check that approach out later if this doesn't work as a quick fix. */
    const setObserver = (r: typeof parent, idx: number = 1) => {
        console.log(`Setting setObserver`)
        if (!r.current && idx <= 5) {
            setTimeout(() => setObserver(r, idx + 1), 500)
        } else {
            let observer = new MutationObserver((mutations) => {
                if (mutations.map((m) => m.type).includes("childList")) {
                    if (hasAppendedListener === false) {
                        appendListener()
                    }
                }
            })
            observer.observe(r.current, {
                childList: true,
                subtree: true
            })
            setMutationObserver(observer)
        }
    }


    useEffect(() => {
        setObserver(parent)
        return () => {
            mutationObserver && mutationObserver.disconnect()
        }
    }, [])

    if (!source) return null

    return (
        <div
            className={clsx("jupyterUI cell-container jupyter-foldable w-full h-fit", shouldHideInput && "jupyter-fold")}
            ref={parent}
        >
            <JupyterContextWrapper
                startKernel
            >
                <Cell source={source || ""} />
            </JupyterContextWrapper>
        </div>
    )
}


NotebookCell.displayName = "NotebookCell"


export default NotebookCell;
