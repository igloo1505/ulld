"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLN7YLJXPcjs = require('./chunk-LN7YLJXP.cjs');


var _chunkWA3YN6FZcjs = require('./chunk-WA3YN6FZ.cjs');


var _chunkIHQXQDN5cjs = require('./chunk-IHQXQDN5.cjs');


var _chunkWOQ3TZDJcjs = require('./chunk-WOQ3TZDJ.cjs');

// src/database/inputTypeSchemas/CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema.ts
var _zod = require('zod');
var CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkWA3YN6FZcjs.CitationsGroupCreateWithoutEntriesInputSchema).array(), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkIHQXQDN5cjs.CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkLN7YLJXPcjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema), _zod.z.lazy(() => _chunkLN7YLJXPcjs.CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema), _zod.z.lazy(() => _chunkWOQ3TZDJcjs.CitationsGroupWhereUniqueInputSchema).array()]).optional()
}).strict();
var CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema;




exports.CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema = CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema; exports.CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedCreateNestedManyWithoutEntriesInputSchema_default;
//# sourceMappingURL=chunk-I3GXBDLZ.cjs.map