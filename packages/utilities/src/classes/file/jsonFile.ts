import {FileData} from "./main"
import fs from 'fs'

export class JsonFile extends FileData {
    constructor(public path: string){
        super(path, false)
    }
    getContent(){
        this.throwIfNotExists()
        return JSON.parse(super.getContent())
    }
    writeContent(content?: string | object): void {
         let newContent = content || this.content
        if(!newContent){
            throw new Error(`Cannot write content. No content was found.`)
        }
        if(typeof newContent === "object"){
            newContent = JSON.stringify(newContent, null, 4)
        }
        fs.writeFileSync(this.path, newContent, {encoding: "utf-8"})
    }
}
