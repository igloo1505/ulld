import React, { useMemo, useState } from 'react';
import { Box, useInput, useStdin } from 'ink';
import { UlldMultiSelectItem } from './item.js';
/* TODO: Need to handle this much better, but it's not the most important thing for right now. */
/**
 * @params
 * nToTake: The number of items to include in the slice.
 */
const getSliceIndices = (arrLength, focusedIndex, nToTake) => {
    let vals = [
        Math.ceil(focusedIndex - nToTake / 2),
        Math.ceil(focusedIndex + nToTake / 2),
    ];
    if (vals[1] > arrLength) {
        vals = [Math.max(0, arrLength - nToTake - 1), arrLength - 1];
    }
    else if (vals[0] < 0) {
        vals = [0, Math.min(arrLength - 1, nToTake)];
    }
    return vals;
};
const getSlicedList = (arr, focusedIndex, maxItems) => {
    let indices = getSliceIndices(arr.length, focusedIndex, maxItems);
    /* console.log('indices: ', indices); */
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
    };
    useInput(handleInput);
    const x = useStdin();
    x.internal_eventEmitter.setMaxListeners(0);
    useInput(handleInput);
    return (React.createElement(Box, { flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", height: '100%' }, slicedItems.map((n, i) => {
        return (React.createElement(UlldMultiSelectItem, { key: n.id, item: n, focused: i === focusedIndex, checked: selectedIds.includes(n.id), index: i, setFocusedIndex: () => setFocusedIndex(i) }));
    })));
};
UlldSlicedSelectList.displayName = 'UlldSlicedSelectList';
//# sourceMappingURL=slicedList.js.map