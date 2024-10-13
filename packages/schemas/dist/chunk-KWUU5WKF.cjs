"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/RelatedValuesUpdateequationIdInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateequationIdInputSchema = _zod.z.object({
  set: _zod.z.number().array().optional(),
  push: _zod.z.union([_zod.z.number(), _zod.z.number().array()]).optional()
}).strict();
var RelatedValuesUpdateequationIdInputSchema_default = RelatedValuesUpdateequationIdInputSchema;




exports.RelatedValuesUpdateequationIdInputSchema = RelatedValuesUpdateequationIdInputSchema; exports.RelatedValuesUpdateequationIdInputSchema_default = RelatedValuesUpdateequationIdInputSchema_default;
//# sourceMappingURL=chunk-KWUU5WKF.cjs.map