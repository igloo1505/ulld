"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/api/prismaMdxRelations/bib/bibCore/classProps.ts
var _zod = require('zod');
var _appData = require('@ulld/utilities/appData');
var bibCoreSchema = _zod.z.object({
  firstSync: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform((a) => typeof a === "string" ? new Date(a) : a),
  lastAccess: _zod.z.union([_zod.z.string().datetime(), _zod.z.date()]).nullish().transform((a) => typeof a === "string" ? new Date(a) : a),
  filename: _zod.z.string().default(_appData.appData.buildDefaults.bibFilePath),
  id: _zod.z.number().int().default(1),
  entries: _zod.z.any().array().default([])
});



exports.bibCoreSchema = bibCoreSchema;
//# sourceMappingURL=chunk-EVVC275F.cjs.map