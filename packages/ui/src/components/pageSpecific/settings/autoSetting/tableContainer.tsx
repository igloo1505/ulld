"use client"
import { AutoSettingType, AutoSettingWithRegex } from '#/trpc/routers/sync'
import React, { useState } from 'react'
import AutoSettingDataTable from './autoSettingDataTable'
import AutoSettingFormModal from './formModal'



interface AutoSettingTableContainerProps {
    settings: AutoSettingType[]
    editing?: AutoSettingType | undefined
}

const AutoSettingTableContainer = ({ settings, editing }: AutoSettingTableContainerProps) => {
    const [open, setOpen] = useState(false)
    const [_settings, setSettings] = useState<AutoSettingType[]>(settings)

    const appendSetting = (s: AutoSettingType) => {
        setSettings([..._settings, s])
    }

    const removeSettingById = (id: number) => {
        setSettings(_settings.filter((s) => !Boolean(s.id && s.id === id)))
    }

    return (
        <>
            <AutoSettingFormModal
                edit={editing}
                open={open}
                setOpen={setOpen}
                appendSetting={appendSetting}
            />
            <AutoSettingDataTable
                settings={_settings}
                removeSettingById={removeSettingById}
                setOpen={setOpen}
            />
        </>
    )
}


AutoSettingTableContainer.displayName = "AutoSettingTableContainer"


export default AutoSettingTableContainer;
