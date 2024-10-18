// src/utilityFunctions/readDocumentTypes.ts
import fs from "fs";
import path from "path";
var readDocumentTypes = () => {
  const f = path.join(process.cwd(), "appConfig.ulld.json");
  if (!fs.existsSync(f))
    return [];
  const content = JSON.parse(fs.readFileSync(f, "utf-8"));
  return "noteTypes" in content ? content.noteTypes : [];
};
export {
  readDocumentTypes
};
//# sourceMappingURL=readDocumentTypes.mjs.map