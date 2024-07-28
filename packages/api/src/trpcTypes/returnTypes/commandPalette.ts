import type { client } from "../../trpc/client";
import type { serverClient } from "../../trpc/serverClient";

export type NoteCmdItems = Awaited<ReturnType<typeof serverClient.commandPalette.noteSearch>>

export type EquationSearchResult = Awaited<ReturnType<typeof serverClient.commandPalette.equationSearch>>


export type DefinitionSearchResult = Awaited<ReturnType<typeof client.commandPalette.getDefinitions.query>>
