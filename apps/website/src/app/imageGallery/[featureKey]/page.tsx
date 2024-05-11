import FeatureImageGallery from "#/components/pageSpecific/media/featureImageGallery/main";
import { FeatureImageGalleryKey } from "#/staticData/features/miniFeatures/types";
import React from "react";

interface FeatureImageGalleryPageProps {
    params: {
        featureKey: FeatureImageGalleryKey;
    };
}

const FeatureImageGalleryPage = ({ params }: FeatureImageGalleryPageProps) => {
    return (
        <div
            className={
                "w-full min-h-screen flex flex-col justify-center items-center"
            }
        >
            <FeatureImageGallery featureKey={params.featureKey} />
        </div>
    );
};

FeatureImageGalleryPage.displayName = "FeatureImageGalleryPage";

export default FeatureImageGalleryPage;
