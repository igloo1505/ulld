import React from "react";
import { NavigationFormSettingSchema } from "../form/schema";
import FooterSection from "./footerSectionItem";
import { useFormContext } from "@ulld/full-form/form";

interface FooterSectionListProps {
}

export const FooterSectionList = (props: FooterSectionListProps) => {
    const form = useFormContext<NavigationFormSettingSchema>()
    return (
        <div className={"w-full min-h-[200px] flex flex-col justify-center items-center gap-4 @[600px]/settings-container:grid @[600px]/settings-container:grid-cols-3 @[600px]/settings-container:items-start"}>
            {form.watch("footerSections")?.map((x, i) => {
                return <FooterSection key={x.label} idx={i} item={x} />;
            })}
        </div>
    );
};

FooterSectionList.displayName = "FooterSectionList";
