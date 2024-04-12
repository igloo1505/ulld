"use client";
import { run } from "@mdx-js/mdx";
import { MDXContent } from "mdx/types";
import React, { useEffect, useState, Fragment, useRef } from "react";
import * as runtime from "react/jsx-runtime";
import { getComponentMap } from "@ulld/component-map/client";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";

interface MdxContentPreCompiledProps {
    className?: string;
    content: string;
    raw: string;
}

export const MdxContentPreCompiled = ({
    content,
    className,
    raw,
}: MdxContentPreCompiledProps) => {
    const [mdxModule, setMdxModule] = useState<MDXContent | null>(null);
    const ref = useRef<HTMLDivElement>(null!);

    const runMdx = async (_content: string) => {
        const res = await run(_content, {
            ...runtime,
            baseUrl: import.meta.url,
        });
        setMdxModule(res?.default || null);
    };
    useEffect(() => {
        runMdx(content);
    }, [content]);

    useMathjaxBandaid(ref);

    const Component = mdxModule ? mdxModule : Fragment;

    return mdxModule ? (
        <div className={`mdx ${className}`} ref={ref}>
            <Component components={getComponentMap(raw)} />
        </div>
    ) : (
        <Component />
    );
};

MdxContentPreCompiled.displayName = "MdxContentPreCompiled";

export default MdxContentPreCompiled;
