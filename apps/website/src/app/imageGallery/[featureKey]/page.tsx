import FeatureImageGallery from "#/components/pageSpecific/media/featureImageGallery/main";
import Analytics from "#/components/utility/analytics";
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
            <Analytics 
                pageView={{
                    path: `/imageGallery/${params.featureKey}`,
                    title: `Image Gallery: ${params.featureKey}`
                }}
            />
            <FeatureImageGallery featureKey={params.featureKey} />
        </div>
    );
};

FeatureImageGalleryPage.displayName = "FeatureImageGalleryPage";

export default FeatureImageGalleryPage;
