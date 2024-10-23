import React from 'react';

interface SpacerProperties {
    size: number;
}

export const FixedSpacer: React.FC<SpacerProperties> = ({ size }) => (
    <>{' '.repeat(size)}</>
);
