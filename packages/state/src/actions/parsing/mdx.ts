import axios from "axios"
import {run} from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime";
import {type ParseMdxPropInput} from "@ulld/utilities/schemas/mdx/parseMdxStringProps"


export const parseMdxString = await (data: ParseMdxPropInput) => {
    try {

    let res = await axios.post("/api/parse/mdx", data)
    if (res.data.compiled){
        const {default: Component} = await run(res.data.compiled, {...runtime, baseUrl: import.meta.url})
         if(Component){
                return Component
            }
        }
    } catch (err) {
        console.error("err: ", err)
    }
    
}
