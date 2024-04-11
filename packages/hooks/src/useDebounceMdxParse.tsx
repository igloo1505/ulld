"use client";
import { useEffect, useState } from "react";
import { run } from "@mdx-js/mdx";
import { client } from "@ulld/api/client";
import * as runtime from "react/jsx-runtime";
/* import * as devRuntime from "react/jsx-dev-runtime"; */
import { MDXContent, MDXModule } from "mdx/types";
import {
    MdxNote,
    ParseMdxStringProps,
} from "@ulld/api/classes/prismaMdxRelations/mdxNote";
import { getComponentMap } from "@ulld/component-map/client";

const Content = ({
    MdxContentComponent,
    raw,
    className,
}: {
    MdxContentComponent: MDXContent;
    raw: string;
    className?: string;
}) => {
    if (className) {
        return (
            <div className={className}>
                <MdxContentComponent components={getComponentMap(raw)} />
            </div>
        );
    }
    return <MdxContentComponent components={getComponentMap(raw)} />;
};

export const useDebounceMdxParse = (
    initialValue: string = "",
    debounceTimeout: number = 300,
    opts?: ParseMdxStringProps,
) => {
    const [value, setValue] = useState<string>(initialValue);
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const handleParse = async (_value: string) => {
        console.log("_value: ", _value);
        let initiallyParsed = await MdxNote.parseMdxString(_value, opts);
        console.log("initiallyParsed: ", initiallyParsed);
        let compiled = await client.mdx.parseMdxString.mutate({
            content: initiallyParsed,
            ...opts,
        });
        console.log("compiled: ", compiled);
        const res = await run(compiled, {
            ...runtime,
            baseUrl: import.meta.url,
        });
        console.log("res: ", res);
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
    };
};
