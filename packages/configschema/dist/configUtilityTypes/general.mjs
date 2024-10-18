import {
  getInternalConfig
} from "../chunk-J6RND5PV.mjs";
import "../chunk-FLMWNW2N.mjs";
import "../chunk-UIGQNR7P.mjs";
import "../chunk-PPLLPMHA.mjs";
import "../chunk-B62VSHBM.mjs";
import "../chunk-UUFTJZTI.mjs";
import {
  documentTypeConfigSchema
} from "../chunk-VXYDCNFY.mjs";
import "../chunk-XHBPEY36.mjs";
import "../chunk-P5DB76KQ.mjs";

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
//# sourceMappingURL=general.mjs.map