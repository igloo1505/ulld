import slots from "@ulld/utilities/slotMap.json";
import { EmbeddableConfig } from "./embeddableConfig";

export type ComponentConfig = {
    componentName: string;
    slot?: keyof typeof slots;
    export: string
    embedable?: EmbeddableConfig | EmbeddableConfig[]
    docsExport?: string
    fullDocsExport?: string
};
