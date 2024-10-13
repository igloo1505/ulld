import { z } from "zod";
import globToRegExp from "glob-to-regexp";
import { withForwardSlash } from "@ulld/utilities/utils/fsUtils";

export const logLevelSchema = z.union([
    z.literal("debug"),
    z.literal("verbose"),
    z.literal("info"),
    z.literal("none"),
]);

export type LogLevel = z.input<typeof logLevelSchema>;

export type ParsedRegExpField = {
    original: string;
    regex: RegExp;
};

export const zodPathGlobTransform = (
    a: string | RegExp | ParsedRegExpField,
): ParsedRegExpField => {
    if (typeof a === "string") {
        return {
            original: a,
            regex: globToRegExp(a, { extended: true, globstar: true }),
        };
    }
    if (typeof a === "object" && "original" in a && "regex" in a) {
        return a;
    }
    return {
        original: a.source,
        regex: a,
    };
};

export const zodWithForwardSlashTransform = <
    T extends string | null | undefined,
>(
    a: T,
) => {
    if (a) {
        return withForwardSlash(a);
    }
    return a;
};

export const zodPathStringField = (desc?: string, optional?: boolean) =>
    desc
        ? optional
            ? z
                .string()
                .optional()
                .describe(desc)
                .transform((a) => a && (withForwardSlash(a) as string | undefined))
            : z
                .string()
                .describe(desc)
                .transform((a) => a && (withForwardSlash(a) as string))
        : optional
            ? z
                .string()
                .optional()
                .transform((a) => a && (withForwardSlash(a) as string | undefined))
            : z.string().transform((a) => a && (withForwardSlash(a) as string));

export const zodPathWithGlobField = (desc?: string, optional?: boolean) =>
    desc
        ? optional
            ? z
                .union([z.string(), z.instanceof(RegExp)])
                .optional()
                .describe(desc)
                .transform((a) => (a ? zodPathGlobTransform(a) : a))
            : z
                .union([z.string(), z.instanceof(RegExp)])
                .describe(desc)
                .transform(zodPathGlobTransform)
        : optional
            ? z
                .union([z.string(), z.instanceof(RegExp)])
                .optional()
                .transform((a) => (a ? zodPathGlobTransform(a) : a))
            : z
                .union([z.string(), z.instanceof(RegExp)])
                .transform(zodPathGlobTransform);
