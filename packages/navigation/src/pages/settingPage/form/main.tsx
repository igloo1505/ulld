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
import { maxFooterSectionLinks, maxFooterSections, maxNavbarLinks } from "../staticSettingData";
import NavbarSection from "../sections/navbarSections/navbarSection";

interface NavigationSettingsFormProps { }

const NavigationSettingsForm = (props: NavigationSettingsFormProps) => {

    const defaultValues: NavigationFormWithUtilityFields = {
        footerSections: [],
        footerSectionInput: "",
        sidebarLinks: [],
        navbarLinks: []
    };

    const form = useForm<NavigationFormWithUtilityFields>({
        resolver: zodResolver(navigationFormSettingSchema),
        defaultValues: developmentDefaultValues,
    });

    return (
        <Form {...form}>
            <AddFooterSectionLinkModal />
            <SettingPageSection 
                title="Footer"
                desc={`Add up to ${maxFooterSections} sections with up to ${maxFooterSectionLinks} links in each.`}
            >
                <FooterSectionForm />
            </SettingPageSection>
            <SettingPageSection
                title="Sidebar Links"
                desc="These links will be available in the secondary navigation component, ordered from top to bottom."
            >
                <NavigationSidebarSettingsSection />
            </SettingPageSection>
            <SettingPageSection
                title="Navbar Links"
                desc={`Create up to ${maxNavbarLinks} buttons to be available in the top navigation bar, ordered from left to right.`}
            >
                <NavbarSection />
            </SettingPageSection>
        </Form>
    );
};

NavigationSettingsForm.displayName = "NavigationSettingsForm";

export default NavigationSettingsForm;
