"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunk44GQZNMZcjs = require('../chunk-44GQZNMZ.cjs');
require('../chunk-L354VGYE.cjs');
require('../chunk-RHIF2I76.cjs');
require('../chunk-7YET3AMW.cjs');
require('../chunk-K6NWSQV7.cjs');
require('../chunk-CXDZSOSO.cjs');


var _chunkVFA3NO2Gcjs = require('../chunk-VFA3NO2G.cjs');
require('../chunk-GTFPLYO5.cjs');
require('../chunk-3ZQ4RWTP.cjs');

// src/configUtilityTypes/general.ts
var getDocumentTypeConfig = (docType, config) => {
  const _config = config || _chunk44GQZNMZcjs.getInternalConfig.call(void 0, );
  let dt = typeof docType === "string" ? docType : docType.docType;
  return _optionalChain([_config, 'access', _ => _.noteTypes, 'optionalAccess', _2 => _2.find, 'call', _3 => _3((f) => f.docType === dt)]);
};
var getNoteTypeFromPath = (rootRelativePath, config) => {
  if (!rootRelativePath)
    return "RemoteNote";
  const _config = config || _chunk44GQZNMZcjs.getInternalConfig.call(void 0, );
  let nts = _optionalChain([_config, 'access', _4 => _4.noteTypes, 'optionalAccess', _5 => _5.filter, 'call', _6 => _6(
    (n) => Boolean(n.fs && rootRelativePath.includes(n.fs))
  )]);
  let nt = _optionalChain([nts, 'access', _7 => _7.filter, 'call', _8 => _8((f) => typeof f.fs !== "undefined"), 'access', _9 => _9.sort, 'call', _10 => _10((a, b) => _optionalChain([b, 'access', _11 => _11.fs, 'optionalAccess', _12 => _12.length]) - _optionalChain([a, 'access', _13 => _13.fs, 'optionalAccess', _14 => _14.length])), 'optionalAccess', _15 => _15[0]]);
  return nt ? _chunkVFA3NO2Gcjs.documentTypeConfigSchema.parse(nt) : void 0;
};
var getRootRelativePath = (slug, docType, config) => {
  const _config = config || _chunk44GQZNMZcjs.getInternalConfig.call(void 0, );
  return `${_optionalChain([_config, 'access', _16 => _16.noteTypes, 'optionalAccess', _17 => _17.find, 'call', _18 => _18((t) => t.docType === docType), 'optionalAccess', _19 => _19.fs])}/${slug}`;
};




exports.getDocumentTypeConfig = getDocumentTypeConfig; exports.getNoteTypeFromPath = getNoteTypeFromPath; exports.getRootRelativePath = getRootRelativePath;
//# sourceMappingURL=general.cjs.map