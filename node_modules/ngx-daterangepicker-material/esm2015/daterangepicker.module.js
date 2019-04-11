/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaterangepickerComponent } from './daterangepicker.component';
import { DaterangepickerDirective } from './daterangepicker.directive';
import { LOCALE_CONFIG } from './daterangepicker.config';
import { LocaleService } from './locale.service';
export class NgxDaterangepickerMd {
    constructor() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: NgxDaterangepickerMd,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    }
}
NgxDaterangepickerMd.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                providers: [],
                exports: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                entryComponents: [
                    DaterangepickerComponent
                ]
            },] }
];
/** @nocollapse */
NgxDaterangepickerMd.ctorParameters = () => [];
function NgxDaterangepickerMd_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxDaterangepickerMd.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxDaterangepickerMd.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQXFCakQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQjtLQUNDOzs7OztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBdUIsRUFBRTtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7Z0JBQzNDLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFDO2FBQzFFO1NBQ0YsQ0FBQztLQUNIOzs7WUE5QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLHdCQUF3QjtpQkFDekI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2NhbGVDb25maWcsIExPQ0FMRV9DT05GSUcgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEYXRlcmFuZ2VwaWNrZXJNZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogTG9jYWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neERhdGVyYW5nZXBpY2tlck1kLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTE9DQUxFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30sXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYWxlU2VydmljZSwgdXNlQ2xhc3M6IExvY2FsZVNlcnZpY2UsIGRlcHM6IFtMT0NBTEVfQ09ORklHXX1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=