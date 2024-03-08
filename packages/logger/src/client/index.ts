import { z } from "zod"

const optionsSchema = z.object({
     showDate: z.boolean().default(true),
     label: z.string().optional(),
    color: z.string().optional(),
    component: z.string().optional()
}).optional()

export class clientLogger {
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
}
