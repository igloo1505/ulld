"use client"
import { setSettingValue } from '#/actions/settings'
import TextInput from '#/components/inputs/text'
import { Switch } from '#/components/shad/ui/switch'
import { client } from '#/trpc/client'
import { SettingBoolean } from '#/types/settings'
import clsx from 'clsx'
import React, { ChangeEvent, useId, useState } from 'react'



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
            const { success, settings } = await setSettingValue(setting, textValue)
        }
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            setValue(target.value)
        }
        return (
            <TextInput value={textValue} label={label} onChange={handleChange} onUpdate={handleUpdate} classes={{
                container: containerClassName,
                input: inputClassName
            }}
            />
        )
    }

}


SettingItem.displayName = "SettingItem"


export default SettingItem;
