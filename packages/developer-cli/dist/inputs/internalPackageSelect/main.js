import React from 'react';
import internalBuildData from '@ulld/utilities/buildStaticData';
import { ResponsiveSelect } from 'ink-responsive-select';
const InternalPackageSelect = ({ setPackageData, value, }) => {
    const selectProps = {
        options: internalBuildData.internalPackageData.map((p, i) => ({
            label: p.name.replace('@ulld/', ''),
            value: `${i}`,
            checked: Boolean(value && (value.name === p.name)),
        })),
        loading: false,
        onChanged: val => {
            let v = internalBuildData.internalPackageData[parseInt(val.value)];
            if (v) {
                setPackageData(v);
            }
        },
    };
    return React.createElement(ResponsiveSelect, { ...selectProps });
};
InternalPackageSelect.displayName = 'InternalPackageSelect';
export default InternalPackageSelect;
//# sourceMappingURL=main.js.map