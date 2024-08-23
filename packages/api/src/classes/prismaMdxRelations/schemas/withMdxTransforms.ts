import { z } from "zod";
import { mdxNoteSummaryPropSchema } from "./general";
import { zodMdxFieldSchema } from "@ulld/parsers/latex/zodLatexFieldSchema";

export const mdxNoteSummaryWithMdxTransforms = mdxNoteSummaryPropSchema
  .innerType()
  .omit({
    title: true,
  })
  .merge(
    z.object({
      title: zodMdxFieldSchema,
      firstSync: z
        .union([z.string(), z.date()])
        .optional()
        .transform((x) => (x instanceof Date ? x.toUTCString() : x)),
      lastSync: z
        .union([z.string(), z.date()])
        .optional()
        .transform((x) => (x instanceof Date ? x.toUTCString() : x)),
      tags: z
        .union([
          z.string(),
          z.object({
            value: z.string(),
          }),
        ])
        .array()
        .transform((l) =>
          l.map((x) => (typeof x === "string" ? { value: x } : x)),
        ),
    }),
  );

export type MdxNoteSummaryOutputWithMdxTransforms = z.output<
  typeof mdxNoteSummaryWithMdxTransforms
>;
