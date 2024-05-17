import React from "react";
import { useViewport } from "@ulld/hooks/useViewport";
import { motion } from "framer-motion";

interface DescriptionLogoLineProps {
    content: string;
    duration?: number
}

const DescriptionLogoLine = ({ content, duration = 0.8 }: DescriptionLogoLineProps) => {
    const vp = useViewport()
    return (
        <motion.h2
            className={"text-[min(13px,3vw)] w-fit"}
        >
            {content}
        </motion.h2>
    );
};

DescriptionLogoLine.displayName = "DescriptionLogoLine";

export default DescriptionLogoLine;
