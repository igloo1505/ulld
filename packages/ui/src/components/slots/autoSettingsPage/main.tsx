import React, { useState } from "react";
import { AutoSettingsTableProps } from "../../../types/general";
import AutoSettingDataTable from "../../pageSpecific/settings/autoSetting/autoSettingDataTable";
import { client } from "@ulld/api/client";

const AutoSettingsPageComponent = ({
    modal: AutoSettingModal,
    settings,
    editing,
}: AutoSettingsTableProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [settingItems, setSettingItems] = useState(settings);
    const removeSettingById = async (id: number) => {
        await client.toDo.deleteTaskByIds.mutate(id);
        setSettingItems(settingItems.filter((f) => f.id !== id));
    };

    return (
        <>
            <AutoSettingModal
                open={modalOpen}
                setOpen={setModalOpen}
                editing={editing}
            />
            <AutoSettingDataTable
                settings={settingItems}
                removeSettingById={removeSettingById}
                setOpen={setModalOpen}
            />
        </>
    );
};

AutoSettingsPageComponent.displayName = "AutoSettingsPageComponent";

export default AutoSettingsPageComponent;
