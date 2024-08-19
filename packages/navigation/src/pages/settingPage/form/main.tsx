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

interface NavigationSettingsFormProps { }

const NavigationSettingsForm = (props: NavigationSettingsFormProps) => {
    const form = useForm<NavigationFormWithUtilityFields>({
        resolver: zodResolver(navigationFormSettingSchema),
    });

    return (
        <Form {...form}>
            <SettingPageSection title="Footer Sections">
                <FooterSectionForm />
            </SettingPageSection>
        </Form>
    );
};

NavigationSettingsForm.displayName = "NavigationSettingsForm";

export default NavigationSettingsForm;
