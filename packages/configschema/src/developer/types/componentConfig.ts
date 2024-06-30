import { EmbeddableConfig } from "./embeddableConfig";

export type ComponentConfig = {
    componentName: string;
    slot?: string;
    export: string
    embeddable?: EmbeddableConfig | EmbeddableConfig[]
    docsExport?: string
    fullDocsExport?: string
};
