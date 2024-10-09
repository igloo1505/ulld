"use client";
import { SettingPageSection } from "@ulld/utilities/settingPageSection";
import React from "react";
import { Form } from "@ulld/tailwind/form";
import { useForm, zodResolver } from "@ulld/full-form/form";
import {
    developmentDefaultValues,
    navigationFormSettingSchema,
    NavigationFormWithUtilityFields,
} from "./schema";
import FooterSectionForm from "../sections/footerSections/footerSectionFormSection";
import NavigationSidebarSettingsSection from "../sections/sidebarSections/main";
import AddFooterSectionLinkModal from "../sections/footerSections/modals/addFooterSectionLinkModal";

interface NavigationSettingsFormProps { }


const NavigationSettingsForm = (props: NavigationSettingsFormProps) => {
    const defaultValues: NavigationFormWithUtilityFields = {
        footerSections: [],
        footerSectionInput: "",
    };
    const form = useForm<NavigationFormWithUtilityFields>({
        resolver: zodResolver(navigationFormSettingSchema),
        defaultValues: developmentDefaultValues,
    });

    return (
        <Form {...form}>
            <AddFooterSectionLinkModal />
            <SettingPageSection title="Footer Sections">
                <FooterSectionForm />
            </SettingPageSection>
            <SettingPageSection title="Sidebar Links">
                <NavigationSidebarSettingsSection />
            </SettingPageSection>
        </Form>
    );
};

NavigationSettingsForm.displayName = "NavigationSettingsForm";

export default NavigationSettingsForm;
