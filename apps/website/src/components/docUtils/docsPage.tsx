import { cn } from "@ulld/utilities/cn";
import { PageType } from "#/types/general";
import { MDXContent } from "@content-collections/mdx/react";
import "fumadocs-ui/twoslash.css";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import React, { ComponentProps, ReactNode } from "react";
import ApplyMathjaxBandaid from "../utility/applyMathjaxBandaid";
import MathjaxProvider from "../utility/providers/mathjax";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
import { Tabs } from "fumadocs-ui/components/tabs";
import {
    CodeBlockProps,
    CodeBlock,
    Pre,
} from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { getRandomId } from "@ulld/utilities/identity";
import { WithRequired } from "@ulld/utilities/types";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import { getLatexTocEntries } from "#/fumaDocs/utils/getLatexTocEntries";

interface DocsPageComponentProps {
    page: PageType;
    noTitle?: boolean;
    id?: string;
    internal?: boolean;
    className?: string;
}


const DocsPageInternal = ({
    page,
    noTitle,
    id,
}: WithRequired<DocsPageComponentProps, "id">) => {
    const rawContent = "content" in page.data ? page?.data.content : undefined;

    const filteredComponents = getComponentMap(
        rawContent || "",
        { avoidKeys: ["mark"] },
        serverComponentMap,
    );

    const components = {
        ...defaultMdxComponents,
        ...filteredComponents,
        // These Tab and Tabs components are used to automatically create pnpm, npm, bun and yarn command dynamically, but are causing conflicts with the existing TabGroup component, I think? Disabling for now since the app should probably rely on the stuff I'm trying to convince people to use.
        /* Tab: Tab, */
        /* Tabs: Tabs, */
        /* code: InlineCode, */
        img: (props: ComponentProps<typeof ImageZoom>) => <ImageZoom {...props} />,
        pre: ({ title, className, icon, allowCopy, ...props }: CodeBlockProps) => (
            <CodeBlock
                title={title}
                icon={icon}
                allowCopy={typeof allowCopy === "boolean" ? allowCopy : true}
            >
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
    return (
        <>
            <NoteStateObserver />
            {!noTitle && (
                <h1 className={page.data.titleCenter ? "w-full text-center" : ""}>
                    {page.data.title}
                </h1>
            )}
            <MDXContent code={page.data.body} components={components as any} />
            <ApplyMathjaxBandaid container={id} />
        </>
    );
};

const DocsPageComponent = (props: DocsPageComponentProps) => {
    const id = props.id || props.page.data.id || getRandomId();

    if (props.internal) {
        return (
            <MathjaxProvider>
                <div className={cn("w-full @container/mdx", props.className)}>
                    <DocsPageInternal {...props} id={id} />
                </div>
            </MathjaxProvider>
        );
    }

    let newEntries = getLatexTocEntries(
        props.page.data.toc,
        props.page.data.content,
    );

    return (
        <MathjaxProvider>
            <DocsPage toc={newEntries} full={props.page.data.full}>
                <DocsBody
                    id={props.id}
                    className={cn("@container/mdx", props.className)}
                >
                    <DocsPageInternal {...props} id={id} />
                </DocsBody>
            </DocsPage>
        </MathjaxProvider>
    );
};

DocsPageComponent.displayName = "DocsPageComponent";

export default DocsPageComponent;