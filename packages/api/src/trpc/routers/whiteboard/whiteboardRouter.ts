import { publicProcedure, router } from "../../trpc";
import { z } from "zod";
import { prisma } from "@ulld/database/db";

export const whiteboardRouter = router({
  save: publicProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.string()
      }),
    )
    .mutation(async ({ input: { id, ..._input } }) => {
      console.log(`In Router: `, _input)
      const data = new Buffer(_input.data, "utf-8");
      return await prisma.whiteboard.upsert({
        where: {
          id: id,
        },
        create: {
          id: id,
          data: data,
        },
        update: {
          id: id,
          data: data,
        },
      });
    }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await prisma.whiteboard.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  deleteById: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.whiteboard.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
