import { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { TypeTable } from "./components/docs/typeTable";
/* import { AutoTypeTable } from "fumadocs-typescript/ui"; */
/* import { TypeTable } from "fumadocs-ui/components/type-table"; */
import { Pre, CodeBlock, CodeBlockProps } from "fumadocs-ui/components/codeblock";
import cn from "@ulld/utilities/cn";
import { Tabs } from "fumadocs-ui/components/tabs";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...(defaultComponents as any),
        ...components,
        TypeTable,
        pre: ({ title, className, icon, allowCopy, ...props }: CodeBlockProps) => (
            <CodeBlock title={title} icon={icon} allowCopy={allowCopy}>
                <Pre className={cn("max-h-[400px]", className)} {...props} />
            </CodeBlock>
        ),
    InstallTabs: ({
      items,
      children,
    }: {
      items: string[];
      children: ReactNode;
    }) => (
      <Tabs items={items} id="package-manager">
        {children}
      </Tabs>
    ),
    };
}
