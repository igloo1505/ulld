import { getRandomId } from "@ulld/utilities/identity";
import React, {
    ComponentProps,
    ForwardedRef,
    HTMLProps,
    ReactNode,
} from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { cn } from "@ulld/utilities/cn";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import "#/styles/proseStyles.scss";
import { serverComponentMap } from "#/mdx/serverComponentMap";
import { getComponentMap } from "@ulld/component-map/client";
import InternalReduxProvider from "#/state/provider";
import store from "#/state/store";
import Citations from "../academic/citations";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import MdxArticleNavButtons from "./mdxArticleNavButtons";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import {
    Pre,
    CodeBlock,
    CodeBlockProps,
} from "fumadocs-ui/components/codeblock";
import { PageType } from "#/types/general";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { MDXContent } from "@content-collections/mdx/react";
import ReplaceTableCode from "../docUtils/replaceTableCode";
import ApplyMathjaxBandaid from "../utility/applyMathjaxBandaid";

export interface MDXArticleProps extends HTMLProps<HTMLElement> {
    paddingTop?: boolean;
    isSource?: boolean;
    hideSourceButton?: boolean;
    wrapCode?: boolean;
    docsWide?: boolean;
    embedded?: boolean;
    data: PageType;
}


const MDXArticle = (
    {
        wrapCode,
        embedded,
        docsWide,
        paddingTop = true,
        hideSourceButton = false,
        isSource,
        data,
        ...props
    }: MDXArticleProps,
    _ref: ForwardedRef<HTMLElement>,
) => {
    const pageId = "id" in data.data ? data.data.id : undefined;
    const id = props.id ? props.id : getRandomId();

    const rawContent = "content" in data.data ? data.data.content : undefined;

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

    console.log("data.data.body: ", data.data.body)

    return (
        <>
            {/* <NoteStateObserver /> */}
            {!hideSourceButton && !embedded && (
                <MdxArticleNavButtons articleId={pageId} isSource={isSource} />
            )}
            <article
                {...props}
                id={id}
                className={cn(
                    "@container/mdx w-full prose prose-invert prose-a:text-link mdx py-8 group-[.mdx-wide]/mdxLayout:w-full group-[.mdx-wide]/mdxLayout:md:!max-w-[min(1440px,calc(100%-128px))] group-[.mdx-full]/mdxLayout:!max-w-full",
                    docsWide
                        ? "!max-w-[min(calc(100%-6rem),1440px)]"
                        : "!max-w-[min(83%,1080px)]",
                    paddingTop && "pt-[108px]",
                    embedded && "!w-full !max-w-full",
                    props.className,
                )}
            >
                <ReplaceTableCode parentId={id} />
                <MDXContent
                    /* ref={(wrapCode || ("wrapCode" in mdx && mdx.wrapCode)) ? wrapCodeRef : undefined} */
                    code={data.data.body}
                    components={components as any}
                />
                <Citations noteId={pageId} />
            </article>
            <ApplyMathjaxBandaid container={id} />
        </>
    );
};

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
