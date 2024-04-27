import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import {AnimatedUlldLogo} from "@ulld/icons/ulld-animated"


export const integrationsFeature: FeaturedContainerPropsRequired = {
    label: "Integration",
    title: ({shouldShow}) => {
        return (
        <div className={"h-[40px] flex flex-row justify-start items-center flex-wrap"}>An integral part of <span className={"pl-1 inline-block w-16"}><AnimatedUlldLogo
                show={shouldShow}
                height={32}
                speed={2}
            /></span></div>
        )
    },
    desc: () => {
        return (
            <div>
                With <span className={"underline decoration-4 underline-offset-2 decoration-yellow-500"}>day 1</span> support for integration with Google Calendar and Jupyter, integrating <LogoAsText fontSize={18}/> with your existing workflow should be painless.
            </div>
        );
    },
    component: () => {
        return <div>Component here</div>;
    },
};
