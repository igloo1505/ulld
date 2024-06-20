import fs from 'fs'
import path from 'path'

export const getCurrentDir = () => {
     return process.cwd()
}


export const getDirectoryCompletionFromString = (val: string = "/") => {
    let v = val
     if(!fs.existsSync(v) || fs.lstatSync(v).isFile()){
        v = path.parse(val).dir
    }
    const value = fs.readdirSync(v).map((f) => path.join(v, f)).filter((f) => Boolean(fs.lstatSync(f).isDirectory() && f.includes(val)))
    return value
}
