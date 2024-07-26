"use client"
import React, { useState } from "react";
import { AutoSettingsTableProps } from "../../../types/general";
import AutoSettingDataTable from "./dataTable";
import { client } from "@ulld/api/client";
import { AutoSettingType } from "@ulld/utilities/types";

const AutoSettingsPageComponent = ({
    modal: AutoSettingModal,
    settings,
    editing,
}: AutoSettingsTableProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [settingItems, setSettingItems] = useState<AutoSettingType[]>(settings);

    const appendSetting = async (s: AutoSettingType) => {
        setSettingItems([...settings, s])
    }

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
                appendSetting={appendSetting}
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
