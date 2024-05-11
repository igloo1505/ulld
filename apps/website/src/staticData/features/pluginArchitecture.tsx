import { LogoAsText } from "#/components/general/logoAsText";
import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import Link from "next/link";
import { TechIconLink } from "./featureAssets/communityTechIcons/techIconLink";
import clsx from 'clsx'

export const techIconClasses = "max-w-[20%] md:max-w-[min(80px,20%)] lg:max-w-[min(100px,20%)] h-auto";

export const pluginArchitectureFeature: FeaturedContainerPropsRequired = {
    title: "Built for a community",
    label: "Awesome now, better with time",
    desc: () => {
        return (
            <span>
                <LogoAsText className={"h-7"} fontSize={18} /> utilizes a plugin
                focused, slot style architecture with the most popular tech among
                developers to create an environment that encourages growth. If a{" "}
                <Link href="/corePlugins" className={"text-link"}>
                    core plugin
                </Link>{" "}
                doesn't suite your needs, swap it out for a{" "}
                <Link className={"text-link"} href="/community/plugins">
                    community plugin
                </Link>
                .
            </span>
        );
    },
    component: ({ shouldShow }) => {
        return (
            <div
                className={
                    "w-full flex flex-row flex-wrap justify-center items-center max-w-[400px] gap-2 md:gap-4"
                }
            >
                <TechIconLink
                    show={shouldShow}
                    index={1}
                    className={techIconClasses}
                    icon="ts"
                />
                <TechIconLink
                    show={shouldShow}
                    index={2}
                    icon="next"
                    className={clsx(techIconClasses, "bg-white rounded-lg inline-block p-2")}
                />
                <TechIconLink
                    show={shouldShow}
                    index={3}
                    className={techIconClasses}
                    icon="react"
                />
                <TechIconLink
                    show={shouldShow}
                    index={4}
                    className={clsx(techIconClasses, "fill-foreground stroke-foreground")}
                    icon="shad"
                />
                <TechIconLink
                    show={shouldShow}
                    index={5}
                    className={techIconClasses}
                    icon="scss"
                />
                <TechIconLink
                    show={shouldShow}
                    index={6}
                    className={techIconClasses}
                    icon="tailwind"
                />
                <TechIconLink
                    show={shouldShow}
                    index={7}
                    className={techIconClasses}
                    icon="redux"
                />
                <TechIconLink
                    show={shouldShow}
                    index={8}
                    className={clsx(techIconClasses, "bg-white rounded-lg")}
                    icon="prisma"
                />
            </div>
        );
    },
};
