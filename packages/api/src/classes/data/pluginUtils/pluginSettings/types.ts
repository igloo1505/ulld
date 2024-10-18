import type { PluginSettingsRecord } from "@ulld/types"
export type * from "./schemas"

export interface PluginSettingsConstructorProps {
    pluginName: string;
}

export interface UpdatePluginSettingOptions {
    /**
     * Deepmerge object rather than overwrite existing settings entirely.
     * @defaultValue true
     */
    merge?: boolean;
}


export interface UpdateDataOpts<T extends PluginSettingsRecord> {
    /**
     * Whether or not to deepmerge data. 
     * @defaultValue false
     */
    merge?: boolean
    /**
     * Whether or not to sync with the database on each update.
     * @defaultValue false
     */
    syncOnUpdate: boolean
    /**
     * An optional callback called when the syncOnUpdate field is set to true.
     * @defaultValue undefined
     */
    callback?: (newOpts: Partial<T>) => void
}


export interface PluginSettingsImplementation<T extends PluginSettingsRecord> {
    /**
     * A utility function to update data within the class itself, with the ability to automatically sync with the database on each update or to deep merge the updated data through the UpdateDataOpts interface. Basically a setter with a few utilities,
     */
    updateSettings: (data: Partial<T>, opts: UpdateDataOpts<T>) => void
    /**
     * The asynchronous getSettings method needs to be called to populate the original data in the PluginSettings class.     
     */
    getSettings: () => Promise<Partial<T> | undefined>;
    /**
     * Sync classes data field with the user's database.
     */
    sync: (
        opts: UpdatePluginSettingOptions,
    ) => Promise<Partial<T>>;
}
