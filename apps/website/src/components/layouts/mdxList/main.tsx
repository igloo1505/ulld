"use client"
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { getRandomId } from "@ulld/utilities/identity";
import { DocumentTypes } from "contentlayer/generated";
import React, { HTMLProps } from "react";
import clsx from 'clsx'
import MdxListItem from "./mdxItem";
import store from "#/state/store";
import { NoteStateObserver } from "@ulld/state/observers/noteState";

interface MdxListProps extends HTMLProps<HTMLDivElement> {
    items: DocumentTypes[];
}

const MdxList = (props: MdxListProps) => {
    const id = props.id ? props.id : getRandomId();
    useMathjaxBandaid(id);
    return <div
        {...props}
        id={id}
        className={clsx("", props.className)}
    >
        <NoteStateObserver store={store} />
        {props.items.map((item) => {
            return <MdxListItem
                key={item._id}
                mdx={item}
            />
        })}
    </div>;
};


MdxList.displayName = "MdxList";

export default MdxList;
