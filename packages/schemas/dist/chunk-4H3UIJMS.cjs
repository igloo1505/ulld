"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/IpynbUpdatecitationsListOrderInputSchema.ts
var _zod = require('zod');
var IpynbUpdatecitationsListOrderInputSchema = _zod.z.object({
  set: _zod.z.string().array().optional(),
  push: _zod.z.union([_zod.z.string(), _zod.z.string().array()]).optional()
}).strict();
var IpynbUpdatecitationsListOrderInputSchema_default = IpynbUpdatecitationsListOrderInputSchema;




exports.IpynbUpdatecitationsListOrderInputSchema = IpynbUpdatecitationsListOrderInputSchema; exports.IpynbUpdatecitationsListOrderInputSchema_default = IpynbUpdatecitationsListOrderInputSchema_default;
//# sourceMappingURL=chunk-4H3UIJMS.cjs.map