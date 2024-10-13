"use client";
import React from "react";
import EmbeddedFormCard from "../../../utilComponents/embeddedFormCard";
import { useFormContext } from "@ulld/full-form/form";
import { NavigationFormSettingSchema } from "../../../form/schema";

interface AddNavbarLinkSectionProps { }

const AddNavbarLinkSection = (props: AddNavbarLinkSectionProps) => {
    const form =
        useFormContext<NavigationFormSettingSchema["navbarLinks"][number]>();

    const handleSubmit = (
        data: NavigationFormSettingSchema["navbarLinks"][number],
    ) => { };

    return (
        <EmbeddedFormCard form={form} onSubmit={handleSubmit}>
            <div className={""}>Child please</div>
        </EmbeddedFormCard>
    );
};

AddNavbarLinkSection.displayName = "AddNavbarLinkSection";

export default AddNavbarLinkSection;
