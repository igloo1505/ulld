import FeatureImageGallery from "#/components/pageSpecific/media/featureImageGallery/main";
import { FeatureImageGalleryKey } from "#/staticData/features/miniFeatures/types";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import React from "react";

interface FeatureImageGalleryModalPageProps { 
    params: {
        featureKey: FeatureImageGalleryKey
    }
}

const FeatureImageGalleryModalPage = ({params}: FeatureImageGalleryModalPageProps) => {
    return <ModalPageContainer>
        <FeatureImageGallery featureKey={params.featureKey}/>
    </ModalPageContainer>
;
};

FeatureImageGalleryModalPage.displayName = "FeatureImageGalleryModalPage";

export default FeatureImageGalleryModalPage;
