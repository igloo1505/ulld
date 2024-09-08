"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/developer/commandPalette.ts
var _zod = require('zod');
var itemBase = _zod.z.object({
  label: _zod.z.string(),
  isAvailable: _zod.z.function().returns(_zod.z.boolean())
  // Should receive props related to the path name, the front matter of the note and possibly other properties to determine if it should be displayed, and be called once when the list containing that item is first displayed.
});
var pluginCommandPaletteSchema = _zod.z.union([
  itemBase.extend({ action: _zod.z.function() }),
  itemBase.extend({
    href: _zod.z.union([_zod.z.string(), _zod.z.function().returns(_zod.z.string())])
  })
]).array();



exports.pluginCommandPaletteSchema = pluginCommandPaletteSchema;
//# sourceMappingURL=chunk-K6EJQRDH.cjs.map