import type { AppConfigSchemaOutput } from "../main.js";
import { z } from 'zod';
export declare const markdownExtensions: z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">]>;
export declare const defaultParsableFileExtensions: z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>;
export declare const parsableFileExtensions: z.ZodUnion<[z.ZodLiteral<".csv">, z.ZodLiteral<".tsv">, z.ZodLiteral<".excel">, z.ZodLiteral<".numpy">, z.ZodLiteral<".html">, z.ZodLiteral<".pickle">, z.ZodLiteral<".db">, z.ZodLiteral<".sql">, z.ZodLiteral<".pdf">, z.ZodLiteral<".json">, z.ZodLiteral<".tex">, z.ZodLiteral<".hdf5">]>;
export declare const currentParsableExtensions: z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>;
export declare const allParsableFileExtensionSchema: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>, z.ZodUnion<[z.ZodLiteral<".csv">, z.ZodLiteral<".tsv">, z.ZodLiteral<".excel">, z.ZodLiteral<".numpy">, z.ZodLiteral<".html">, z.ZodLiteral<".pickle">, z.ZodLiteral<".db">, z.ZodLiteral<".sql">, z.ZodLiteral<".pdf">, z.ZodLiteral<".json">, z.ZodLiteral<".tex">, z.ZodLiteral<".hdf5">]>]>;
export type ParsableExtensionsSchema = z.input<typeof defaultParsableFileExtensions> | z.input<typeof parsableFileExtensions>;
export type MarkdownFileExtensions = z.input<typeof markdownExtensions>;
export type ActiveParsableExtensions = z.input<typeof currentParsableExtensions>;
export declare const getParsableExtensions: (config: AppConfigSchemaOutput) => (z.input<typeof defaultParsableFileExtensions> | z.input<typeof parsableFileExtensions>)[];
export declare const getFileTypeAppendices: (parsableExtensions: ReturnType<typeof getParsableExtensions>) => Record<ParsableExtensionsSchema, string>;
//# sourceMappingURL=getParsableExtensions.d.ts.map