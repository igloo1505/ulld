import { getInternalConfig } from '../chunk-EI6LLQAJ.js';
import '../chunk-454PT7HE.js';
import '../chunk-GT6H4QSG.js';
import '../chunk-FHTQCW2Y.js';
import '../chunk-MJBK275F.js';
import '../chunk-D57TGXVB.js';
import { documentTypeConfigSchema } from '../chunk-GQ44M3IR.js';
import '../chunk-PESBV4SX.js';
import '../chunk-QZPOLBQN.js';

// src/configUtilityTypes/general.ts
var getDocumentTypeConfig = (docType, config) => {
  const _config = config || getInternalConfig();
  let dt = typeof docType === "string" ? docType : docType.docType;
  return _config.noteTypes?.find((f) => f.docType === dt);
};
var getNoteTypeFromPath = (rootRelativePath, config) => {
  if (!rootRelativePath)
    return "RemoteNote";
  const _config = config || getInternalConfig();
  let nts = _config.noteTypes?.filter(
    (n) => Boolean(n.fs && rootRelativePath.includes(n.fs))
  );
  let nt = nts.filter((f) => typeof f.fs !== "undefined").sort((a, b) => b.fs?.length - a.fs?.length)?.[0];
  return nt ? documentTypeConfigSchema.parse(nt) : void 0;
};
var getRootRelativePath = (slug, docType, config) => {
  const _config = config || getInternalConfig();
  return `${_config.noteTypes?.find((t) => t.docType === docType)?.fs}/${slug}`;
};

export { getDocumentTypeConfig, getNoteTypeFromPath, getRootRelativePath };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=general.js.map