import type { PluginSettingsRecord } from "@ulld/types"
import deepmerge from "deepmerge";
import type {
    PluginSettingsConstructorProps,
    PluginSettingsImplementation,
    UpdateDataOpts,
    UpdatePluginSettingOptions,
} from "./types";

export abstract class PluginSettings<T extends PluginSettingsRecord>
    implements PluginSettingsImplementation<T> {
    pluginName: string;
    #data: Partial<T> = {};
    constructor(props: PluginSettingsConstructorProps) {
        this.pluginName = props.pluginName;
    }
    updateSettings(newData: Partial<T>, opts: UpdateDataOpts<T>): void {
        const _data = opts.merge ? deepmerge(this.#data, newData) : newData;
        this.#data = _data;
        if (opts.syncOnUpdate) {
            this.sync({
                merge: false, // Should be false regardless of trpc method that will merge data, as it's being merged on the client.
            }).then(opts.callback, () => {
                console.error(`Could not sync pluginSettings with database`);
            });
        }
    }
    updateSettingsPromise(newData: Partial<T>, opts: UpdateDataOpts<T>): Promise<Partial<T>> | undefined {
        const _data = opts.merge ? deepmerge(this.#data, newData) : newData;
        this.#data = _data;
        if (opts.syncOnUpdate) {
            return this.sync({
                merge: false, // Should be false regardless of trpc method that will merge data, as it's being merged on the client.
            })
        }
        return undefined
    }
    get data(): Partial<T> {
        return this.#data;
    }
    set data(val: Partial<T>) {
        this.#data = val;
    }
    abstract getSettings(): Promise<Partial<T> | undefined>;
    abstract sync(opts: UpdatePluginSettingOptions): Promise<Partial<T>>;
}
