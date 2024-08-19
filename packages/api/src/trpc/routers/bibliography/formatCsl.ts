import Cite from "citation-js";
import "@citation-js/plugin-csl";
import "@citation-js/plugin-bibtex";
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
                let config = Cite.plugins.config.get("@csl");
                useUserDefined = true;
                config.templates.add("user-defined", cslFileContent);
            }
        }
    }
    let citations = new Cite(content);
    return { citations, userDefined: useUserDefined };
};
