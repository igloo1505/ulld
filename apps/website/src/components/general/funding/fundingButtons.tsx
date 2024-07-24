import GithubIcon from "@ulld/icons/github";
import { PatreonIcon } from "@ulld/icons/patreon";
import { PaypalIcon } from "@ulld/icons/paypal";
import cn from "@ulld/utilities/cn";
import React, { HTMLProps } from "react";
import staticContent from "staticContent";

interface FundingButtonGroupProps extends HTMLProps<HTMLDivElement> {
    classes?: {
        github?: string;
        patreon?: string;
        paypal?: string;
        a?: string
        allIcons?: string
    };
}

const FundingButtonGroup = ({classes, ...props}: FundingButtonGroupProps) => {
    return (
        <div {...props}>
            <a 
                href={staticContent.links.fund.patreon}
                className={classes?.a}
            >
                <PatreonIcon className={cn("w-6 h-6 fill-foreground", classes?.patreon, classes?.allIcons)} />
            </a>
            <a
                href={staticContent.links.fund.github}
                className={classes?.a}
            >
                <GithubIcon className={cn("w-6 h-6", classes?.github, classes?.allIcons)}/>
            </a>
            <a
                href={staticContent.links.fund.paypalDonate}
                className={classes?.a}
            >
                <PaypalIcon className={cn("w-6 h-6 fill-foreground", classes?.paypal, classes?.allIcons)}/>
            </a>
        </div>
    );
};

FundingButtonGroup.displayName = "FundingButtonGroup";

export default FundingButtonGroup;
