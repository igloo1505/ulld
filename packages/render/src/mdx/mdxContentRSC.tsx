import React, { type ReactNode } from "react";
import { mdxToHtml } from "@ulld/parsers/serverMdxToHtml";
import { readAppConfigIfNotNoConfig } from "@ulld/developer/readAppConfig";
import { ApplyMathjaxBandaid } from "@ulld/hooks/useMathjaxBandaid";
import { getRandomId } from "@ulld/utilities/identity";
import { getMdxClassnames } from "./getMdxClassnames";
import type { MdxContentRSCProps } from "./typeUtils";
import { parseMdxContentProps } from "./mdxPropsUtils";


export const MdxContentRSC = async (_props: MdxContentRSCProps): Promise<ReactNode> => {
    const {
    components = [],
    id: _id,
} = _props
    const appConfig = _props.appConfig || (await readAppConfigIfNotNoConfig<MdxContentRSCProps>(_props));

    const id = _id || getRandomId()

    const props = parseMdxContentProps<MdxContentRSCProps>(_props);

    const data = await mdxToHtml({
        rawContent: props.content,
        appConfig,
        components,
        className: props.className
    });

    const autoApplyTitle = Boolean(
        appConfig?.UI?.autoApplyMdxTitles &&
        !data.frontMatter.hideTitle &&
        data.frontMatter.title,
    );

    const classNames = getMdxClassnames(_props);

    return (
        <div
            className={classNames}
            id={id}
        >
            {autoApplyTitle && data.frontMatter.title ? <div className="text-xl w-full text-center">
                    {data.frontMatter.title}
                </div> : null}
            {data.content}
            <ApplyMathjaxBandaid container={id} />
        </div>
    );
};

MdxContentRSC.displayName = "MdxContentRSC";

export type {MdxContentRSCProps}
