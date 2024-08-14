import { serverClient } from "../../../trpc/serverClient";

export type MdxFileSystemReturnType = Awaited<ReturnType<typeof serverClient.mdx.getFsMdx>>

export type MdxDetailsReturnType = MdxFileSystemReturnType["details"]

