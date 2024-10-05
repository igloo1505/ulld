"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkC7XTBZXRcjs = require('../chunk-C7XTBZXR.cjs');
require('../chunk-E22WNRFD.cjs');
require('../chunk-4R553QM5.cjs');
require('../chunk-MQKT3OUL.cjs');
require('../chunk-76MVLTRY.cjs');
require('../chunk-UFNRIBN3.cjs');


var _chunkIB2BTZA2cjs = require('../chunk-IB2BTZA2.cjs');
require('../chunk-5DEJBS5Y.cjs');
require('../chunk-ZLIBX2HS.cjs');

// src/configUtilityTypes/general.ts
var getDocumentTypeConfig = (docType, config) => {
  const _config = config || _chunkC7XTBZXRcjs.getInternalConfig.call(void 0, );
  let dt = typeof docType === "string" ? docType : docType.docType;
  return _optionalChain([_config, 'access', _ => _.noteTypes, 'optionalAccess', _2 => _2.find, 'call', _3 => _3((f) => f.docType === dt)]);
};
var getNoteTypeFromPath = (rootRelativePath, config) => {
  if (!rootRelativePath)
    return "RemoteNote";
  const _config = config || _chunkC7XTBZXRcjs.getInternalConfig.call(void 0, );
  let nts = _optionalChain([_config, 'access', _4 => _4.noteTypes, 'optionalAccess', _5 => _5.filter, 'call', _6 => _6(
    (n) => Boolean(n.fs && rootRelativePath.includes(n.fs))
  )]);
  let nt = _optionalChain([nts, 'access', _7 => _7.filter, 'call', _8 => _8((f) => typeof f.fs !== "undefined"), 'access', _9 => _9.sort, 'call', _10 => _10((a, b) => _optionalChain([b, 'access', _11 => _11.fs, 'optionalAccess', _12 => _12.length]) - _optionalChain([a, 'access', _13 => _13.fs, 'optionalAccess', _14 => _14.length])), 'optionalAccess', _15 => _15[0]]);
  return nt ? _chunkIB2BTZA2cjs.documentTypeConfigSchema.parse(nt) : void 0;
};
var getRootRelativePath = (slug, docType, config) => {
  const _config = config || _chunkC7XTBZXRcjs.getInternalConfig.call(void 0, );
  return `${_optionalChain([_config, 'access', _16 => _16.noteTypes, 'optionalAccess', _17 => _17.find, 'call', _18 => _18((t) => t.docType === docType), 'optionalAccess', _19 => _19.fs])}/${slug}`;
};




exports.getDocumentTypeConfig = getDocumentTypeConfig; exports.getNoteTypeFromPath = getNoteTypeFromPath; exports.getRootRelativePath = getRootRelativePath;
//# sourceMappingURL=general.cjs.map