export type AdditionalImportsConfig = {
    /** Files that will be imported in the root layout */
    root?: string[];
    /** Files that will be imported only when mdx content is rendered. */
    mdx?: string[];
};
