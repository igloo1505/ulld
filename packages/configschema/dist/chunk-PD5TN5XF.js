import {
  zodPathStringField
} from "./chunk-PESBV4SX.js";

// src/zod/ui/mediaConfig.ts
import { z } from "zod";
var mediaConfigSchema = z.object({
  imageMap: z.record(z.string().describe("An alias to more easily embed this image throughout your notes."), zodPathStringField("The fsRoot relative path at which this image can be found.")).default({}),
  includeDefaultImageMap: z.boolean().default(true).describe("Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."),
  imageRemoteTest: z.instanceof(RegExp).array().default([])
}).default({});

export {
  mediaConfigSchema
};
//# sourceMappingURL=chunk-PD5TN5XF.js.map