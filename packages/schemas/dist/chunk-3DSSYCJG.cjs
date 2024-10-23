"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/utilitySchemas/main.ts
var _zod = require('zod');
var zodOptStr = _zod.z.string().nullish();
var zodOptNum = _zod.z.number().nullish();
var urlSchema = _zod.z.string().refine((s) => {
  return [
    "https://",
    "http://",
    "www.",
    "/",
    "#"
  ].some((l) => s.startsWith(l));
}, "Must be a valid url.");





exports.zodOptStr = zodOptStr; exports.zodOptNum = zodOptNum; exports.urlSchema = urlSchema;
//# sourceMappingURL=chunk-3DSSYCJG.cjs.map