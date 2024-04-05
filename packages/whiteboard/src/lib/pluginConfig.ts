declare global {
    interface Window { EXCALIDRAW_ASSET_PATH: string; }
}

class ULLDPluginConfig {
    constructor(){}
    /**
       * Will run only on the client.
       *
       * @remarks
       * Will run only on the client to allow window and client-only properties to be set. This might run multiple times in some circumstances, so appropriate measures should be taken to ensure properties are not overwritten.
       *
       * @returns void
       * @example
       * ```ts
       * setInitialClientState(){
       *   window.EXCALIDRAW_ASSET_PATH = "/whiteboard/excalidraw-assets"
       * }
       * ```
       *
       * @beta
       * {@label SETINITIALCLIENTSTATE}
       */
    setInitialClientState(){
       window.EXCALIDRAW_ASSET_PATH = "/whiteboard/excalidraw-assets"
    }
}



export default ULLDPluginConfig
