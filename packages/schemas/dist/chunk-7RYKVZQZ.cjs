"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ3XHPFXCcjs = require('./chunk-J3XHPFXC.cjs');


var _chunkXRBCWOD6cjs = require('./chunk-XRBCWOD6.cjs');


var _chunkWA3YN6FZcjs = require('./chunk-WA3YN6FZ.cjs');


var _chunkIHQXQDN5cjs = require('./chunk-IHQXQDN5.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkXRBCWOD6cjs.CitationsGroupUpdateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkJ3XHPFXCcjs.CitationsGroupUncheckedUpdateWithoutEntriesInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema;




exports.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema; exports.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default = CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-7RYKVZQZ.cjs.map