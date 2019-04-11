/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import * as _moment from 'moment';
const /** @type {?} */ moment = _moment;
export const /** @type {?} */ LOCALE_CONFIG = new InjectionToken('daterangepicker.config');
/**
 *  LocaleConfig Interface
 * @record
 */
export function LocaleConfig() { }
function LocaleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    LocaleConfig.prototype.direction;
    /** @type {?|undefined} */
    LocaleConfig.prototype.separator;
    /** @type {?|undefined} */
    LocaleConfig.prototype.weekLabel;
    /** @type {?|undefined} */
    LocaleConfig.prototype.applyLabel;
    /** @type {?|undefined} */
    LocaleConfig.prototype.cancelLabel;
    /** @type {?|undefined} */
    LocaleConfig.prototype.customRangeLabel;
    /** @type {?|undefined} */
    LocaleConfig.prototype.daysOfWeek;
    /** @type {?|undefined} */
    LocaleConfig.prototype.monthNames;
    /** @type {?|undefined} */
    LocaleConfig.prototype.firstDay;
    /** @type {?|undefined} */
    LocaleConfig.prototype.format;
}
/**
 *  DefaultLocaleConfig
 */
export const /** @type {?} */ DefaultLocaleConfig = {
    direction: 'ltr',
    separator: ' - ',
    weekLabel: 'W',
    applyLabel: 'Apply',
    cancelLabel: 'Cancel',
    customRangeLabel: 'Custom range',
    daysOfWeek: moment.weekdaysMin(),
    monthNames: moment.monthsShort(),
    firstDay: moment.localeData().firstDayOfWeek()
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLHVCQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFFdkIsTUFBTSxDQUFDLHVCQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RixNQUFNLENBQUMsdUJBQU0sbUJBQW1CLEdBQWlCO0lBQzdDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFNBQVMsRUFBRSxHQUFHO0lBQ2QsVUFBVSxFQUFFLE9BQU87SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUNoQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUNoQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLGNBQWMsRUFBRTtDQUNqRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfbW9tZW50IGZyb20gJ21vbWVudCc7XG5jb25zdCBtb21lbnQgPSBfbW9tZW50O1xuXG5leHBvcnQgY29uc3QgTE9DQUxFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMb2NhbGVDb25maWc+KCdkYXRlcmFuZ2VwaWNrZXIuY29uZmlnJyk7XG4vKipcbiAqICBMb2NhbGVDb25maWcgSW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlQ29uZmlnIHtcbiAgICBkaXJlY3Rpb24/OiBzdHJpbmc7XG4gICAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAgIHdlZWtMYWJlbD86IHN0cmluZztcbiAgICBhcHBseUxhYmVsPzogc3RyaW5nO1xuICAgIGNhbmNlbExhYmVsPzogc3RyaW5nO1xuICAgIGN1c3RvbVJhbmdlTGFiZWw/OiBzdHJpbmc7XG4gICAgZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuICAgIG1vbnRoTmFtZXM/OiAgc3RyaW5nW107XG4gICAgZmlyc3REYXk/OiBudW1iZXI7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xufVxuLyoqXG4gKiAgRGVmYXVsdExvY2FsZUNvbmZpZ1xuICovXG5leHBvcnQgY29uc3QgRGVmYXVsdExvY2FsZUNvbmZpZzogTG9jYWxlQ29uZmlnID0ge1xuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgc2VwYXJhdG9yOiAnIC0gJyxcbiAgICB3ZWVrTGFiZWw6ICdXJyxcbiAgICBhcHBseUxhYmVsOiAnQXBwbHknLFxuICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgICBjdXN0b21SYW5nZUxhYmVsOiAnQ3VzdG9tIHJhbmdlJyxcbiAgICBkYXlzT2ZXZWVrOiBtb21lbnQud2Vla2RheXNNaW4oKSxcbiAgICBtb250aE5hbWVzOiBtb21lbnQubW9udGhzU2hvcnQoKSxcbiAgICBmaXJzdERheTogbW9tZW50LmxvY2FsZURhdGEoKS5maXJzdERheU9mV2VlaygpXG59O1xuIl19