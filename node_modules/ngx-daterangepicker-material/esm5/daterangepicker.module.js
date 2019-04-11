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
var NgxDaterangepickerMd = /** @class */ (function () {
    function NgxDaterangepickerMd() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgxDaterangepickerMd.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxDaterangepickerMd,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    };
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
    NgxDaterangepickerMd.ctorParameters = function () { return []; };
    return NgxDaterangepickerMd;
}());
export { NgxDaterangepickerMd };
function NgxDaterangepickerMd_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgxDaterangepickerMd.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgxDaterangepickerMd.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF3QixRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFzQi9DO0tBQ0M7Ozs7O0lBQ00sNEJBQU87Ozs7SUFBZCxVQUFlLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsV0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDO2dCQUMzQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQzthQUMxRTtTQUNGLENBQUM7S0FDSDs7Z0JBOUJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELGVBQWUsRUFBRTt3QkFDZix3QkFBd0I7cUJBQ3pCO2lCQUNGOzs7OytCQTNCRDs7U0E0QmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7ICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2FsZUNvbmZpZywgTE9DQUxFX0NPTkZJRyB9IGZyb20gJy4vZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERhdGVyYW5nZXBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQsXG4gICAgRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIERhdGVyYW5nZXBpY2tlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERhdGVyYW5nZXBpY2tlck1kIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBMb2NhbGVDb25maWcgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4RGF0ZXJhbmdlcGlja2VyTWQsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBMT0NBTEVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgeyBwcm92aWRlOiBMb2NhbGVTZXJ2aWNlLCB1c2VDbGFzczogTG9jYWxlU2VydmljZSwgZGVwczogW0xPQ0FMRV9DT05GSUddfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==