import fs from 'fs';
import path from 'path';

// src/utilityFunctions/readDocumentTypes.ts
var readDocumentTypes = () => {
  const f = path.join(process.cwd(), "appConfig.ulld.json");
  if (!fs.existsSync(f))
    return [];
  const content = JSON.parse(fs.readFileSync(f, "utf-8"));
  return "noteTypes" in content ? content.noteTypes : [];
};

export { readDocumentTypes };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=readDocumentTypes.js.map