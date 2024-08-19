"use client";
import { SettingPageSection } from "@ulld/utilities/settingPageSection";
import React from "react";
import FooterSectionForm from "../footerSections/footerSectionFormSection";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import {
    navigationFormSettingSchema,
    NavigationFormWithUtilityFields,
} from "./schema";
import AddFooterSectionLinkModal from "../footerSections/modals/addFooterSectionLinkModal";
import SidebarLinksFormSection from "../sidebarLinks/formSection";

interface NavigationSettingsFormProps { }

const NavigationSettingsForm = (props: NavigationSettingsFormProps) => {
    const form = useForm<NavigationFormWithUtilityFields>({
        resolver: zodResolver(navigationFormSettingSchema),
        defaultValues: {
            footerSections: [],
            footerSectionInput: "",
        },
    });

    return (
        <Form {...form}>
            <AddFooterSectionLinkModal />
            <SettingPageSection title="Footer Sections">
                <FooterSectionForm />
            </SettingPageSection>
            <SettingPageSection title="Sidebar Links">
                <SidebarLinksFormSection />
            </SettingPageSection>
        </Form>
    );
};

NavigationSettingsForm.displayName = "NavigationSettingsForm";

export default NavigationSettingsForm;
