import Cite from "citation-js";
import "@citation-js/plugin-csl";
import "@citation-js/plugin-bibtex";
import fs from "fs";
import path from "path";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

export const getFormattedCslCitation = (
    content: string,
    appConfig: AppConfigSchemaOutput,
) => {
    let useUserDefined = false;
    if (appConfig.cslPath) {
        const content = fs.readFileSync(
            path.join(appConfig.fsRoot, appConfig.cslPath),
            { encoding: "utf-8" },
        );
        if (content) {
            let config = Cite.plugins.config.get("csl");
            useUserDefined = true;
            config.templates.add("user-defined", content);
        }
    }
    let citations = new Cite(content);
    return { citations, userDefined: useUserDefined };
};
