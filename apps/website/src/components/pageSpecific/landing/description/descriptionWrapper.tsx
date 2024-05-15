"use client";
import React, { useEffect, useState } from "react";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";
import { AnimatePresence } from "framer-motion";
import InternalReduxProvider from "#/state/provider";

const DescriptionWrapper = () => {
    const secData = useSectionIndex();
    const { idx } = secData;
    const [titleReady, setTitleReady] = useState(idx > 0);
    useEffect(() => {
        if (idx <= 0) {
            setTitleReady(false);
        }
    }, [idx]);

    return (
        <InternalReduxProvider>
            <AnimatePresence initial={false}>
                <DescriptionLogoTitleBox
                    key="dtb"
                    sectionIndex={idx}
                    setTitleReady={() => setTitleReady(true)}
                />
                <DescriptionSection
                    key="dsec"
                    sectionIndex={idx}
                    titleReady={titleReady}
                />
            </AnimatePresence>
        </InternalReduxProvider>
    );
};

DescriptionWrapper.displayName = "DescriptionWrapper";

export default DescriptionWrapper;
