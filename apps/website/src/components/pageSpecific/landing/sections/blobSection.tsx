"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLandingSection } from "../useSection";
import NoiseyBlob from "#/components/three/blob/main";
import { LandingPageTitleBox } from "../titleBox";
import clsx from "clsx";

interface BlobSectionProps {
    isProduction: boolean;
}

export const BlobSection = ({ isProduction }: BlobSectionProps) => {

    return (
        <div className={clsx("z-10")}>
            <NoiseyBlob isProduction={isProduction} />
            <LandingPageTitleBox />
        </div>
    );
};

BlobSection.displayName = "BlobSection";
