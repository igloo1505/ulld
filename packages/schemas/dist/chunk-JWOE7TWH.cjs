"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/SettingsAppendixWhereInputSchema.ts
var _zod = require('zod');
var SettingsAppendixWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SettingsAppendixWhereInputSchema), _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SettingsAppendixWhereInputSchema), _zod.z.lazy(() => SettingsAppendixWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict();
var SettingsAppendixWhereInputSchema_default = SettingsAppendixWhereInputSchema;




exports.SettingsAppendixWhereInputSchema = SettingsAppendixWhereInputSchema; exports.SettingsAppendixWhereInputSchema_default = SettingsAppendixWhereInputSchema_default;
//# sourceMappingURL=chunk-JWOE7TWH.cjs.map