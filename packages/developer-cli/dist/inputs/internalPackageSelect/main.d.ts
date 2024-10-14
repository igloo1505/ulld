import React from 'react';
import { InternalPackageItem } from '@ulld/utilities/internalDevTypes';
interface InternalPackageSelectProps {
    setPackageData: (packageData: InternalPackageItem) => void;
    value?: InternalPackageItem | null;
}
declare const InternalPackageSelect: {
    ({ setPackageData, value, }: InternalPackageSelectProps): React.JSX.Element;
    displayName: string;
};
export default InternalPackageSelect;
