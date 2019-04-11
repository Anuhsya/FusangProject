import { AutocompleteItem } from '../classes/AutocompleteItem';
export interface GroupNoResult {
    group: {
        key: string;
    };
    query: string;
}
/**
 *
 * @param array
 * @returns {Array}
 * @constructor
 */
export declare function ReturnStringArrayByID(array: {
    id: string | number;
    [value: string]: any;
}[]): any[];
/**
 *
 * @param removals
 * @param list
 * @returns {Array}
 * @constructor
 */
export declare function FilterRemovals(removals: string[], list: AutocompleteItem[]): AutocompleteItem[];
/**
 *
 * @returns {boolean}
 * @constructor
 */
export declare function IsMobileOrTablet(): boolean;
export declare function NotUsedKey(code: string): boolean;
