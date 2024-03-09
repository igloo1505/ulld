/* BUG: This is completely broken after the migration to a monorepo. Rebuild the entire settings page with space for much of the appConfig. Use a layout similar to the nested lawyerVid profile pages. */
"use client"
import { Switch, Input } from '@ulld/tailwind/base'
import { client } from '@ulld/api'
import clsx from 'clsx'
import React, { ChangeEvent, useId, useState } from 'react'
import { SettingBoolean } from '../../../../../state/src/state/types/general'



interface SettingItemProps {
    label: string
    type: "boolean" | "text"
    setting: keyof SettingBoolean
    value: boolean | string
    inputProps?: React.HTMLAttributes<HTMLInputElement> & { checked?: boolean }
    inputClassName?: string
    containerClassName?: string
}

const SettingItem = ({ type, containerClassName, inputClassName, value, label, setting, inputProps }: SettingItemProps) => {
    const [checked, setChecked] = useState(typeof value === "boolean" ? value : false)
    const [textValue, setValue] = useState(typeof value === "string" ? value : "")
    const id = useId()
    if (type === "boolean") {
        const handleChange = async () => {
            const res = await client.settings.toggleBooleanSetting.mutate(setting as any)
            if (res) {
                document.getElementById(id)?.toggleAttribute("data-state", true)
                setChecked(!checked)
            }
        }
        return (
            <div className={clsx("flex flex-row justify-start items-center gap-4", containerClassName && containerClassName)}>
                <Switch {...inputProps as any} checked={checked} id={id} onChange={handleChange} />
                <div className={""}>{label}</div>
            </div>
        )
    }
    if (type === "text") {
        const handleUpdate = async () => {
            /* const { success, settings } = await setSettingValue(setting, textValue) */
        }
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            setValue(target.value)
        }
        return (
            <Input value={textValue}
                onChange={handleChange}
                placeholder="This is broken. Rebuild the entire settings page."
            /* className={} */
            />
        )
    }

}


SettingItem.displayName = "SettingItem"


export default SettingItem;
