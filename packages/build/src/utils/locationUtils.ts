import fs from 'fs'
import path from 'path'

export const getCurrentDir = () => {
     return process.cwd()
}


export const getDirectoryCompletionFromString = (val: string = "/") => {
    let v = val
    let exists = fs.existsSync(v)
    let stats = exists ? fs.lstatSync(v) : {isDirectory: () => false}
    let isFile = "isFile" in stats ? stats.isFile() : false
    let isDirectory = "isDirectory" in stats ? stats.isDirectory() : false
     if(!exists || isFile){
        v = path.parse(val).dir
    }
    const value = fs.readdirSync(v).map((f) => path.join(v, f)).filter((f) => Boolean(fs.lstatSync(f).isDirectory() && f.includes(val)))
    return isDirectory ? [v, ...value] : value
}
