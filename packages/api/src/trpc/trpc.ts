import { initTRPC } from "@trpc/server"

export const trpcRoot = initTRPC.create()

export const router = trpcRoot.router
export const publicProcedure = trpcRoot.procedure

export type UlldRouterType = typeof router
