import { client } from "@ulld/api/client";
import { InternalMdxStringParseParamsInput } from "@ulld/schemas/mdx-parsing-params";
import { ParseMdxStringParams } from "./types";


export const compileMdxStringClient = async (opts: ParseMdxStringParams) => {
    console.log("opts: ", opts)
    return await client.mdx.compileMdxString.mutate(opts)
}

export const parseAndCompileMdxStringClient = async (opts: InternalMdxStringParseParamsInput) => {
    return await client.mdx.parseAndCompileMdxString.query(opts)
}
