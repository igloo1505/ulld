import React, { useMemo, useState } from 'react';
import { Box } from 'ink';
import { UlldMultiSelectItem } from '../../components/select/multi-select/item.js';
const getSlicedList = (arr, focusedIndex, maxItems) => {
    return arr.slice();
};
export const UlldSlicedSelectList = ({ options, showCount, selectedIds, }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const slicedItems = useMemo(() => getSlicedList(options, focusedIndex, showCount || 10), [showCount, options]);
    return (React.createElement(Box, null, slicedItems.map((n, i) => {
        return (React.createElement(UlldMultiSelectItem, { key: n.id, item: n, focused: false, checked: selectedIds.includes(n.id), index: i }));
    })));
    return React.createElement("div", null);
};
UlldSlicedSelectList.displayName = 'UlldSlicedSelectList';
//# sourceMappingURL=slicedList.js.map