// src/buildStaticData/settingsPage.ts
import { z } from "zod";
var settingsPageOutputSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  href: z.string(),
  pluginName: z.string()
});

export {
  settingsPageOutputSchema
};
//# sourceMappingURL=chunk-BOVJOOSV.js.map