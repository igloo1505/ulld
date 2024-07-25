import { SupportedDatabaseType } from "@ulld/configschema/types";
import { ShellManager } from "./baseClasses/shell";
import { UlldBuildProcess } from "./build";
import { TargetPaths } from "./paths";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

type SupportedEnvVariableId =
    | "postgresUri"
    | "postgresNonPooling"
      | "sqliteUri"
    | "additionalSources";

interface EnvItem {
    id: SupportedEnvVariableId;
    variable: string;
    value?: string;
}

let envItems: EnvItem[] = [
    {
        id: "postgresUri",
        value: process.env.ULLD_POSTGRES_URL,
        variable: "ULLD_POSTGRES_URL",
    },
    {
        id: "sqliteUri",
        value: process.env.ULLD_SQLITE_URL,
        variable: "ULLD_SQLITE_URL",
    },
    {
        id: "postgresNonPooling",
        value: process.env.ULLD_POSTGRES_URL_NON_POOLING,
        variable: "ULLD_POSTGRES_URL_NON_POOLING",
    },
    {
        id: "additionalSources",
        value: process.env.ULLD_ADDITIONAL_SOURCES,
        variable: "ULLD_ADDITIONAL_SOURCES",
    },
];

export class EnvManager extends ShellManager {
    preferLocal: boolean = true
    envItems: EnvItem[] = envItems;
    globalEnvFileContent?: string;
    globalEnvParedFileData?: object;
    globalEnvPath?: string;
    glovalEnvFileExists: boolean = false;
    constructor() {
        super();
        let additionalSources = this.getEnvItemById("additionalSources");
        if (additionalSources.value) {
            this.globalEnvPath = path.join(additionalSources.value, ".env");
            this.glovalEnvFileExists = fs.existsSync(this.globalEnvPath);
            if (this.glovalEnvFileExists) {
                this.globalEnvFileContent = fs.readFileSync(this.globalEnvPath, {
                    encoding: "utf-8",
                });
                this.globalEnvParedFileData = dotenv.parse(this.globalEnvFileContent);
            }
        }
        this.applyGlobalConfigOverrides()
    }
    getDatabaseUriVariable(dbType: SupportedDatabaseType){
        let dbTypeMap: Record<SupportedDatabaseType, SupportedEnvVariableId> = {
            postgres: "postgresUri",
            sqlite: "sqliteUri"
        }
        return this.getEnvItemById(dbTypeMap[dbType])
    }
    hasVariable(id: SupportedEnvVariableId){
        return Boolean(this.getEnvItemById(id).value)
    }
    applyGlobalConfigOverrides(){
        if(!this.globalEnvParedFileData){
            return
        }
        for (const variable in this.globalEnvParedFileData) {
            this.envItems = this.envItems.map((existingItem) => {
                if(existingItem.variable !== variable){
                    return existingItem
                }
                if(this.preferLocal && Boolean(existingItem.value)){
                    return existingItem
                }
                return {
                    ...existingItem,
                    value: this.globalEnvParedFileData?.[variable as keyof typeof this.globalEnvParedFileData]
                }
            })
        }
    }
    getEnvItemById(id: SupportedEnvVariableId) {
        let item = this.envItems.find((f) => f.id === id);
        if (!item) {
            throw new Error(
                `No env entry found for ${id}. This should not happen, even if the env variable is not present.`,
            );
        }
        return item;
    }
}
