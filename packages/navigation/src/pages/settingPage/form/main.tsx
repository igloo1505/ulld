"use client";
import { SettingPageSection } from "@ulld/utilities/settingPageSection";
import type { ReactNode } from "react";
import React from "react";
import { Form } from "@ulld/tailwind/form";
import { Button } from "@ulld/tailwind/button";
import { usePluginSettingsForm } from "@ulld/hooks/usePluginSettingsForm";
import FooterSectionForm from "../sections/footerSections/footerSectionFormSection";
import NavigationSidebarSettingsSection from "../sections/sidebarSections/main";
import AddFooterSectionLinkModal from "../sections/footerSections/modals/addFooterSectionLinkModal";
import {
    maxFooterSectionLinks,
    maxFooterSections,
    maxNavbarLinks,
} from "../staticSettingData";
import NavbarSection from "../sections/navbarSections/navbarSection";
import { defaultFormValues, navigationFormSchemaWithUtilities } from "./schema";


const pluginName = "@ulld/navigation";

const NavigationSettingsForm = (): ReactNode => {
    
    const [form, syncForm] = usePluginSettingsForm({
        pluginName,
        schema: navigationFormSchemaWithUtilities,
        defaultValues: defaultFormValues
    });

    const saveNavigationSettings = (): void => {
        syncForm({
            parseDataBeforeSync: (data) => {
                delete data.footerSectionInput;
                return data;
            },
            toastOnSuccess: {
                title: "Success",
                description: "Your navigation settings have been saved successfully."
            }
        }).catch(() => {
                // eslint-disable-next-line no-console -- Need to output some error to console. #MoveToLoggerPackage
                console.error(`There was an issue updating the @ulld/navigation plugin's settings.`)
            })
    };

    return (
        <Form {...form}>
            <AddFooterSectionLinkModal />
            <SettingPageSection
                desc={`Add up to ${maxFooterSections} sections with up to ${maxFooterSectionLinks} links in each.`}
                title="Footer"
            >
                <FooterSectionForm />
            </SettingPageSection>
            <SettingPageSection
                desc="These links will be available in the secondary navigation component, ordered from top to bottom."
                title="Sidebar Links"
            >
                <NavigationSidebarSettingsSection />
            </SettingPageSection>
            <SettingPageSection
                desc={`Create up to ${maxNavbarLinks} buttons to be available in the top navigation bar, ordered from left to right.`}
                title="Navbar Links"
            >
                <NavbarSection />
            </SettingPageSection>
            <div className="w-full flex flex-row justify-end items-center">
                <Button onClick={saveNavigationSettings}>Save</Button>
            </div>
        </Form>
    );
};

NavigationSettingsForm.displayName = "NavigationSettingsForm";

export default NavigationSettingsForm;
