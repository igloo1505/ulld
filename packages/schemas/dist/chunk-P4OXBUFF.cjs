"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/IpynbUpdateimportantValuesInputSchema.ts
var _zod = require('zod');
var IpynbUpdateimportantValuesInputSchema = _zod.z.object({
  set: _zod.z.number().array().optional(),
  push: _zod.z.union([_zod.z.number(), _zod.z.number().array()]).optional()
}).strict();
var IpynbUpdateimportantValuesInputSchema_default = IpynbUpdateimportantValuesInputSchema;




exports.IpynbUpdateimportantValuesInputSchema = IpynbUpdateimportantValuesInputSchema; exports.IpynbUpdateimportantValuesInputSchema_default = IpynbUpdateimportantValuesInputSchema_default;
//# sourceMappingURL=chunk-P4OXBUFF.cjs.map