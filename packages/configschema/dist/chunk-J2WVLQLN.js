// src/evaluate/utils.ts
var arrayHasDuplicates = (items, parseItem) => {
  let data = [];
  for (const k of items) {
    let itemData = parseItem ? parseItem(k) : k;
    if (data.includes(itemData)) {
      return true;
    } else {
      data.push(itemData);
    }
  }
  return false;
};

export {
  arrayHasDuplicates
};
//# sourceMappingURL=chunk-J2WVLQLN.js.map