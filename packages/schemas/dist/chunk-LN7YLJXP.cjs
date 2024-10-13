"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWA3YN6FZcjs = require('./chunk-WA3YN6FZ.cjs');


var _chunkIHQXQDN5cjs = require('./chunk-IHQXQDN5.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupCreateOrConnectWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default = CitationsGroupCreateOrConnectWithoutEntriesInputSchema;




exports.CitationsGroupCreateOrConnectWithoutEntriesInputSchema = CitationsGroupCreateOrConnectWithoutEntriesInputSchema; exports.CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default = CitationsGroupCreateOrConnectWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-LN7YLJXP.cjs.map