import { AutocompleteItem } from './AutocompleteItem';
import { TemplateRef } from '@angular/core';
export declare class AutocompleteGroup {
    initialValue: {
        [value: string]: AutocompleteItem;
    };
    key: string;
    keys: {
        titleKey: string;
        childrenKey: string | null;
    };
    value: {
        [value: string]: AutocompleteItem;
    };
    remove: string[];
    placeholder: string;
    parent: string;
    completion: boolean;
    searchLength: number;
    async: (str: string) => Promise<{
        id: string | number;
        [value: string]: any;
    }[]>;
    noResults: TemplateRef<any>;
    dropdownValue: TemplateRef<any>;
    placeholderValue: TemplateRef<any>;
    private removals;
    private _copy;
    constructor();
    /**
     *
     * @param value
     * @param titleKey
     * @constructor
     */
    SetNewValue(value: {
        id: string | number;
        [value: string]: any;
    }[], titleKey: string): void;
    /**
     *
     * @param ids
     * @constructor
     */
    Removables(ids: string[]): void;
    /**
     *
     * @constructor
     */
    InitialValue(): void;
    /**
     *
     * @constructor
     */
    SetCopy(values: {
        [value: string]: AutocompleteItem;
    }): void;
    /**
     *
     * @param value
     * @constructor
     */
    SetValues(value: {
        id?: string | number;
        [value: string]: any;
    }[]): void;
    /**
     *
     * @param {any[]} removals
     * @param value
     * @constructor
     */
    FilterRemovals(removals: any[], value: {
        [value: string]: AutocompleteItem;
    }): {
        [value: string]: AutocompleteItem;
    };
}
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
export declare function CreateNewAutocompleteGroup<T>(placeholder: string, key: string, value: {
    id?: string | number;
    [value: string]: any;
}[], keys: {
    titleKey: string;
    childrenKey: string | null;
}, parent?: string, completion?: boolean, searchLength?: number): AutocompleteGroup;
