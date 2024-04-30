import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import Link from "next/link";
import ConfigStreamIcon from "./featureAssets/communityTechIcons/configStreamIcon";

export const customizableFeature: FeaturedContainerPropsRequired = {
    label: "Customize Endlessly",
    title: "1 config to rule them all",
    desc: () => {
        return (
            <div>
                From the beginning <LogoAsText fontSize={18} /> was built to be extended
                with one configuration file providing a single source of truth
                throughout your application. <LogoAsText fontSize={18} /> offers a{" "}
                <span className={"font-semibold"}>Typescript</span> and{" "}
                <span className={"font-semibold"}>JSON</span> interface for those that
                are comfortable writing their own configuration, but a graphical
                interface for configuring your workspace is{" "}
                <Link href="/sponsor" className={"text-link"}>
                    just around the corner
                </Link>
                .
            </div>
        );
    },
    component: ({ shouldShow, animFinished }) => {
        return <ConfigStreamIcon animFinished={animFinished} show={shouldShow} />;
    },
};
