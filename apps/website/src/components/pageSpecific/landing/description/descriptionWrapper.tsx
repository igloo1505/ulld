"use client";
import React, { useEffect, useState } from "react";
import { DescriptionLogoTitleBox } from "./descriptionLogoTitleBox";
import { DescriptionSection } from "./descriptionSection";
import { useSectionIndex } from "../feature/useSectionIndex";
import { AnimatePresence } from "framer-motion";

const DescriptionWrapper = () => {
  const { idx } = useSectionIndex(); 
    const [titleReady, setTitleReady] = useState(idx > 0)
    useEffect(() => {
        if(idx <= 0){
        setTitleReady(false)
        }
    }, [idx])

  return (
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
  )
};

DescriptionWrapper.displayName = "DescriptionWrapper";

export default DescriptionWrapper;
