"use client";
import React, { useState } from "react";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingPageTitleBox } from "../titleBox";
import InternalReduxProvider from "#/state/provider";

interface BlobSectionProps {
  isProduction: boolean;
}

export const BlobSection = ({ isProduction }: BlobSectionProps) => {
  const [show, setShow] = useState(false);
  return (
    <InternalReduxProvider>
      <div id="blobSection" className={"z-10 group/blobSection"}>
        <NoiseyBlob show={show} setShow={setShow} isProduction={isProduction} />
        <LandingPageTitleBox show={show} />
      </div>
    </InternalReduxProvider>
  );
};

BlobSection.displayName = "BlobSection";
