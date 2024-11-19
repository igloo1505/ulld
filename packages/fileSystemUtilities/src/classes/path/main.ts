import path from "path";
import fs, {Stats} from "fs";

interface ExistsParams {
    forceNewRead?: boolean;
    touchIfNotExists?: boolean;
}

export class Path {
    #parsedData: ReturnType<typeof path.parse>;
    #exists: boolean;
    #stats: Stats
    constructor(public filePath: string) { }

    get parsed() {
        if (this.#parsedData) {
            return this.#parsedData;
        } else {
            let data = path.parse(this.filePath);
            this.#parsedData = data;
            return data;
        }
    }
    /** .../someDir/somePath.html -> somePath */
    fileName() {
        return this.parsed.name;
    }

    /** .../someDir/somePath.html -> .html */
    fileExtension() {
        return this.parsed.ext;
    }
    /** .../someDir/somePath.html -> somePath.html */
    fullName() {
        return this.parsed.base;
    }

    /** .../someDir/somePath.html -> .../someDir */
    dir() {
        return this.pathType() === "dir" ? this.filePath : this.parsed.dir;
    }
    exists({ forceNewRead, touchIfNotExists }: ExistsParams = {}) {
        let doesExist = Boolean(!forceNewRead && typeof this.#exists === "boolean") ? this.#exists : fs.existsSync(this.filePath)
        if(!doesExist && touchIfNotExists){
           return this.touch() 
        }
        return doesExist
    }
    mkdir(){
        let dirPath = this.dir()
       if(fs.existsSync(dirPath)){
            console.log(`Dir already exists at ${dirPath}.`)
            return
        } 
        fs.mkdirSync(dirPath, {
            recursive: true
        })
    }
    touch(): boolean {
        this.mkdir()
        fs.closeSync(fs.openSync(this.filePath, "w"))
        return true
    }
    get stats(){
        if(!this.exists()){
            return false
        }
        if(this.#stats){
            return this.#stats
        }
        let data = fs.statSync(this.filePath)
        this.#stats = data
        return data
    }
    pathType(): "dir" | "file" | false {
        if (!this.stats) {
            this.logNotExists();
            return false;
        }
        return this.stats.isFile() ? "file" : this.stats.isDirectory() ? "dir" : false
    }
    logNotExists() {
        console.trace(`This file path does not exist. Cannot continue.`);
    }
}
