var AutocompleteItem = (function () {
    function AutocompleteItem(title, id, original) {
        this.title = title;
        this.id = id;
        this.original = original;
    }
    return AutocompleteItem;
}());
export { AutocompleteItem };
/**
 *
 * @param items
 * @param titleKey
 * @param childrenKey
 * @constructor
 * @dynamic
 */
export function SearchableAutoCompleteItems(items, titleKey, childrenKey) {
    if (childrenKey === void 0) { childrenKey = null; }
    return items.reduce(function (r, i) {
        var t = SearchableAutoCompleteString(i[titleKey], i.id);
        if (typeof r[t] === 'undefined') {
            r[t] = TransformToAutocompleteItem(i, titleKey, childrenKey);
        }
        return r;
    }, {});
}
/**
 *
 * @param key
 * @param {string | number} id
 * @returns {string}
 * @constructor
 */
export function SearchableAutoCompleteString(key, id) {
    return key.replace(/ /g, "_") + "_id_" + String(id);
}
/**
 *
 * @param {string} str
 * @returns {string}
 * @constructor
 */
export function ComparableAutoCompleteString(str) {
    return str.replace(/_/g, " ");
}
/**
 * object must have an ID
 * @constructor
 */
export function TransformToAutocompleteItem(object, titleKey, childrenKey) {
    if (childrenKey === void 0) { childrenKey = null; }
    var item = new AutocompleteItem(object[titleKey], object.id, object);
    /**
     * if there are children, add these.
     */
    if (childrenKey !== null)
        item.children = object[childrenKey];
    return item;
}
//# sourceMappingURL=AutocompleteItem.js.map