import {
  ShellManager
} from "./chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/baseApp/fileContent/eventMethodList.ts
init_esm_shims();
var getEventMethodListContent = (plugins, eventType) => {
  let sh = new ShellManager();
  sh.logVerbose(`Found ${plugins.length} ${eventType} methods`);
  let importString = plugins.map((f) => f.events?.getEventImport(eventType)).join("\n");
  let methodsString = plugins.map((f) => f.events?.getOutputMethod(eventType)).join(",\n");
  return `import { OutputMethods } from "@ulld/configschema/types";
${importString}

const ${eventType}MethodList: OutputMethods<any, "${eventType}"> = [
${methodsString}
]

export default ${eventType}MethodList
`;
};

export {
  getEventMethodListContent
};
//# sourceMappingURL=chunk-F5ATUBIT.js.map