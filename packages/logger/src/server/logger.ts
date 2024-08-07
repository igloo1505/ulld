import { z } from "zod"

const optionsSchema = z.object({
    showDate: z.boolean().default(true),
    label: z.string().optional(),
    color: z.string().optional(),
    component: z.string().optional(),
}).optional()


// TODO: Come back and make the output actually presentable
export class serverLogger {
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
    static error(value: any, opts?: z.input<typeof optionsSchema>){
        console.log("value: ", value)
    }
}

export default serverLogger
