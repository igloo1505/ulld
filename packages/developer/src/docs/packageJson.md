# ULLD Package.json

## Export mapping, TRPC router example

While some plugin types are most reliably integrated with the end user's app by mimicking file paths inherent to Next.js, others don't follow any particular file structure at all. Your plugin can also supply a nested [TRPC](https://trpc.io/docs/) router. ULLD will find this router, if your plugin does supply one by looking for a path in the exports object inside of your plugin's package.json file that _exactly_ matches "./trpcRouter". This would look like:

```json
{
    ...,
    "exports": {
        ...,
        "./trpcRouter": "./src/path/to/my/router"
    }
}
```

The `./trpcRouter` export is completely optional, but keep in mind, that that file, if it exists, must export the router as it's default export.
