import { MiniFeature } from "#/staticData/features/miniFeatures/types";
import { DynamicIcon } from "@ulld/icons";
import { Plus } from "lucide-react";
import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion"

interface MiniFeatureCardProps extends MiniFeature {
    idx: number;
    maxWidth: string;
    show: boolean
}

const MiniFeatureCard = ({
    icon,
    desc,
    title,
    seeMoreHref,
    featureKey,
    maxWidth,
    idx,
    show
}: MiniFeatureCardProps) => {
    const _href =
        seeMoreHref || featureKey ? `/imageGallery/${featureKey}` : undefined;
    const Icon = useMemo(() => <DynamicIcon name={icon} />, []);
    return (
        <motion.div
            className={
                "mini-feature-card w-full h-full py-4 pr-4 pl-6 bg-muted/30 rounded-lg flex flex-col justify-start items-start gap-3 border touch-pan-y"
            }
            style={{ maxWidth }}
            id={`mini-feature-card-${idx}`}
            initial="hide"
            animate={show ? "show" : "hide"}
            variants={{
                hide: {
                    x: -100,
                    opacity: 0
                },
                show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 1 + idx * 0.15,
                    }
                }
            }}
        >
            {Icon}
            <h3 className={"font-bold text-xl select-none cursor-default"}>{title}</h3>
            <div className={"text-sm flex-grow pr-6 select-none cursor-default"}>{desc}</div>
            <div className={"w-full flex flex-row justify-end items-center h-[20px]"}>
                {_href && (
                    <Link
                        href={_href}
                        className={
                            "group/scrollIcon bg-foreground rounded-full p-1 hover:bg-foreground/20 transition-colors duration-300"
                        }
                    >
                        <Plus
                            className={
                                "text-muted/50 w-4 h-4 group-hover/scrollIcon:text-foreground"
                            }
                        />
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

MiniFeatureCard.displayName = "MiniFeatureCard";

export default MiniFeatureCard;
