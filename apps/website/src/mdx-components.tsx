import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
/* import { TypeTable } from "./components/docs/typeTable"; */
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { TypeTable } from 'fumadocs-ui/components/type-table';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        TypeTable,
        ...defaultComponents as any,
        ...components,
    };
}
