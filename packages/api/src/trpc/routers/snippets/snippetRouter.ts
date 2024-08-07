import { z } from "zod";
import { publicProcedure, router } from "../../trpc";
import { prisma } from "@ulld/database/db";
import type { Prisma } from "@ulld/database/internalDatabaseTypes";
import { SnippetCreateInputObjectSchema } from "../../../schemas/snippets/main";
import { snippetFilterSchema } from "../../../schemas/snippets/filterSchema";
import { saveSnippet } from "../../../trpcInternalMethods/snippets/main";

export const snippetRouter = router({
  saveSnippet: publicProcedure
    .input(SnippetCreateInputObjectSchema)
    .mutation(async (opts) => {
      return await saveSnippet(opts.input as Prisma.SnippetCreateInput);
    }),
  deleteSnippet: publicProcedure
    .input(z.number().int())
    .mutation(async (opts) => {
      return await prisma.snippet.delete({
        where: {
          id: opts.input,
        },
      });
    }),
  getSnippets: publicProcedure
    .input(snippetFilterSchema)
    .query(async (opts) => {
      return await prisma.snippet.findMany({
        where: {
          language: opts.input.language || undefined,
          ...(opts.input.query && {
            OR: [
              {
                content: {
                  search: opts.input.query,
                  mode: "insensitive",
                },
              },
              {
                description: {
                  search: opts.input.query,
                  mode: "insensitive",
                },
              },
              {
                keywords: {
                  has: opts.input.query,
                },
              },
            ],
          }),
        },
      });
    }),
  getSpecificSnippet: publicProcedure
    .input(z.number().int())
    .query(async (opts) => {
      return await prisma.snippet.findFirst({
        where: {
          id: opts.input,
        },
      });
    }),
});
