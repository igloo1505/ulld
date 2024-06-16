"use client"
import { useContext, useMemo } from "react"
import { AvailableColorStringFormats, ConfigureColorContext, ConfigureColorDispatchContext } from "./colorFormContext"
import { useFormContext } from "@ulld/full-form/form"
import { AppConfigSchemaType } from "@ulld/configschema/zod/main"
import { ColorsConfigSchemaType, ConfigColorValueTypeWithId } from "@ulld/configschema/zod/ui/colorsConfig"
import { AddColorSchemaType } from "../../modals/addColorModal/main"

export const useColorFormState = () => {
    const context = useContext(ConfigureColorContext)
    const dispatch = useContext(ConfigureColorDispatchContext)
    const form = useFormContext<AppConfigSchemaType>()

    const colors: ColorsConfigSchemaType = form.watch("UI.colors") || {}

    const colorItems: ConfigColorValueTypeWithId[] = useMemo(() => Object.keys(colors).map((k) => ({colorId: k, ...colors[k]})), [colors]) as ConfigColorValueTypeWithId[]


    return {
        ...context,
        colorItems,
        openAddColorModal: () => dispatch({type: "openAddColorModal"}),
        closeAddColorModal: () => dispatch({type: "closeAddColorModal"}),

        openEditColorModal: (colorId: string) => dispatch({type: "openEditColorModal", payload: colorId}),
        closeEditColorModal: () => dispatch({type: "closeEditColorModal"}),
        appendColor: (newColor: AddColorSchemaType) => {
            const values = form.getValues("UI.colors")
            form.setValue("UI.colors", {
                ...values,
                [newColor.colorId]: {
                    dark: newColor.dark,
                    light: newColor.light
                }
            })
        },
        setColorFormat: (newFormat: AvailableColorStringFormats) => dispatch({type: "setColorFormat", payload: newFormat}),
        removeColor: (colorId: string) => {
            let values = form.getValues("UI.colors")
            delete values[colorId]
            form.setValue("UI.colors", values)
        }
    }
}
