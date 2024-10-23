import {
  internalDocumentTypeConfigSchema,
  internalDocumentTypes
} from "./chunk-74AXOVJB.mjs";
import {
  appConfigSchema
} from "./chunk-2YKRUPDT.mjs";
import {
  jupyterConfigSchemaOutput
} from "./chunk-JVLW3XLC.mjs";
import {
  codeConfigSchemaOutput
} from "./chunk-YPPW64VT.mjs";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-PPLLPMHA.mjs";

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
//# sourceMappingURL=chunk-TDX7DHEM.mjs.map