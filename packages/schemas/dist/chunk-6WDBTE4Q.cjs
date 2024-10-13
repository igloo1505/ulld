"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkI3GJ67UUcjs = require('./chunk-I3GJ67UU.cjs');


var _chunkQEYTK6CKcjs = require('./chunk-QEYTK6CK.cjs');


var _chunkCNVOWJBWcjs = require('./chunk-CNVOWJBW.cjs');


var _chunk627Z5I6Ccjs = require('./chunk-627Z5I6C.cjs');

// src/database/outputTypeSchemas/SettingsGroupByArgsSchema.ts
var _zod = require('zod');
var SettingsGroupByArgsSchema = _zod.z.object({
  where: _chunk627Z5I6Ccjs.SettingsWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkQEYTK6CKcjs.SettingsOrderByWithAggregationInputSchema.array(), _chunkQEYTK6CKcjs.SettingsOrderByWithAggregationInputSchema]).optional(),
  by: _chunkCNVOWJBWcjs.SettingsScalarFieldEnumSchema.array(),
  having: _chunkI3GJ67UUcjs.SettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SettingsGroupByArgsSchema_default = SettingsGroupByArgsSchema;




exports.SettingsGroupByArgsSchema = SettingsGroupByArgsSchema; exports.SettingsGroupByArgsSchema_default = SettingsGroupByArgsSchema_default;
//# sourceMappingURL=chunk-6WDBTE4Q.cjs.map