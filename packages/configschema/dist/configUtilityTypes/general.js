import {
  getInternalConfig
} from "../chunk-FQMFJHFD.js";
import "../chunk-3DFOTVSS.js";
import "../chunk-Y66PE4PI.js";
import "../chunk-UTZ6EIF3.js";
import "../chunk-HM4XKJP6.js";
import "../chunk-OEZ4UI6D.js";
import {
  documentTypeConfigSchema
} from "../chunk-Q45QUJC2.js";
import "../chunk-VHM7ROJU.js";
import "../chunk-FSIUFLEX.js";
import "../chunk-OJYONR4K.js";

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
export {
  getDocumentTypeConfig,
  getNoteTypeFromPath,
  getRootRelativePath
};
//# sourceMappingURL=general.js.map