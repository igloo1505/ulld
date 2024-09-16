import { AppConfigSchemaOutput } from "@ulld/types";

export const getAppConfigClientSide = (): AppConfigSchemaOutput | undefined => {
    let data = window.localStorage.getItem("ulld-app-config")
    if(data){
        return JSON.parse(data) as AppConfigSchemaOutput
    }
    return
}
