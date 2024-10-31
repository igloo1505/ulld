import React from 'react';
import { Checkbox } from 'ink-checkbox';
export const UlldMultiSelectItem = ({ item, focused, checked, index, }) => {
    const cbProps = {
        label: item.label,
        focused: focused,
        checked,
        index,
    };
    return React.createElement(Checkbox, { ...cbProps });
};
UlldMultiSelectItem.displayName = 'UlldMultiSelectItem';
//# sourceMappingURL=item.js.map