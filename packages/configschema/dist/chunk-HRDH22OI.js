import { appConfigSchema } from './chunk-F6FIEJSI.js';
import { jupyterConfigSchemaOutput } from './chunk-DNZAZRFO.js';
import { getParsableExtensions, getFileTypeAppendices } from './chunk-FHTQCW2Y.js';
import { codeConfigSchemaOutput } from './chunk-C7Q6EMMC.js';
import { internalDocumentTypeConfigSchema, internalDocumentTypes } from './chunk-6FCOZTYD.js';
import { z } from 'zod';

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

export { secondaryConfigParse };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-HRDH22OI.js.map