import { jsonStringify } from "./general"

export const toBytes = (data: string | object) => {
    return new Buffer(typeof data === "string" ? data : jsonStringify(data), "utf-8")
}
