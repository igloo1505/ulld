import { EmbeddableConfig } from "./embeddableConfig.js";
import { PluginSlotKey } from "../slotMapType.js";
import { SlotMap } from "../slotMapRootType.js";
export type ComponentConfig<T extends PluginSlotKey | undefined = undefined> = {
    componentName: string;
    slot?: T extends PluginSlotKey ? keyof SlotMap[T] : string;
    export: string;
    embeddable?: EmbeddableConfig | EmbeddableConfig[];
    docsExport?: string;
    fullDocsExport?: string;
    exportedPropsName?: string;
};
