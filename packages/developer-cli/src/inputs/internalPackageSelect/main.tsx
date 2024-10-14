import React from 'react';
import {
    InternalBuildData,
    InternalPackageItem,
} from '@ulld/utilities/internalDevTypes';
import internalBuildData from '@ulld/utilities/buildStaticData';
import { ResponsiveSelect, ResponsiveSelectProps } from 'ink-responsive-select';

interface InternalPackageSelectProps {
    setPackageData: (packageData: InternalPackageItem) => void;
    value?: InternalPackageItem | null;
}

const InternalPackageSelect = ({
    setPackageData,
    value,
}: InternalPackageSelectProps) => {
    const selectProps: ResponsiveSelectProps = {
        options: (internalBuildData as InternalBuildData).internalPackageData.map(
            (p, i) => ({
                label: p.name.replace('@ulld/', ''),
                value: `${i}`,
                checked: Boolean(value && (value.name === p.name)),
            }),
        ),
        loading: false,
        onChanged: val => {
            let v = (internalBuildData as InternalBuildData).internalPackageData[
                parseInt(val.value) as number
            ];
            if (v) {
                setPackageData(v);
            }
        },
    };

    return <ResponsiveSelect
        {...selectProps}
    />;
};

InternalPackageSelect.displayName = 'InternalPackageSelect';

export default InternalPackageSelect;
