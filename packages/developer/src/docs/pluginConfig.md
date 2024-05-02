# ULLD Plugin Config

Every ULLD plugin should export exactly one main config class which is a derivative of the `ULLDPluginConfig` abstract class. That class is export as a named export from:

```ts
import { ULLDPluginConfig } from "@ulld/developer/pluginConfig";
```

This class follows the export mapping convention described in the package.json section of these docs, so this class must also be the files default export. This should look something like:

```ts
import { ULLDPluginConfig } from "@ulld/developer/pluginConfig";

class Config extends ULLDPluginConfig {
  constructor() {
    super();
    // superDuper()
  }
}

export default Config;
```

This class holds the majority of the data, apart from complete pages, that will be used during the build process to integrate your plugin with the user's ULLD app. Following the export mapping convention mentioned above, your plugin's `package.json` file **_must_** include a `./ulldPluginConfig` path. That is the only truly requirement for a ulld plugin.

An important thing to keep in mind here is that most of the default ULLD configuration is built using this plugin architecture as well. If you want to see an implementation of this plugin as it pertains to a variety of use cases, look into the native ULLD plugins (those starting with @ulld in your package.json), and check if they have a `./ulldPluginConfig` export path. If they do, they are being integrated following the same process that yours will be.

## Properties

### routerPath

Define the nested position of your TRPC router, if your plugin includes one. This name should be unique enough to not cause naming conflicts with other plugins that the user might already be using.

### embeddables

An array of classes that are a descendant of the `ULLDEmbeddableComponentConfig` abstract class. These describe the components that your plugin supplies, if any, that can be directly nested inside of the user's mdx content. That class is exported from `@ulld/developer/embeddableConfig` as a named export. Please so the related docs for more details.

This array is required in your `ULLDEmbeddableComponentConfig` extended class, but it can be left empty if your plugin does not supply any embeddable components.

## Methods

> Since Typescript does not currently support 'sealed' or 'final' class methods, this falls on you: please, please, please don't modify private methods in the `ULLDPluginConfig` abstract class as they are also used during the build process. They are exposed to make them accessible during any parsing that your plugin might need to do, but if you require extended functionality create your own wrapper function that calls the private method as-is and returns any modified result you require instead of modifying the private method directly. This can completely hault the build process for user's including your plugin.

### setInitialClientState

This method is called on the client only, at least once, and as early as possible. This is useful for attaching properties to the window, working with localStorage, requesting geoLocation and so on. This method will ideally only run once, but despite what your partner thinks, not even I'm perfect, so don't rely on this method as any sort of `onNavigation` hook or the like.

### parseRaw

Use this method to parse the user's mdx content before it is assessed for which components it includes. This is incredibly useful for adding support for a variety of useful notations and syntaxes which can then be matched using regexes (regexii?) and replaced with the appropriate `jsx` syntax with the necessary props to render either a component that you have supplied yourself or that of a native ULLD plugin. This process is used in the `@ulld/equations` package as well as in other native ULLD plugins, so please take a look at those classes for further reference.

### applyTailwindConfig - Build Method

This optional method is applied during the build process and accepts the user's existing `tailwindConfig` and returns a `tailwindConfig` with any modifications that your plugin requires applied. This should be used primarily for extending colors and classes, as most of the structural configuration is taken care of for you. Your plugin should work with the user's application without needing to modify their `Config.content` field.

### applyNextConfigModifications - Build Method

Similar to the `applyTailwindConfig` method, this method accepts a `NextConfig` object and must return a modified `NextConfig` object. This is useful for setting up webworkers for some more demanding dependencies, but most of the core modifications for your plugin to work are taken care of for you. You **_do not_** need to add your plugin to the list of `transpiledModules`, or configure loading for `.csl`, `.pdf`, `.glb`, `.gltf`, `.whl`, `.ttf` or `.bib` file types. Raw `utf-8` file content can also be loaded from the trpc router at either:

```ts
import { serverClient } from "@ulld/api/serverClient";
import { client } from "@ulld/api/client";
// ^^ One or the other in any specific file, depending on if it will be implemented on the client or the server.
serverClient.fsUtils.getUtf8File({ rootRelativePath: "somePath/file.txt" });
// Or
client.fsUtils.getUtf8File.query({ rootRelativePath: "somePath/file.txt" });
```

The client router will always require either a `query` or `mutate` method at the end of what is the path to the serverClient's equivalent method. Why? I'm busy, literally homeless, and I'm still trying to quantize gravity. I'll fix this in a future version of ULLD, but this is on the far left of my Trello board for now.

### onSync

A method that is called each time the user syncs their notes with their file system. This method receives an object fitting the SyncConfig type that is exported from `@ulld/developer/types`. Most of the properties within that object are passed in as a convenience and can be found elsewhere, but the `type: "default" | "deep"` property is uniquely important. This method is called with the type property set to 'default' when the user clicks on the sync button is clicked from within the app's user interface, but a second method, usually involving a context menu or navigating to the settings page can trigger a 'deep sync'. Use this 'deep sync' method to clean up possible memory leaks and the like, as this method will likely only be called when the user is trying to fix broken hrefs, imports or tags pointing to nothing.

### onBackup

This method accepts no props, but should retrieve all data your plugin has inserted into the database, most likely using the DJT model, and return a json compatible object (no functions and no classes. Maps are ok) or a promise that resolves to a json compatible object.

### fromBackup

This method accepts data previously stored by your plugin through the `onBackup` method, and should re-insert this data back into the database. There is no guarantee of a clean database, so an upsert method should always be used with _at least_ a check for the objects unique id.
