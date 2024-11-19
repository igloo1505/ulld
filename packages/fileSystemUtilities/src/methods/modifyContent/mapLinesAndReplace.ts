import fs from 'fs'

export interface MapLinesAndReplaceProps {
    path: string
    cb: (line: string) => string | undefined
}

const enc = {encoding: "utf-8" as "utf-8"}

export const mapLinesAndReplace = (props: MapLinesAndReplaceProps) => {
   const content = fs.readFileSync(props.path, enc)
   let lines: string[] = []

    const existingLines = content.split("\n")

    for (const l of existingLines) {
        const res = props.cb(l)
        if(res){
            lines.push(res)
        }
    }

    if(lines.length === 0 && existingLines.length > 0){
        console.error("You might have forgotten to return the line in the mapLinesAndReplace method as the list of lines is empty.")
        return
    }
    fs.writeFileSync(props.path, lines.join('\n')), enc
}
