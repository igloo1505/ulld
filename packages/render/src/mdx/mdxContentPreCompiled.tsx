"use client";
import { run } from "@mdx-js/mdx";
import { MDXContent } from "mdx/types";
import React, { useEffect, useState, Fragment } from "react";
import * as runtime from "react/jsx-runtime";
import {getComponentMap} from "@ulld/component-map/client"

interface MdxContentPreCompiledProps {
    className?: string;
    content: string;
    raw: string
}


const MdxContentPreCompiled = ({
    content,
    className,
    raw
}: MdxContentPreCompiledProps) => {
    const [mdxModule, setMdxModule] = useState<MDXContent | null>(null);

    const runMdx = async (_content: string) => {
        const res = await run(_content, {
            ...runtime,
            baseUrl: import.meta.url,
        });
        setMdxModule(res?.default || null)
    };
    useEffect(() => {
        runMdx(content);
    }, [content]);

    const Component = mdxModule ?  mdxModule : Fragment

    return  mdxModule ? <Component 
    className={className}
    components={getComponentMap(raw)}
    /> : <Component />
};

MdxContentPreCompiled.displayName = "MdxContentPreCompiled";

export default MdxContentPreCompiled;
