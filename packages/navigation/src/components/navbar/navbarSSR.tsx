import React, { type ReactNode } from "react";
import { PluginSettings } from "@ulld/api/pluginSettings-server";
import type { NavigationFormSettingSchema } from "../../pages/settingPage/form/schema";
import type { NavbarProps } from "./navbar";
import Navbar from "./navbar";

type NavbarSSRProps = NavbarProps;

const NavbarSSR = async (props: NavbarSSRProps): Promise<ReactNode> => {
  const pluginSettings = new PluginSettings<NavigationFormSettingSchema>({
    pluginName: "@ulld/navigation",
  });

  const Logo = props.logo;

  const settings = await pluginSettings.getSettings();

  return (
    <Navbar
      {...props}
      buttons={settings?.navbarLinks || []}
      logo={Logo ? <Logo className="w-auto h-full fill-foreground" /> : undefined}
    />
  );
};

NavbarSSR.displayName = "NavbarSSR";

export default NavbarSSR;
