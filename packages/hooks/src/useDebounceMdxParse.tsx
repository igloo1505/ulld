"use client";
import { useEffect, useState, Fragment, useRef } from "react";
import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";
import type { MDXComponents, MDXContent, MDXModule } from "mdx/types";
import { ParseMdxStringProps } from "@ulld/api/classes/prismaMdxRelations/mdxNote";
import { getComponentMap } from "@ulld/component-map/client";
import { useMathjaxBandaid } from "./useMathjaxBandaid";
import { parseMdxString } from "@ulld/parsers";
import { useAppConfig } from "./useAppConfig";

const Content = ({
    MdxContentComponent,
    raw,
    className,
}: {
    MdxContentComponent: MDXContent;
    raw: string;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null!);
    useMathjaxBandaid(ref);
    return (
        <div ref={ref} className={className}>
            <MdxContentComponent components={getComponentMap(raw) as MDXComponents} />
        </div>
    );
};

export const useDebounceMdxParse = (
    initialValue: string = "",
    debounceTimeout: number = 300,
    opts?: ParseMdxStringProps,
) => {
    const [value, setValue] = useState<string>(initialValue);
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const [appConfig] = useAppConfig();

    const handleParse = async (_value: string) => {
        let compiled = await parseMdxString({ content: _value, appConfig });
        const res = await run(compiled, {
            Fragment: Fragment,
            jsx: runtime.jsx as any,
            jsxs: runtime.jsxs as any,
            jsxDEV: devRuntime.jsxDEV as any,
            baseUrl: import.meta.url,
        });
        setMdxModule(res);
    };



    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(setTimeout(() => handleParse(value || ""), debounceTimeout));
    }, [value]);

    const Component = ({ className }: { className?: string }) =>
        mdxModule ? (
            <Content
                className={className}
                MdxContentComponent={mdxModule.default}
                raw={value}
            />
        ) : (
            <></>
        );

    return {
        value,
        setValue,
        Component,
        isReady: Boolean(mdxModule),
    };
};
