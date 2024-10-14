"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJWOE7TWHcjs = require('./chunk-JWOE7TWH.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');

// src/database/inputTypeSchemas/SettingsAppendixWhereUniqueInputSchema.ts
var _zod = require('zod');
var SettingsAppendixWhereUniqueInputSchema = _zod.z.object({
  id: _zod.z.string()
}).and(_zod.z.object({
  id: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema), _zod.z.lazy(() => _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema), _zod.z.lazy(() => _chunkJWOE7TWHcjs.SettingsAppendixWhereInputSchema).array()]).optional(),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  updatedAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional()
}).strict());
var SettingsAppendixWhereUniqueInputSchema_default = SettingsAppendixWhereUniqueInputSchema;




exports.SettingsAppendixWhereUniqueInputSchema = SettingsAppendixWhereUniqueInputSchema; exports.SettingsAppendixWhereUniqueInputSchema_default = SettingsAppendixWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-E74AMCFG.cjs.map