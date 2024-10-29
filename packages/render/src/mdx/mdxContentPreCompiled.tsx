"use client";
import { run } from "@mdx-js/mdx";
import type { ReactNode } from "react";
import React, { useState, useRef, useCallback } from "react";
import { clsx } from "clsx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";
import { getComponentMap } from "@ulld/component-map/client";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import { CopyContextMenu } from "@ulld/utilities/components/copyContextMenu";
import type { MDXModule } from "mdx/types";
import type {
    AdditionalComponents,
    ConditionalComponentProps,
} from "@ulld/component-map/types";

export interface MdxContentPreCompiledProps {
    className?: string;
    content: string;
    raw: string;
    applyMathContextMenu?: boolean;
    components?: AdditionalComponents;
    options?: ConditionalComponentProps;
    id?: string;
}

const CompiledContent = ({
    applyMathContextMenu,
    raw,
    components,
    id,
    mdxModule,
}: Pick<MdxContentPreCompiledProps, "raw" | "applyMathContextMenu" | "id"> & {
    components: ReturnType<typeof getComponentMap>;
    mdxModule: MDXModule;
}): ReactNode => {
    const Component = mdxModule.default;

    if (applyMathContextMenu) {
        return (
            <CopyContextMenu btnLabel="Copy Latex" content={raw} removeMathWrapper>
                <Component components={components} />
            </CopyContextMenu>
        );
    }
    return <Component components={components} id={id} />;
};

export const MdxContentPreCompiled = ({
    content,
    className,
    raw,
    applyMathContextMenu,
    components,
    options = {},
    id,
}: MdxContentPreCompiledProps): ReactNode => {
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const runMdx = useCallback(
        async (_content: string) => {
            const res = await run(_content, {
                ...runtime,
                ...devRuntime,
                /* baseUrl: import.meta.url, */ // just disabled. This might be the cause of the not found component if it should actually exist.
            });
            if ("default" in res) {
                setMdxModule(res);
            }
        },
        [content],
    );

    useIsomorphicLayoutEffect(() => {
        if (typeof window !== "undefined") {
            runMdx(content).catch(() => {
                // eslint-disable-next-line no-console -- Need to catch error. #MoveToLoggerPackage
                console.error(
                    `An error occurred in the useIsomorphicLayoutEffect hook in the MdxContentPreCompiled component while running the compiled mdx code.`,
                );
            });
        }
    }, [content]);

    useMathjaxBandaid(ref);

    const _components = getComponentMap(raw, options, components);

    return (
        <div className={clsx("mdx", className)} ref={ref}>
            {mdxModule ? (
                <CompiledContent
                    applyMathContextMenu={applyMathContextMenu}
                    components={_components}
                    id={id}
                    mdxModule={mdxModule}
                    raw={raw}
                />
            ) : null}
        </div>
    );
};

MdxContentPreCompiled.displayName = "MdxContentPreCompiled";

export default MdxContentPreCompiled;
