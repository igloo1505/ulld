import { EmbeddableConfig } from "./embeddableConfig";
import { PluginSlotKey, SlotMap } from "../slotMapType";


export type ComponentConfig<T extends PluginSlotKey | undefined = undefined> = {
    componentName: string;
    slot?: T extends PluginSlotKey ? keyof SlotMap[T] : string
    export: string
    embeddable?: EmbeddableConfig | EmbeddableConfig[]
    docsExport?: string
    fullDocsExport?: string
};
