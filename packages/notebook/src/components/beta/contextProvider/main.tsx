"use client";
import React, { useMemo } from "react";
import { Jupyter, JupyterProps } from "@datalayer/jupyter-react";
import { useSearchParams } from "next/navigation";
import "../../../styles/notebooks.scss";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { useClientDarkMode } from "@ulld/hooks/useClientDarkMode";

interface JupyterContextWrapperProps {
    children: React.ReactNode;
    startKernel?: boolean;
    collaborative?: boolean;
    terminals?: boolean;
    jupyterConfig: AppConfigSchemaOutput["jupyter"];
}

const JupyterContextWrapper = ({
    children,
    terminals,
    collaborative,
    startKernel = false,
    jupyterConfig,
}: JupyterContextWrapperProps) => {
    const sp = useSearchParams();
    const darkMode = useClientDarkMode();
    const jupyterProps = useMemo((): Omit<JupyterProps, "children"> => {
        const kernel = sp.get("kernel")
        const portNumber = sp.get("jupyterPort")
        const jupyterPort = portNumber ? portNumber : jupyterConfig.jupyterPort
        const terminalsSp = sp.has("terminals")
        const startKernel = sp.get("startKernel")
        return {
            jupyterServerHttpUrl: `http://127.0.0.1:${jupyterPort}`,
            jupyterServerWsUrl: `ws://127.0.0.1:${jupyterPort}`,
            jupyterToken: jupyterConfig.jupyterToken,
            startDefaultKernel: startKernel === "false" ? false : true,
            ...((typeof terminals !== "undefined" || terminalsSp) && { terminals: terminalsSp || terminals }),
            /* disableCssLoading: true, */
            colorMode: darkMode === false ? "light" : "dark",
            defaultKernelName: kernel ? kernel : jupyterConfig.kernel,
            ...jupyterConfig.jupyterReactProps,
        };
    }, [jupyterConfig, darkMode, sp]);

    return <Jupyter {...jupyterProps}>{children as any}</Jupyter>;
};

JupyterContextWrapper.displayName = "JupyterContextWrapper";

export default JupyterContextWrapper;
