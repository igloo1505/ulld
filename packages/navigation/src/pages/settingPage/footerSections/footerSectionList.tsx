"use client";
import React from "react";
import { NavigationFormSettingSchema } from "../form/schema";
import FooterSection from "./footerSectionItem";
import { useFormContext } from "@ulld/full-form/form";
import { Reorder } from "framer-motion";
import { useElementBreakpoint } from "@ulld/hooks/useMeasure"
import cn from "@ulld/utilities/cn";

interface FooterSectionListProps { }

export const FooterSectionList = (props: FooterSectionListProps) => {
    const form = useFormContext<NavigationFormSettingSchema>();
    const sections = form.watch("footerSections");

    const isRow = useElementBreakpoint({
        em: "nav-settings-footer-sec",
        bp: {
            minWidth: 768
        }
    });


    return (
        <Reorder.Group
            className={cn(
                "not-prose w-full min-h-[200px] gap-4",
                isRow
                    ? "grid grid-cols-3 items-start"
                    : "flex flex-col justify-center items-center",
            )}
            axis={isRow ? "x" : "y"}
            values={sections}
            onReorder={(newValues) => {
                form.setValue("footerSections", newValues);
            }}
        >
            {sections?.map((x, i) => {
                return <FooterSection key={x.label} isRow={isRow} idx={i} item={x} />;
            })}
        </Reorder.Group>
    );
};

FooterSectionList.displayName = "FooterSectionList";
