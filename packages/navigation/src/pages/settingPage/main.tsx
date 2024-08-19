import React from "react";
import { SettingPageContainer } from "@ulld/utilities/settingPageContainer";
import NavigationSettingsForm from "./form/main";
import { NavigationSettingsProvider } from "./context";



const NavigationSettingsPage = () => {
    return (
        <SettingPageContainer title="Navigation Settings">
            <NavigationSettingsProvider>
                <NavigationSettingsForm />
            </NavigationSettingsProvider>
        </SettingPageContainer>
    );
};


NavigationSettingsPage.displayName = "NavigationSettingsPage";


export default NavigationSettingsPage;
