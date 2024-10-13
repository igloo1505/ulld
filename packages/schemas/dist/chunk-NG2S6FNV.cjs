"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/IpynbUpdateoutgoingQuickLinksInputSchema.ts
var _zod = require('zod');
var IpynbUpdateoutgoingQuickLinksInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var IpynbUpdateoutgoingQuickLinksInputSchema_default = IpynbUpdateoutgoingQuickLinksInputSchema;




exports.IpynbUpdateoutgoingQuickLinksInputSchema = IpynbUpdateoutgoingQuickLinksInputSchema; exports.IpynbUpdateoutgoingQuickLinksInputSchema_default = IpynbUpdateoutgoingQuickLinksInputSchema_default;
//# sourceMappingURL=chunk-NG2S6FNV.cjs.map