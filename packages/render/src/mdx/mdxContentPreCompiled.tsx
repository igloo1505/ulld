"use client";
import { run } from "@mdx-js/mdx";
import React, {
    useState,
    Fragment,
    useRef,
    useCallback,
} from "react";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";
import { getComponentMap } from "@ulld/component-map/client";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import { CopyContextMenu } from "@ulld/utilities/components/copyContextMenu"
import { MDXModule } from "mdx/types";
import { AdditionalComponents, ConditionalComponentProps } from "@ulld/component-map/types";

export interface MdxContentPreCompiledProps {
    className?: string;
    content: string;
    raw: string;
    applyMathContextMenu?: boolean;
    components?: AdditionalComponents
    options?: ConditionalComponentProps
}

export const MdxContentPreCompiled = ({
    content,
    className,
    raw,
    applyMathContextMenu,
    components,
    options={}
}: MdxContentPreCompiledProps) => {
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const ref = useRef<HTMLDivElement>(null!);

    const runMdx = useCallback(
        async (_content: string) => {
            /* @ts-ignore */
            const res = await run(_content, {
                ...runtime,
                ...devRuntime,
                /* baseUrl: import.meta.url, */ // just disabled. This might be the cause of the not found component if it should actually exist.
            });
            if (res && "default" in res) {
                setMdxModule(res);
            }
        },
        [content],
    );

    useIsomorphicLayoutEffect(() => {
        if (typeof window !== "undefined") {
            runMdx(content);
        }
    }, [content]);

    useMathjaxBandaid(ref);

    const Component =
        mdxModule && "default" in mdxModule ? mdxModule.default : Fragment;
    /* RESUME: Fix this immediately. Cannot pass components into a client component. Need to find a way to render mdx on the server directly to html. */
    const _components = getComponentMap(raw, options, components);

    return (
        <div className={`mdx ${className}`} ref={ref}>
            {mdxModule ? (
                applyMathContextMenu ? (
                    <CopyContextMenu
                        btnLabel="Copy Latex"
                        content={raw}
                        removeMathWrapper
                    >
                        <Component components={_components} />
                    </CopyContextMenu>
                ) : (
                    <Component components={_components} />
                )
            ) : (
                <></>
            )}
        </div>
    );
};

MdxContentPreCompiled.displayName = "MdxContentPreCompiled";

export default MdxContentPreCompiled;
