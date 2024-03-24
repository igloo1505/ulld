"use client"
import React, { useEffect, useState } from 'react'
import { FormItem, Form, FormLabel, FormControl, FormDescription, FormMessage, FormField} from '@ulld/tailwind/form';
import {  Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ulld/tailwind/select';
import {  useToast } from '@ulld/tailwind/use-toast';
import {  Button } from '@ulld/tailwind/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import deepEql from 'deep-eql'
import BibSettingsSection, { BibSettingsSectionProps } from './bib/BibSettingsSection';
import { client } from '@ulld/api/client';
import { settingsChangeSchema } from '@ulld/api/schemas/settings/settingsChangeSchema';
import { BibWithEntries } from '@ulld/api/trpcInternalMethods/bib/main';
import { RetrievedSettings } from '@ulld/api/trpcTypes/main';
import { toggleSetting } from '@ulld/state/slices/settings';
import { store } from '@ulld/state/store';
import { LabeledCheckbox } from '../../menus/labeledInputs/checkbox';



interface SettingsPageContentProps extends BibSettingsSectionProps {
    settings: RetrievedSettings
    bib: BibWithEntries
    lastBibSync?: Date | string | null
}


type SettingSchemaType = z.infer<typeof settingsChangeSchema>


/* TODO: Redo this page entirely... especially the way useForm and the inputs are organized. Spend the time to actually make this function more like the HealthReport form with multiple sections (with proper nested router) and significantly increase the settings object capabilities. Move much of the appConfig over to the settings object in the DB, and make sure the settings object mis repeatedly sync'd with a local json file to ensure it is never lost regardless of what else is removed, lost or wiped. */
const SettingsPageContent = ({ settings, fileExists, bib, ...props }: SettingsPageContentProps) => {
    const [debounce, setDebounce] = useState<null | NodeJS.Timeout>(null)
    const { toast } = useToast()
    const form = useForm<SettingSchemaType>({
        resolver: zodResolver(settingsChangeSchema),
        defaultValues: {
            ...settings,
            tooltips: typeof settings?.tooltips === "boolean" ? settings.tooltips : false,
            title: settings?.title || "Uh Little Less Dum",
            summary_showCitations: typeof settings?.summary_showCitations === "undefined" ? true : settings.summary_showCitations,
            summary_showTags: typeof settings?.summary_showTags === "undefined" ? true : settings.summary_showTags,
            landingImageAlign: settings?.landingImageAlign || "center"
        },
    })

    const lockCurrentImage = async () => {
        await client.settings.lockCurrentLandingImage.mutate("current")
        toast({
            description: "The home page image will not change until this setting is changed."
        })
    }

    const clearLockedImage = async () => {
        await client.settings.lockCurrentLandingImage.mutate("clear")
        toast({
            description: "The landing page image will now change automatically once per day."
        })
    }


    const saveSettings = async (settingData: SettingSchemaType) => {
        console.count(`saveSettings`)
        await client.settings.updateSettings.mutate(settingData)
        toast({
            title: "Success",
            description: "Settings have been saved successfully."
        })
        setDebounce(null)
    }

    const formData = form.watch()

    const debounceSettingUpdate = (settingData: SettingSchemaType) => {
        console.count("debounceSettingUpdate")
        if (debounce) {
            clearTimeout(debounce)
        }
        setDebounce(setTimeout(() => saveSettings(settingData), 500))
    }

    const handleSave = async () => {
        let values = form.getValues()
        if (!deepEql(values, settings)) {
            debounceSettingUpdate(values)
        }
    }

    useEffect(() => {
        const subscription = form.watch((values, { name, type }) => {
            if (!deepEql(values, settings)) {
                debounceSettingUpdate(values)
            }
        })
        return () => subscription.unsubscribe()
    }, [form?.watch])

    useEffect(() => {
        console.count("in useEffect triggered by form")
        let values = form.getValues()
        if (!deepEql(values, settings)) {
            debounceSettingUpdate(values)
        }
    }, [form])

    const toggleTooltips = () => {
        store.dispatch(toggleSetting("tooltips"))
        form.setValue("tooltips", !form.getValues("tooltips"))
    }


    return (
        <Form {...form}>
            <div className={"text-gray-900 dark:text-gray-200 space-y-6"}>
                <div className="border-b border-gray-900/10 dark:border-gray-600/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">Settings</h2>
                </div>
                <div className={"flex flex-col justify-center items-start gap-4"}>
                    <legend className={"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"}>UI Settings</legend>
                    <LabeledCheckbox
                        label={"Tooltips"}
                        checked={formData.tooltips || false}
                        onChange={toggleTooltips}
                        desc={"Show tooltips for things like link URL's on hover."}
                        name="tooltips"
                    />
                </div>
                <div className={"flex flex-col justify-center items-start gap-4"}>
                    <legend className={"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"}>Sync Settings</legend>
                    <LabeledCheckbox
                        label={"Clean on Sync"}
                        checked={formData.cleanOnSync || false}
                        onChange={() => form.setValue("cleanOnSync", !form.getValues("cleanOnSync"))}
                        desc={"Should we remove data from the database that is no longer in use?"}
                        name="cleanOnSync"
                    />
                </div>
                <div className={"w-fit flex flex-col gap-3 justify-center items-start"}>
                    <FormField
                        control={form.control}
                        name="landingImageAlign"
                        render={({ field }) => (
                            <FormItem className={"mt-6 w-fit"}>
                                <FormLabel>Landing Image Alignment</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="center">Center</SelectItem>
                                        <SelectItem value="top">Top</SelectItem>
                                        <SelectItem value="bottom">Bottom</SelectItem>
                                        <SelectItem value="right">Right</SelectItem>
                                        <SelectItem value="left">Left</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Change the landing page image alignment here.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {formData.lockedLandingImage === null ? <Button onClick={lockCurrentImage}>Lock Image</Button> : <Button variant="secondary" onClick={clearLockedImage}>Clear Locked Image</Button>}
                </div>
                <BibSettingsSection {...props} bib={bib} fileExists={fileExists || false} />
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button variant="destructive">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} type="submit">
                        Save
                    </Button>
                </div>
            </div>
        </Form>
    )
}


SettingsPageContent.displayName = "SettingsPageContent"


export default SettingsPageContent;
