// ULLD: protected-path pageFor:UI/AutoSettingsTable
import { serverClient } from "#/trpc/mainServer";
import React from "react";
import { AutoSettingType } from "@ulld/utilities/types";
import AutoSettingsTable from "#/components/slots/ui/autoSettingTable";
import AutoSettingModal from "#/components/slots/ui/autoSettingFormModal";

interface AutoSettingsPageTemplateProps {
    searchParams: {
        edit?: number;
    };
}

const AutoSettingsPageTemplate = async ({
    searchParams: { edit },
}: AutoSettingsPageTemplateProps) => {

    const autoSettings: AutoSettingType[] =
        (await serverClient.autoSettings.getAutoSettings({
            withRegex: false,
        })) as AutoSettingType[];

    let editing: AutoSettingType | undefined = undefined;

    if (edit) {
        editing = autoSettings.find((a) => a.id === edit);
    }

    return <AutoSettingsTable
        editing={editing}
        settings={autoSettings}
        modal={AutoSettingModal}
    />;
};

AutoSettingsPageTemplate.displayName = "AutoSettingsPageTemplate";

export default AutoSettingsPageTemplate;
