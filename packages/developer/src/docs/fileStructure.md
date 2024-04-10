# ULLD File Structure

ULLD is built with [Next.js](https://nextjs.org/docs) and [React](https://react.dev), so please familiarize yourself with both frameworks if you aren't already. These two libraries were chosen because they are both already widely used and fairly easy to learn, but this is pre-requisite knowledge for building ULLD plugins.

ULLD will compile your plugin into a single unified Next.js app with the [app router](https://nextjs.org/docs/app) structure. This means that your components will be server components by default, unless you use the "use client" directive at the top of the file, and in general this is **_strongly_** preferred. Moving the outward-most components to client rendering is unavoidable, but rendering components with embedded mdx can cause a rendering inversion (probably not a real term) where a plugin's client component is rendering mdx as it's children, with some of that mdx including server components. Keep this in mind when organizing your components, and **_only_** move components to client rendering when you're confident that no server components will be included in it's children.

To avoid file name clashes and mixed up imports, the file structure for ULLD plugins closely, but not exactly mirrors that of the Next.js app router. The `/src/ulld_app` directory will be merged with the end user's app directory, including nested `@modal` (see Modal Routes below) routes.

## Modal Routes

Modal routes will be nested inside of the end user's `/app/@modal` directory, but content in the first level of this directory will not. You should always use the supplied `ModalPageContainer` component, exported from `@ulld/ui/modalPage` as a named export, and include a matching path in the `src/ulld_app` directory to account for reloads with the modal open. See the Next.js docs on intercepting routes [here](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) and parellel routing [here](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes).

## Settings Page

You can optionally include a method that will be included in the app's settings page, but this content can not be directly saved to the settings object. Modifying the existing `prisma.schema` file is avoided at all costs as to not put the user at risk of losing their notes due to a database migration conflict, but the general purpose `SettingsAppendix` model can be used. This model accepts only two required properties that are not automatically generated:

```ts
id: string; // The name of your plugin in both your plugin's package.json file and on the NPM repository
data: Bytes;
createdAt: DateTime; // Auto-generated
updatedAt: DateTime; // Auto-generated
```

The `data` field is a Bytes object, but the result will be converted to JSON and appended to the app's global regex state at:

```ts
type RootState = {
    settings: {
        ...,
        myPluginName: myOptionalSettingsObject
    }
}
```

### Naming your routes

> Some things to keep in mind when naming your routes, but please, for the love of all things holy, don't change your route names as you version your plugin over time. This could lead to breaking links user's have already added to these routes within their notes. If the original name isn't great, just roll with it. **Uh little less dum** implies progress over time. You're smarter now, and that's more than half of society can say.

Keep in mind that the end user might include your plugin alongside many others. Naming your routes should be a bit of a balancing act between naming them something obvious and memorable, or something truly unique to avoid name clashes with other plugins. Future versions of ULLD might address this automatically during the build process, but for now, it is up to you the developer to name your routes as best you can.

Take a second to consider whether or not your plugin occupies a space that might include other similar plugins accomplishing a fairly similar task. If your plugin includes a page for a graphing calculator that takes search params to pre-populate the page with functions linked directly from the user's notes, there is a fair chance that this user is trying other graphing calculator plugins that offer different functionality that might also name their route something obvious like `/src/ulld_app/graph/...`. If on the other hand your plugin only shows cat pictures from a remote database, just put that route at `/src/ulld_app/catPhotos/...`. If a user has a name conflict for plugins involving cat pictures, you probably did that user a favor.

In general, lean towards making your routes unique enough to not cause conflicts, but also consider the fact that users might occasionally want to link to a url with specific search parameters directly in their notes. Something truly random like a uuid would make this needlessly challenging and make the note more difficult to read while in it's raw form.

## The route build process and type saftey

To simplify the build process and hopefully reduce the occurrence build errors, your `ulld_app` routes won't be **_directly_** copied over into the end user's app directory. Instead, a minimal route will be created and all props will be passed directly to your route. This should cause no discernible difference, however this will break type-safety and lead to typescript and linting errors in the target app if these props are passed without being explicitly typed.

You can export any `params` and/or `searchParams` as part of an interface or a type called `PageProps`. Your file will be tested for a regex match, and if `interface PageProps` or `type PageProps` is found, a named export will be included in the target route so the build will result in a completely type-safe and error free application, even if those errors weren't to cause any runtime issues.
