import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { AutoTypeTable } from "fumadocs-typescript/ui";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...(defaultComponents as any),
        AutoTypeTable,
        ...components,
    };
}
