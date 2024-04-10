export abstract class ULLDEmbeddableComponentConfig {
    /**
       * component
       *
       * @remarks
       * Dynamically import your component using 'next/dynamic' to avoid loading it on pages with which the mdx content does not include it.
       * 
       * {@link https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading}
       * 
       * @example
       * Heres an example of how to use this function/class/interface/type/etc...
       * ```ts
       * import dynamic from 'next/dynamic';
       * const MyComponent = dynamic(() => import("/path/to/component").then((a) => a.MyNamedExport))
       * const MyDefaultExportedComponent = dynamic(() => import("/path/to/component"))
       * ```
       *
       */
    component: React.FC<any> | ((props: any) => Promise<JSX.Element>)
    /**
       * regex
       *
       * @remarks
       * These strings will be used to test note content to check if your component is included, and therefor your component should be included in the client side code. Most likely, you will want this to follow the pattern `<MyComponent` to use match that string only if it is a React component. Multiple strings can be included for name shortening without increasing the payload size so that `<Highlight` can also include `<Hl`, etc.
       * 
       * @example
       * Heres an example of how to use this function/class/interface/type/etc...
       * ```ts
       * regex = [
       * '<Whiteboard',
       * '<Sketch',
       * '<Chalkboard',
       * '<Draw'
       * ]
       * ```
       *
       */
    regex: string[] = []
    constructor(){}
}
