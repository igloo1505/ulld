import fs from "fs";
import path from "path";
import { DocumentTypeConfig } from "../zod/documentConfigSchema.js";

export const readDocumentTypes = () => {
    const f = path.join(process.cwd(), "appConfig.ulld.json");
    if (!fs.existsSync(f)) return [] as DocumentTypeConfig[]
    const content = JSON.parse(fs.readFileSync(f, "utf-8"));
    return "noteTypes" in content ? content.noteTypes as DocumentTypeConfig[] : [] as DocumentTypeConfig[]
};
