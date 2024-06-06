"use client";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { getRandomId } from "@ulld/utilities/identity";
import { DocumentTypes } from "contentlayer/generated";
import React, { HTMLProps } from "react";
import clsx from "clsx";
import MdxListItem from "./mdxItem";
import store from "#/state/store";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import InternalReduxProvider from "#/state/provider";
import { MathJaxContext } from "better-react-mathjax";
import MathjaxProvider from "#/components/utility/providers/mathjax";

interface MdxListProps extends HTMLProps<HTMLDivElement> {
    items: DocumentTypes[];
}

const MdxList = (props: MdxListProps) => {
    const id = props.id ? props.id : getRandomId();
    console.log("props: ", props);
    useMathjaxBandaid(id);
    return (
        <InternalReduxProvider>
            <MathjaxProvider>
            <div
                {...props}
                id={id}
                className={clsx("w-full max-w-full", props.className)}
            >
                <NoteStateObserver store={store} />
                {props.items.map((item) => {
                    return <MdxListItem key={item._id} mdx={item} />;
                })}
            </div>
            </MathjaxProvider>
        </InternalReduxProvider>
    );
};

MdxList.displayName = "MdxList";

export default MdxList;
