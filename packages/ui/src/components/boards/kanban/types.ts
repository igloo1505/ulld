import type { serverClient } from "@ulld/api/serverClient"


export type KanBanBoardDetails = Awaited<ReturnType<typeof serverClient.boards.getBoardById>>
