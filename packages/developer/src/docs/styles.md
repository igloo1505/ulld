# Including ULLD Styles

Your plugin will be configured to allow css imports in the end user's Next.js config, so including both `.css` and `.scss` files directly in your components will work without much needing to be said.

However, please keep in mind that one of the key priorities of this framework is the principle of modularity. Tailwind is **_phenomenal_** at this, so please use tailwind classes as often as possible.

The `ULLDPluginConfig` abstract class contains a private `getTailwindConfig` method if you need to access the user's tailwind config during parsing, although this is unlikely to be needed in most cases.

## Including CSS and SCSS files

Along with other Next.js specific file structures, a styles directory will also be copied over to the user's application. To avoid naming conflicts, nest your plugin's specific files in this directory so imports from `#/styles/myPlugin/styles.scss` will be imported from `/src/styles/myPlugin/styles.scss` and without bashing heads with any files at `/src/styles/styles.scss`.

Keep in mind, that a `#/...` path alias will be configured in the target project and will point to the `src` directory which will include the styles, public, and app directory. Working with these files in development at the location that they will end up after the build process will ensure that all imports are moved over to the target application without conflicts. The `@ulld/developer-template` package comes pre-configured with a `tsconfig.json` file that includes this path alias.
