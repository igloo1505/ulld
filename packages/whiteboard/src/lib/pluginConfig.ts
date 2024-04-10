import { Whiteboard } from "../components/whiteboard/main";
import {ULLDPluginConfig} from "@ulld/developer/pluginConfig"

declare global {
    interface Window { EXCALIDRAW_ASSET_PATH: string; }
}


class Config extends ULLDPluginConfig {
    routerPath = "whiteboard"
    embeddables = [
        {
            component: Whiteboard,
            regex: [
                '<Whiteboard',
                '<Sketch',
            ]
        }
    ]
    constructor(){
        super()
    }
    setInitialClientState(){
       window.EXCALIDRAW_ASSET_PATH = "/whiteboard/excalidraw-assets"
    }
}



export default Config
