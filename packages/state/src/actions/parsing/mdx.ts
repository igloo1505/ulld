import axios from "axios";
import { run } from "@mdx-js/mdx";
import * as jsxRuntime from "react/jsx-runtime";
import { ParseMdxPropInput } from "@ulld/utilities/schemas/mdx/parseMdxStringProps";


export const parseMdxString = async (data: ParseMdxPropInput) => {
    try {
        let res = await axios.post("/api/parse/mdx", data);
        if (res.data.compiled) {
            const compiledRes = await run(res.data.compiled, { ...jsxRuntime as any, baseUrl: import.meta.url })
            if (compiledRes.default) {
                return compiledRes.default
            }
        }
        return 
    } catch (err) {
        console.error("err: ", err)
    }
}
