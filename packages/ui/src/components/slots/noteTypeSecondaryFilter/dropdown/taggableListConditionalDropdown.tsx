"use client";
import React from "react";
import { TaggableDropdownINTERNAL } from "./internal";
import { TaggableListDropdownProps } from "./types";
import TaggableListDropdown from "./taggableListDropdown";

const maxItems = 12;

export const TaggableListConditionalDropdown = (
    props: TaggableListDropdownProps,
) => {
    const totalItems = props.activeItems.length + props.inactiveItems.length;
    if (totalItems > maxItems) {
        return <TaggableListDropdown {...props} />;
    }
    return (
            <TaggableDropdownINTERNAL {...props} />
    );
};

TaggableListConditionalDropdown.displayName = "TaggableListConditionalDropdown";
