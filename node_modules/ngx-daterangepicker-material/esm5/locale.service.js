/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
var LocaleService = /** @class */ (function () {
    function LocaleService(_config) {
        this._config = _config;
    }
    Object.defineProperty(LocaleService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._config) {
                return DefaultLocaleConfig;
            }
            return tslib_1.__assign({}, DefaultLocaleConfig, this._config);
        },
        enumerable: true,
        configurable: true
    });
    LocaleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LOCALE_CONFIG,] },] },
    ]; };
    return LocaleService;
}());
export { LocaleService };
function LocaleService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LocaleService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LocaleService.ctorParameters;
    /** @type {?} */
    LocaleService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLyIsInNvdXJjZXMiOlsibG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFnQixNQUFNLDBCQUEwQixDQUFDOztJQUkxRix1QkFBMkM7UUFBQSxZQUFPLEdBQVAsT0FBTztLQUFrQjtJQUVwRSxzQkFBSSxpQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sbUJBQW1CLENBQUM7YUFDNUI7WUFFRCw0QkFBWSxtQkFBbUIsRUFBSyxJQUFJLENBQUMsT0FBTyxFQUFDO1NBQ2xEOzs7T0FBQTs7Z0JBVkYsVUFBVTs7OztnREFFSSxNQUFNLFNBQUMsYUFBYTs7d0JBTG5DOztTQUlhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExPQ0FMRV9DT05GSUcsIERlZmF1bHRMb2NhbGVDb25maWcsIExvY2FsZUNvbmZpZyB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfQ09ORklHKSBwcml2YXRlIF9jb25maWc6IExvY2FsZUNvbmZpZykge31cblxuICBnZXQgY29uZmlnKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdExvY2FsZUNvbmZpZztcbiAgICB9XG5cbiAgICByZXR1cm4gey4uLiBEZWZhdWx0TG9jYWxlQ29uZmlnLCAuLi50aGlzLl9jb25maWd9XG4gIH1cbn0iXX0=