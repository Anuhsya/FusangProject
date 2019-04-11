export interface StrippedAutocompleteGroup {
    group: {
        key: string;
    };
    item: AutocompleteItem;
}
export declare class AutocompleteItem {
    title: string;
    id?: string | number;
    children: any[];
    original: any;
    constructor(title: string, id: string | number, original: any);
}
/**
 *
 * @param items
 * @param titleKey
 * @param childrenKey
 * @constructor
 * @dynamic
 */
export declare function SearchableAutoCompleteItems(items: {
    id?: string | number;
    [value: string]: any;
}[], titleKey: string, childrenKey?: string | null): {
    [value: string]: AutocompleteItem;
};
/**
 *
 * @param key
 * @param {string | number} id
 * @returns {string}
 * @constructor
 */
export declare function SearchableAutoCompleteString(key: string, id: string | number): string;
/**
 *
 * @param {string} str
 * @returns {string}
 * @constructor
 */
export declare function ComparableAutoCompleteString(str: string): string;
/**
 * object must have an ID
 * @constructor
 */
export declare function TransformToAutocompleteItem(object: {
    id?: string | number;
    [value: string]: any;
}, titleKey: string, childrenKey?: string | null): AutocompleteItem;
