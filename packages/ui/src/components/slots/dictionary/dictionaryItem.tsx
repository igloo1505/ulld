import React from "react";
import { DictionaryItemProps } from "../../../types/general";
import { useDebounceMdxParse } from "@ulld/hooks/useDebounceMdxParse";

interface DictionaryItemEntryProps extends DictionaryItemProps { }

const DictionaryItemEntry = ({ content, label }: DictionaryItemEntryProps) => {
    const { Component } = useDebounceMdxParse(content || "", 250, {
        parseDefinitions: false
    });
    return (
        <dl className={"definitionAnchor not-prose !p-0"}>
            <dt className={"font-bold mt-6 mb-2"}>{label}</dt>
            <dd className={"!mt-0 !mb-5 !ml-4"}>
                <Component />
            </dd>
        </dl>
    );
};

DictionaryItemEntry.displayName = "DictionaryItemEntry";

export default DictionaryItemEntry;
