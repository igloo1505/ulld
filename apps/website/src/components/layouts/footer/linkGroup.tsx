import { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { MotionLink } from "#/components/utility/motionLink";


interface LinkGroupItem extends LinkProps {
    label: ReactNode;
}


export type LinkGroupItems = LinkGroupItem[]

interface LinkGroupProps {
    items: LinkGroupItems;
    title: string;
    idx: number
    inView: boolean
}


const LinkGroup = ({ items, title, inView, idx }: LinkGroupProps) => {
    const initialDelay = idx * 0.45
    return (
        <div className={"w-full h-fit flex flex-col justify-center lg:justify-start items-center"}>
            <motion.h4
                className={"text-lg capitalize"}
                        animate={inView ? "show" : "hide"}
                variants={{
                    show: {
                        top: 0,
                        opacity: 1,
                        scale: 1
                    },
                    hide: {
                        top: -50,
                        opacity: 0,
                        scale: 0
                    },
                }}
                transition={{
                    delay: initialDelay
                }}
            >{title}</motion.h4>
            <div className={"flex flex-col justify-center items-center gap-2"}>
                {items.map((itemProps, itemIndex) => {
                    return <MotionLink
                        {...itemProps}
                        animate={inView ? "show" : "hide"}
                        variants={{
                            show: {
                                opacity: 1,
                                scale: 1
                            },
                            hide: {
                                opacity: 0,
                                scale: 0
                            }
                        }}
                        transition={{
                            delay: initialDelay + (itemIndex + 1) * 0.1
                        }}
                        className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">{itemProps.label}</MotionLink> 
                })}
            </div>
        </div>
    );
};

LinkGroup.displayName = "LinkGroup";

export default LinkGroup;
