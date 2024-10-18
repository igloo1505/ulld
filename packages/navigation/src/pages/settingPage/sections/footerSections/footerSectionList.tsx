"use client";
import React, { type ReactNode } from "react";
import { useFormContext } from "@ulld/full-form/form";
import { Reorder } from "framer-motion";
import { useElementBreakpoint } from "@ulld/hooks/useMeasure"
import { cn } from "@ulld/utilities/cn";
import type { NavigationFormSettingSchema } from "../../form/schema";
import FooterSection from "./footerSectionItem";


export const FooterSectionList = (): ReactNode => {
    const form = useFormContext<NavigationFormSettingSchema>();
    const sections = form.watch("footerSections");

    const isRow = useElementBreakpoint({
        em: "nav-settings-footer-sec",
        defaultValue: null,
        bp: {
            minWidth: 768
        }
    });


    return (
        <Reorder.Group
            axis={isRow ? "x" : "y"}
            className={cn(
                "not-prose w-full min-h-[200px] gap-4",
                isRow
                    ? "grid grid-cols-3 items-start"
                    : "flex flex-col justify-center items-center",
            )}
            onReorder={(newValues) => {
                form.setValue("footerSections", newValues);
            }}
            values={sections}
        >
            {isRow !== null && sections.map((x, i) => {
                return <FooterSection idx={i} isRow={isRow} item={x} key={x.label} />;
            })}
        </Reorder.Group>
    );
};

FooterSectionList.displayName = "FooterSectionList";
