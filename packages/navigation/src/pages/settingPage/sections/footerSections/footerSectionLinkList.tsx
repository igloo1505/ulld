"use client";
import React, { useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import {
    NavigationFormSettingSchema,
    NavigationFormWithUtilityFields,
} from "../../form/schema";
import FooterSectionItemLink from "./footerSectionItemLink";
import { useFormContext } from "@ulld/full-form/form";

interface FooterSectionLinkListProps {
    items: NavigationFormSettingSchema["footerSections"][number]["items"];
    sectionIndex: number;
}

const FooterSectionLinkList = ({
    items: _items,
    sectionIndex,
}: FooterSectionLinkListProps) => {
    const form = useFormContext<NavigationFormWithUtilityFields>();
    const [items, setItems] = useState(_items);

    useEffect(() => {
        setItems(_items);
    }, [_items]);

    const updateSectionList = (newItems = items) => {
        form.setValue(
            "footerSections",
            form.getValues("footerSections").map((x, i) =>
                i === sectionIndex
                    ? {
                        ...x,
                        items: newItems,
                    }
                    : x,
            ),
        );
    };

    const removeItem = (idx: number) => {
        const existingSections = form.getValues("footerSections");
        form.setValue(
            "footerSections",
            existingSections.map((x, i) =>
                i === sectionIndex
                    ? {
                        ...x,
                        items: x.items.filter((l, li) => li !== idx),
                    }
                    : x,
            ),
        );
    };

    return (
        <Reorder.Group
            className={
                "not-prose flex flex-col justify-start items-center gap-2 w-full max-w-full"
            }
            axis="y"
            values={items}
            onReorder={updateSectionList}
        >
            {items?.map((item, i) => {
                return (
                    <FooterSectionItemLink
                        key={`${item.label}-linkItem-comp`}
                        item={item}
                        itemIndex={i}
                        sectionIndex={sectionIndex}
                        onRemove={() => removeItem(i)}
                    />
                );
            })}
        </Reorder.Group>
    );
};

FooterSectionLinkList.displayName = "FooterSectionLinkList";

export default FooterSectionLinkList;
