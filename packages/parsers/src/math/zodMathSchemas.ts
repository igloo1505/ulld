import { z } from "zod";

// TODO: Add alphabetized key-value here as well to allow aphabetizing latex outputs in places like dictionaries and sort lists.


export const zodMdxInlineStringSchema = z
    .string()

export const zodMdxBlockStringSchema = z
    .string()

export const zodMathInlineStringSchema = z
    .string()

export const zodMathBlockStringSchema = z
    .string()
