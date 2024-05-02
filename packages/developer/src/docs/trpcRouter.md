# ULLD Nested TRPC router

As mentioned in the section regarding export mapping, your plugin's optional TRPC router must be exported as the file's default export and that path must be mapped to the `./trpcRouter` export path. This export must match exactly.

```json
{
    ...,
    "exports": {
        ...,
        "./trpcRouter": "./src/path/to/my/router"
    }
}
```

ULLD supplies the basic building blocks for your router, exported from the root of the `@ulld/api` package. The router should end up looking like:

```ts
import { publicProcedure, router } from "@ulld/api";
import { z } from "zod";

export default router({
  imAUselessMethod: publicProcedure
    .input(
      z
        .string()
        .describe("Print this in the terminal for some inexplicable reason"),
    )
    .query(async ({ input }) => {
      console.log(input);
    }),
});
```

This router will then be nested at the `routerPath` name in your plugin config. If the `routerPath` name, the export matching `./trpcRouter` or a default export from that file is missing, the router will **not** be copied over to the end user's application.

Keep in mind that during development of your plugin, the app directory is completely free rein. I strongly recommend setting up your router at the nested path that matches that your `ULLDPluginConfig.routerPath` and working with your router in that location while building other plugin features.
