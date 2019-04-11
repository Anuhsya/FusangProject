import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
export declare class NgDropdownDirective implements OnChanges, OnInit, OnDestroy {
    _eref: ElementRef;
    list: any[];
    active: any;
    input: Element;
    element: Element;
    key: string;
    completion: boolean;
    hover: EventEmitter<any>;
    selected: EventEmitter<any>;
    closed: EventEmitter<any>;
    _open: boolean;
    _list: {
        active: boolean;
        [value: string]: any;
    }[];
    _class: string;
    wheelHandler: any;
    constructor(_eref: ElementRef);
    /**
     *
     */
    ngOnInit(): void;
    /**
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     *
     * @param event
     */
    keyDown(event: KeyboardEvent): void;
    /**
     *
     * @param event
     */
    OnMouseOver(event: MouseEvent): void;
    /**
     *
     * @constructor
     */
    EmitSelected(): void;
    /**
     *
     * @constructor
     */
    DropdownFocusAreaDown(): void;
    /**
     *
     * @constructor
     */
    DropdownFocusAreaUp(): void;
    /**
     *
     * @returns {boolean}
     */
    readonly opened: boolean;
    /**
     *
     * @constructor
     */
    Close(event: any, force?: boolean): void;
    /**
     *
     * @constructor
     */
    Open(): void;
    /**
     *
     * @returns {boolean}
     * @constructor
     */
    RefExists(): boolean;
    /**
     *
     * @private
     */
    FindActive(): number;
    /**
     *
     * @param index
     * @private
     */
    SetActive(index: number): void;
    /**
     *
     * @param index
     * @constructor
     */
    GetElement(index: number): any;
    /**
     *
     * @private
     */
    ClearActive(): void;
    /**
     *
     * @returns {[{item: any, active: boolean}]}
     * @constructor
     */
    PrepareList(): void;
    /**
     *
     * @param item
     * @returns {boolean}
     * @constructor
     */
    ActiveItem(item: any): boolean;
    /**
     *
     * @constructor
     */
    DetermineActiveClass(): void;
    /**
     *
     * @constructor
     */
    PrepareChildrenList(): void;
    /**
     *
     * @constructor
     * @param object
     */
    DeReference(object: {
        active: boolean;
        [value: string]: any;
    }): any;
    /**
     *
     */
    ngOnDestroy(): void;
    removeEventListner(elem: Element): void;
}
