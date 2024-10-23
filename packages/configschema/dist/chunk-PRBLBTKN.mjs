import {
  zodPathStringField
} from "./chunk-XHBPEY36.mjs";

// src/zod/ui/mediaConfig.ts
import { z } from "zod";
var mediaConfigSchema = z.object({
  imageMap: z.record(
    z.string().describe(
      "An alias to more easily embed this image throughout your notes."
    ),
    zodPathStringField(
      "The fsRoot relative path at which this image can be found."
    )
  ).default({}),
  includeDefaultImageMap: z.boolean().default(true).describe(
    "Whether or not to include a default image map of light weight svg images that respond to the theme's colors to be easily embedded by their alias. Can be disabled to minimize the build size if they are unlikely to be used."
  ),
  imageRemoteTest: z.union([z.instanceof(RegExp), z.string()]).array().default([]).transform((l) => l.map((x) => typeof x === "string" ? x : x.source))
}).default({});
var mediaConfigSchemaOutput = z.object({
  imageMap: z.record(
    z.string(),
    zodPathStringField(
      "The fsRoot relative path at which this image can be found."
    )
  ),
  includeDefaultImageMap: z.boolean(),
  imageRemoteTest: z.string().array()
});

export {
  mediaConfigSchema,
  mediaConfigSchemaOutput
};
//# sourceMappingURL=chunk-PRBLBTKN.mjs.map