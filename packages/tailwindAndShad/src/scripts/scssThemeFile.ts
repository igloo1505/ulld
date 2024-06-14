import fs from "fs";

export class ThemeFile {
    content: string;
    name: string
    isValid: boolean = true
    constructor(public file: string) {
        this.content = fs.readFileSync(file, { encoding: "utf-8" });
        let _name = file.split("/").at(-1)?.split(".")[0]
        if(!_name) {
            throw new Error("No name found in ThemeFile.")
        }
        if(_name.includes("unified")){
            this.isValid = false
        }
        this.name = _name
    }
    darkContent() {
       let regex = /.dark\s?{(?<content>[^}]*)}/gm
        let content = regex.exec(this.getInteriorContent())
        return content ? content[1] : undefined
    }
    lightContent() {
       let regex = /:root\s?{(?<content>[^}]*)}/gm
        let content = regex.exec(this.getInteriorContent())
        return content ? content[1] : undefined
    }
    getInteriorContent(){
        let lines: string[] = []
        let split = this.content.split("\n")
        let inInterior = false
        for (const l of split){
             if(inInterior){
                lines.push(l)
            }
            if(l.trim() === "@layer base {"){
                inInterior = true
            }
        }

        return lines.slice(0, lines.map((l) => l.trim()).lastIndexOf("}")).join("\n")
    }
    getUnifiedContent() {
        return `html[data-ulld-theme="${this.name}"] {
@layer base {
body,
.light,
.light * {${this.lightContent()}
}
.dark {
   &:not(.light *) {
       ${this.darkContent()}
   }
}
}
}
`
    }
}
