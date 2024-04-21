import React from "react";
import { BackSide, type Texture } from "three";

interface BlobSphereProps {
  texture: Texture;
}

export const BlobSphere = ({texture}: BlobSphereProps) => {
  return (
    <mesh>
      <sphereGeometry args={[150, 40, 40]} />
      <meshBasicMaterial
                side={BackSide}
                map={texture}
            />
    </mesh>
  );
};

BlobSphere.displayName = "BlobSphere";
