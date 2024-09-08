"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD6WJIHZScjs = require('./chunk-D6WJIHZS.cjs');


var _chunk4YLDBR2Icjs = require('./chunk-4YLDBR2I.cjs');

// src/baseApp/slot.tsx
var _zod = require('zod');
var baseAppSlot = _zod.z.object({
  parentSlot: _chunk4YLDBR2Icjs.slotKeySchema,
  subSlot: _zod.z.string(),
  path: _zod.z.string(),
  clientOnly: _zod.z.boolean().default(false),
  type: _zod.z.union([
    _zod.z.literal("page"),
    _zod.z.literal("component"),
    _zod.z.literal("embeddable")
  ]),
  propsExtends: _zod.z.string().optional(),
  embeddables: _zod.z.union([_chunkD6WJIHZScjs.embeddableConfigSchema, _chunkD6WJIHZScjs.embeddableConfigSchema.array()]).transform((a) => Array.isArray(a) ? a : [a])
});



exports.baseAppSlot = baseAppSlot;
//# sourceMappingURL=chunk-GH2B5B6S.cjs.map