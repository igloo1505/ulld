import React, { useMemo } from 'react';
import { getInternalAppNames, getInternalPackageNames, getAllInternalNames, } from '@ulld/utilities/internalDataHelpers';
import { UlldMultiSelect } from './multi-select/main.js';
const internalNameMap = {
    package: getInternalPackageNames,
    app: getInternalAppNames,
    both: getAllInternalNames,
};
const InternalPackageSelect = ({ type = 'both', }) => {
    const props = useMemo(() => {
        return internalNameMap[type]().map(n => {
            return {
                value: n,
                label: n,
                id: n,
            };
        });
    }, [type]);
    return React.createElement(UlldMultiSelect, null);
};
InternalPackageSelect.displayName = 'InternalPackageSelect';
export default InternalPackageSelect;
//# sourceMappingURL=internalPackageSelect.js.map