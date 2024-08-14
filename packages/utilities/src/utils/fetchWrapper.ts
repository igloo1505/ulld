import { RequestInit } from "next/dist/server/web/spec-extension/request"

export const fetchWrapper = async (path: string, opts: RequestInit & {
    body: string | object
}) => {
    return await fetch(path, {
        ...opts,
        body:  typeof opts.body === "string" ? opts.body : JSON.stringify(opts.body)
        }
    )
}
