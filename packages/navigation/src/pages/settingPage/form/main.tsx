"use client";
import { SettingPageSection } from "@ulld/utilities/settingPageSection";
import type { ReactNode } from "react";
import React, { useEffect, useMemo } from "react";
import { Form } from "@ulld/tailwind/form";
import { Button } from "@ulld/tailwind/button";
import deepMerge from "deepmerge";
import { PluginSettings } from "@ulld/api/pluginSettings-client";
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
import { navigationFormSchemaWithUtilities } from "./schema";
import type {
    NavigationFormSettingSchema,
    NavigationFormWithUtilityFields,
} from "./schema";
import { client } from "@ulld/api/client";

const pluginName = "@ulld/navigation";

const clearTestData = async (): Promise<void> => {
       await client.pluginSettings.clearPluginSettings.mutate({pluginName})
    }

const NavigationSettingsForm = (): ReactNode => {
    
    const [form, syncForm] = usePluginSettingsForm({
        pluginName,
        schema: navigationFormSchemaWithUtilities,
        defaultValues: {
            footerSections: [],
            footerSectionInput: "",
            sidebarLinks: [],
            navbarLinks: [],
        },
    });

    /* const form = useForm<NavigationFormWithUtilityFields>({ */
    /*     resolver: zodResolver(navigationFormSettingSchema), */
    /*     defaultValues: getDevelopmentDefaultValues(), */
    /* }); */

    /* const updateFormData = (data: Partial<NavigationFormSettingSchema>): void => { */
    /*     const existingFormData = form.getValues(); */
    /*     const newData = deepMerge(existingFormData, data); */
    /*     for (const k in newData) { */
    /*         form.setValue( */
    /*             k as keyof typeof newData, */
    /*             newData[k as keyof typeof newData], */
    /*         ); */
    /*     } */
    /* }; */

    const pluginSettings = useMemo(() => {
        return new PluginSettings<NavigationFormWithUtilityFields>({
            pluginName,
        });
    }, []);

    const saveNavigationSettings = (): void => {
        syncForm({
            parseDataBeforeSync: (data: Partial<NavigationFormWithUtilityFields>) => {
                delete data.footerSectionInput;
                return data;
            },
            toastOnSuccess: {
                title: "Success",
                description: "Your navigation settings have been saved successfully."
            }
        });
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
