import InlineCode from "../general/inlineCode";
import { StaticDataLinkProps, getStaticLink } from "./staticDataLink";

const StaticLinkValue = ({
    link,
    asCode,
    gatherChildren
}: Omit<StaticDataLinkProps, "children"> & { asCode?: boolean, gatherChildren: (linkValue: string) => string }) => {
    let href = getStaticLink(link);
    if (typeof href !== "string") {
        throw new Error(`StaticDataLink could not parse the link ${link}`);
    }
    if (!asCode) {
        return href as string;
    }
    return <InlineCode>{gatherChildren(href)}</InlineCode>;
};

StaticLinkValue.displayName = "StaticLinkValue";

export default StaticLinkValue;
