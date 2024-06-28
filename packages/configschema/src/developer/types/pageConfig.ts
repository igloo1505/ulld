export type PluginPageConfig = {
    /** The target URL to place this page at. This is synonomous with a file path from the root of the app directory, including intercepted routes. An intercepted modal route for example should appear as `@modal/(.)myPath/...` even though `@modal` doesn't appear in the URL. This must be unique, as if it overwrites an existing route it will not be applied. */
    targetUrl: string
    /** The export in your package.json that matches a single component that will act as this page. The component must be the default export, and will be passed all props that the page receives, like params and searchParams. This can include intercepted modal routes with the @modal/(.)... syntax, nested routes and parameter based routes with the [someParam] syntax. */
    export: string
    /** Whether or not the file at the export field exports a type named PageProps to apply to the parent page properties. This type should include a params property and/or a searchParams property as they apply to the page itself. This is mostly for the sake of completeness, but can help other developers to work in a bug free environment if they choose to extend their own app. */
    exportsPageProps?: boolean
}
