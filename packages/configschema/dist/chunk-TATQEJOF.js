import {
  appConfigSchema
} from "./chunk-GV63OONA.js";
import {
  jupyterConfigSchemaOutput
} from "./chunk-5AKB5JAJ.js";
import {
  getFileTypeAppendices,
  getParsableExtensions
} from "./chunk-FHTQCW2Y.js";
import {
  codeConfigSchemaOutput
} from "./chunk-C7Q6EMMC.js";
import {
  internalDocumentTypeConfigSchema,
  internalDocumentTypes
} from "./chunk-V3YAW6X5.js";

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
//# sourceMappingURL=chunk-TATQEJOF.js.map