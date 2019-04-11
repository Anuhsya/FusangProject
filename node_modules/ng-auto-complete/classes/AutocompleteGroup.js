import { SearchableAutoCompleteItems } from './AutocompleteItem';
var AutocompleteGroup = (function () {
    function AutocompleteGroup() {
        this.async = null;
        this.removals = [];
    }
    /**
     *
     * @param value
     * @param titleKey
     * @constructor
     */
    AutocompleteGroup.prototype.SetNewValue = function (value, titleKey) {
        var values = SearchableAutoCompleteItems(value, titleKey);
        this.SetCopy(values);
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = this.FilterRemovals(this.removals, values);
    };
    /**
     *
     * @param ids
     * @constructor
     */
    AutocompleteGroup.prototype.Removables = function (ids) {
        this.removals = ids;
        /**
         *
         * @type {AutocompleteItem[]}
         */
        this.value = this.FilterRemovals(this.removals, this._copy);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.InitialValue = function () {
        this.value = this.FilterRemovals(this.removals, this.initialValue);
        /**
         *
         */
        this.SetCopy(this.initialValue);
    };
    /**
     *
     * @constructor
     */
    AutocompleteGroup.prototype.SetCopy = function (values) {
        this._copy = Object.assign([], values);
    };
    /**
     *
     * @param value
     * @constructor
     */
    AutocompleteGroup.prototype.SetValues = function (value) {
        this.value = SearchableAutoCompleteItems(value, this.keys.titleKey, this.keys.childrenKey);
        /**
         *
         */
        this.initialValue = Object.assign({}, this.value);
        this.SetCopy(Object.assign({}, this.value));
    };
    /**
     *
     * @param {any[]} removals
     * @param value
     * @constructor
     */
    AutocompleteGroup.prototype.FilterRemovals = function (removals, value) {
        var filtered = Object.assign({}, value);
        var key, keys = [];
        for (key in filtered) {
            if (filtered.hasOwnProperty(key)) {
                removals.forEach(function (id) {
                    // Comparable string and ID
                    var f = "_id_" + String(id);
                    var c = key.substring(key.indexOf(f), key.length);
                    if (f === c) {
                        keys.push(key);
                    }
                });
            }
        }
        keys.forEach(function (k) {
            delete filtered[k];
        });
        return filtered;
    };
    return AutocompleteGroup;
}());
export { AutocompleteGroup };
/**
 *
 * @param {string} placeholder
 * @param {string} key
 * @param value
 * @param keys
 * @param {string} parent
 * @param {boolean} completion
 * @returns {AutocompleteGroup}
 * @constructor
 */
export function CreateNewAutocompleteGroup(placeholder, key, value, keys, parent, completion, searchLength) {
    if (parent === void 0) { parent = ''; }
    if (completion === void 0) { completion = true; }
    if (searchLength === void 0) { searchLength = 2; }
    var group = new AutocompleteGroup();
    group.key = key;
    group.keys = keys;
    group.placeholder = placeholder;
    group.parent = parent;
    group.completion = completion;
    group.searchLength = searchLength;
    /**
     * Initial value needed, if we empty search box or want to clear it, it needs to be reset.
     * Setting copy, used if user wants to remove values (by id.). This _ list gets filtered.
     */
    group.SetValues(value);
    return group;
}
//# sourceMappingURL=AutocompleteGroup.js.map