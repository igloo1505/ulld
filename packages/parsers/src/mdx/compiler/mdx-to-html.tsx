import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { parseMdxString } from "./mdx-to-jsx";
import grayMatter from "gray-matter";
import { jsxRuntime } from "../utils/jsxRuntime.cjs";
import { getComponentMap } from "@ulld/component-map/server";
import { ConditionalComponentProps } from "@ulld/component-map/types";
import { AdditionalComponents } from "@ulld/component-map/types";

interface MdxToHtmlProps {
    rawContent: string;
    appConfig: AppConfigSchemaOutput;
    components: AdditionalComponents;
    componentOpts?: ConditionalComponentProps;
}

export const mdxToHtml = async ({
    rawContent,
    appConfig,
    components = [],
    componentOpts,
}: MdxToHtmlProps) => {
    let frontMatter = grayMatter(rawContent);
    let parsedContent = await parseMdxString({
        content: frontMatter.content,
        appConfig,
    });

    const _components = getComponentMap(rawContent, componentOpts, components);

    const fullScope = Object.assign(
        {
            opts: jsxRuntime,
        },
        { frontmatter: frontMatter.data },
        {},
    );

    const keys = Object.keys(fullScope);
    const values = Object.values(fullScope);

    const hydrateFn = Reflect.construct(
        Function,
        keys.concat(`${parsedContent}`),
    );

    const Content: React.ElementType = hydrateFn.apply(hydrateFn, values).default;

    return {
        content: <Content components={_components} />,
        frontMatter: frontMatter.data,
    };
};