/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, ComponentFactoryResolver, ElementRef, HostListener, forwardRef, ChangeDetectorRef, Input, KeyValueDiffers, Output, EventEmitter, Renderer2 } from '@angular/core';
import { DaterangepickerComponent } from './daterangepicker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _moment from 'moment';
import { LocaleService } from './locale.service';
var /** @type {?} */ moment = _moment;
var DaterangepickerDirective = /** @class */ (function () {
    function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService) {
        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._localeService = _localeService;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this.showCancel = false;
        // timepicker variables
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this._locale = {};
        this._endKey = 'endDate';
        this._startKey = 'startDate';
        this.notForChangesProperty = [
            'locale',
            'endKey',
            'startKey'
        ];
        this.onChange = new EventEmitter();
        this.rangeClicked = new EventEmitter();
        this.datesUpdated = new EventEmitter();
        this.drops = 'down';
        this.opens = 'right';
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);
        viewContainerRef.clear();
        var /** @type {?} */ componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = (/** @type {?} */ (componentRef.instance));
        this.picker.inline = false; // set inline to false for all directive usage
    }
    Object.defineProperty(DaterangepickerDirective.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._locale = tslib_1.__assign({}, this._localeService.config, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "startKey", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== null) {
                this._startKey = value;
            }
            else {
                this._startKey = 'startDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaterangepickerDirective.prototype, "endKey", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== null) {
                this._endKey = value;
            }
            else {
                this._endKey = 'endDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DaterangepickerDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value || null;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._value = val;
            this._onChange(val);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DaterangepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.picker.rangeClicked.asObservable().subscribe(function (range) {
            _this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe(function (range) {
            _this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe(function (change) {
            if (change) {
                var /** @type {?} */ value = {};
                value[_this._startKey] = change.startDate;
                value[_this._endKey] = change.endDate;
                _this.value = value;
                _this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    _this._el.nativeElement.value = change.chosenLabel;
                }
            }
        });
        this.picker.firstMonthDayClass = this.firstMonthDayClass;
        this.picker.lastMonthDayClass = this.lastMonthDayClass;
        this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
        this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
        this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
        this.picker.drops = this.drops;
        this.picker.opens = this.opens;
        this.localeDiffer = this.differs.find(this.locale).create();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DaterangepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var /** @type {?} */ change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.localeDiffer) {
            var /** @type {?} */ changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    DaterangepickerDirective.prototype.open = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.picker.show(event);
        setTimeout(function () {
            _this.setPosition();
        });
    };
    /**
     * @param {?=} e
     * @return {?}
     */
    DaterangepickerDirective.prototype.hide = /**
     * @param {?=} e
     * @return {?}
     */
    function (e) {
        this.picker.hide(e);
    };
    /**
     * @param {?=} e
     * @return {?}
     */
    DaterangepickerDirective.prototype.toggle = /**
     * @param {?=} e
     * @return {?}
     */
    function (e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    };
    /**
     * @return {?}
     */
    DaterangepickerDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.picker.clear();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DaterangepickerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DaterangepickerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DaterangepickerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DaterangepickerDirective.prototype.setValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val) {
            if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
            }
            if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
            }
            this.picker.calculateChosenLabel();
            if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
            }
        }
        else {
            this.picker.clear();
        }
    };
    /**
     * Set position of the calendar
     */
    /**
     * Set position of the calendar
     * @return {?}
     */
    DaterangepickerDirective.prototype.setPosition = /**
     * Set position of the calendar
     * @return {?}
     */
    function () {
        var /** @type {?} */ style;
        var /** @type {?} */ containerTop;
        var /** @type {?} */ container = this.picker.pickerContainer.nativeElement;
        var /** @type {?} */ element = this._el.nativeElement;
        if (this.drops && this.drops == 'up') {
            containerTop = (element.offsetTop - container.clientHeight) + 'px';
        }
        else {
            containerTop = 'auto';
        }
        if (this.opens == 'left') {
            style = {
                top: containerTop,
                left: (element.offsetLeft - container.clientWidth + element.clientWidth) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens == 'center') {
            style = {
                top: containerTop,
                left: (element.offsetLeft + element.clientWidth / 2
                    - container.clientWidth / 2) + 'px',
                right: 'auto'
            };
        }
        else {
            style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
            };
        }
        if (style) {
            this._renderer.setStyle(container, 'top', style.top);
            this._renderer.setStyle(container, 'left', style.left);
            this._renderer.setStyle(container, 'right', style.right);
        }
    };
    /**
     * For click outside of the calendar's container
     * @param {?} event event object
     * @param {?} targetElement target element object
     * @return {?}
     */
    DaterangepickerDirective.prototype.outsideClick = /**
     * For click outside of the calendar's container
     * @param {?} event event object
     * @param {?} targetElement target element object
     * @return {?}
     */
    function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        if (targetElement.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        var /** @type {?} */ clickedInside = this._el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.hide();
        }
    };
    DaterangepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[ngxDaterangepickerMd]',
                    host: {
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()',
                        '(click)': 'open()'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DaterangepickerDirective; }), multi: true
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    DaterangepickerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: ChangeDetectorRef, },
        { type: ComponentFactoryResolver, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: KeyValueDiffers, },
        { type: LocaleService, },
    ]; };
    DaterangepickerDirective.propDecorators = {
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "autoApply": [{ type: Input },],
        "alwaysShowCalendars": [{ type: Input },],
        "showCustomRangeLabel": [{ type: Input },],
        "linkedCalendars": [{ type: Input },],
        "singleDatePicker": [{ type: Input },],
        "showWeekNumbers": [{ type: Input },],
        "showISOWeekNumbers": [{ type: Input },],
        "showDropdowns": [{ type: Input },],
        "isInvalidDate": [{ type: Input },],
        "isCustomDate": [{ type: Input },],
        "showClearButton": [{ type: Input },],
        "ranges": [{ type: Input },],
        "opens": [{ type: Input },],
        "drops": [{ type: Input },],
        "lastMonthDayClass": [{ type: Input },],
        "emptyWeekRowClass": [{ type: Input },],
        "firstDayOfNextMonthClass": [{ type: Input },],
        "lastDayOfPreviousMonthClass": [{ type: Input },],
        "keepCalendarOpeningWithRange": [{ type: Input },],
        "showRangeLabelOnInput": [{ type: Input },],
        "showCancel": [{ type: Input },],
        "timePicker": [{ type: Input },],
        "timePicker24Hour": [{ type: Input },],
        "timePickerIncrement": [{ type: Input },],
        "timePickerSeconds": [{ type: Input },],
        "locale": [{ type: Input },],
        "_endKey": [{ type: Input },],
        "startKey": [{ type: Input },],
        "endKey": [{ type: Input },],
        "onChange": [{ type: Output, args: ['change',] },],
        "rangeClicked": [{ type: Output, args: ['rangeClicked',] },],
        "datesUpdated": [{ type: Output, args: ['datesUpdated',] },],
        "outsideClick": [{ type: HostListener, args: ['document:click', ['$event', '$event.target'],] },],
    };
    return DaterangepickerDirective;
}());
export { DaterangepickerDirective };
function DaterangepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DaterangepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DaterangepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DaterangepickerDirective.propDecorators;
    /** @type {?} */
    DaterangepickerDirective.prototype.picker;
    /** @type {?} */
    DaterangepickerDirective.prototype._onChange;
    /** @type {?} */
    DaterangepickerDirective.prototype._onTouched;
    /** @type {?} */
    DaterangepickerDirective.prototype._validatorChange;
    /** @type {?} */
    DaterangepickerDirective.prototype._value;
    /** @type {?} */
    DaterangepickerDirective.prototype.localeDiffer;
    /** @type {?} */
    DaterangepickerDirective.prototype.minDate;
    /** @type {?} */
    DaterangepickerDirective.prototype.maxDate;
    /** @type {?} */
    DaterangepickerDirective.prototype.autoApply;
    /** @type {?} */
    DaterangepickerDirective.prototype.alwaysShowCalendars;
    /** @type {?} */
    DaterangepickerDirective.prototype.showCustomRangeLabel;
    /** @type {?} */
    DaterangepickerDirective.prototype.linkedCalendars;
    /** @type {?} */
    DaterangepickerDirective.prototype.singleDatePicker;
    /** @type {?} */
    DaterangepickerDirective.prototype.showWeekNumbers;
    /** @type {?} */
    DaterangepickerDirective.prototype.showISOWeekNumbers;
    /** @type {?} */
    DaterangepickerDirective.prototype.showDropdowns;
    /** @type {?} */
    DaterangepickerDirective.prototype.isInvalidDate;
    /** @type {?} */
    DaterangepickerDirective.prototype.isCustomDate;
    /** @type {?} */
    DaterangepickerDirective.prototype.showClearButton;
    /** @type {?} */
    DaterangepickerDirective.prototype.ranges;
    /** @type {?} */
    DaterangepickerDirective.prototype.opens;
    /** @type {?} */
    DaterangepickerDirective.prototype.drops;
    /** @type {?} */
    DaterangepickerDirective.prototype.firstMonthDayClass;
    /** @type {?} */
    DaterangepickerDirective.prototype.lastMonthDayClass;
    /** @type {?} */
    DaterangepickerDirective.prototype.emptyWeekRowClass;
    /** @type {?} */
    DaterangepickerDirective.prototype.firstDayOfNextMonthClass;
    /** @type {?} */
    DaterangepickerDirective.prototype.lastDayOfPreviousMonthClass;
    /** @type {?} */
    DaterangepickerDirective.prototype.keepCalendarOpeningWithRange;
    /** @type {?} */
    DaterangepickerDirective.prototype.showRangeLabelOnInput;
    /** @type {?} */
    DaterangepickerDirective.prototype.showCancel;
    /** @type {?} */
    DaterangepickerDirective.prototype.timePicker;
    /** @type {?} */
    DaterangepickerDirective.prototype.timePicker24Hour;
    /** @type {?} */
    DaterangepickerDirective.prototype.timePickerIncrement;
    /** @type {?} */
    DaterangepickerDirective.prototype.timePickerSeconds;
    /** @type {?} */
    DaterangepickerDirective.prototype._locale;
    /** @type {?} */
    DaterangepickerDirective.prototype._endKey;
    /** @type {?} */
    DaterangepickerDirective.prototype._startKey;
    /** @type {?} */
    DaterangepickerDirective.prototype.notForChangesProperty;
    /** @type {?} */
    DaterangepickerDirective.prototype.onChange;
    /** @type {?} */
    DaterangepickerDirective.prototype.rangeClicked;
    /** @type {?} */
    DaterangepickerDirective.prototype.datesUpdated;
    /** @type {?} */
    DaterangepickerDirective.prototype.viewContainerRef;
    /** @type {?} */
    DaterangepickerDirective.prototype._changeDetectorRef;
    /** @type {?} */
    DaterangepickerDirective.prototype._componentFactoryResolver;
    /** @type {?} */
    DaterangepickerDirective.prototype._el;
    /** @type {?} */
    DaterangepickerDirective.prototype._renderer;
    /** @type {?} */
    DaterangepickerDirective.prototype.differs;
    /** @type {?} */
    DaterangepickerDirective.prototype._localeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsd0JBQXdCLEVBQ3hCLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLGlCQUFpQixFQUlqQixLQUFLLEVBR0wsZUFBZSxFQUNmLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDOztJQXlIckIsa0NBQ1Msa0JBQ0Esb0JBQ0MsMkJBQ0EsS0FDQSxXQUNBLFNBQ0E7UUFORCxxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0I7UUFDakIsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQUN6QixRQUFHLEdBQUgsR0FBRztRQUNILGNBQVMsR0FBVCxTQUFTO1FBQ1QsWUFBTyxHQUFQLE9BQU87UUFDUCxtQkFBYyxHQUFkLGNBQWM7eUJBOUdKLFFBQVEsQ0FBQyxTQUFTOzBCQUNqQixRQUFRLENBQUMsU0FBUztnQ0FDWixRQUFRLENBQUMsU0FBUzswQkFpRHZCLEtBQUs7OzBCQUdMLEtBQUs7Z0NBRUMsS0FBSzttQ0FFSCxDQUFDO2lDQUVGLEtBQUs7UUFDbEMsZUFBd0IsRUFBRSxDQUFDO3VCQVFELFNBQVM7eUJBQ1As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Q0FFTCxLQUFLO2tDQUVMLEtBQUs7aUNBRUwsS0FBSztvQ0FFTCxLQUFLOzJCQUVMLEtBQUs7MEJBRUwsS0FBSzswQkFFTCxLQUFLO3NDQUdMLEtBQUs7c0NBRUwsS0FBSzs2Q0FFTCxLQUFLO2dEQUVMLEtBQUs7aURBRUwsS0FBSzswQ0FFTCxLQUFLOytCQUVMLEtBQUs7K0JBR0wsS0FBSztxQ0FFTCxLQUFLO3dDQUVMLEtBQUs7c0NBRUwsS0FBSzsyQkFHTCxLQUFLOzRCQU1MLEtBQUs7NkJBR0wsS0FBSzsyQkFPTCxLQUFLOzZCQXFCTCxNQUFNLFNBQUMsUUFBUTtpQ0FDZixNQUFNLFNBQUMsY0FBYztpQ0FDckIsTUFBTSxTQUFDLGNBQWM7aUNBb0tyQixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDOzttQ0FuVDdEOztTQXdDYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBEb0NoZWNrLFxuICBLZXlWYWx1ZURpZmZlcixcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgX21vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTG9jYWxlQ29uZmlnIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsZS5zZXJ2aWNlJztcbmNvbnN0IG1vbWVudCA9IF9tb21lbnQ7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W25neERhdGVyYW5nZXBpY2tlck1kXScsXG4gIGhvc3Q6IHtcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJyxcbiAgICAnKGNsaWNrKSc6ICdvcGVuKCknXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlKSwgbXVsdGk6IHRydWVcbiAgICB9XG5dXG59KVxuZXhwb3J0IGNsYXNzIERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcbiAgcHVibGljIHBpY2tlcjogRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50O1xuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgbG9jYWxlRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XG4gIEBJbnB1dCgpXG4gIG1pbkRhdGU6IF9tb21lbnQuTW9tZW50XG4gIEBJbnB1dCgpXG4gIG1heERhdGU6IF9tb21lbnQuTW9tZW50XG4gIEBJbnB1dCgpXG4gIGF1dG9BcHBseTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYWx3YXlzU2hvd0NhbGVuZGFyczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0N1c3RvbVJhbmdlTGFiZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxpbmtlZENhbGVuZGFyczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2luZ2xlRGF0ZVBpY2tlcjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd1dlZWtOdW1iZXJzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93SVNPV2Vla051bWJlcnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dEcm9wZG93bnM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGlzSW52YWxpZERhdGU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBpc0N1c3RvbURhdGU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBzaG93Q2xlYXJCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJhbmdlczogYW55O1xuICBASW5wdXQoKVxuICBvcGVuczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkcm9wczogc3RyaW5nO1xuICBmaXJzdE1vbnRoRGF5Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFzdE1vbnRoRGF5Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgZW1wdHlXZWVrUm93Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgZmlyc3REYXlPZk5leHRNb250aENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxhc3REYXlPZlByZXZpb3VzTW9udGhDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBrZWVwQ2FsZW5kYXJPcGVuaW5nV2l0aFJhbmdlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93UmFuZ2VMYWJlbE9uSW5wdXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dDYW5jZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gdGltZXBpY2tlciB2YXJpYWJsZXNcbiAgQElucHV0KClcbiAgdGltZVBpY2tlcjogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICB0aW1lUGlja2VyMjRIb3VyOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHRpbWVQaWNrZXJJbmNyZW1lbnQ6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgpXG4gIHRpbWVQaWNrZXJTZWNvbmRzOiBCb29sZWFuID0gZmFsc2U7XG4gIF9sb2NhbGU6IExvY2FsZUNvbmZpZyA9IHt9O1xuICBASW5wdXQoKSBzZXQgbG9jYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gey4uLnRoaXMuX2xvY2FsZVNlcnZpY2UuY29uZmlnLCAuLi52YWx1ZX07XG4gIH1cbiAgZ2V0IGxvY2FsZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cbiAgQElucHV0KClcbiAgcHJpdmF0ZSBfZW5kS2V5OiBzdHJpbmcgPSAnZW5kRGF0ZSc7XG4gIHByaXZhdGUgX3N0YXJ0S2V5OiBzdHJpbmcgPSAnc3RhcnREYXRlJztcbiAgQElucHV0KCkgc2V0IHN0YXJ0S2V5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9zdGFydEtleSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGFydEtleSA9ICdzdGFydERhdGUnO1xuICAgIH1cbiAgfTtcbiAgQElucHV0KCkgc2V0IGVuZEtleSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fZW5kS2V5ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VuZEtleSA9ICdlbmREYXRlJztcbiAgICB9XG4gIH07XG4gIG5vdEZvckNoYW5nZXNQcm9wZXJ0eTogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAnbG9jYWxlJyxcbiAgICAnZW5kS2V5JyxcbiAgICAnc3RhcnRLZXknXG4gIF07XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSB8fCBudWxsO1xuICB9XG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWwpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIEBPdXRwdXQoJ2NoYW5nZScpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgncmFuZ2VDbGlja2VkJykgcmFuZ2VDbGlja2VkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgnZGF0ZXNVcGRhdGVkJykgZGF0ZXNVcGRhdGVkOiBFdmVudEVtaXR0ZXI8T2JqZWN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxuICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5kcm9wcyA9ICdkb3duJztcbiAgICB0aGlzLm9wZW5zID0gJ3JpZ2h0JztcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIHRoaXMucGlja2VyID0gKDxEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQ+Y29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICB0aGlzLnBpY2tlci5pbmxpbmUgPSBmYWxzZTsgLy8gc2V0IGlubGluZSB0byBmYWxzZSBmb3IgYWxsIGRpcmVjdGl2ZSB1c2FnZVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGlja2VyLnJhbmdlQ2xpY2tlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmFuZ2VDbGlja2VkLmVtaXQocmFuZ2UpO1xuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLmRhdGVzVXBkYXRlZC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0ZXNVcGRhdGVkLmVtaXQocmFuZ2UpO1xuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLmNob29zZWREYXRlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoY2hhbmdlOiBhbnkpID0+IHtcbiAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICAgICAgdmFsdWVbdGhpcy5fc3RhcnRLZXldID0gY2hhbmdlLnN0YXJ0RGF0ZTtcbiAgICAgICAgdmFsdWVbdGhpcy5fZW5kS2V5XSA9IGNoYW5nZS5lbmREYXRlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICAgIGlmKHR5cGVvZiBjaGFuZ2UuY2hvc2VuTGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGNoYW5nZS5jaG9zZW5MYWJlbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucGlja2VyLmZpcnN0TW9udGhEYXlDbGFzcyA9IHRoaXMuZmlyc3RNb250aERheUNsYXNzO1xuICAgIHRoaXMucGlja2VyLmxhc3RNb250aERheUNsYXNzID0gdGhpcy5sYXN0TW9udGhEYXlDbGFzcztcbiAgICB0aGlzLnBpY2tlci5lbXB0eVdlZWtSb3dDbGFzcyA9IHRoaXMuZW1wdHlXZWVrUm93Q2xhc3M7XG4gICAgdGhpcy5waWNrZXIuZmlyc3REYXlPZk5leHRNb250aENsYXNzID0gdGhpcy5maXJzdERheU9mTmV4dE1vbnRoQ2xhc3M7XG4gICAgdGhpcy5waWNrZXIubGFzdERheU9mUHJldmlvdXNNb250aENsYXNzID0gdGhpcy5sYXN0RGF5T2ZQcmV2aW91c01vbnRoQ2xhc3M7XG4gICAgdGhpcy5waWNrZXIuZHJvcHMgPSB0aGlzLmRyb3BzO1xuICAgIHRoaXMucGlja2VyLm9wZW5zID0gdGhpcy5vcGVucztcbiAgICB0aGlzLmxvY2FsZURpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMubG9jYWxlKS5jcmVhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkICB7XG4gICAgZm9yIChsZXQgY2hhbmdlIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGNoYW5nZSkpIHtcbiAgICAgICAgaWYgKHRoaXMubm90Rm9yQ2hhbmdlc1Byb3BlcnR5LmluZGV4T2YoY2hhbmdlKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnBpY2tlcltjaGFuZ2VdID0gY2hhbmdlc1tjaGFuZ2VdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5sb2NhbGVEaWZmZXIpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLmxvY2FsZURpZmZlci5kaWZmKHRoaXMubG9jYWxlKTtcbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMucGlja2VyLnVwZGF0ZUxvY2FsZSh0aGlzLmxvY2FsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgb3BlbihldmVudD86IGFueSkge1xuICAgIHRoaXMucGlja2VyLnNob3coZXZlbnQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRQb3NpdGlvbigpO1xuICAgIH0pXG4gIH1cblxuICBoaWRlKGU/KSB7XG4gICAgdGhpcy5waWNrZXIuaGlkZShlKTtcbiAgfVxuICB0b2dnbGUoZT8pIHtcbiAgICBpZiAodGhpcy5waWNrZXIuaXNTaG93bikge1xuICAgICAgdGhpcy5oaWRlKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5waWNrZXIuY2xlYXIoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBwcml2YXRlIHNldFZhbHVlKHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbFt0aGlzLl9zdGFydEtleV0pIHtcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0U3RhcnREYXRlKHZhbFt0aGlzLl9zdGFydEtleV0pXG4gICAgICB9XG4gICAgICBpZiAodmFsW3RoaXMuX2VuZEtleV0pIHtcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0RW5kRGF0ZSh2YWxbdGhpcy5fZW5kS2V5XSlcbiAgICAgIH1cbiAgICAgIHRoaXMucGlja2VyLmNhbGN1bGF0ZUNob3NlbkxhYmVsKCk7XG4gICAgICBpZiAodGhpcy5waWNrZXIuY2hvc2VuTGFiZWwpIHtcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMucGlja2VyLmNob3NlbkxhYmVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpY2tlci5jbGVhcigpO1xuICAgIH1cbiAgfVxuICAgIC8qKlxuICAgICAqIFNldCBwb3NpdGlvbiBvZiB0aGUgY2FsZW5kYXJcbiAgICAgKi9cbiAgICBzZXRQb3NpdGlvbigpIHtcbiAgICAgIGxldCBzdHlsZTtcbiAgICAgIGxldCBjb250YWluZXJUb3A7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBpY2tlci5waWNrZXJDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKHRoaXMuZHJvcHMgJiYgdGhpcy5kcm9wcyA9PSAndXAnKSB7XG4gICAgICAgIGNvbnRhaW5lclRvcCA9IChlbGVtZW50Lm9mZnNldFRvcCAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lclRvcCA9ICdhdXRvJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wZW5zID09ICdsZWZ0Jykge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxuICAgICAgICAgICAgbGVmdDogKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCArIGVsZW1lbnQuY2xpZW50V2lkdGgpICsgJ3B4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcGVucyA9PSAnY2VudGVyJykge1xuICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgdG9wOiBjb250YWluZXJUb3AsXG4gICAgICAgICAgICBsZWZ0OiAoZWxlbWVudC5vZmZzZXRMZWZ0ICArICBlbGVtZW50LmNsaWVudFdpZHRoIC8gMlxuICAgICAgICAgICAgICAgICAgICAtIGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcbiAgICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxuICAgICAgICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0ICArICdweCcsXG4gICAgICAgICAgICByaWdodDogJ2F1dG8nXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ3RvcCcsIHN0eWxlLnRvcCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lciwgJ2xlZnQnLCBzdHlsZS5sZWZ0KTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY29udGFpbmVyLCAncmlnaHQnLCBzdHlsZS5yaWdodCk7XG4gICAgICB9XG5cbiAgfVxuICAvKipcbiAgICogRm9yIGNsaWNrIG91dHNpZGUgb2YgdGhlIGNhbGVuZGFyJ3MgY29udGFpbmVyXG4gICAqIEBwYXJhbSBldmVudCBldmVudCBvYmplY3RcbiAgICogQHBhcmFtIHRhcmdldEVsZW1lbnQgdGFyZ2V0IGVsZW1lbnQgb2JqZWN0XG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50JywgJyRldmVudC50YXJnZXQnXSlcbiAgb3V0c2lkZUNsaWNrKGV2ZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmd4LWRhdGVyYW5nZXBpY2tlci1hY3Rpb24nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcbiAgICAgIGlmICghY2xpY2tlZEluc2lkZSkge1xuICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgfVxufVxuIl19