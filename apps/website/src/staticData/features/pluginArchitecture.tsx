import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import Link from "next/link"


export const pluginArchitectureFeature: FeaturedContainerPropsRequired = {
    title: "Built for a community",
    label: "Awesome now, better with time",
    desc: () => {
        return (
            <span>
                <LogoAsText
                    className={"h-7"}
                    fontSize={18} 
                /> utilizes a plugin friendly, slot style architecture with the most popular tech among developers to foster an environment that encourages growth. If a <Link href="/corePlugins" className={"text-link"}>core plugin</Link> doesn't suite your needs, swap it out for a <Link className={"text-link"} href="/community/plugins">community plugin</Link>.
            </span>
        );
    },
    component: () => {
        return <div>Add logos of various tech used here</div>;
    },
};
