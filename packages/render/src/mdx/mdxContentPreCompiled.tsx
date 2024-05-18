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

interface MdxContentPreCompiledProps {
    className?: string;
    content: string;
    raw: string;
    applyMathContextMenu?: boolean;
}

export const MdxContentPreCompiled = ({
    content,
    className,
    raw,
    applyMathContextMenu,
}: MdxContentPreCompiledProps) => {
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const ref = useRef<HTMLDivElement>(null!);

    const runMdx = useCallback(
        async (_content: string) => {
            /* @ts-ignore */
            const res = await run(_content, {
                ...runtime,
                ...devRuntime,
                baseUrl: import.meta.url,
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
    const _components = getComponentMap(raw);

    return (
        <div className={`mdx ${className}`} ref={ref}>
            {mdxModule ? (
                applyMathContextMenu ? (
                    <CopyContextMenu
                        btnLabel="Copy Latex"
                        content={raw}
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
