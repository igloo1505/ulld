import React from "react";
import { TaggableListDropdownProps } from "./types";
import TaggableListDropdown from "./taggableListDropdown";


export const TaggableListConditionalDropdown = (
    props: TaggableListDropdownProps,
) => {
    return <TaggableListDropdown {...props} />
    // Removing default non-foldable list and instead just changing default open state.
    /* const totalItems = props.activeItems.length + props.inactiveItems.length; */
    /* if (totalItems > maxItems) { */
    /*     return <TaggableListDropdown {...props} />; */
    /* } */
    /* return ( */
    /*         <TaggableDropdownINTERNAL {...props} /> */
    /* ); */
};

TaggableListConditionalDropdown.displayName = "TaggableListConditionalDropdown";
