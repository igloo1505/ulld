"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJROQYL3Mcjs = require('./chunk-JROQYL3M.cjs');


var _chunkFR5PAJGJcjs = require('./chunk-FR5PAJGJ.cjs');


var _chunkLUPCRKLScjs = require('./chunk-LUPCRKLS.cjs');

// src/database/inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.ts
var _zod = require('zod');
var SettingsAppendixWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema), _zod.z.lazy(() => _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema), _zod.z.lazy(() => _chunkJROQYL3Mcjs.SettingsAppendixWhereInputSchema).array()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkLUPCRKLScjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunkFR5PAJGJcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var SettingsAppendixWhereUniqueInputSchema_default = SettingsAppendixWhereUniqueInputSchema;




exports.SettingsAppendixWhereUniqueInputSchema = SettingsAppendixWhereUniqueInputSchema; exports.SettingsAppendixWhereUniqueInputSchema_default = SettingsAppendixWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-OXACKCMT.cjs.map