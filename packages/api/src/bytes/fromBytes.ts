import {jsonParse} from "./general"
export const fromBytes = (data: Buffer) => {
     return jsonParse(data.toString("utf-8"))
}
