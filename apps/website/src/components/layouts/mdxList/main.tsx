"use client";
import { useMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { getRandomId } from "@ulld/utilities/identity";
import { Documentation } from "contentlayer/generated";
import React, { HTMLProps, useRef } from "react";
import clsx from "clsx";
import MdxListItem from "./mdxItem";
import store from "#/state/store";
import { NoteStateObserver } from "@ulld/state/observers/noteState";
import InternalReduxProvider from "#/state/provider";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import { applyTableCodeStyles } from "#/state/actions/dom";
import { useObserveChildren } from "@ulld/hooks/useObserveChildren";

interface MdxListProps extends HTMLProps<HTMLDivElement> {
    items: Documentation[];
}

const MdxList = (props: MdxListProps) => {
    const id = props.id ? props.id : getRandomId();
    const ref = useRef<HTMLDivElement>(null!);
    const hasSetTables = useRef(false);
    useMathjaxBandaid(id);
    useObserveChildren(
        () => {
            if (!hasSetTables.current) {
                let success = applyTableCodeStyles(ref.current);
                if (success) {
                    hasSetTables.current = true;
                }
            }
        },
        {
            childList: true,
            subtree: true,
        },
        ref,
    );
    return (
        <InternalReduxProvider>
            <MathjaxProvider>
                <div
                    {...props}
                    id={id}
                    ref={ref}
                    className={clsx("w-full max-w-full", props.className)}
                    onLoad={() => console.log(`Has loaded`)}
                >
                    <NoteStateObserver store={store} />
                    {props.items.map((item, i) => {
                        return (
                            <MdxListItem
                                key={item._id}
                                mdx={item}
                                isLast={i === props.items.length - 1}
                            />
                        );
                    })}
                </div>
            </MathjaxProvider>
        </InternalReduxProvider>
    );
};

MdxList.displayName = "MdxList";

export default MdxList;
