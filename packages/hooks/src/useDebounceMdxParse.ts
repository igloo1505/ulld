import { useEffect, useState, Fragment } from "react";
import { run } from "@mdx-js/mdx";
import { client } from "@ulld/api/client";
import * as runtime from "react/jsx-runtime";
import { MDXModule } from "mdx/types";

export const useDebounceMdxParse = (
    initialValue: string = "",
    debounceTimeout: number = 300,
) => {
    const [value, setValue] = useState(initialValue);
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const Content = mdxModule ? mdxModule.default : Fragment;

    const parseContent = async () => {
        if(!value) return 
        const vf = await client.beta.parseMdxString.mutate({
            content: value,
        });
        let ran = await run(vf, {
            ...runtime,
            baseUrl: import.meta.url,
        });
        setMdxModule(ran);
    };

    useEffect(() => {
        setTimer(setTimeout(parseContent, debounceTimeout));
    }, [value]);

    return {
        value,
        setValue,
        Content
    };
};
