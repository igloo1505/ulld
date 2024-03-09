import type { serverClient } from "@ulld/api"


export type KanBanBoardDetails = Awaited<ReturnType<typeof serverClient.boards.getBoardById>>
