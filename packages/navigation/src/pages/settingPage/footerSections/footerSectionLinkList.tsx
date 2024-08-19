"use client"
import React, { ReactNode, useEffect, useState } from "react";
import { Reorder } from "framer-motion";
import {
    NavigationFormSettingSchema,
    NavigationFormWithUtilityFields,
} from "../form/schema";
import FooterSectionItemLink from "./footerSectionItemLink";
import { useFormContext } from "@ulld/full-form/form";

interface FooterSectionLinkListProps {
    items: NavigationFormSettingSchema["footerSections"][number]["items"];
    sectionIndex: number;
}

const FooterSectionLinkList = ({
    items,
    sectionIndex,
}: FooterSectionLinkListProps) => {
    const form = useFormContext<NavigationFormWithUtilityFields>();

    return (
        <Reorder.Group
            axis="y"
            values={items}
            onReorder={(newItems) => {
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
            }}
            className={
                "w-full max-w-full space-y-2"
            }
        /* as={as} */
        >
            {items.map((item, i) => {
                return (
                    <FooterSectionItemLink item={item} itemIndex={i} sectionIndex={sectionIndex} />
                );
            })}
        </Reorder.Group>
    );
};

FooterSectionLinkList.displayName = "FooterSectionLinkList";

export default FooterSectionLinkList;
