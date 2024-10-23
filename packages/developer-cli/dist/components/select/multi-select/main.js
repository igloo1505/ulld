import { Box } from 'ink';
import React, { useState } from 'react';
import { UlldSlicedSelectList } from './slicedList.js';
const testOptions = Array(50)
    .fill(0)
    .map(() => {
    const v = `${Math.random()}`.slice(0, 12);
    return {
        value: v,
        label: v,
        id: v,
    };
});
export const UlldMultiSelect = ({ options = testOptions, }) => {
    const [selectedIds, setSelectedIds] = useState([]);
    return (React.createElement(Box, { width: '100%', height: '100%' },
        React.createElement(UlldSlicedSelectList, { selectedIds: selectedIds, options: options })));
};
UlldMultiSelect.displayName = 'UlldMultiSelect';
//# sourceMappingURL=main.js.map