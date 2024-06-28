import { EmbeddableConfig } from "./embeddableConfig";

export type ComponentConfig = {
    componentName: string;
    slot?: string;
    export: string
    embedable?: EmbeddableConfig | EmbeddableConfig[]
    docsExport?: string
    fullDocsExport?: string
};
