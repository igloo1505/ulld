import { JsonFile } from "@ulld/utilities/jsonFileClass";
import baseAppData from "../baseAppData.json"
import path from 'path'

let f = new JsonFile(path.join(__dirname, "../baseAppData.json"))


let newData = { } as typeof baseAppData

const formatArray = (val: string) => {
       return val.slice(1, val.length - 1).split(",")        
}

for (const dbKey in baseAppData) {
    let items = []
    for (const dbItem of baseAppData[dbKey as keyof typeof baseAppData]) {
        let item = dbItem
        for (const dbItemKey in dbItem) {
            let val = dbItem[dbItemKey as keyof typeof dbItem] as string | number
            if((typeof val === "string") && val.startsWith("{") && val.endsWith("}")){
                item[dbItemKey as keyof typeof item] = formatArray(val)
            } else if(dbItemKey === "keywords"){
                item[dbItemKey as keyof typeof item] = []
            } else if(dbItemKey === "variableLegend") {
                item[dbItemKey as keyof typeof item] = {}
            }
            if(typeof val === "string" && val.startsWith("202")){
                item[dbItemKey as keyof typeof item] = new Date(val).toISOString()
            }
        }
        items.push(item)
    }
    newData[dbKey as keyof typeof newData] = items as any
}


f.writeContent(newData)
