import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { DynamicIcon } from "@ulld/icons";
import {
    iconClassNames,
    iconContainerClassNames,
    getTitleContainerClassNames,
} from "./classNames";
import type { AdmonitionTitleProps } from "./admonitionUtils";


export const FoldingAdmonitionTitle = (
    props: AdmonitionTitleProps,
): ReactNode => {
    if (!props.title) {
        return null;
    }

    const { dropdown, iconName, title, ..._props } = props;

    return (
        <div
            {..._props}
            className={getTitleContainerClassNames(props)}
        >
            <div className={iconContainerClassNames}>
                {iconName ? <DynamicIcon className={iconClassNames} name={iconName} /> : null}
                {dropdown ? (
                    <ChevronDown className="absolute right-4 top-[50%] translate-y-[-50%] group-data-[state=open]/fold:rotate-180 transition-transform duration-300" />
                ) : null}
            </div>
                {title}
        </div>
    );
};

FoldingAdmonitionTitle.displayName = "FoldingAdmonitionTitle";
