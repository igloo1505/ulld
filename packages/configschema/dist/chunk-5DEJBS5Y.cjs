"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/zod/configUtilitySchemas.ts
var _zod = require('zod');
var _globtoregexp = require('glob-to-regexp'); var _globtoregexp2 = _interopRequireDefault(_globtoregexp);
var _fsUtils = require('@ulld/utilities/utils/fsUtils');
var logLevelSchema = _zod.z.union([
  _zod.z.literal("debug"),
  _zod.z.literal("verbose"),
  _zod.z.literal("info"),
  _zod.z.literal("none")
]);
var zodPathGlobTransform = (a) => {
  if (typeof a === "string") {
    return {
      original: a,
      regex: _globtoregexp2.default.call(void 0, a, { extended: true, globstar: true })
    };
  }
  return {
    original: a.source,
    regex: a
  };
};
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return _fsUtils.withForwardSlash.call(void 0, a);
  }
  return a;
};
var zodPathStringField = (desc, optional) => desc ? optional ? _zod.z.string().optional().describe(desc).transform((a) => a && _fsUtils.withForwardSlash.call(void 0, a)) : _zod.z.string().describe(desc).transform((a) => a && _fsUtils.withForwardSlash.call(void 0, a)) : optional ? _zod.z.string().optional().transform((a) => a && _fsUtils.withForwardSlash.call(void 0, a)) : _zod.z.string().transform((a) => a && _fsUtils.withForwardSlash.call(void 0, a));
var zodPathWithGlobField = (desc, optional) => desc ? optional ? _zod.z.union([
  _zod.z.string(),
  _zod.z.instanceof(RegExp)
]).optional().describe(desc).transform((a) => a ? zodPathGlobTransform(a) : a) : _zod.z.union([
  _zod.z.string(),
  _zod.z.instanceof(RegExp)
]).describe(desc).transform(zodPathGlobTransform) : optional ? _zod.z.union([
  _zod.z.string(),
  _zod.z.instanceof(RegExp)
]).optional().transform((a) => a ? zodPathGlobTransform(a) : a) : _zod.z.union([
  _zod.z.string(),
  _zod.z.instanceof(RegExp)
]).transform(zodPathGlobTransform);







exports.logLevelSchema = logLevelSchema; exports.zodPathGlobTransform = zodPathGlobTransform; exports.zodWithForwardSlashTransform = zodWithForwardSlashTransform; exports.zodPathStringField = zodPathStringField; exports.zodPathWithGlobField = zodPathWithGlobField;
//# sourceMappingURL=chunk-5DEJBS5Y.cjs.map