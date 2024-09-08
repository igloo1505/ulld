// src/zod/configUtilitySchemas.ts
import { z } from "zod";
import globToRegExp from "glob-to-regexp";
import { withForwardSlash } from "@ulld/utilities/utils/fsUtils";
var logLevelSchema = z.union([
  z.literal("debug"),
  z.literal("verbose"),
  z.literal("info"),
  z.literal("none")
]);
var zodPathGlobTransform = (a) => {
  if (typeof a === "string") {
    return {
      original: a,
      regex: globToRegExp(a, { extended: true, globstar: true })
    };
  }
  return {
    original: a.source,
    regex: a
  };
};
var zodWithForwardSlashTransform = (a) => {
  if (a) {
    return withForwardSlash(a);
  }
  return a;
};
var zodPathStringField = (desc, optional) => desc ? optional ? z.string().optional().describe(desc).transform((a) => a && withForwardSlash(a)) : z.string().describe(desc).transform((a) => a && withForwardSlash(a)) : optional ? z.string().optional().transform((a) => a && withForwardSlash(a)) : z.string().transform((a) => a && withForwardSlash(a));
var zodPathWithGlobField = (desc, optional) => desc ? optional ? z.union([
  z.string(),
  z.instanceof(RegExp)
]).optional().describe(desc).transform((a) => a ? zodPathGlobTransform(a) : a) : z.union([
  z.string(),
  z.instanceof(RegExp)
]).describe(desc).transform(zodPathGlobTransform) : optional ? z.union([
  z.string(),
  z.instanceof(RegExp)
]).optional().transform((a) => a ? zodPathGlobTransform(a) : a) : z.union([
  z.string(),
  z.instanceof(RegExp)
]).transform(zodPathGlobTransform);

export {
  logLevelSchema,
  zodPathGlobTransform,
  zodWithForwardSlashTransform,
  zodPathStringField,
  zodPathWithGlobField
};
//# sourceMappingURL=chunk-PESBV4SX.js.map