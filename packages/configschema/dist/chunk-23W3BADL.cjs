"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5CNM4RYTcjs = require('./chunk-5CNM4RYT.cjs');


var _chunkO2M57WJVcjs = require('./chunk-O2M57WJV.cjs');

// src/zod/build/main.ts
var _zod = require('zod');
var buildOnlySchema = _zod.z.object({
  database: _chunk5CNM4RYTcjs.databaseBuildSchema.default({}),
  additionalUserContent: _chunkO2M57WJVcjs.additionalUserContent
}).default({});



exports.buildOnlySchema = buildOnlySchema;
//# sourceMappingURL=chunk-23W3BADL.cjs.map