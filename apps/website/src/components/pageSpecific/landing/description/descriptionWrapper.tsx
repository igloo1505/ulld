"use client";
import React, { useEffect, useState } from "react";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";
import { AnimatePresence } from "framer-motion";
import InternalReduxProvider from "#/state/provider";

const DescriptionWrapper = () => {
    const secData = useSectionIndex();

    return (
        <InternalReduxProvider>
            <AnimatePresence initial={false}>
            </AnimatePresence>
        </InternalReduxProvider>
    );
};

DescriptionWrapper.displayName = "DescriptionWrapper";

export default DescriptionWrapper;
