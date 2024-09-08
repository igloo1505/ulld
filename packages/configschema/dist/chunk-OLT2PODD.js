// src/developer/commandPalette.ts
import { z } from "zod";
var itemBase = z.object({
  label: z.string(),
  isAvailable: z.function().returns(z.boolean())
  // Should receive props related to the path name, the front matter of the note and possibly other properties to determine if it should be displayed, and be called once when the list containing that item is first displayed.
});
var pluginCommandPaletteSchema = z.union([
  itemBase.extend({ action: z.function() }),
  itemBase.extend({
    href: z.union([z.string(), z.function().returns(z.string())])
  })
]).array();

export {
  pluginCommandPaletteSchema
};
//# sourceMappingURL=chunk-OLT2PODD.js.map