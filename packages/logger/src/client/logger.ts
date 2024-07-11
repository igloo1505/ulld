import { z } from "zod"
import { highlight } from "cli-highlight"

const optionsSchema = z.object({
     showDate: z.boolean().default(true),
     label: z.string().optional(),
    color: z.string().optional()
}).optional()


// TODO: Come back and make the output actually presentable
export class logger {
    constructor(){}
    static info(value: any, opts?: z.input<typeof optionsSchema>){
        console.log("value: ", value)
    }
    static verbose(value: any, opts?: z.input<typeof optionsSchema>){
        console.log("value: ", value)
    }
    static debug(value: any, opts?: z.input<typeof optionsSchema>){
        console.log("value: ", value)
    }
    static logSyntax(value: any, language: string){
        console.log(highlight(value, {language, ignoreIllegals: true }))
    }
    static logJson(value: string | object){
        let v = typeof value === "string" ? value : JSON.stringify(value, null, 4)
        return this.logSyntax(v, "json")
    }
}

export default logger
