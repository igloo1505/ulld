import React, { type ReactNode } from "react";
import { serverClient } from "@ulld/api/serverClient";
import type { FooterProps } from "../../types";
import type { NavigationFormSettingSchema } from "../../pages/settingPage/form/schema";
import Footer from "./main";

const FooterSSR = async ({ logo: Logo }: FooterProps): Promise<ReactNode> => {
    const pluginSettings = (await serverClient.pluginSettings.getPluginSettings({
        pluginName: "@ulld/navigation",
    })) as NavigationFormSettingSchema | undefined | null;
    return (
        <Footer pluginSettings={pluginSettings || null}>
            <Logo className="w-auto h-7 fill-foreground" />
        </Footer>
    );
};

FooterSSR.displayName = "FooterSSR";

export default FooterSSR;
