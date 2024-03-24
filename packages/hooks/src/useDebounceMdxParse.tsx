import { useEffect, useState, Fragment } from "react";
import { run } from "@mdx-js/mdx";
import { client } from "@ulld/api/client";
import * as runtime from "react/jsx-runtime";
import { MDXModule } from "mdx/types";

const TempContent = ({components}: {components: any}) => {
       return (
       <div>FIX THIS</div>
     )
}

export const useDebounceMdxParse = (
    initialValue: string = "",
    debounceTimeout: number = 300,
) => {
    const [value, setValue] = useState(initialValue);
    const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const Content = mdxModule ? mdxModule.default : Fragment;


    return {
        value,
        setValue,
        Content: TempContent
    };
};
