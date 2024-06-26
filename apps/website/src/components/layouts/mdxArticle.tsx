"use client";
import { getRandomId } from "@ulld/utilities/identity";
import React, {
    ForwardedRef,
    HTMLProps,
    RefObject,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
} from "react";
import { cn } from "@ulld/utilities/cn";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import "#/styles/proseStyles.scss";
import { DocumentTypes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getComponentMap } from "@ulld/component-map/client";
import { webComponentMap } from "#/mdx/componentMap";
import InternalReduxProvider from "#/state/provider";
import store from "#/state/store";
import Citations from "../academic/citations";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import MdxArticleNavButtons from "./mdxArticleNavButtons";
import { useResponsiveCode } from "@ulld/hooks/useResponsiveCode";

export interface MDXArticleProps extends HTMLProps<HTMLElement> {
    mdx: DocumentTypes;
    paddingTop?: boolean;
    isSource?: boolean;
    hideSourceButton?: boolean;
    wrapCode?: boolean;
    docsWide?: boolean;
    embedded?: boolean;
}

const replaceBackTicks = (s: string) => {
    let val = s
    if(val.startsWith("`")){
        val = val.slice(1)
    }

    if(val.endsWith("`")){
        val = val.slice(0, val.length - 1)
    }
    return val 
    }

/* TODO: Handle this directly in typedoc. This is a ridiculously lazy fix but I need to move on right now. */
const replaceTableCode = (em: RefObject<HTMLDivElement>) => {
    if (!em.current) return;
    let tds = em.current.querySelectorAll("td");
    tds.forEach((td) => {
        let codeEm = td.querySelector("code");
        if (codeEm) {
            const text = td.textContent;
            if(text){
            td.innerHTML = `<span class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm semibold">${replaceBackTicks(text)}</span>`;
            }
        }
    });
};

const MDXArticle = forwardRef(
    (
        {
            mdx,
            wrapCode,
            embedded,
            docsWide,
            paddingTop = true,
            hideSourceButton = false,
            isSource,
            ...props
        }: MDXArticleProps,
        _ref: ForwardedRef<HTMLElement>,
    ) => {
        const { ref } = useResponsiveCode<HTMLDivElement>({
            nested: true,
            defaultMaxWidth: "40vw",
        });
        useImperativeHandle(_ref, () => ref.current!, []);
        const id = props.id ? props.id : getRandomId();
        const article = useMDXComponent(mdx.body.code);
        const Article = useMemo(() => article, []);
        useEffect(() => {
            replaceTableCode(ref);
        }, [mdx]);

        useMathjaxBandaid(id);

        const components = getComponentMap(mdx.body.raw, {avoidKeys: ["mark"]}, webComponentMap);
        console.log("Object.keys(components): ", Object.keys(components))

        const citationsEm = useMemo(
            () => <Citations noteId={"id" in mdx ? mdx.id : undefined} />,
            [mdx],
        );

        return (
            <InternalReduxProvider>
                <NoteStateObserver store={store} />
                {!hideSourceButton && !embedded && (
                    <MdxArticleNavButtons
                        articleId={"id" in mdx ? mdx.id : undefined}
                        isSource={isSource}
                    />
                )}
                <article
                    {...props}
                    ref={ref}
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
                    <Article
                        /* ref={(wrapCode || ("wrapCode" in mdx && mdx.wrapCode)) ? wrapCodeRef : undefined} */
                        components={components}
                    />
                    {citationsEm}
                </article>
            </InternalReduxProvider>
        );
    },
);

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
