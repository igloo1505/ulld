"use client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuPortal,
    ContextMenuTrigger,
} from "@ulld/tailwind/context-menu";
import { client } from "@ulld/api/client";
import { useToast } from "@ulld/tailwind/use-toast";
import { MdxContentCLIENT } from "@ulld/render/mdx";
import { NoteSummaryProps } from "../../../types/general";

interface ThemedSummaryCardContextMenuProps {
    cardId: string;
    item: NoteSummaryProps["item"];
    children: ReactNode;
}

interface ContextMenuItem<T extends string | number | undefined> {
    label: string;
    id: T;
    onClick: () => void;
}

const getContextItems = (
    item: ThemedSummaryCardContextMenuProps["item"],
    toast: (val: React.ReactNode) => void,
) => {
    const contextItems: ContextMenuItem<number | undefined>[] = [
        {
            label: "Delete",
            id: item.id,
            onClick: async () => {
                if (item.id) {
                    client.mdx.deleteNoteById.mutate(item.id);
                }
            },
        },

        {
            label: item.bookmarked ? "Remove Bookmark" : "Bookmark",
            id: item.id,
            onClick: async () => {
                if (item.id) {
                    client.mdx.toggleBookmarkedById.mutate(item.id);
                    /* TODO: Probably need to come back and change this to allow latex in titles and display it properly. Ideally create a 'toast' slice in state and create a universal function to automatically parse and style latex content appropriately. */
                    toast(
                        item.bookmarked ? (
                            "Bookmark removed"
                        ) : (
                            <div>
                                <span>
                                    <MdxContentCLIENT inline content={item.title} />
                                </span>
                                {` was bookmarked`}
                            </div>
                        ),
                    );
                }
            },
        },
    ];
    return contextItems;
};

/* TODO: Append listener to proper card and adjust props to follow target that is not a direct child to allow the summary card to remain a server component. */
const ThemedSummaryCardContextMenu = ({
    cardId,
    item,
    children,
}: ThemedSummaryCardContextMenuProps) => {
    const [target, setTarget] = useState<HTMLElement | null>(null);
    const { toast: _toast } = useToast();

    useEffect(() => {
        setTarget(document.getElementById(cardId));
    }, [cardId]);

    const toast = (desc: React.ReactNode) =>
        _toast({
            title: "Success",
            description: desc,
        });

    const contextItems = useMemo(() => getContextItems(item, toast), [item]);

    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent>
                {contextItems.map((l) => {
                    return (
                        <ContextMenuItem key={l.label} onClick={l.onClick}>
                            {l.label}
                        </ContextMenuItem>
                    );
                })}
            </ContextMenuContent>
        </ContextMenu>
    );
};

ThemedSummaryCardContextMenu.displayName = "ThemedSummaryCardContextMenu";

export default ThemedSummaryCardContextMenu;
