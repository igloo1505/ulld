import React from "react";
import { autoWrapMath } from "@ulld/utilities/latexUtils";
import { getMdxClassnames } from "./getMdxClassnames";
import { mdxToHtml } from "@ulld/parsers/serverMdxToHtml";
import { AdditionalComponents } from "@ulld/component-map/types";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { cn } from "@ulld/utilities/cn";
import { ApplyMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { getRandomId } from "@ulld/utilities/identity";

export interface MdxContentRSCProps {
    id?: string;
    bareAss?: boolean;
    content?: string;
    inline?: boolean;
    parentId?: string;
    className?: string;
    hideMathjaxLabels?: boolean;
    isMathOnly?: boolean;
    autoWrap?: boolean;
    display?: boolean;
    small?: boolean;
    large?: boolean;
    xl?: boolean;
    live?: boolean; // Might not be using this. Double check later.
    applyMathContextMenu?: boolean;
    components?: AdditionalComponents;
    appConfig?: AppConfigSchemaOutput;
}

const parseProps = (p: Omit<MdxContentRSCProps, "MdxContentRenderer">) => {
    let inline = p.display === true ? false : true;
    return {
        ...p,
        displayType: inline ? ("inline" as "inline") : ("display" as "display"),
        content: !p.content
            ? ""
            : p.autoWrap
                ? autoWrapMath(p.content, !inline)
                : p.content,
    };
};


/* TODO: Need to remove references to the appConfig to be able to use this in the web app. */
export const MdxContentRSC = async ({
    components = [],
    id: _id,
    ..._props
}: MdxContentRSCProps) => {
    let appConfig = _props.appConfig || (await readAppConfig());

    const id = _id || getRandomId()

    const props = parseProps(_props);

    let data = await mdxToHtml({
        rawContent: props.content,
        appConfig: appConfig,
        components,
    });

    let autoApplyTitle = Boolean(
        appConfig.UI.autoApplyMdxTitles &&
        !Boolean(data.frontMatter?.hideTitle) &&
        data.frontMatter?.title,
    );

    const classNames = getMdxClassnames(_props);

    return (
        <div
            className={cn("w-full min-h-fit prose-all @container/mdx", classNames)}
            id={id}
        >
            {autoApplyTitle && data.frontMatter?.title && (
                <div className={"text-xl w-full text-center"}>
                    {data.frontMatter.title}
                </div>
            )}
            {data.content}
            <ApplyMathjaxBandaid container={id} />
        </div>
    );
};

MdxContentRSC.displayName = "MdxContentRSC";
