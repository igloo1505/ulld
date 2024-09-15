import { cn } from "@ulld/utilities/cn";
import { PageType } from "#/types/general";
import { MDXContent } from "@content-collections/mdx/react";
import "fumadocs-ui/twoslash.css";
import { DocsBody, DocsDescription, DocsPage } from "fumadocs-ui/page";
import React, { ComponentProps } from "react";
import TypeTable from "./typeTable";
import ApplyMathjaxBandaid from "../utility/applyMathjaxBandaid";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
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
import Link from "next/link";
import { buttonVariants } from "@ulld/tailwind/button";
import Citations from "../academic/citations";
import { parseMdxContent } from "../../lib/parseMdxContent/main";

interface DocsPageComponentProps {
    page: PageType;
    noTitle?: boolean;
    id?: string;
    internal?: boolean;
    className?: string;
}

const TocSourceFooterButton = ({ noteId }: { noteId?: string }) => {
    if (!noteId) {
        return null;
    }

    return (
        <Link
            className={buttonVariants({ variant: "outline" })}
            href={`/withSource?id=${noteId}`}
        >
            Source
        </Link>
    );
};

const DocsPageInternal = async ({
    page,
    noTitle,
    id,
}: WithRequired<DocsPageComponentProps, "id">) => {
    let rawContent = "content" in page.data ? page?.data.content : undefined;

    if(!rawContent){
        return null
    }

    let parsedContent = await parseMdxContent(rawContent, page.data.body)
    console.log("parsedContent.citations: ", parsedContent.citations)
    /* rawContent = parsedContent.content */
    /* let _body = parsedContent.body */
    /* console.log("_body here: ", _body) */


    const filteredComponents = getComponentMap(
        rawContent || "",
        { avoidKeys: ["mark"] },
        serverComponentMap,
    );

    const components = {
        ...defaultMdxComponents,
        ...filteredComponents,
        TypeTable: TypeTable,
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
    };


    return (
        <>
            <NoteStateObserver />
            {!noTitle && (
                <h1 className={page.data.titleCenter ? "w-full text-center" : ""}>
                    {page.data.title}
                </h1>
            )}
            {page.data.description && (
                <p
                    className={cn(
                        "text-sm mb-8 text-muted-foreground",
                        page.data.titleCenter && "w-full text-center",
                    )}
                >
                    {page.data.description}
                </p>
            )}
            <MDXContent code={page.data.body} components={components as any} />
            {page.data.id && <Citations noteId={page.data.id} />}
            <ApplyMathjaxBandaid container={id} />
        </>
    );
};

const DocsPageComponent = (props: DocsPageComponentProps) => {
    const id = props.id || props.page.data.id || getRandomId();

    if (props.internal) {
        return (
            <MathjaxProvider>
                <div id={id} className={cn("w-full @container/mdx", props.className)}>
                    <DocsPageInternal {...props} id={id} />
                </div>
            </MathjaxProvider>
        );
    }

    let newEntries = getLatexTocEntries(
        props.page.data.toc,
        props.page.data.content,
        true
    );

    return (
        <MathjaxProvider>
            <DocsPage
                toc={newEntries}
                tableOfContent={{
                    /* component: <Table */ // Replace table of contents with the fuma built component when on wifi and able to review docs.
                    footer: <TocSourceFooterButton noteId={props.page.data.id} />,
                }}
                full={props.page.data.full}
            >
                <DocsBody id={id} className={cn("@container/mdx mdx", props.className)}>
                    <DocsPageInternal {...props} id={id} />
                </DocsBody>
            </DocsPage>
        </MathjaxProvider>
    );
};

DocsPageComponent.displayName = "DocsPageComponent";

export default DocsPageComponent;
