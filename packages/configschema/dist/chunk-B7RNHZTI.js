import {
  appConfigSchema
} from "./chunk-NOI74XHG.js";
import {
  jupyterConfigSchemaOutput
} from "./chunk-VZME7SM6.js";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-UTZ6EIF3.js";
import {
  codeConfigSchemaOutput
} from "./chunk-QFJW4YZ5.js";
import {
  internalDocumentTypeConfigSchema,
  internalDocumentTypes
} from "./chunk-T67JN632.js";

// src/zod/secondaryConfigParse/main.ts
import { z } from "zod";
var secondaryConfigParse = appConfigSchema.merge(z.object({
  jupyter: jupyterConfigSchemaOutput,
  code: codeConfigSchemaOutput
})).transform((config) => {
  let pe = getParsableExtensions(config);
  return {
    ...config,
    parsableExtensions: pe,
    filetypeSpecificAppendices: getFileTypeAppendices(pe),
    internalDocumentTypes: internalDocumentTypeConfigSchema.array().parse(internalDocumentTypes),
    fileTypes: {
      image: [
        "jpeg",
        "jpg",
        "webp",
        "png",
        "heif",
        "gif"
      ]
    }
  };
});

export {
  secondaryConfigParse
};
//# sourceMappingURL=chunk-B7RNHZTI.js.map