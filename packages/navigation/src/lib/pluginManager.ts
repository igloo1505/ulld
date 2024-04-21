import { ULLDEmbeddableComponentConfig } from "@ulld/developer/embeddableConfig";
import { ULLDPluginConfig } from "@ulld/developer/pluginConfig";


class MyULLDPluginConfig extends ULLDPluginConfig {
    static embeddables: ULLDEmbeddableComponentConfig[] = [];
    constructor() {
        super();
    }
}

// Make sure to export this class as the default export
export default MyULLDPluginConfig;
