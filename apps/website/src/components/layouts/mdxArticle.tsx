"use client";
import { getRandomId } from "@ulld/utilities/identity";
import React, {
    ForwardedRef,
    HTMLProps,
    forwardRef,
    useEffect,
    useMemo,
    useRef,
} from "react";
import clsx from "clsx";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import "#/styles/proseStyles.scss";
import { DocumentTypes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { getComponentMap } from "@ulld/component-map/client";
import { webComponentMap } from "#/mdx/componentMap";
import InternalReduxProvider from "#/state/provider";
import store from "#/state/store";
import { createNavbarButton } from "#/state/slices/core";
import { useViewport } from "@ulld/hooks/useViewport";
import Citations from "../academic/citations";
import { NoteStateObserver } from "@ulld/state/observers/noteState";

interface MDXArticleProps extends HTMLProps<HTMLElement> {
    mdx: DocumentTypes;
    paddingTop?: boolean;
    isSource?: boolean;
}

const btnId = "mdx-article-source";

const MDXArticle = forwardRef(
    (
        { mdx, paddingTop = true, isSource, ...props }: MDXArticleProps,
        ref: ForwardedRef<HTMLElement>,
    ) => {
        const vp = useViewport(true);
        const id = props.id ? props.id : getRandomId();
        const article = useMDXComponent(mdx.body.code);
        const Article = useMemo(() => article, []);
        useMathjaxBandaid(id);
        const components = getComponentMap(mdx.body.raw, {}, webComponentMap);

        const citationsEm = useMemo(
            () => <Citations noteId={"id" in mdx ? mdx.id : undefined} />,
            [mdx],
        );

        useEffect(() => {
            /* NOTE: Intentionally leaving out the vp dependency. The +- wasn't work it as it was causing some massive flickering issues, and most user's will have the same device width throughout their time on the app, or at least be able to expand their window again. */
            if (isSource) return;
            if ("id" in mdx && Boolean(mdx.id)) {
                const w = vp?.window?.width;
                store.dispatch(
                    createNavbarButton({
                        id: btnId,
                        href: Boolean(w && w >= 768)
                            ? `/withSource?id=${mdx.id}`
                            : `/source?id=${mdx.id}`,
                        label: "Source",
                    }),
                );
            }
        }, []);

        return (
            <InternalReduxProvider>
                <NoteStateObserver store={store} />
                <article
                    {...props}
                    ref={ref}
                    id={id}
                    className={clsx(
                        "@container/mdx w-full prose prose-invert prose-a:text-link mdx !max-w-[min(83%,1080px)] py-8 mx-8 group-[.mdx-wide]/mdxLayout:!max-w-[min(1440px,100vw-128px)] group-[.mdx-full]/mdxLayout:!max-w-full",
                        props.className,
                        paddingTop && "pt-[76px]",
                    )}
                >
                    <Article components={components} />
                    {citationsEm}
                </article>
            </InternalReduxProvider>
        );
    },
);

MDXArticle.displayName = "MDXArticle";

export default MDXArticle;
