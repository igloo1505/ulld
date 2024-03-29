import { useEffect, useState, Fragment } from "react";
import { run } from "@mdx-js/mdx";
import { client } from "@ulld/api/client";
import * as runtime from "react/jsx-runtime";
import { MDXModule } from "mdx/types";
import { ParseMdxStringInput } from "@ulld/utilities/schemas/mdx/parseMdxStringSchema";
import {MdxNote} from "@ulld/api/classes/prismaMdxRelations/mdxNote"
import debounce from "lodash.debounce";

const TempContent = ({ components }: { components: any }) => {
    return <div>FIX THIS</div>;
};

export const useDebounceMdxParse = (
    initialValue: string = "",
    debounceTimeout: number = 300,
    opts?: Omit<ParseMdxStringInput, "content">,
) => {
    const [value, setValue] = useState<string>(initialValue);
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const Content = mdxModule ? mdxModule.default : Fragment;

    const handleParse = async () => {
        let initiallyParsed = await MdxNote.parseMdxString(value)
        let compiled = await client.beta.parseMdxString.mutate({
            content: initiallyParsed,
            ...opts
        });
        const res = await run(compiled, {...runtime, baseUrl: import.meta.url})
        setMdxModule(res)
    };


    useEffect(() => {
      setTimer(setTimeout(handleParse, debounceTimeout))
        
    }, [value])

    return {
        value,
        setValue,
        Component: Content,
    };
};
