import type { ValidIconName } from "@ulld/types";
import type { AdmonitionTitleProps } from "./admonitionTitle";

interface GetIconNameProps {
    admonitionType: NonNullable<AdmonitionTitleProps["admonitionType"]>;
    icon: AdmonitionTitleProps["icon"];
}

export const getIconName = (
    props: GetIconNameProps,
): ValidIconName | undefined => {
    if (props.icon) return props.icon;
    if (props.admonitionType !== "plain") {
        return props.admonitionType;
    }
};
