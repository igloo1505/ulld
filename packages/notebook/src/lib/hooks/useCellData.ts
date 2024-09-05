import { JupyterCellProps } from "../types/main";
import { useState } from "react";
import { client } from "@ulld/api/client";
import { JupyterCellUtilities } from "../JupyterCellUtilities/main";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import { ensureRootRelative } from "@ulld/utilities/fsUtils";


const getFileData = async (filePath: string, fsRoot: string) => {
    let content = await client.fsUtils.getUtf8File.query({
        rootRelativePath: ensureRootRelative(filePath, fsRoot)
    });
    return content;
};


export const useJupyterCellData = (cellProps: JupyterCellProps) => {
    const [appConfig] = useAppConfig();
    const [value, setValue] = useState<string | null>(null);

    const handleInput = async (val?: string) => {
        if (!appConfig) {
            return;
        }
        if (typeof val === "string") {
            let parser = new JupyterCellUtilities(appConfig.jupyter, cellProps);
            parser.input = val;
            setValue(parser.wrappedInput);
            return;
        }
        if (cellProps.file) {
            let res = await getFileData(cellProps.file, appConfig.fsRoot);
            if (res) {
                let parser = new JupyterCellUtilities(appConfig.jupyter, cellProps);
                parser.input = res;
                setValue(parser.wrappedInput);
                return;
            }
        } else if (typeof cellProps.content === "string") {
            let parser = new JupyterCellUtilities(appConfig.jupyter, cellProps);
            parser.input = cellProps.content;
            setValue(parser.wrappedInput);
        } else if (typeof cellProps.children === "string") {
            let parser = new JupyterCellUtilities(appConfig.jupyter, cellProps);
            parser.input = cellProps.children;
            setValue(parser.wrappedInput);
        } else if (
            typeof cellProps.children === "object" &&
            cellProps.children?.type === "p" &&
            typeof cellProps.children?.props?.children === "string"
        ) {
            let parser = new JupyterCellUtilities(appConfig.jupyter, cellProps);
            parser.input = cellProps.children.props.children;
            setValue(parser.wrappedInput);
        }
    };

    useIsomorphicLayoutEffect(() => {
        handleInput();
    }, [cellProps, appConfig]);

    return {
        source: value,
        updateValue: handleInput,
        jupyterConfig: appConfig?.jupyter
    };

};
