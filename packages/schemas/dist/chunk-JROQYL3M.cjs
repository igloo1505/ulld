"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');


var _chunk7NJCCFRTcjs = require('./chunk-7NJCCFRT.cjs');

// src/database/inputTypeSchemas/SettingsAppendixWhereInputSchema.ts
var _zod = require('zod');
var SettingsAppendixWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsAppendixWhereInputSchema), _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsAppendixWhereInputSchema), _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunk7NJCCFRTcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsAppendixWhereInputSchema_default = SettingsAppendixWhereInputSchema;




exports.SettingsAppendixWhereInputSchema = SettingsAppendixWhereInputSchema; exports.SettingsAppendixWhereInputSchema_default = SettingsAppendixWhereInputSchema_default;
//# sourceMappingURL=chunk-JROQYL3M.cjs.map