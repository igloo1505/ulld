import { FeatureImageGalleryKey } from '#/staticData/features/miniFeatures/types'
import React from 'react'



interface FeatureImageGalleryProps {
   featureKey: FeatureImageGalleryKey
}

const FeatureImageGallery = (props: FeatureImageGalleryProps) => {
return (
    <div>Feature Image Gallery Here</div>
)
}


FeatureImageGallery.displayName = "FeatureImageGallery"


export default FeatureImageGallery;
