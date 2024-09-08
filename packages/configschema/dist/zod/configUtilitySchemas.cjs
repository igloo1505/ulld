'use strict';

var zod = require('zod');
var globToRegExp = require('glob-to-regexp');
var fsUtils = require('@ulld/utilities/utils/fsUtils');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var globToRegExp__default = /*#__PURE__*/_interopDefault(globToRegExp);

// src/zod/configUtilitySchemas.ts
var logLevelSchema = zod.z.union([
  zod.z.literal("debug"),
  zod.z.literal("verbose"),
  zod.z.literal("info"),
  zod.z.literal("none")
]);
var zodPathGlobTransform = (a) => {
  if (typeof a === "string") {
    return {
      original: a,
      regex: globToRegExp__default.default(a, { extended: true, globstar: true })
    };
  }
  return {
    original: a.source,
    regex: a
  };
};
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return fsUtils.withForwardSlash(a);
  }
  return a;
};
var zodPathStringField = (desc, optional) => desc ? optional ? zod.z.string().optional().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().describe(desc).transform((a) => a && fsUtils.withForwardSlash(a)) : optional ? zod.z.string().optional().transform((a) => a && fsUtils.withForwardSlash(a)) : zod.z.string().transform((a) => a && fsUtils.withForwardSlash(a));
var zodPathWithGlobField = (desc, optional) => desc ? optional ? zod.z.union([
  zod.z.string(),
  zod.z.instanceof(RegExp)
]).optional().describe(desc).transform((a) => a ? zodPathGlobTransform(a) : a) : zod.z.union([
  zod.z.string(),
  zod.z.instanceof(RegExp)
]).describe(desc).transform(zodPathGlobTransform) : optional ? zod.z.union([
  zod.z.string(),
  zod.z.instanceof(RegExp)
]).optional().transform((a) => a ? zodPathGlobTransform(a) : a) : zod.z.union([
  zod.z.string(),
  zod.z.instanceof(RegExp)
]).transform(zodPathGlobTransform);

exports.logLevelSchema = logLevelSchema;
exports.zodPathGlobTransform = zodPathGlobTransform;
exports.zodPathStringField = zodPathStringField;
exports.zodPathWithGlobField = zodPathWithGlobField;
exports.zodWithForwardSlashTransform = zodWithForwardSlashTransform;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=configUtilitySchemas.cjs.map