// src/developer/commandPalette.ts
import { z } from "zod";
var itemBase = z.object({
  label: z.string(),
  isAvailable: z.string().optional().describe("An optional export field in your package.json that resolves to a file with a default export of a synchronous function that accepts the current pathname and returns a boolean to indicate if this item should be shown in the command palette. This method is called just before the item is to be shown.")
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
//# sourceMappingURL=chunk-72UHUWDL.mjs.map