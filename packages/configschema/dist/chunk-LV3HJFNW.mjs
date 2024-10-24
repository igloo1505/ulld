import {
  appConfigSchema
} from "./chunk-3RN7VZZQ.mjs";
import {
  jupyterConfigSchemaOutput
} from "./chunk-JKKHOT76.mjs";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-PPLLPMHA.mjs";
import {
  codeConfigSchemaOutput
} from "./chunk-QOFBLO6X.mjs";
import {
  internalDocumentTypeConfigSchema,
  internalDocumentTypes
} from "./chunk-EON3M3AC.mjs";

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
//# sourceMappingURL=chunk-LV3HJFNW.mjs.map