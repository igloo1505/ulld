import type { PluginSettingsRecord } from "@ulld/types";
import type { ToastConfigType } from "@ulld/utilities/types";
import { useMemo } from "react";
import { PluginSettings } from "@ulld/api/pluginSettings-client";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import type { Path, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UpdatePluginSettingOptionsSchema } from "@ulld/api/types";
import { toast } from "@ulld/tailwind/use-toast";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";


export interface UsePluginSettingsFormProps<
    T extends z.ZodType,
    J extends Partial<z.infer<T>> & PluginSettingsRecord,
> {
    pluginName: string;
    schema: T;
    defaultValues: z.input<T>;
    formProps?: Partial<
        Omit<ReturnType<typeof useForm<T>>, "resolver" | "defaultValues">
    >;
    parseBeforeLoad?: (data: J) => Partial<T>;
}

interface SyncOpts<
    T extends z.ZodType,
    J extends Partial<z.infer<T>> & PluginSettingsRecord,
> extends UpdatePluginSettingOptionsSchema {
    clearFormOnSuccess?: boolean;
    updateFormOnSuccess?: boolean;
    parseDataBeforeSync?: (data: Partial<z.infer<T>>) => J;
    toastOnSuccess?: ToastConfigType;
}

export type UsePluginSettingsFormTuple<
    T extends z.ZodType,
    J extends Partial<z.infer<T>> & PluginSettingsRecord,
> = [
        UseFormReturn<z.infer<T>>,
        (opts?: SyncOpts<T, J>) => Promise<Partial<T> | undefined>,
    ];

/**
 * Returns a tuple where the first item is a react-hook-form instance, and the second is a method to sync the current form values with the user's database.
 *
 * @example
 * const mySchema = z.object(\{
 *     someItem: z.boolean()
 * \})
 * const [form, syncForm] = usePluginSettingsForm\<typeof mySchema\>(\{
 *     pluginName: "myPlugin",
 *     schema: mySchema,
 *     defaultValues: \{
 *         someItem: true
 *     \}
 * \})
 *
 * @returns [UseFormReturn<T>, () =\> void]
 */
export const usePluginSettingsForm = <
    T extends z.ZodType,
    J extends Partial<z.infer<T>> & PluginSettingsRecord,
>(
    props: UsePluginSettingsFormProps<T, J>,
): UsePluginSettingsFormTuple<T, J> => {
    const form = useForm<z.infer<T>>({
        resolver: zodResolver(props.schema),
        defaultValues: props.defaultValues,
        ...props.formProps,
    });

    const pluginSettings = useMemo(() => {
        return new PluginSettings<z.infer<T>>({
            pluginName: props.pluginName,
        });
    }, [props.pluginName]);

    const updateFormData = (data: Partial<z.infer<T>>): void => {
        for (const k in data) {
            const _dataK = data[k];
            if (_dataK) {
                form.setValue(k as unknown as Path<z.TypeOf<T>>, _dataK);
            }
        }
    };

    useIsomorphicLayoutEffect(() => {
        const handleInitialSettings = async (): Promise<void> => {
            const initialSettings = await pluginSettings.getSettings();
            if (initialSettings && Object.keys(initialSettings).length) {
                updateFormData(initialSettings);
            }
        };
        handleInitialSettings().catch(() => {
            /* TODO: Handle the logger package much, muchhhh more thoroughly and come back and change all console logs to use that package, and remove all console logs that should not be a part of the user facing app. */
            console.error(
                `There was an error setting the initial @ulld/navigation settings.`,
            );
        });
    }, []);

    const syncForm: UsePluginSettingsFormTuple<T, J>[1] = async (
        opts = {},
    ): Promise<Partial<T> | undefined> => {
        const fd = form.getValues();
        const formData = opts.parseDataBeforeSync
            ? opts.parseDataBeforeSync(fd)
            : fd;
        const newSettings = await pluginSettings.updateSettingsPromise(formData, {
            ...opts,
            syncOnUpdate: true,
        });
        if (newSettings) {
            if (opts.clearFormOnSuccess) {
                form.reset();
            } else if (opts.updateFormOnSuccess) {
                updateFormData(newSettings);
            }
            if (opts.toastOnSuccess) {
                toast(opts.toastOnSuccess);
            }
        }
        return newSettings;
    };

    return [form, syncForm];
};
