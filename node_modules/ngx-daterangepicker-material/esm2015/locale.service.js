/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
export class LocaleService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
    }
    /**
     * @return {?}
     */
    get config() {
        if (!this._config) {
            return DefaultLocaleConfig;
        }
        return Object.assign({}, DefaultLocaleConfig, this._config);
    }
}
LocaleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocaleService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LOCALE_CONFIG,] },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLyIsInNvdXJjZXMiOlsibG9jYWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFHNUYsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBMkM7UUFBQSxZQUFPLEdBQVAsT0FBTztLQUFrQjs7OztJQUVwRSxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLG1CQUFtQixDQUFDO1NBQzVCO1FBRUQseUJBQVksbUJBQW1CLEVBQUssSUFBSSxDQUFDLE9BQU8sRUFBQztLQUNsRDs7O1lBVkYsVUFBVTs7Ozs0Q0FFSSxNQUFNLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTE9DQUxFX0NPTkZJRywgRGVmYXVsdExvY2FsZUNvbmZpZywgTG9jYWxlQ29uZmlnIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogTG9jYWxlQ29uZmlnKSB7fVxuXG4gIGdldCBjb25maWcoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0TG9jYWxlQ29uZmlnO1xuICAgIH1cblxuICAgIHJldHVybiB7Li4uIERlZmF1bHRMb2NhbGVDb25maWcsIC4uLnRoaXMuX2NvbmZpZ31cbiAgfVxufSJdfQ==