"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3VKDJOHVcjs = require('./chunk-3VKDJOHV.cjs');


var _chunkWMMTL4C5cjs = require('./chunk-WMMTL4C5.cjs');


var _chunk7RYKVZQZcjs = require('./chunk-7RYKVZQZ.cjs');


var _chunkHDN4EHZFcjs = require('./chunk-HDN4EHZF.cjs');


var _chunkLN7YLJXPcjs = require('./chunk-LN7YLJXP.cjs');


var _chunkWA3YN6FZcjs = require('./chunk-WA3YN6FZ.cjs');


var _chunkIHQXQDN5cjs = require('./chunk-IHQXQDN5.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema).array(), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkLN7YLJXPcjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkLN7YLJXPcjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunk7RYKVZQZcjs.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema), _zod.z.lazy(() => _chunk7RYKVZQZcjs.CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkHDN4EHZFcjs.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkHDN4EHZFcjs.CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunk3VKDJOHVcjs.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema), _zod.z.lazy(() => _chunk3VKDJOHVcjs.CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkWMMTL4C5cjs.CitationsGroupScalarWhereInputSchema), _zod.z.lazy(() => _chunkWMMTL4C5cjs.CitationsGroupScalarWhereInputSchema).array()]).optional()
}).strict();
var CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema;




exports.CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema = CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema; exports.CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema_default;
//# sourceMappingURL=chunk-D4FECNJC.cjs.map