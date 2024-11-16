// Slot: form/SettingsPageContainer type:component propsExtends:SettingsPageContainerProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import React, { ReactNode } from "react";
import { SettingsPageContainerProps } from "@ulld/full-form/types";
import { PickPageParams } from "@ulld/utilities/types";
import buildData from "buildData"
import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes";
import {getPluginConfig} from "@ulld/utilities/getPluginConfig"
import appConfig from "appConfig"
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

interface SettingsPageContainerTemplateProps
    extends PickPageParams<SettingsPageContainerProps> {
    children: ReactNode
    pluginName: string
}


const SettingsPageContainerTemplate = (
    {children, pluginName, ...props}: SettingsPageContainerTemplateProps,
) => {
    let item = getPluginConfig({ pluginName, appConfig: appConfig as AppConfigSchemaOutput })
    const settingdata = (buildData as unknown as BuildStaticDataOutput).settingPages.find((f) => f.pluginName === pluginName)
    return <REPLACEME
        {...props}
        title={settingdata?.title || item?.label || pluginName}
        subtitle={settingdata?.subtitle}
    >
        {children}
    </REPLACEME>;
};

SettingsPageContainerTemplate.displayName = "SettingsPageContainerTemplate";

export default SettingsPageContainerTemplate;
