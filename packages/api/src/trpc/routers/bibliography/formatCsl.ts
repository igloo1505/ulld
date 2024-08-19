import "@citation-js/plugin-csl";
import "@citation-js/plugin-bibtex";
import Cite from "citation-js";
import path from "path";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { FileData } from "@ulld/utilities/fileClass";

export const getFormattedCslCitation = (
    content: string,
    appConfig: AppConfigSchemaOutput,
) => {
    let useUserDefined = false;
    if (appConfig.cslPath) {
        let f = new FileData(path.join(appConfig.fsRoot, appConfig.cslPath), false);
        if (f.exists()) {
            const cslFileContent = f.getContent();
            if (cslFileContent) {
                let config = Cite.plugins.config.get("csl");
                if(config){
                    useUserDefined = true;
                    config?.templates.add("user-defined", cslFileContent);
                } else {
                    console.error("Could not gather csl config. Cannot parse citations with user provided csl format.")
                }
            }
        }
    }
    let citations = new Cite(content);
    return { citations, userDefined: useUserDefined };
};
