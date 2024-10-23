import React, { useEffect, useMemo, useState } from 'react';
import { Box, useFocusManager, useInput } from 'ink';
import { UlldMultiSelectItem } from './item.js';
/* TODO: Need to handle this much better, but it's not the most important thing for right now. */
/**
 * @params
 * nToTake: The number of items to include in the slice.
 */
const getSliceIndices = (arrLength, focusedIndex, nToTake) => {
    const min = Math.max(focusedIndex === 0 ? 0 : Math.floor(focusedIndex - nToTake / 2), 0);
    const max = Math.min(min + nToTake, arrLength);
    return [min, max];
};
const getSlicedList = (arr, focusedIndex, maxItems) => {
    let indices = getSliceIndices(arr.length, focusedIndex, maxItems);
    console.log('indices: ', indices);
    return arr.slice(...indices);
};
export const UlldSlicedSelectList = ({ options, showCount, selectedIds, }) => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const slicedItems = useMemo(() => getSlicedList(options, focusedIndex, showCount || 10), [showCount, options, focusedIndex]);
    const cycleIndex = (dir) => {
        let _n = focusedIndex + dir;
        if (_n > options.length) {
            _n = 0;
        }
        else if (_n < 0) {
            _n = options.length - 1;
        }
        setFocusedIndex(_n);
    };
    const handleInput = (l) => {
        if (l === 'j') {
            return cycleIndex(1);
        }
        if (l === 'k') {
            return cycleIndex(-1);
        }
        console.log('l: ', l);
    };
    const op = useFocusManager();
    useEffect(() => {
        const o = options[focusedIndex];
        if (o) {
            op.focus(o.id);
        }
    }, [focusedIndex]);
    useInput(handleInput);
    console.log('slicedItems.length: ', slicedItems.length);
    return (React.createElement(Box, { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: '100%' }, slicedItems.map((n, i) => {
        return (React.createElement(UlldMultiSelectItem, { key: n.id, item: n, focused: i === focusedIndex, checked: selectedIds.includes(n.id), index: i }));
    })));
    return React.createElement("div", null);
};
UlldSlicedSelectList.displayName = 'UlldSlicedSelectList';
//# sourceMappingURL=slicedList.js.map