import {NextConfig} from "next"
import { ULLDEmbeddableComponentConfig } from "./embeddableComponentConfig"
import {Config} from "tailwindcss/types/config"


export abstract class ULLDPluginConfig {
    /**
       * Router Path
       *
       * @remarks
       * The path at which to embed your plugin's trpc router, if your plugin does supply one. Review the docs regarding supplying nested trpc routers to make sure that you include the proper exports and pakage.json properties so that your router can be located during the build process.
       */
    static routerPath?: string = undefined
    /**
       * Embeddable Components
       *
       * @remarks
       * The components your plugin supplies that can be directly embedded into the user's mdx content. These must be classes derived from the ULLDEmbeddableComponentConfig abstract class. See that classes documentation for more details.
       *
       */
    static embeddables: ULLDEmbeddableComponentConfig[] = []
    private getTailwindConfig(): Promise<Config> {
        // @ts-ignore
        const content = import("#/tailwind.config.ts").then((a) => a.default as Config)
        return content
    }
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
       * @label SETINITIALCLIENTSTATE
       */
    setInitialClientState?(): void;

    /**
       * Apply Modifications to Next.js config
       *
       * @remarks
       * Modify the Next.js config as needed. Apply as few modifications as necessary for your plugin to work effectively, and document further modifications in your documentation.
       *
       * @param cfg - The existing Next.js config of the end user.
       * @returns The modified Next.js config
       * 
       * {@link https://nextjs.org/docs/app/api-reference/next-config-js}
       *
       */
    applyNextConfigModifications?(cfg: NextConfig): NextConfig

    /**
       * Parse mdx content
       *
       * @remarks
       * Takes the user's mdx content as a string, and returns a *maybe* modified string or a promise that resolves to a string.
       * This is incredibly useful for adding new tagging syntaxes which can be parsed using a regular expression and replaced with the jsx which will render a component that you have supplied in the embeddables array with the props formatted to match jsx syntax.
       *
       * This runs before the content is tested for matching imports, so have the replacements that you add match either the regex of one of your embeddables or that of a native ULLD embeddable component.
       *
       * @param content - The user's mdx content for the active note.
       * @returns string | Promise<string>
       * 
       * {@link https://tsdoc.org/}
       * 
       * @example
       * Heres an example of how to use this function/class/interface/type/etc...
       * ```ts
       * const y = (x: number) => x**2
       * ```
       *
       * @beta
       * {@label SOME_LABEL_TO_REFERENCE_WITH_LINK}
       */

    parseRaw?(content: string): string | Promise<string>

    /**
       * onSync
       *
       * @remarks
       * This method is called whenever a user syncs their note directory.
       *
       * @typeParam Some generic type param - Description of generic parameter
       * @param syncConfig - type SyncConfig exported from `@ulld/developer/types`
       * @returns void
       * 
       *
       */

    onSync?(): void;

    /**
       * onBackup
       *
       * @remarks
       * This function is called when a user chooses to backup their data. For all content that cannot be 
       * directly generated from their note content, return a json compatable object (no functions and no classes).
       *
       * @returns json compatible object to store locally as stringified json data
       * 
       * @example
       * Heres an example of how to use this function/class/interface/type/etc...
       * ```ts
       * onBackup(): Promise<object> {
       *   const data = await prisma.dJT.findMany({
       *   where: {
       *   type: "myPackageName"
       *   }
       *   })
       *
       *   return {
       *   data: data
       *   }
       *
       * }
       * ```
       */
    onBackup?(): Promise<object> | object;

    /**
       * fromBackup
       *
       * @remarks
       * Accepts the user's data that was previously backed up to a local file using the 'onBackup' method
       * and should re-insert that data back into the database. Make sure to use the prisma upsert method and 
       * that object's id as well as any other properties that fit your use case. The DJT model also has an id of 
       * type integer that is automatically generated and will be unique to all DJT table rows.
       *
       * @param data - object. The data previously stored locally in the 'onBackup' method.
       * @returns void. Should insert data back into database.
       * 
       * @example
       * Heres an example of how to use this function/class/interface/type/etc...
       * ```ts
       * fromBackup(data: object) {
       * for await (const k in data.data) {
       *  await prisma.dJT.upsert({
       *  where: {
       *  id: k.id
       *  },
       *  create: {
       *  ...
       *  },
       *  update: {
       *  ...
       *  }
       *  })
       * }
       * }
       * ```
       */
    fromBackup?(data: object): void;
}



export default ULLDPluginConfig
