"use client";
import { client } from "@ulld/api/client";
import { onEnter } from "@ulld/state/listeners/keydown";
import { Input } from "@ulld/tailwind/input";
import React, { useState } from "react";

interface BibSheetTagInputProps {
    itemId?: string | null;
    appendTag: (t: string) => void;
}

const BibSheetTagInput = ({ itemId, appendTag }: BibSheetTagInputProps) => {
    const [tagInputValue, setTagInputValue] = useState("");

    const handleSubmitTag = async () => {
        if (!itemId) return;
        let res = await client.bibliography.addBibItemTag.mutate({
            bibItemId: itemId,
            tag: tagInputValue,
        });
        if (res) {
            appendTag(tagInputValue);
            setTagInputValue("");
        }
    };

    return (
        <>
            <Input
                placeholder="Add a Tag"
                value={tagInputValue}
                onChange={(e) => setTagInputValue(e.target.value)}
                onKeyDown={(e) => onEnter(e, handleSubmitTag)}
                className={"max-w-[calc(100%-1rem)] mb-2"}
            />
            <p className={"text-sm text-muted-foreground w-[calc(100%-1rem)]"}>
                Click an existing tag to remove it.
            </p>
        </>
    );
};

BibSheetTagInput.displayName = "BibSheetTagInput";

export default BibSheetTagInput;
