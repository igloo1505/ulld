import { z } from "zod";

export const frontMatterTextStyleSchema = z.union([
    z.literal("base"),
    z.literal("lg"),
    z.literal("xl"),
    z.literal("small"),
]);
