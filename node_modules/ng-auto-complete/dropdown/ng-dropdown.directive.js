var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";
import { IsMobileOrTablet } from "../utils/utils";
var NgDropdownDirective = (function () {
    function NgDropdownDirective(_eref) {
        this._eref = _eref;
        this.list = [];
        this.active = null;
        this.input = null;
        this.element = null;
        this.key = '';
        this.completion = true;
        this.hover = new EventEmitter();
        this.selected = new EventEmitter();
        this.closed = new EventEmitter();
        this._open = false;
        this._list = [];
        this._class = '';
    }
    /**
     *
     */
    NgDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._class = "dr-item-" + this.key + "-";
        if (this.RefExists()) {
            this.input.addEventListener('keydown', function (event) {
                _this.keyDown(event);
            });
        }
        if (!this.completion) {
            document.addEventListener('keydown', function (event) {
                if (_this._open) {
                    _this.keyDown(event);
                }
            });
        }
        if (!IsMobileOrTablet()) {
            this._eref.nativeElement.addEventListener('mouseover', function (event) {
                _this.OnMouseOver(event);
            });
        }
        /**
         *
         * @private
         */
        this.PrepareList();
    };
    /**
     *
     * @param changes
     */
    NgDropdownDirective.prototype.ngOnChanges = function (changes) {
        if (typeof changes['active'] !== 'undefined' && !changes['active'].firstChange) {
            this.PrepareList();
        }
        if (typeof changes['list'] !== 'undefined') {
            this.list = changes['list'].currentValue;
            /**
             *
             */
            this.PrepareList();
        }
    };
    /**
     *
     * @param event
     */
    NgDropdownDirective.prototype.keyDown = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        /**
         *
         */
        switch (event.code) {
            case 'ArrowDown':
                this.Open();
                /**
                 *
                 */
                this.SetActive(this.FindActive() + 1);
                this.DropdownFocusAreaDown();
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.Open();
                /**
                 *
                 */
                this.SetActive(this.FindActive() - 1);
                this.DropdownFocusAreaUp();
                event.preventDefault();
                break;
            case 'Enter':
                this.EmitSelected();
                this.Close(null, true);
                event.preventDefault();
                break;
            case 'Escape':
                this.Close(null, true);
                event.preventDefault();
                break;
            case 'Tab':
                if (!event.shiftKey) {
                    this.EmitSelected();
                }
                this.Close(null, true);
                break;
            default:
                return;
        }
    };
    /**
     *
     * @param event
     */
    NgDropdownDirective.prototype.OnMouseOver = function (event) {
        // Mouse didn't actually move, so no logic needed.
        if (event.movementX == 0 && event.movementY == 0) {
            return;
        }
        /**
         *
         */
        var el = event.target || event.srcElement;
        if (el.id.length > 0 && el.id.includes(this._class)) {
            this.SetActive(Number(el.id.slice(this._class.length, el.id.length)));
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.EmitSelected = function () {
        if (this.FindActive() > -1) {
            this.selected.emit(this._list[this.FindActive()].key);
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DropdownFocusAreaDown = function () {
        var scroll = this._eref.nativeElement.offsetHeight + this._eref.nativeElement.scrollTop;
        /**
         *
         */
        if ((this.GetElement(this.FindActive()).offsetTop + this.GetElement(this.FindActive()).offsetHeight) > scroll) {
            this._eref.nativeElement.scrollTop = this.GetElement(this.FindActive()).offsetTop - (this._eref.nativeElement.offsetHeight - this.GetElement(this.FindActive()).offsetHeight);
        }
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DropdownFocusAreaUp = function () {
        var scroll = this._eref.nativeElement.scrollTop;
        /**
         *
         */
        if (this.GetElement(this.FindActive()).offsetTop < scroll && scroll > 0) {
            this._eref.nativeElement.scrollTop = this.GetElement(this.FindActive()).offsetTop;
        }
    };
    Object.defineProperty(NgDropdownDirective.prototype, "opened", {
        // =======================================================================//
        // ! Bindings                                                             //
        // =======================================================================//
        /**
         *
         * @returns {boolean}
         */
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    // =======================================================================//
    // ! Listeners                                                            //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.Close = function (event, force) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (!this._open) {
            return;
        }
        var close = function () {
            _this._open = false;
            /**
             * Emit NULL so listening components know what to do.
             */
            _this.ClearActive();
            _this.hover.emit(null);
            _this.closed.emit();
        };
        if (force) {
            close();
            return;
        }
        if ((this._open && (!this.element.contains(event.target)))) {
            close();
        }
    };
    // =======================================================================//
    // ! Utils                                                                //
    // =======================================================================//
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.Open = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this._open && !_this._eref.nativeElement.classList.contains('is-initial-empty')) {
                _this._open = true;
                _this.PrepareList();
                /**
                 *
                 */
                if (_this.FindActive() < 0) {
                    _this._eref.nativeElement.scrollTop = 0;
                }
                else {
                    _this._eref.nativeElement.scrollTop = _this.GetElement(_this.FindActive()).offsetHeight * _this.FindActive();
                }
            }
        }, 0);
    };
    /**
     *
     * @returns {boolean}
     * @constructor
     */
    NgDropdownDirective.prototype.RefExists = function () {
        return typeof this.input !== 'undefined';
    };
    /**
     *
     * @private
     */
    NgDropdownDirective.prototype.FindActive = function () {
        return this._list.reduce(function (result, item, index) {
            if (item.active) {
                result = index;
            }
            return result;
        }, -1);
    };
    /**
     *
     * @param index
     * @private
     */
    NgDropdownDirective.prototype.SetActive = function (index) {
        if (index > this._list.length - 1 || index < 0)
            return;
        /**
         *
         */
        this.ClearActive();
        this._list[index].active = true;
        this.hover.emit(this._list[index].key);
        /**
         *
         */
        this.GetElement(index).classList.add('active');
    };
    /**
     *
     * @param index
     * @constructor
     */
    NgDropdownDirective.prototype.GetElement = function (index) {
        return this._eref.nativeElement.children[index];
    };
    /**
     *
     * @private
     */
    NgDropdownDirective.prototype.ClearActive = function () {
        var _this = this;
        this._list.forEach(function (item, index) {
            item.active = false;
            /**
             *
             * @type {string}
             */
            _this.GetElement(index).classList.remove('active');
        });
    };
    /**
     *
     * @returns {[{item: any, active: boolean}]}
     * @constructor
     */
    NgDropdownDirective.prototype.PrepareList = function () {
        var _this = this;
        this._list = Object.keys(this.list).map(function (key) {
            return {
                key: key,
                active: _this.ActiveItem(key)
            };
        });
        /**
         *
         */
        this.PrepareChildrenList();
    };
    /**
     *
     * @param item
     * @returns {boolean}
     * @constructor
     */
    NgDropdownDirective.prototype.ActiveItem = function (item) {
        return this.active !== null && item === this.active;
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.DetermineActiveClass = function () {
        var _this = this;
        this._list.forEach(function (item, index) {
            if (typeof _this.GetElement(index) === 'undefined') {
                return;
            }
            /**
             *
             */
            _this.GetElement(index).classList.remove('active');
            if (item.active)
                _this.GetElement(index).classList.add('active');
        });
    };
    /**
     *
     * @constructor
     */
    NgDropdownDirective.prototype.PrepareChildrenList = function () {
        var _this = this;
        var list = this._eref.nativeElement.children;
        setTimeout(function () {
            for (var i = 0; i < list.length; i++) {
                list[i].id = _this._class + i;
            }
        }, 0);
        /**
         *
         */
        this.DetermineActiveClass();
    };
    ;
    /**
     *
     * @constructor
     * @param object
     */
    NgDropdownDirective.prototype.DeReference = function (object) {
        var item = object.item;
        /**
         *
         */
        return Object.assign({}, __assign({}, item));
    };
    /**
     *
     */
    NgDropdownDirective.prototype.ngOnDestroy = function () {
        if (this.RefExists()) {
            this.wheelHandler = this.removeEventListner.bind(this.input);
            // this.input.removeEventListener('keydown');
        }
        if (!this.completion) {
            this.wheelHandler = this.removeEventListner.bind(document);
            // document.removeEventListener('keydown');
        }
        if (!IsMobileOrTablet()) {
            this.wheelHandler = this.removeEventListner.bind(this._eref);
            // this._eref.nativeElement.removeEventListener('mouseover');
        }
    };
    NgDropdownDirective.prototype.removeEventListner = function (elem) {
        elem.removeEventListener('wheel', this.wheelHandler, true);
    };
    return NgDropdownDirective;
}());
export { NgDropdownDirective };
NgDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngDropdown]'
            },] },
];
/** @nocollapse */
NgDropdownDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
NgDropdownDirective.propDecorators = {
    'list': [{ type: Input },],
    'active': [{ type: Input },],
    'input': [{ type: Input },],
    'element': [{ type: Input },],
    'key': [{ type: Input },],
    'completion': [{ type: Input },],
    'hover': [{ type: Output },],
    'selected': [{ type: Output },],
    'closed': [{ type: Output },],
    'opened': [{ type: HostBinding, args: ['class.open',] },],
    'Close': [{ type: HostListener, args: ['document:click', ['$event'],] },],
};
//# sourceMappingURL=ng-dropdown.directive.js.map