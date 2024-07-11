import { getAllMdx } from "./getConcatenatedPages"

export const searchAllMdxById = (id: string) => {
     return getAllMdx().find((p) => Boolean("id" in p.data && p.data.id === id))
}
