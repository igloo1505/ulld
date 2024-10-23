"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkZKCGUJQBcjs = require('./chunk-ZKCGUJQB.cjs');



var _chunkP2PZMKGTcjs = require('./chunk-P2PZMKGT.cjs');

// src/zod/build/main.ts
var _zod = require('zod');
var buildOnlySchema = _zod.z.object({
  database: _chunkZKCGUJQBcjs.databaseBuildSchema.default({}),
  additionalUserContent: _chunkP2PZMKGTcjs.additionalUserContent
}).default({});
var buildOnlySchemaOutput = _zod.z.object({
  database: _chunkZKCGUJQBcjs.databaseBuildSchemaOutput,
  additionalUserContent: _chunkP2PZMKGTcjs.additionalUserContentOutput
});




exports.buildOnlySchema = buildOnlySchema; exports.buildOnlySchemaOutput = buildOnlySchemaOutput;
//# sourceMappingURL=chunk-FEK763L3.cjs.map