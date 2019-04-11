(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.ngautocomplete = {}),global.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This class should not be used directly by an application developer. Instead, use
     * {\@link Location}.
     *
     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
     * agnostic.
     * This means that we can have different implementation of `PlatformLocation` for the different
     * platforms that angular supports. For example, `\@angular/platform-browser` provides an
     * implementation specific to the browser environment, while `\@angular/platform-webworker` provides
     * one suitable for use with web workers.
     *
     * The `PlatformLocation` class is used directly by all implementations of {\@link LocationStrategy}
     * when they need to interact with the DOM apis like pushState, popState, etc...
     *
     * {\@link LocationStrategy} in turn is used by the {\@link Location} service which is used directly
     * by the {\@link Router} in order to navigate between routes. Since all interactions between {\@link
     * Router} /
     * {\@link Location} / {\@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
     * class they are all platform independent.
     *
     * \@stable
     * @abstract
     */
    var PlatformLocation = (function () {
        function PlatformLocation() {
        }
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.getBaseHrefFromDOM = function () { };
        /**
         * @abstract
         * @param {?} fn
         * @return {?}
         */
        PlatformLocation.prototype.onPopState = function (fn) { };
        /**
         * @abstract
         * @param {?} fn
         * @return {?}
         */
        PlatformLocation.prototype.onHashChange = function (fn) { };
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.pathname = function () { };
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.search = function () { };
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.hash = function () { };
        /**
         * @abstract
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @return {?}
         */
        PlatformLocation.prototype.replaceState = function (state, title, url) { };
        /**
         * @abstract
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @return {?}
         */
        PlatformLocation.prototype.pushState = function (state, title, url) { };
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.forward = function () { };
        /**
         * @abstract
         * @return {?}
         */
        PlatformLocation.prototype.back = function () { };
        return PlatformLocation;
    }());
    /**
     * \@whatItDoes indicates when a location is initialized
     * \@experimental
     */
    var LOCATION_INITIALIZED = new core.InjectionToken('Location Initialized');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `LocationStrategy` is responsible for representing and reading route state
     * from the browser's URL. Angular provides two strategies:
     * {\@link HashLocationStrategy} and {\@link PathLocationStrategy}.
     *
     * This is used under the hood of the {\@link Location} service.
     *
     * Applications should use the {\@link Router} or {\@link Location} services to
     * interact with application route state.
     *
     * For instance, {\@link HashLocationStrategy} produces URLs like
     * `http://example.com#/foo`, and {\@link PathLocationStrategy} produces
     * `http://example.com/foo` as an equivalent URL.
     *
     * See these two classes for more.
     *
     * \@stable
     * @abstract
     */
    var LocationStrategy = (function () {
        function LocationStrategy() {
        }
        /**
         * @abstract
         * @param {?=} includeHash
         * @return {?}
         */
        LocationStrategy.prototype.path = function (includeHash) { };
        /**
         * @abstract
         * @param {?} internal
         * @return {?}
         */
        LocationStrategy.prototype.prepareExternalUrl = function (internal) { };
        /**
         * @abstract
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */
        LocationStrategy.prototype.pushState = function (state, title, url, queryParams) { };
        /**
         * @abstract
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */
        LocationStrategy.prototype.replaceState = function (state, title, url, queryParams) { };
        /**
         * @abstract
         * @return {?}
         */
        LocationStrategy.prototype.forward = function () { };
        /**
         * @abstract
         * @return {?}
         */
        LocationStrategy.prototype.back = function () { };
        /**
         * @abstract
         * @param {?} fn
         * @return {?}
         */
        LocationStrategy.prototype.onPopState = function (fn) { };
        /**
         * @abstract
         * @return {?}
         */
        LocationStrategy.prototype.getBaseHref = function () { };
        return LocationStrategy;
    }());
    /**
     * The `APP_BASE_HREF` token represents the base href to be used with the
     * {\@link PathLocationStrategy}.
     *
     * If you're using {\@link PathLocationStrategy}, you must provide a provider to a string
     * representing the URL prefix that should be preserved when generating and recognizing
     * URLs.
     *
     * ### Example
     *
     * ```typescript
     * import {Component, NgModule} from '\@angular/core';
     * import {APP_BASE_HREF} from '\@angular/common';
     *
     * \@NgModule({
     *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
     * })
     * class AppModule {}
     * ```
     *
     * \@stable
     */
    var APP_BASE_HREF = new core.InjectionToken('appBaseHref');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes `Location` is a service that applications can use to interact with a browser's URL.
     * \@description
     * Depending on which {\@link LocationStrategy} is used, `Location` will either persist
     * to the URL's path or the URL's hash segment.
     *
     * Note: it's better to use {\@link Router#navigate} service to trigger route changes. Use
     * `Location` only if you need to interact with or create normalized URLs outside of
     * routing.
     *
     * `Location` is responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     *
     * ### Example
     * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
     * \@stable
     */
    var Location = (function () {
        /**
         * @param {?} platformStrategy
         */
        function Location(platformStrategy) {
            var _this = this;
            /**
             * \@internal
             */
            this._subject = new core.EventEmitter();
            this._platformStrategy = platformStrategy;
            var browserBaseHref = this._platformStrategy.getBaseHref();
            this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
            this._platformStrategy.onPopState(function (ev) {
                _this._subject.emit({
                    'url': _this.path(true),
                    'pop': true,
                    'type': ev.type,
                });
            });
        }
        /**
         * @param {?=} includeHash
         * @return {?}
         */
        Location.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            return this.normalize(this._platformStrategy.path(includeHash));
        };
        /**
         * Normalizes the given path and compares to the current normalized path.
         * @param {?} path
         * @param {?=} query
         * @return {?}
         */
        Location.prototype.isCurrentPathEqualTo = function (path, query) {
            if (query === void 0) { query = ''; }
            return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
        };
        /**
         * Given a string representing a URL, returns the normalized URL path without leading or
         * trailing slashes.
         * @param {?} url
         * @return {?}
         */
        Location.prototype.normalize = function (url) {
            return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
        };
        /**
         * Given a string representing a URL, returns the platform-specific external URL path.
         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
         * before normalizing. This method will also add a hash if `HashLocationStrategy` is
         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
         * @param {?} url
         * @return {?}
         */
        Location.prototype.prepareExternalUrl = function (url) {
            if (url && url[0] !== '/') {
                url = '/' + url;
            }
            return this._platformStrategy.prepareExternalUrl(url);
        };
        /**
         * Changes the browsers URL to the normalized version of the given URL, and pushes a
         * new item onto the platform's history.
         * @param {?} path
         * @param {?=} query
         * @return {?}
         */
        Location.prototype.go = function (path, query) {
            if (query === void 0) { query = ''; }
            this._platformStrategy.pushState(null, '', path, query);
        };
        /**
         * Changes the browsers URL to the normalized version of the given URL, and replaces
         * the top item on the platform's history stack.
         * @param {?} path
         * @param {?=} query
         * @return {?}
         */
        Location.prototype.replaceState = function (path, query) {
            if (query === void 0) { query = ''; }
            this._platformStrategy.replaceState(null, '', path, query);
        };
        /**
         * Navigates forward in the platform's history.
         * @return {?}
         */
        Location.prototype.forward = function () { this._platformStrategy.forward(); };
        /**
         * Navigates back in the platform's history.
         * @return {?}
         */
        Location.prototype.back = function () { this._platformStrategy.back(); };
        /**
         * Subscribe to the platform's `popState` events.
         * @param {?} onNext
         * @param {?=} onThrow
         * @param {?=} onReturn
         * @return {?}
         */
        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
        };
        /**
         * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
         * is.
         * @param {?} params
         * @return {?}
         */
        Location.normalizeQueryParams = function (params) {
            return params && params[0] !== '?' ? '?' + params : params;
        };
        /**
         * Given 2 parts of a url, join them with a slash if needed.
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        Location.joinWithSlash = function (start, end) {
            if (start.length == 0) {
                return end;
            }
            if (end.length == 0) {
                return start;
            }
            var /** @type {?} */ slashes = 0;
            if (start.endsWith('/')) {
                slashes++;
            }
            if (end.startsWith('/')) {
                slashes++;
            }
            if (slashes == 2) {
                return start + end.substring(1);
            }
            if (slashes == 1) {
                return start + end;
            }
            return start + '/' + end;
        };
        /**
         * If url has a trailing slash, remove it, otherwise return url as is. This
         * method looks for the first occurence of either #, ?, or the end of the
         * line as `/` characters after any of these should not be replaced.
         * @param {?} url
         * @return {?}
         */
        Location.stripTrailingSlash = function (url) {
            var /** @type {?} */ match = url.match(/#|\?|$/);
            var /** @type {?} */ pathEndIdx = match && match.index || url.length;
            var /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
            return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
        };
        return Location;
    }());
    Location.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    Location.ctorParameters = function () { return [
        { type: LocationStrategy, },
    ]; };
    /**
     * @param {?} baseHref
     * @param {?} url
     * @return {?}
     */
    function _stripBaseHref(baseHref, url) {
        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    function _stripIndexHtml(url) {
        return url.replace(/\/index.html$/, '');
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes Use URL hash for storing application location data.
     * \@description
     * `HashLocationStrategy` is a {\@link LocationStrategy} used to configure the
     * {\@link Location} service to represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * ### Example
     *
     * {\@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * \@stable
     */
    var HashLocationStrategy = (function (_super) {
        __extends(HashLocationStrategy, _super);
        /**
         * @param {?} _platformLocation
         * @param {?=} _baseHref
         */
        function HashLocationStrategy(_platformLocation, _baseHref) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            _this._baseHref = '';
            if (_baseHref != null) {
                _this._baseHref = _baseHref;
            }
            return _this;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        HashLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        /**
         * @return {?}
         */
        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        /**
         * @param {?=} includeHash
         * @return {?}
         */
        HashLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            // the hash value is always prefixed with a `#`
            // and if it is empty then it will stay empty
            var /** @type {?} */ path = this._platformLocation.hash;
            if (path == null)
                path = '#';
            return path.length > 0 ? path.substring(1) : path;
        };
        /**
         * @param {?} internal
         * @return {?}
         */
        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            var /** @type {?} */ url = Location.joinWithSlash(this._baseHref, internal);
            return url.length > 0 ? ('#' + url) : url;
        };
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} path
         * @param {?} queryParams
         * @return {?}
         */
        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
            var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.pushState(state, title, url);
        };
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} path
         * @param {?} queryParams
         * @return {?}
         */
        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
            var /** @type {?} */ url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.replaceState(state, title, url);
        };
        /**
         * @return {?}
         */
        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        /**
         * @return {?}
         */
        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        return HashLocationStrategy;
    }(LocationStrategy));
    HashLocationStrategy.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    HashLocationStrategy.ctorParameters = function () { return [
        { type: PlatformLocation, },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [APP_BASE_HREF,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes Use URL for storing application location data.
     * \@description
     * `PathLocationStrategy` is a {\@link LocationStrategy} used to configure the
     * {\@link Location} service to represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {\@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * ### Example
     *
     * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * \@stable
     */
    var PathLocationStrategy = (function (_super) {
        __extends(PathLocationStrategy, _super);
        /**
         * @param {?} _platformLocation
         * @param {?=} href
         */
        function PathLocationStrategy(_platformLocation, href) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            if (href == null) {
                href = _this._platformLocation.getBaseHrefFromDOM();
            }
            if (href == null) {
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            }
            _this._baseHref = href;
            return _this;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        PathLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        /**
         * @return {?}
         */
        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        /**
         * @param {?} internal
         * @return {?}
         */
        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            return Location.joinWithSlash(this._baseHref, internal);
        };
        /**
         * @param {?=} includeHash
         * @return {?}
         */
        PathLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            var /** @type {?} */ pathname = this._platformLocation.pathname +
                Location.normalizeQueryParams(this._platformLocation.search);
            var /** @type {?} */ hash = this._platformLocation.hash;
            return hash && includeHash ? "" + pathname + hash : pathname;
        };
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */
        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
            var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.pushState(state, title, externalUrl);
        };
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @param {?} queryParams
         * @return {?}
         */
        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
            var /** @type {?} */ externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.replaceState(state, title, externalUrl);
        };
        /**
         * @return {?}
         */
        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        /**
         * @return {?}
         */
        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        return PathLocationStrategy;
    }(LocationStrategy));
    PathLocationStrategy.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    PathLocationStrategy.ctorParameters = function () { return [
        { type: PlatformLocation, },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [APP_BASE_HREF,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@experimental
     * @abstract
     */
    var NgLocalization = (function () {
        function NgLocalization() {
        }
        /**
         * @abstract
         * @param {?} value
         * @return {?}
         */
        NgLocalization.prototype.getPluralCategory = function (value) { };
        return NgLocalization;
    }());
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     *
     * \@internal
     * @param {?} value
     * @param {?} cases
     * @param {?} ngLocalization
     * @return {?}
     */
    function getPluralCategory(value, cases, ngLocalization) {
        var /** @type {?} */ key = "=" + value;
        if (cases.indexOf(key) > -1) {
            return key;
        }
        key = ngLocalization.getPluralCategory(value);
        if (cases.indexOf(key) > -1) {
            return key;
        }
        if (cases.indexOf('other') > -1) {
            return 'other';
        }
        throw new Error("No plural message found for value \"" + value + "\"");
    }
    /**
     * Returns the plural case based on the locale
     *
     * \@experimental
     */
    var NgLocaleLocalization = (function (_super) {
        __extends(NgLocaleLocalization, _super);
        /**
         * @param {?} locale
         */
        function NgLocaleLocalization(locale) {
            var _this = _super.call(this) || this;
            _this.locale = locale;
            return _this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NgLocaleLocalization.prototype.getPluralCategory = function (value) {
            var /** @type {?} */ plural = getPluralCase(this.locale, value);
            switch (plural) {
                case Plural.Zero:
                    return 'zero';
                case Plural.One:
                    return 'one';
                case Plural.Two:
                    return 'two';
                case Plural.Few:
                    return 'few';
                case Plural.Many:
                    return 'many';
                default:
                    return 'other';
            }
        };
        return NgLocaleLocalization;
    }(NgLocalization));
    NgLocaleLocalization.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    NgLocaleLocalization.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
    ]; };
    var Plural = {};
    Plural.Zero = 0;
    Plural.One = 1;
    Plural.Two = 2;
    Plural.Few = 3;
    Plural.Many = 4;
    Plural.Other = 5;
    Plural[Plural.Zero] = "Zero";
    Plural[Plural.One] = "One";
    Plural[Plural.Two] = "Two";
    Plural[Plural.Few] = "Few";
    Plural[Plural.Many] = "Many";
    Plural[Plural.Other] = "Other";
    /**
     * Returns the plural case based on the locale
     *
     * \@experimental
     * @param {?} locale
     * @param {?} nLike
     * @return {?}
     */
    function getPluralCase(locale, nLike) {
        // TODO(vicb): lazy compute
        if (typeof nLike === 'string') {
            nLike = parseInt(/** @type {?} */ (nLike), 10);
        }
        var /** @type {?} */ n = (nLike);
        var /** @type {?} */ nDecimal = n.toString().replace(/^[^.]*\.?/, '');
        var /** @type {?} */ i = Math.floor(Math.abs(n));
        var /** @type {?} */ v = nDecimal.length;
        var /** @type {?} */ f = parseInt(nDecimal, 10);
        var /** @type {?} */ t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        var /** @type {?} */ lang = locale.split('-')[0].toLowerCase();
        switch (lang) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
                if (n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
                if (n === Math.floor(n) && n >= 0 && n <= 1)
                    return Plural.One;
                return Plural.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
                if (i === 0 || n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'ar':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                    return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                    return Plural.Many;
                return Plural.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
                if (i === 1 && v === 0)
                    return Plural.One;
                return Plural.Other;
            case 'be':
                if (n % 10 === 1 && !(n % 100 === 11))
                    return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                    !(n % 100 >= 12 && n % 100 <= 14))
                    return Plural.Few;
                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'br':
                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                    return Plural.One;
                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                    return Plural.Two;
                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                        n % 100 >= 90 && n % 100 <= 99))
                    return Plural.Few;
                if (!(n === 0) && n % 1e6 === 0)
                    return Plural.Many;
                return Plural.Other;
            case 'bs':
            case 'hr':
            case 'sr':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14) ||
                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                        !(f % 100 >= 12 && f % 100 <= 14))
                    return Plural.Few;
                return Plural.Other;
            case 'cs':
            case 'sk':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                    return Plural.Few;
                if (!(v === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'cy':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n === 3)
                    return Plural.Few;
                if (n === 6)
                    return Plural.Many;
                return Plural.Other;
            case 'da':
                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                    return Plural.One;
                return Plural.Other;
            case 'dsb':
            case 'hsb':
                if (v === 0 && i % 100 === 1 || f % 100 === 1)
                    return Plural.One;
                if (v === 0 && i % 100 === 2 || f % 100 === 2)
                    return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                    return Plural.Few;
                return Plural.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
                if (i === 0 || i === 1)
                    return Plural.One;
                return Plural.Other;
            case 'fil':
                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                    return Plural.One;
                return Plural.Other;
            case 'ga':
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                if (n === Math.floor(n) && n >= 3 && n <= 6)
                    return Plural.Few;
                if (n === Math.floor(n) && n >= 7 && n <= 10)
                    return Plural.Many;
                return Plural.Other;
            case 'gd':
                if (n === 1 || n === 11)
                    return Plural.One;
                if (n === 2 || n === 12)
                    return Plural.Two;
                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                    return Plural.Few;
                return Plural.Other;
            case 'gv':
                if (v === 0 && i % 10 === 1)
                    return Plural.One;
                if (v === 0 && i % 10 === 2)
                    return Plural.Two;
                if (v === 0 &&
                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                    return Plural.Few;
                if (!(v === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'he':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (i === 2 && v === 0)
                    return Plural.Two;
                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                    return Plural.Many;
                return Plural.Other;
            case 'is':
                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                    return Plural.One;
                return Plural.Other;
            case 'ksh':
                if (n === 0)
                    return Plural.Zero;
                if (n === 1)
                    return Plural.One;
                return Plural.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
                if (n === 1)
                    return Plural.One;
                if (n === 2)
                    return Plural.Two;
                return Plural.Other;
            case 'lag':
                if (n === 0)
                    return Plural.Zero;
                if ((i === 0 || i === 1) && !(n === 0))
                    return Plural.One;
                return Plural.Other;
            case 'lt':
                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                    !(n % 100 >= 11 && n % 100 <= 19))
                    return Plural.Few;
                if (!(f === 0))
                    return Plural.Many;
                return Plural.Other;
            case 'lv':
            case 'prg':
                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                    return Plural.Zero;
                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                    !(v === 2) && f % 10 === 1)
                    return Plural.One;
                return Plural.Other;
            case 'mk':
                if (v === 0 && i % 10 === 1 || f % 10 === 1)
                    return Plural.One;
                return Plural.Other;
            case 'mt':
                if (n === 1)
                    return Plural.One;
                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                    return Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                    return Plural.Many;
                return Plural.Other;
            case 'pl':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural.Few;
                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'pt':
                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                    return Plural.One;
                return Plural.Other;
            case 'ro':
                if (i === 1 && v === 0)
                    return Plural.One;
                if (!(v === 0) || n === 0 ||
                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                    return Plural.Few;
                return Plural.Other;
            case 'ru':
            case 'uk':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                    return Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return Plural.Few;
                if (v === 0 && i % 10 === 0 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                    return Plural.Many;
                return Plural.Other;
            case 'shi':
                if (i === 0 || n === 1)
                    return Plural.One;
                if (n === Math.floor(n) && n >= 2 && n <= 10)
                    return Plural.Few;
                return Plural.Other;
            case 'si':
                if (n === 0 || n === 1 || i === 0 && f === 1)
                    return Plural.One;
                return Plural.Other;
            case 'sl':
                if (v === 0 && i % 100 === 1)
                    return Plural.One;
                if (v === 0 && i % 100 === 2)
                    return Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                    return Plural.Few;
                return Plural.Other;
            case 'tzm':
                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                    return Plural.One;
                return Plural.Other;
            // When there is no specification, the default is always "other"
            // Spec: http://cldr.unicode.org/index/cldr-spec/plural-rules
            // > other (required—general plural form — also used if the language only has a single form)
            default:
                return Plural.Other;
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @param {?} cookieStr
     * @param {?} name
     * @return {?}
     */
    function parseCookieValue(cookieStr, name) {
        name = encodeURIComponent(name);
        for (var _i = 0, _a = cookieStr.split(';'); _i < _a.length; _i++) {
            var cookie = _a[_i];
            var /** @type {?} */ eqIndex = cookie.indexOf('=');
            var _b = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], cookieName = _b[0], cookieValue = _b[1];
            if (cookieName.trim() === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Adds and removes CSS classes on an HTML element.
     *
     * \@howToUse
     * ```
     *     <some-element [ngClass]="'first second'">...</some-element>
     *
     *     <some-element [ngClass]="['first', 'second']">...</some-element>
     *
     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
     *
     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
     *
     *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
     * ```
     *
     * \@description
     *
     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
     * - `string` - the CSS classes listed in the string (space delimited) are added,
     * - `Array` - the CSS classes declared as Array elements are added,
     * - `Object` - keys are CSS classes that get added when the expression given in the value
     *              evaluates to a truthy value, otherwise they are removed.
     *
     * \@stable
     */
    var NgClass = (function () {
        /**
         * @param {?} _iterableDiffers
         * @param {?} _keyValueDiffers
         * @param {?} _ngEl
         * @param {?} _renderer
         */
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        Object.defineProperty(NgClass.prototype, "klass", {
            /**
             * @param {?} v
             * @return {?}
             */
            set: function (v) {
                this._applyInitialClasses(true);
                this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
                this._applyInitialClasses(false);
                this._applyClasses(this._rawClass, false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgClass.prototype, "ngClass", {
            /**
             * @param {?} v
             * @return {?}
             */
            set: function (v) {
                this._cleanupClasses(this._rawClass);
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
                if (this._rawClass) {
                    if (core.ɵisListLikeIterable(this._rawClass)) {
                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    }
                    else {
                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgClass.prototype.ngDoCheck = function () {
            if (this._iterableDiffer) {
                var /** @type {?} */ iterableChanges = this._iterableDiffer.diff(/** @type {?} */ (this._rawClass));
                if (iterableChanges) {
                    this._applyIterableChanges(iterableChanges);
                }
            }
            else if (this._keyValueDiffer) {
                var /** @type {?} */ keyValueChanges = this._keyValueDiffer.diff(/** @type {?} */ (this._rawClass));
                if (keyValueChanges) {
                    this._applyKeyValueChanges(keyValueChanges);
                }
            }
        };
        /**
         * @param {?} rawClassVal
         * @return {?}
         */
        NgClass.prototype._cleanupClasses = function (rawClassVal) {
            this._applyClasses(rawClassVal, true);
            this._applyInitialClasses(false);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgClass.prototype._applyKeyValueChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) {
                if (record.previousValue) {
                    _this._toggleClass(record.key, false);
                }
            });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgClass.prototype._applyIterableChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) {
                if (typeof record.item === 'string') {
                    _this._toggleClass(record.item, true);
                }
                else {
                    throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + core.ɵstringify(record.item));
                }
            });
            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
        };
        /**
         * @param {?} isCleanup
         * @return {?}
         */
        NgClass.prototype._applyInitialClasses = function (isCleanup) {
            var _this = this;
            this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
        };
        /**
         * @param {?} rawClassVal
         * @param {?} isCleanup
         * @return {?}
         */
        NgClass.prototype._applyClasses = function (rawClassVal, isCleanup) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    ((rawClassVal)).forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) {
                        if (rawClassVal[klass] != null)
                            _this._toggleClass(klass, !isCleanup);
                    });
                }
            }
        };
        /**
         * @param {?} klass
         * @param {?} enabled
         * @return {?}
         */
        NgClass.prototype._toggleClass = function (klass, enabled) {
            var _this = this;
            klass = klass.trim();
            if (klass) {
                klass.split(/\s+/g).forEach(function (klass) { _this._renderer.setElementClass(_this._ngEl.nativeElement, klass, !!enabled); });
            }
        };
        return NgClass;
    }());
    NgClass.decorators = [
        { type: core.Directive, args: [{ selector: '[ngClass]' },] },
    ];
    /**
     * @nocollapse
     */
    NgClass.ctorParameters = function () { return [
        { type: core.IterableDiffers, },
        { type: core.KeyValueDiffers, },
        { type: core.ElementRef, },
        { type: core.Renderer, },
    ]; };
    NgClass.propDecorators = {
        'klass': [{ type: core.Input, args: ['class',] },],
        'ngClass': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Instantiates a single {\@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     * ## Example
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
     * A more complete example with ngModuleFactory:
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
     *
     * \@experimental
     */
    var NgComponentOutlet = (function () {
        /**
         * @param {?} _viewContainerRef
         */
        function NgComponentOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgComponentOutlet.prototype.ngOnChanges = function (changes) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            if (this.ngComponentOutlet) {
                var /** @type {?} */ elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (changes['ngComponentOutletNgModuleFactory']) {
                    if (this._moduleRef)
                        this._moduleRef.destroy();
                    if (this.ngComponentOutletNgModuleFactory) {
                        var /** @type {?} */ parentModule = elInjector.get(core.NgModuleRef);
                        this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                    }
                    else {
                        this._moduleRef = null;
                    }
                }
                var /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                    elInjector.get(core.ComponentFactoryResolver);
                var /** @type {?} */ componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
            }
        };
        /**
         * @return {?}
         */
        NgComponentOutlet.prototype.ngOnDestroy = function () {
            if (this._moduleRef)
                this._moduleRef.destroy();
        };
        return NgComponentOutlet;
    }());
    NgComponentOutlet.decorators = [
        { type: core.Directive, args: [{ selector: '[ngComponentOutlet]' },] },
    ];
    /**
     * @nocollapse
     */
    NgComponentOutlet.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
    ]; };
    NgComponentOutlet.propDecorators = {
        'ngComponentOutlet': [{ type: core.Input },],
        'ngComponentOutletInjector': [{ type: core.Input },],
        'ngComponentOutletContent': [{ type: core.Input },],
        'ngComponentOutletNgModuleFactory': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@stable
     */
    var NgForOfContext = (function () {
        /**
         * @param {?} $implicit
         * @param {?} ngForOf
         * @param {?} index
         * @param {?} count
         */
        function NgForOfContext($implicit, ngForOf, index, count) {
            this.$implicit = $implicit;
            this.ngForOf = ngForOf;
            this.index = index;
            this.count = count;
        }
        Object.defineProperty(NgForOfContext.prototype, "first", {
            /**
             * @return {?}
             */
            get: function () { return this.index === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "last", {
            /**
             * @return {?}
             */
            get: function () { return this.index === this.count - 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "even", {
            /**
             * @return {?}
             */
            get: function () { return this.index % 2 === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "odd", {
            /**
             * @return {?}
             */
            get: function () { return !this.even; },
            enumerable: true,
            configurable: true
        });
        return NgForOfContext;
    }());
    /**
     * The `NgForOf` directive instantiates a template once per item from an iterable. The context
     * for each instantiated template inherits from the outer context with the given loop variable
     * set to the current item from the iterable.
     *
     * ### Local Variables
     *
     * `NgForOf` provides several exported values that can be aliased to local variables:
     *
     * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
     * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
     * more complex then a property access, for example when using the async pipe (`userStreams |
     * async`).
     * - `index: number`: The index of the current item in the iterable.
     * - `first: boolean`: True when the item is the first item in the iterable.
     * - `last: boolean`: True when the item is the last item in the iterable.
     * - `even: boolean`: True when the item has an even index in the iterable.
     * - `odd: boolean`: True when the item has an odd index in the iterable.
     *
     * ```
     * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
     *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
     * </li>
     * ```
     *
     * ### Change Propagation
     *
     * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
     *
     * * When an item is added, a new instance of the template is added to the DOM.
     * * When an item is removed, its template instance is removed from the DOM.
     * * When items are reordered, their respective templates are reordered in the DOM.
     * * Otherwise, the DOM element for that item will remain the same.
     *
     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
     * those changes in the DOM. This has important implications for animations and any stateful
     * controls (such as `<input>` elements which accept user input) that are present. Inserted rows can
     * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
     * such as user input.
     *
     * It is possible for the identities of elements in the iterator to change while the data does not.
     * This can happen, for example, if the iterator produced from an RPC to the server, and that
     * RPC is re-run. Even if the data hasn't changed, the second response will produce objects with
     * different identities, and Angular will tear down the entire DOM and rebuild it (as if all old
     * elements were deleted and all new elements inserted). This is an expensive operation and should
     * be avoided if possible.
     *
     * To customize the default tracking algorithm, `NgForOf` supports `trackBy` option.
     * `trackBy` takes a function which has two arguments: `index` and `item`.
     * If `trackBy` is given, Angular tracks changes by the return value of the function.
     *
     * ### Syntax
     *
     * - `<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>`
     * - `<li template="ngFor let item of items; index as i; trackBy: trackByFn">...</li>`
     *
     * With `<ng-template>` element:
     *
     * ```
     * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
     *   <li>...</li>
     * </ng-template>
     * ```
     *
     * ### Example
     *
     * See a [live demo](http://plnkr.co/edit/KVuXxDp0qinGDyo307QW?p=preview) for a more detailed
     * example.
     *
     * \@stable
     */
    var NgForOf = (function () {
        /**
         * @param {?} _viewContainer
         * @param {?} _template
         * @param {?} _differs
         */
        function NgForOf(_viewContainer, _template, _differs) {
            this._viewContainer = _viewContainer;
            this._template = _template;
            this._differs = _differs;
            this._differ = null;
        }
        Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
            /**
             * @return {?}
             */
            get: function () { return this._trackByFn; },
            /**
             * @param {?} fn
             * @return {?}
             */
            set: function (fn) {
                if (core.isDevMode() && fn != null && typeof fn !== 'function') {
                    // TODO(vicb): use a log service once there is a public one available
                    if ((console) && (console.warn)) {
                        console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                            "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                    }
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
                // The current type is too restrictive; a template that just uses index, for example,
                // should be acceptable.
                if (value) {
                    this._template = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgForOf.prototype.ngOnChanges = function (changes) {
            if ('ngForOf' in changes) {
                // React on ngForOf changes only once all inputs have been initialized
                var /** @type {?} */ value = changes['ngForOf'].currentValue;
                if (!this._differ && value) {
                    try {
                        this._differ = this._differs.find(value).create(this.ngForTrackBy);
                    }
                    catch (e) {
                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeNameForDebugging(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        NgForOf.prototype.ngDoCheck = function () {
            if (this._differ) {
                var /** @type {?} */ changes = this._differ.diff(this.ngForOf);
                if (changes)
                    this._applyChanges(changes);
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgForOf.prototype._applyChanges = function (changes) {
            var _this = this;
            var /** @type {?} */ insertTuples = [];
            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                if (item.previousIndex == null) {
                    var /** @type {?} */ view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext(/** @type {?} */ ((null)), _this.ngForOf, -1, -1), currentIndex);
                    var /** @type {?} */ tuple = new RecordViewTuple(item, view);
                    insertTuples.push(tuple);
                }
                else if (currentIndex == null) {
                    _this._viewContainer.remove(adjustedPreviousIndex);
                }
                else {
                    var /** @type {?} */ view = ((_this._viewContainer.get(adjustedPreviousIndex)));
                    _this._viewContainer.move(view, currentIndex);
                    var /** @type {?} */ tuple = new RecordViewTuple(item, /** @type {?} */ (view));
                    insertTuples.push(tuple);
                }
            });
            for (var /** @type {?} */ i = 0; i < insertTuples.length; i++) {
                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
            for (var /** @type {?} */ i = 0, /** @type {?} */ ilen = this._viewContainer.length; i < ilen; i++) {
                var /** @type {?} */ viewRef = (this._viewContainer.get(i));
                viewRef.context.index = i;
                viewRef.context.count = ilen;
            }
            changes.forEachIdentityChange(function (record) {
                var /** @type {?} */ viewRef = (_this._viewContainer.get(record.currentIndex));
                viewRef.context.$implicit = record.item;
            });
        };
        /**
         * @param {?} view
         * @param {?} record
         * @return {?}
         */
        NgForOf.prototype._perViewChange = function (view, record) {
            view.context.$implicit = record.item;
        };
        return NgForOf;
    }());
    NgForOf.decorators = [
        { type: core.Directive, args: [{ selector: '[ngFor][ngForOf]' },] },
    ];
    /**
     * @nocollapse
     */
    NgForOf.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: core.TemplateRef, },
        { type: core.IterableDiffers, },
    ]; };
    NgForOf.propDecorators = {
        'ngForOf': [{ type: core.Input },],
        'ngForTrackBy': [{ type: core.Input },],
        'ngForTemplate': [{ type: core.Input },],
    };
    var RecordViewTuple = (function () {
        /**
         * @param {?} record
         * @param {?} view
         */
        function RecordViewTuple(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordViewTuple;
    }());
    /**
     * @param {?} type
     * @return {?}
     */
    function getTypeNameForDebugging(type) {
        return type['name'] || typeof type;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Conditionally includes a template based on the value of an `expression`.
     *
     * `ngIf` evaluates the `expression` and then renders the `then` or `else` template in its place
     * when expression is truthy or falsy respectively. Typically the:
     *  - `then` template is the inline template of `ngIf` unless bound to a different value.
     *  - `else` template is blank unless it is bound.
     *
     * ## Most common usage
     *
     * The most common usage of the `ngIf` directive is to conditionally show the inline template as
     * seen in this example:
     * {\@example common/ngIf/ts/module.ts region='NgIfSimple'}
     *
     * ## Showing an alternative template using `else`
     *
     * If it is necessary to display a template when the `expression` is falsy use the `else` template
     * binding as shown. Note that the `else` binding points to a `<ng-template>` labeled `#elseBlock`.
     * The template can be defined anywhere in the component view but is typically placed right after
     * `ngIf` for readability.
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfElse'}
     *
     * ## Using non-inlined `then` template
     *
     * Usually the `then` template is the inlined template of the `ngIf`, but it can be changed using
     * a binding (just like `else`). Because `then` and `else` are bindings, the template references can
     * change at runtime as shown in this example.
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfThenElse'}
     *
     * ## Storing conditional result in a variable
     *
     * A common pattern is that we need to show a set of properties from the same object. If the
     * object is undefined, then we have to use the safe-traversal-operator `?.` to guard against
     * dereferencing a `null` value. This is especially the case when waiting on async data such as
     * when using the `async` pipe as shown in following example:
     *
     * ```
     * Hello {{ (userStream|async)?.last }}, {{ (userStream|async)?.first }}!
     * ```
     *
     * There are several inefficiencies in the above example:
     *  - We create multiple subscriptions on `userStream`. One for each `async` pipe, or two in the
     *    example above.
     *  - We cannot display an alternative screen while waiting for the data to arrive asynchronously.
     *  - We have to use the safe-traversal-operator `?.` to access properties, which is cumbersome.
     *  - We have to place the `async` pipe in parenthesis.
     *
     * A better way to do this is to use `ngIf` and store the result of the condition in a local
     * variable as shown in the the example below:
     *
     * {\@example common/ngIf/ts/module.ts region='NgIfAs'}
     *
     * Notice that:
     *  - We use only one `async` pipe and hence only one subscription gets created.
     *  - `ngIf` stores the result of the `userStream|async` in the local variable `user`.
     *  - The local `user` can then be bound repeatedly in a more efficient way.
     *  - No need to use the safe-traversal-operator `?.` to access properties as `ngIf` will only
     *    display the data if `userStream` returns a value.
     *  - We can display an alternative template while waiting for the data.
     *
     * ### Syntax
     *
     * Simple form:
     * - `<div *ngIf="condition">...</div>`
     * - `<div template="ngIf condition">...</div>`
     * - `<ng-template [ngIf]="condition"><div>...</div></ng-template>`
     *
     * Form with an else block:
     * ```
     * <div *ngIf="condition; else elseBlock">...</div>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * Form with a `then` and `else` block:
     * ```
     * <div *ngIf="condition; then thenBlock else elseBlock"></div>
     * <ng-template #thenBlock>...</ng-template>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * Form with storing the value locally:
     * ```
     * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
     * <ng-template #elseBlock>...</ng-template>
     * ```
     *
     * \@stable
     */
    var NgIf = (function () {
        /**
         * @param {?} _viewContainer
         * @param {?} templateRef
         */
        function NgIf(_viewContainer, templateRef) {
            this._viewContainer = _viewContainer;
            this._context = new NgIfContext();
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this._thenTemplateRef = templateRef;
        }
        Object.defineProperty(NgIf.prototype, "ngIf", {
            /**
             * @param {?} condition
             * @return {?}
             */
            set: function (condition) {
                this._context.$implicit = this._context.ngIf = condition;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfThen", {
            /**
             * @param {?} templateRef
             * @return {?}
             */
            set: function (templateRef) {
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfElse", {
            /**
             * @param {?} templateRef
             * @return {?}
             */
            set: function (templateRef) {
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgIf.prototype._updateView = function () {
            if (this._context.$implicit) {
                if (!this._thenViewRef) {
                    this._viewContainer.clear();
                    this._elseViewRef = null;
                    if (this._thenTemplateRef) {
                        this._thenViewRef =
                            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                    }
                }
            }
            else {
                if (!this._elseViewRef) {
                    this._viewContainer.clear();
                    this._thenViewRef = null;
                    if (this._elseTemplateRef) {
                        this._elseViewRef =
                            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                    }
                }
            }
        };
        return NgIf;
    }());
    NgIf.decorators = [
        { type: core.Directive, args: [{ selector: '[ngIf]' },] },
    ];
    /**
     * @nocollapse
     */
    NgIf.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: core.TemplateRef, },
    ]; };
    NgIf.propDecorators = {
        'ngIf': [{ type: core.Input },],
        'ngIfThen': [{ type: core.Input },],
        'ngIfElse': [{ type: core.Input },],
    };
    /**
     * \@stable
     */
    var NgIfContext = (function () {
        function NgIfContext() {
            this.$implicit = null;
            this.ngIf = null;
        }
        return NgIfContext;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SwitchView = (function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _templateRef
         */
        function SwitchView(_viewContainerRef, _templateRef) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._created = false;
        }
        /**
         * @return {?}
         */
        SwitchView.prototype.create = function () {
            this._created = true;
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        };
        /**
         * @return {?}
         */
        SwitchView.prototype.destroy = function () {
            this._created = false;
            this._viewContainerRef.clear();
        };
        /**
         * @param {?} created
         * @return {?}
         */
        SwitchView.prototype.enforceState = function (created) {
            if (created && !this._created) {
                this.create();
            }
            else if (!created && this._created) {
                this.destroy();
            }
        };
        return SwitchView;
    }());
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Adds / removes DOM sub-trees when the nest match expressions matches the switch
     *             expression.
     *
     * \@howToUse
     * ```
     *     <container-element [ngSwitch]="switch_expression">
     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *       <ng-container *ngSwitchCase="match_expression_3">
     *         <!-- use a ng-container to group multiple root nodes -->
     *         <inner-element></inner-element>
     *         <inner-other-element></inner-other-element>
     *       </ng-container>
     *       <some-element *ngSwitchDefault>...</some-element>
     *     </container-element>
     * ```
     * \@description
     *
     * `NgSwitch` stamps out nested views when their match expression value matches the value of the
     * switch expression.
     *
     * In other words:
     * - you define a container element (where you place the directive with a switch expression on the
     * `[ngSwitch]="..."` attribute)
     * - you define inner views inside the `NgSwitch` and place a `*ngSwitchCase` attribute on the view
     * root elements.
     *
     * Elements within `NgSwitch` but outside of a `NgSwitchCase` or `NgSwitchDefault` directives will
     * be preserved at the location.
     *
     * The `ngSwitchCase` directive informs the parent `NgSwitch` of which view to display when the
     * expression is evaluated.
     * When no matching expression is found on a `ngSwitchCase` view, the `ngSwitchDefault` view is
     * stamped out.
     *
     * \@stable
     */
    var NgSwitch = (function () {
        function NgSwitch() {
            this._defaultUsed = false;
            this._caseCount = 0;
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
            /**
             * @param {?} newValue
             * @return {?}
             */
            set: function (newValue) {
                this._ngSwitch = newValue;
                if (this._caseCount === 0) {
                    this._updateDefaultCases(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @return {?}
         */
        NgSwitch.prototype._addCase = function () { return this._caseCount++; };
        /**
         * \@internal
         * @param {?} view
         * @return {?}
         */
        NgSwitch.prototype._addDefault = function (view) {
            if (!this._defaultViews) {
                this._defaultViews = [];
            }
            this._defaultViews.push(view);
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        NgSwitch.prototype._matchCase = function (value) {
            var /** @type {?} */ matched = value == this._ngSwitch;
            this._lastCasesMatched = this._lastCasesMatched || matched;
            this._lastCaseCheckIndex++;
            if (this._lastCaseCheckIndex === this._caseCount) {
                this._updateDefaultCases(!this._lastCasesMatched);
                this._lastCaseCheckIndex = 0;
                this._lastCasesMatched = false;
            }
            return matched;
        };
        /**
         * @param {?} useDefault
         * @return {?}
         */
        NgSwitch.prototype._updateDefaultCases = function (useDefault) {
            if (this._defaultViews && useDefault !== this._defaultUsed) {
                this._defaultUsed = useDefault;
                for (var /** @type {?} */ i = 0; i < this._defaultViews.length; i++) {
                    var /** @type {?} */ defaultView = this._defaultViews[i];
                    defaultView.enforceState(useDefault);
                }
            }
        };
        return NgSwitch;
    }());
    NgSwitch.decorators = [
        { type: core.Directive, args: [{ selector: '[ngSwitch]' },] },
    ];
    /**
     * @nocollapse
     */
    NgSwitch.ctorParameters = function () { return []; };
    NgSwitch.propDecorators = {
        'ngSwitch': [{ type: core.Input },],
    };
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgSwitch} when the
     *             given expression evaluate to respectively the same/different value as the switch
     *             expression.
     *
     * \@howToUse
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     * </container-element>
     * ```
     * \@description
     *
     * Insert the sub-tree when the expression evaluates to the same value as the enclosing switch
     * expression.
     *
     * If multiple match expressions match the switch expression value, all of them are displayed.
     *
     * See {\@link NgSwitch} for more details and example.
     *
     * \@stable
     */
    var NgSwitchCase = (function () {
        /**
         * @param {?} viewContainer
         * @param {?} templateRef
         * @param {?} ngSwitch
         */
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            this.ngSwitch = ngSwitch;
            ngSwitch._addCase();
            this._view = new SwitchView(viewContainer, templateRef);
        }
        /**
         * @return {?}
         */
        NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
        return NgSwitchCase;
    }());
    NgSwitchCase.decorators = [
        { type: core.Directive, args: [{ selector: '[ngSwitchCase]' },] },
    ];
    /**
     * @nocollapse
     */
    NgSwitchCase.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: core.TemplateRef, },
        { type: NgSwitch, decorators: [{ type: core.Host },] },
    ]; };
    NgSwitchCase.propDecorators = {
        'ngSwitchCase': [{ type: core.Input },],
    };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Creates a view that is added to the parent {\@link NgSwitch} when no case expressions
     * match the
     *             switch expression.
     *
     * \@howToUse
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   <some-other-element *ngSwitchDefault>...</some-other-element>
     * </container-element>
     * ```
     *
     * \@description
     *
     * Insert the sub-tree when no case expressions evaluate to the same value as the enclosing switch
     * expression.
     *
     * See {\@link NgSwitch} for more details and example.
     *
     * \@stable
     */
    var NgSwitchDefault = (function () {
        /**
         * @param {?} viewContainer
         * @param {?} templateRef
         * @param {?} ngSwitch
         */
        function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
            ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
        }
        return NgSwitchDefault;
    }());
    NgSwitchDefault.decorators = [
        { type: core.Directive, args: [{ selector: '[ngSwitchDefault]' },] },
    ];
    /**
     * @nocollapse
     */
    NgSwitchDefault.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
        { type: core.TemplateRef, },
        { type: NgSwitch, decorators: [{ type: core.Host },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
     *
     * \@howToUse
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
     *   <ng-template ngPluralCase="=1">there is one</ng-template>
     *   <ng-template ngPluralCase="few">there are a few</ng-template>
     * </some-element>
     * ```
     *
     * \@description
     *
     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
     * that match the switch expression's pluralization category.
     *
     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
     * expression:
     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
     *   matches the switch expression exactly,
     * - otherwise, the view will be treated as a "category match", and will only display if exact
     *   value matches aren't found and the value maps to its category for the defined locale.
     *
     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
     *
     * \@experimental
     */
    var NgPlural = (function () {
        /**
         * @param {?} _localization
         */
        function NgPlural(_localization) {
            this._localization = _localization;
            this._caseViews = {};
        }
        Object.defineProperty(NgPlural.prototype, "ngPlural", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._switchValue = value;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @param {?} switchView
         * @return {?}
         */
        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
        /**
         * @return {?}
         */
        NgPlural.prototype._updateView = function () {
            this._clearViews();
            var /** @type {?} */ cases = Object.keys(this._caseViews);
            var /** @type {?} */ key = getPluralCategory(this._switchValue, cases, this._localization);
            this._activateView(this._caseViews[key]);
        };
        /**
         * @return {?}
         */
        NgPlural.prototype._clearViews = function () {
            if (this._activeView)
                this._activeView.destroy();
        };
        /**
         * @param {?} view
         * @return {?}
         */
        NgPlural.prototype._activateView = function (view) {
            if (view) {
                this._activeView = view;
                this._activeView.create();
            }
        };
        return NgPlural;
    }());
    NgPlural.decorators = [
        { type: core.Directive, args: [{ selector: '[ngPlural]' },] },
    ];
    /**
     * @nocollapse
     */
    NgPlural.ctorParameters = function () { return [
        { type: NgLocalization, },
    ]; };
    NgPlural.propDecorators = {
        'ngPlural': [{ type: core.Input },],
    };
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Creates a view that will be added/removed from the parent {\@link NgPlural} when the
     *             given expression matches the plural expression according to CLDR rules.
     *
     * \@howToUse
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">...</ng-template>
     *   <ng-template ngPluralCase="other">...</ng-template>
     * </some-element>
     * ```
     *
     * See {\@link NgPlural} for more details and example.
     *
     * \@experimental
     */
    var NgPluralCase = (function () {
        /**
         * @param {?} value
         * @param {?} template
         * @param {?} viewContainer
         * @param {?} ngPlural
         */
        function NgPluralCase(value, template, viewContainer, ngPlural) {
            this.value = value;
            var isANumber = !isNaN(Number(value));
            ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
        }
        return NgPluralCase;
    }());
    NgPluralCase.decorators = [
        { type: core.Directive, args: [{ selector: '[ngPluralCase]' },] },
    ];
    /**
     * @nocollapse
     */
    NgPluralCase.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Attribute, args: ['ngPluralCase',] },] },
        { type: core.TemplateRef, },
        { type: core.ViewContainerRef, },
        { type: NgPlural, decorators: [{ type: core.Host },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Update an HTML element styles.
     *
     * \@howToUse
     * ```
     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
     *
     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
     *
     * <some-element [ngStyle]="objExp">...</some-element>
     * ```
     *
     * \@description
     *
     * The styles are updated according to the value of the expression evaluation:
     * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
     * - values are the values assigned to those properties (expressed in the given unit).
     *
     * \@stable
     */
    var NgStyle = (function () {
        /**
         * @param {?} _differs
         * @param {?} _ngEl
         * @param {?} _renderer
         */
        function NgStyle(_differs, _ngEl, _renderer) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        Object.defineProperty(NgStyle.prototype, "ngStyle", {
            /**
             * @param {?} v
             * @return {?}
             */
            set: function (v) {
                this._ngStyle = v;
                if (!this._differ && v) {
                    this._differ = this._differs.find(v).create();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgStyle.prototype.ngDoCheck = function () {
            if (this._differ) {
                var /** @type {?} */ changes = this._differ.diff(this._ngStyle);
                if (changes) {
                    this._applyChanges(changes);
                }
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgStyle.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        };
        /**
         * @param {?} nameAndUnit
         * @param {?} value
         * @return {?}
         */
        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
            var _a = nameAndUnit.split('.'), name = _a[0], unit = _a[1];
            value = value != null && unit ? "" + value + unit : value;
            this._renderer.setElementStyle(this._ngEl.nativeElement, name, /** @type {?} */ (value));
        };
        return NgStyle;
    }());
    NgStyle.decorators = [
        { type: core.Directive, args: [{ selector: '[ngStyle]' },] },
    ];
    /**
     * @nocollapse
     */
    NgStyle.ctorParameters = function () { return [
        { type: core.KeyValueDiffers, },
        { type: core.ElementRef, },
        { type: core.Renderer, },
    ]; };
    NgStyle.propDecorators = {
        'ngStyle': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     *
     * \@whatItDoes Inserts an embedded view from a prepared `TemplateRef`
     *
     * \@howToUse
     * ```
     * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
     * ```
     *
     * \@description
     *
     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
     * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
     * by the local template `let` declarations.
     *
     * Note: using the key `$implicit` in the context object will set it's value as default.
     *
     * ## Example
     *
     * {\@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
     *
     * \@experimental
     */
    var NgTemplateOutlet = (function () {
        /**
         * @param {?} _viewContainerRef
         */
        function NgTemplateOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        Object.defineProperty(NgTemplateOutlet.prototype, "ngOutletContext", {
            /**
             * @deprecated v4.0.0 - Renamed to ngTemplateOutletContext.
             * @param {?} context
             * @return {?}
             */
            set: function (context) { this.ngTemplateOutletContext = context; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
            if (this._viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
            }
            if (this.ngTemplateOutlet) {
                this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
            }
        };
        return NgTemplateOutlet;
    }());
    NgTemplateOutlet.decorators = [
        { type: core.Directive, args: [{ selector: '[ngTemplateOutlet]' },] },
    ];
    /**
     * @nocollapse
     */
    NgTemplateOutlet.ctorParameters = function () { return [
        { type: core.ViewContainerRef, },
    ]; };
    NgTemplateOutlet.propDecorators = {
        'ngTemplateOutletContext': [{ type: core.Input },],
        'ngTemplateOutlet': [{ type: core.Input },],
        'ngOutletContext': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular directives that are likely to be used in each and every Angular
     * application.
     */
    var COMMON_DIRECTIVES = [
        NgClass,
        NgComponentOutlet,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        NgStyle,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgPlural,
        NgPluralCase,
    ];
    /**
     * A collection of deprecated directives that are no longer part of the core module.
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} type
     * @param {?} value
     * @return {?}
     */
    function invalidPipeArgumentError(type, value) {
        return Error("InvalidPipeArgument: '" + value + "' for pipe '" + core.ɵstringify(type) + "'");
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ObservableStrategy = (function () {
        function ObservableStrategy() {
        }
        /**
         * @param {?} async
         * @param {?} updateLatestValue
         * @return {?}
         */
        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
        };
        /**
         * @param {?} subscription
         * @return {?}
         */
        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
        /**
         * @param {?} subscription
         * @return {?}
         */
        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
        return ObservableStrategy;
    }());
    var PromiseStrategy = (function () {
        function PromiseStrategy() {
        }
        /**
         * @param {?} async
         * @param {?} updateLatestValue
         * @return {?}
         */
        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) { throw e; });
        };
        /**
         * @param {?} subscription
         * @return {?}
         */
        PromiseStrategy.prototype.dispose = function (subscription) { };
        /**
         * @param {?} subscription
         * @return {?}
         */
        PromiseStrategy.prototype.onDestroy = function (subscription) { };
        return PromiseStrategy;
    }());
    var _promiseStrategy = new PromiseStrategy();
    var _observableStrategy = new ObservableStrategy();
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Unwraps a value from an asynchronous primitive.
     * \@howToUse `observable_or_promise_expression | async`
     * \@description
     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
     * potential memory leaks.
     *
     *
     * ## Examples
     *
     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
     * promise.
     *
     * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
     *
     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
     * to the view. The Observable continuously updates the view with the current time.
     *
     * {\@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
     *
     * \@stable
     */
    var AsyncPipe = (function () {
        /**
         * @param {?} _ref
         */
        function AsyncPipe(_ref) {
            this._ref = _ref;
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
            this._strategy = ((null));
        }
        /**
         * @return {?}
         */
        AsyncPipe.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._dispose();
            }
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        AsyncPipe.prototype.transform = function (obj) {
            if (!this._obj) {
                if (obj) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(/** @type {?} */ (obj));
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            }
            this._latestReturnedValue = this._latestValue;
            return core.WrappedValue.wrap(this._latestValue);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        AsyncPipe.prototype._subscribe = function (obj) {
            var _this = this;
            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        AsyncPipe.prototype._selectStrategy = function (obj) {
            if (core.ɵisPromise(obj)) {
                return _promiseStrategy;
            }
            if (core.ɵisObservable(obj)) {
                return _observableStrategy;
            }
            throw invalidPipeArgumentError(AsyncPipe, obj);
        };
        /**
         * @return {?}
         */
        AsyncPipe.prototype._dispose = function () {
            this._strategy.dispose(/** @type {?} */ ((this._subscription)));
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        };
        /**
         * @param {?} async
         * @param {?} value
         * @return {?}
         */
        AsyncPipe.prototype._updateLatestValue = function (async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        };
        return AsyncPipe;
    }());
    AsyncPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'async', pure: false },] },
    ];
    /**
     * @nocollapse
     */
    AsyncPipe.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Transforms text to lowercase.
     *
     * {\@example  common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe' }
     *
     * \@stable
     */
    var LowerCasePipe = (function () {
        function LowerCasePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        LowerCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(LowerCasePipe, value);
            }
            return value.toLowerCase();
        };
        return LowerCasePipe;
    }());
    LowerCasePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'lowercase' },] },
    ];
    /**
     * @nocollapse
     */
    LowerCasePipe.ctorParameters = function () { return []; };
    /**
     * Helper method to transform a single word to titlecase.
     *
     * \@stable
     * @param {?} word
     * @return {?}
     */
    function titleCaseWord(word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    /**
     * Transforms text to titlecase.
     *
     * \@stable
     */
    var TitleCasePipe = (function () {
        function TitleCasePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TitleCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(TitleCasePipe, value);
            }
            return value.split(/\b/g).map(function (word) { return titleCaseWord(word); }).join('');
        };
        return TitleCasePipe;
    }());
    TitleCasePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'titlecase' },] },
    ];
    /**
     * @nocollapse
     */
    TitleCasePipe.ctorParameters = function () { return []; };
    /**
     * Transforms text to uppercase.
     *
     * \@stable
     */
    var UpperCasePipe = (function () {
        function UpperCasePipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        UpperCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(UpperCasePipe, value);
            }
            return value.toUpperCase();
        };
        return UpperCasePipe;
    }());
    UpperCasePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'uppercase' },] },
    ];
    /**
     * @nocollapse
     */
    UpperCasePipe.ctorParameters = function () { return []; };
    var NumberFormatStyle = {};
    NumberFormatStyle.Decimal = 0;
    NumberFormatStyle.Percent = 1;
    NumberFormatStyle.Currency = 2;
    NumberFormatStyle[NumberFormatStyle.Decimal] = "Decimal";
    NumberFormatStyle[NumberFormatStyle.Percent] = "Percent";
    NumberFormatStyle[NumberFormatStyle.Currency] = "Currency";
    var NumberFormatter = (function () {
        function NumberFormatter() {
        }
        /**
         * @param {?} num
         * @param {?} locale
         * @param {?} style
         * @param {?=} opts
         * @return {?}
         */
        NumberFormatter.format = function (num, locale, style, opts) {
            if (opts === void 0) { opts = {}; }
            var minimumIntegerDigits = opts.minimumIntegerDigits, minimumFractionDigits = opts.minimumFractionDigits, maximumFractionDigits = opts.maximumFractionDigits, currency = opts.currency, _a = opts.currencyAsSymbol, currencyAsSymbol = _a === void 0 ? false : _a;
            var /** @type {?} */ options = {
                minimumIntegerDigits: minimumIntegerDigits,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits,
                style: NumberFormatStyle[style].toLowerCase()
            };
            if (style == NumberFormatStyle.Currency) {
                options.currency = typeof currency == 'string' ? currency : undefined;
                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
            }
            return new Intl.NumberFormat(locale, options).format(num);
        };
        return NumberFormatter;
    }());
    var DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
    var PATTERN_ALIASES = {
        // Keys are quoted so they do not get renamed during closure compilation.
        'yMMMdjms': datePartGetterFactory(combine([
            digitCondition('year', 1),
            nameCondition('month', 3),
            digitCondition('day', 1),
            digitCondition('hour', 1),
            digitCondition('minute', 1),
            digitCondition('second', 1),
        ])),
        'yMdjm': datePartGetterFactory(combine([
            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
            digitCondition('hour', 1), digitCondition('minute', 1)
        ])),
        'yMMMMEEEEd': datePartGetterFactory(combine([
            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
            digitCondition('day', 1)
        ])),
        'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
        'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
        'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
        'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
        'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
    };
    var DATE_FORMATS = {
        // Keys are quoted so they do not get renamed.
        'yyyy': datePartGetterFactory(digitCondition('year', 4)),
        'yy': datePartGetterFactory(digitCondition('year', 2)),
        'y': datePartGetterFactory(digitCondition('year', 1)),
        'MMMM': datePartGetterFactory(nameCondition('month', 4)),
        'MMM': datePartGetterFactory(nameCondition('month', 3)),
        'MM': datePartGetterFactory(digitCondition('month', 2)),
        'M': datePartGetterFactory(digitCondition('month', 1)),
        'LLLL': datePartGetterFactory(nameCondition('month', 4)),
        'L': datePartGetterFactory(nameCondition('month', 1)),
        'dd': datePartGetterFactory(digitCondition('day', 2)),
        'd': datePartGetterFactory(digitCondition('day', 1)),
        'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
        'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
        'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
        'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'jj': datePartGetterFactory(digitCondition('hour', 2)),
        'j': datePartGetterFactory(digitCondition('hour', 1)),
        'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
        'm': datePartGetterFactory(digitCondition('minute', 1)),
        'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
        's': datePartGetterFactory(digitCondition('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        'sss': datePartGetterFactory(digitCondition('second', 3)),
        'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
        'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
        'EE': datePartGetterFactory(nameCondition('weekday', 2)),
        'E': datePartGetterFactory(nameCondition('weekday', 1)),
        'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'Z': timeZoneGetter('short'),
        'z': timeZoneGetter('long'),
        'ww': datePartGetterFactory({}),
        // first Thursday of the year. not support ?
        'w': datePartGetterFactory({}),
        // of the year not support ?
        'G': datePartGetterFactory(nameCondition('era', 1)),
        'GG': datePartGetterFactory(nameCondition('era', 2)),
        'GGG': datePartGetterFactory(nameCondition('era', 3)),
        'GGGG': datePartGetterFactory(nameCondition('era', 4))
    };
    /**
     * @param {?} inner
     * @return {?}
     */
    function digitModifier(inner) {
        return function (date, locale) {
            var /** @type {?} */ result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    /**
     * @param {?} inner
     * @return {?}
     */
    function hourClockExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[1]; };
    }
    /**
     * @param {?} inner
     * @return {?}
     */
    function hourExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[0]; };
    }
    /**
     * @param {?} date
     * @param {?} locale
     * @param {?} options
     * @return {?}
     */
    function intlDateFormat(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
    }
    /**
     * @param {?} timezone
     * @return {?}
     */
    function timeZoneGetter(timezone) {
        // To workaround `Intl` API restriction for single timezone let format with 24 hours
        var /** @type {?} */ options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
        return function (date, locale) {
            var /** @type {?} */ result = intlDateFormat(date, locale, options);
            // Then extract first 3 letters that related to hours
            return result ? result.substring(3) : '';
        };
    }
    /**
     * @param {?} options
     * @param {?} value
     * @return {?}
     */
    function hour12Modify(options, value) {
        options.hour12 = value;
        return options;
    }
    /**
     * @param {?} prop
     * @param {?} len
     * @return {?}
     */
    function digitCondition(prop, len) {
        var /** @type {?} */ result = {};
        result[prop] = len === 2 ? '2-digit' : 'numeric';
        return result;
    }
    /**
     * @param {?} prop
     * @param {?} len
     * @return {?}
     */
    function nameCondition(prop, len) {
        var /** @type {?} */ result = {};
        if (len < 4) {
            result[prop] = len > 1 ? 'short' : 'narrow';
        }
        else {
            result[prop] = 'long';
        }
        return result;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    function combine(options) {
        return options.reduce(function (merged, opt) { return (Object.assign({}, merged, opt)); }, {});
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    function datePartGetterFactory(ret) {
        return function (date, locale) { return intlDateFormat(date, locale, ret); };
    }
    var DATE_FORMATTER_CACHE = new Map();
    /**
     * @param {?} format
     * @param {?} date
     * @param {?} locale
     * @return {?}
     */
    function dateFormatter(format, date, locale) {
        var /** @type {?} */ fn = PATTERN_ALIASES[format];
        if (fn)
            return fn(date, locale);
        var /** @type {?} */ cacheKey = format;
        var /** @type {?} */ parts = DATE_FORMATTER_CACHE.get(cacheKey);
        if (!parts) {
            parts = [];
            var /** @type {?} */ match = void 0;
            DATE_FORMATS_SPLIT.exec(format);
            var /** @type {?} */ _format = format;
            while (_format) {
                match = DATE_FORMATS_SPLIT.exec(_format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    _format = ((parts.pop()));
                }
                else {
                    parts.push(_format);
                    _format = null;
                }
            }
            DATE_FORMATTER_CACHE.set(cacheKey, parts);
        }
        return parts.reduce(function (text, part) {
            var /** @type {?} */ fn = DATE_FORMATS[part];
            return text + (fn ? fn(date, locale) : partToTime(part));
        }, '');
    }
    /**
     * @param {?} part
     * @return {?}
     */
    function partToTime(part) {
        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }
    var DateFormatter = (function () {
        function DateFormatter() {
        }
        /**
         * @param {?} date
         * @param {?} locale
         * @param {?} pattern
         * @return {?}
         */
        DateFormatter.format = function (date, locale, pattern) {
            return dateFormatter(pattern, date, locale);
        };
        return DateFormatter;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    /**
     * @param {?} pipe
     * @param {?} locale
     * @param {?} value
     * @param {?} style
     * @param {?=} digits
     * @param {?=} currency
     * @param {?=} currencyAsSymbol
     * @return {?}
     */
    function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
        if (currency === void 0) { currency = null; }
        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
        if (value == null)
            return null;
        // Convert strings to numbers
        value = typeof value === 'string' && isNumeric(value) ? +value : value;
        if (typeof value !== 'number') {
            throw invalidPipeArgumentError(pipe, value);
        }
        var /** @type {?} */ minInt = undefined;
        var /** @type {?} */ minFraction = undefined;
        var /** @type {?} */ maxFraction = undefined;
        if (style !== NumberFormatStyle.Currency) {
            // rely on Intl default for currency
            minInt = 1;
            minFraction = 0;
            maxFraction = 3;
        }
        if (digits) {
            var /** @type {?} */ parts = digits.match(_NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(digits + " is not a valid digit info for number pipes");
            }
            if (parts[1] != null) {
                minInt = parseIntAutoRadix(parts[1]);
            }
            if (parts[3] != null) {
                minFraction = parseIntAutoRadix(parts[3]);
            }
            if (parts[5] != null) {
                maxFraction = parseIntAutoRadix(parts[5]);
            }
        }
        return NumberFormatter.format(/** @type {?} */ (value), locale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol,
        });
    }
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number according to locale rules.
     * \@howToUse `number_expression | number[:digitInfo]`
     *
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the active locale.
     *
     * where `expression` is a number:
     *  - `digitInfo` is a `string` which has a following format: <br>
     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
     *
     * For more information on the acceptable range for each of these numbers and other
     * details see your native internationalization library.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='NumberPipe'}
     *
     * \@stable
     */
    var DecimalPipe = (function () {
        /**
         * @param {?} _locale
         */
        function DecimalPipe(_locale) {
            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} digits
         * @return {?}
         */
        DecimalPipe.prototype.transform = function (value, digits) {
            return formatNumber(DecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
        };
        return DecimalPipe;
    }());
    DecimalPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'number' },] },
    ];
    /**
     * @nocollapse
     */
    DecimalPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
    ]; };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number as a percentage according to locale rules.
     * \@howToUse `number_expression | percent[:digitInfo]`
     *
     * \@description
     *
     * Formats a number as percentage.
     *
     * - `digitInfo` See {\@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='PercentPipe'}
     *
     * \@stable
     */
    var PercentPipe = (function () {
        /**
         * @param {?} _locale
         */
        function PercentPipe(_locale) {
            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} digits
         * @return {?}
         */
        PercentPipe.prototype.transform = function (value, digits) {
            return formatNumber(PercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
        };
        return PercentPipe;
    }());
    PercentPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'percent' },] },
    ];
    /**
     * @nocollapse
     */
    PercentPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
    ]; };
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a number as currency using locale rules.
     * \@howToUse `number_expression | currency[:currencyCode[:symbolDisplay[:digitInfo]]]`
     * \@description
     *
     * Use `currency` to format a number as currency.
     *
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
     *   - `true`: use symbol (e.g. `$`).
     *   - `false`(default): use code (e.g. `USD`).
     * - `digitInfo` See {\@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * ### Example
     *
     * {\@example common/pipes/ts/number_pipe.ts region='CurrencyPipe'}
     *
     * \@stable
     */
    var CurrencyPipe = (function () {
        /**
         * @param {?} _locale
         */
        function CurrencyPipe(_locale) {
            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} currencyCode
         * @param {?=} symbolDisplay
         * @param {?=} digits
         * @return {?}
         */
        CurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
            if (currencyCode === void 0) { currencyCode = 'USD'; }
            if (symbolDisplay === void 0) { symbolDisplay = false; }
            return formatNumber(CurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
        };
        return CurrencyPipe;
    }());
    CurrencyPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'currency' },] },
    ];
    /**
     * @nocollapse
     */
    CurrencyPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
    ]; };
    /**
     * @param {?} text
     * @return {?}
     */
    function parseIntAutoRadix(text) {
        var /** @type {?} */ result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isNumeric(value) {
        return !isNaN(value - parseFloat(value));
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Formats a date according to locale rules.
     * \@howToUse `date_expression | date[:format]`
     * \@description
     *
     * Where:
     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
     * (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. The format can be predefined as
     *   shown below or custom as shown in the table.
     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
     *
     *
     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
     *  | hour      |   j    | -      | -            | -                 | j (1 PM)  | jj (1 PM) |
     *  | hour12    |   h    | -      | -            | -                 | h (1)     | hh (01)   |
     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
     *
     * In javascript, only the components specified will be respected (not the ordering,
     * punctuations, ...) and details of the formatting will be dependent on the locale.
     *
     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
     *
     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
     * applied and the formatted text will have the same day, month and year of the expression.
     *
     * WARNINGS:
     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
     *   Instead users should treat the date as an immutable object and change the reference when the
     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
     *   which would be an expensive operation).
     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
     *   browsers.
     *
     * ### Examples
     *
     * Assuming `dateObj` is (year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11)
     * in the _local_ time and locale is 'en-US':
     *
     * ```
     *     {{ dateObj | date }}               // output is 'Jun 15, 2015'
     *     {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
     *     {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
     *     {{ dateObj | date:'mmss' }}        // output is '43:11'
     * ```
     *
     * {\@example common/pipes/ts/date_pipe.ts region='DatePipe'}
     *
     * \@stable
     */
    var DatePipe = (function () {
        /**
         * @param {?} _locale
         */
        function DatePipe(_locale) {
            this._locale = _locale;
        }
        /**
         * @param {?} value
         * @param {?=} pattern
         * @return {?}
         */
        DatePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'mediumDate'; }
            var /** @type {?} */ date;
            if (isBlank(value) || value !== value)
                return null;
            if (typeof value === 'string') {
                value = value.trim();
            }
            if (isDate(value)) {
                date = value;
            }
            else if (isNumeric(value)) {
                date = new Date(parseFloat(value));
            }
            else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /**
                 * For ISO Strings without time the day, month and year must be extracted from the ISO String
                 * before Date creation to avoid time offset and errors in the new Date.
                 * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                 * date, some browsers (e.g. IE 9) will throw an invalid Date error
                 * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                 * is applied
                 * Note: ISO months are 0 for January, 1 for February, ...
                 */
                var _a = value.split('-').map(function (val) { return parseInt(val, 10); }), y = _a[0], m = _a[1], d = _a[2];
                date = new Date(y, m - 1, d);
            }
            else {
                date = new Date(value);
            }
            if (!isDate(date)) {
                var /** @type {?} */ match = void 0;
                if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
                    date = isoStringToDate(match);
                }
                else {
                    throw invalidPipeArgumentError(DatePipe, value);
                }
            }
            return DateFormatter.format(date, this._locale, DatePipe._ALIASES[pattern] || pattern);
        };
        return DatePipe;
    }());
    /**
     * \@internal
     */
    DatePipe._ALIASES = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };
    DatePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'date', pure: true },] },
    ];
    /**
     * @nocollapse
     */
    DatePipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
    ]; };
    /**
     * @param {?} obj
     * @return {?}
     */
    function isBlank(obj) {
        return obj == null || obj === '';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDate(obj) {
        return obj instanceof Date && !isNaN(obj.valueOf());
    }
    /**
     * @param {?} match
     * @return {?}
     */
    function isoStringToDate(match) {
        var /** @type {?} */ date = new Date(0);
        var /** @type {?} */ tzHour = 0;
        var /** @type {?} */ tzMin = 0;
        var /** @type {?} */ dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
        var /** @type {?} */ timeSetter = match[8] ? date.setUTCHours : date.setHours;
        if (match[9]) {
            tzHour = toInt(match[9] + match[10]);
            tzMin = toInt(match[9] + match[11]);
        }
        dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
        var /** @type {?} */ h = toInt(match[4] || '0') - tzHour;
        var /** @type {?} */ m = toInt(match[5] || '0') - tzMin;
        var /** @type {?} */ s = toInt(match[6] || '0');
        var /** @type {?} */ ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function toInt(str) {
        return parseInt(str, 10);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _INTERPOLATION_REGEXP = /#/g;
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Maps a value to a string that pluralizes the value according to locale rules.
     * \@howToUse `expression | i18nPlural:mapping`
     * \@description
     *
     *  Where:
     *  - `expression` is a number.
     *  - `mapping` is an object that mimics the ICU format, see
     *    http://userguide.icu-project.org/formatparse/messages
     *
     *  ## Example
     *
     * {\@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
     *
     * \@experimental
     */
    var I18nPluralPipe = (function () {
        /**
         * @param {?} _localization
         */
        function I18nPluralPipe(_localization) {
            this._localization = _localization;
        }
        /**
         * @param {?} value
         * @param {?} pluralMap
         * @return {?}
         */
        I18nPluralPipe.prototype.transform = function (value, pluralMap) {
            if (value == null)
                return '';
            if (typeof pluralMap !== 'object' || pluralMap === null) {
                throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
            }
            var /** @type {?} */ key = getPluralCategory(value, Object.keys(pluralMap), this._localization);
            return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
        };
        return I18nPluralPipe;
    }());
    I18nPluralPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'i18nPlural', pure: true },] },
    ];
    /**
     * @nocollapse
     */
    I18nPluralPipe.ctorParameters = function () { return [
        { type: NgLocalization, },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Generic selector that displays the string that matches the current value.
     * \@howToUse `expression | i18nSelect:mapping`
     * \@description
     *
     *  Where `mapping` is an object that indicates the text that should be displayed
     *  for different values of the provided `expression`.
     *  If none of the keys of the mapping match the value of the `expression`, then the content
     *  of the `other` key is returned when present, otherwise an empty string is returned.
     *
     *  ## Example
     *
     * {\@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
     *
     *  \@experimental
     */
    var I18nSelectPipe = (function () {
        function I18nSelectPipe() {
        }
        /**
         * @param {?} value
         * @param {?} mapping
         * @return {?}
         */
        I18nSelectPipe.prototype.transform = function (value, mapping) {
            if (value == null)
                return '';
            if (typeof mapping !== 'object' || typeof value !== 'string') {
                throw invalidPipeArgumentError(I18nSelectPipe, mapping);
            }
            if (mapping.hasOwnProperty(value)) {
                return mapping[value];
            }
            if (mapping.hasOwnProperty('other')) {
                return mapping['other'];
            }
            return '';
        };
        return I18nSelectPipe;
    }());
    I18nSelectPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'i18nSelect', pure: true },] },
    ];
    /**
     * @nocollapse
     */
    I18nSelectPipe.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Converts value into JSON string.
     * \@howToUse `expression | json`
     * \@description
     *
     * Converts value into string using `JSON.stringify`. Useful for debugging.
     *
     * ### Example
     * {\@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
     *
     * \@stable
     */
    var JsonPipe = (function () {
        function JsonPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
        return JsonPipe;
    }());
    JsonPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'json', pure: false },] },
    ];
    /**
     * @nocollapse
     */
    JsonPipe.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@ngModule CommonModule
     * \@whatItDoes Creates a new List or String containing a subset (slice) of the elements.
     * \@howToUse `array_or_string_expression | slice:start[:end]`
     * \@description
     *
     * Where the input expression is a `List` or `String`, and:
     * - `start`: The starting index of the subset to return.
     *   - **a positive integer**: return the item at `start` index and all items after
     *     in the list or string expression.
     *   - **a negative integer**: return the item at `start` index from the end and all items after
     *     in the list or string expression.
     *   - **if positive and greater than the size of the expression**: return an empty list or string.
     *   - **if negative and greater than the size of the expression**: return entire list or string.
     * - `end`: The ending index of the subset to return.
     *   - **omitted**: return all items until the end.
     *   - **if positive**: return all items before `end` index of the list or string.
     *   - **if negative**: return all items before `end` index from the end of the list or string.
     *
     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
     * and `String.prototype.slice()`.
     *
     * When operating on a [List], the returned list is always a copy even when all
     * the elements are being returned.
     *
     * When operating on a blank value, the pipe returns the blank value.
     *
     * ## List Example
     *
     * This `ngFor` example:
     *
     * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
     *
     * produces the following:
     *
     *     <li>b</li>
     *     <li>c</li>
     *
     * ## String Examples
     *
     * {\@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
     *
     * \@stable
     */
    var SlicePipe = (function () {
        function SlicePipe() {
        }
        /**
         * @param {?} value
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        SlicePipe.prototype.transform = function (value, start, end) {
            if (value == null)
                return value;
            if (!this.supports(value)) {
                throw invalidPipeArgumentError(SlicePipe, value);
            }
            return value.slice(start, end);
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
        return SlicePipe;
    }());
    SlicePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'slice', pure: false },] },
    ];
    /**
     * @nocollapse
     */
    SlicePipe.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @module
     * @description
     * This module provides a set of common Pipes.
     */
    /**
     * A collection of Angular pipes that are likely to be used in each and every application.
     */
    var COMMON_PIPES = [
        AsyncPipe,
        UpperCasePipe,
        LowerCasePipe,
        JsonPipe,
        SlicePipe,
        DecimalPipe,
        PercentPipe,
        TitleCasePipe,
        CurrencyPipe,
        DatePipe,
        I18nPluralPipe,
        I18nSelectPipe,
    ];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The module that includes all the basic Angular directives like {\@link NgIf}, {\@link NgForOf}, ...
     *
     * \@stable
     */
    var CommonModule = (function () {
        function CommonModule() {
        }
        return CommonModule;
    }());
    CommonModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                    exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                    providers: [
                        { provide: NgLocalization, useClass: NgLocaleLocalization },
                    ],
                },] },
    ];
    /**
     * @nocollapse
     */
    CommonModule.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * \@stable
     */
    var DOCUMENT = new core.InjectionToken('DocumentToken');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PLATFORM_BROWSER_ID = 'browser';
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @module
     * @description
     * Entry point for all public APIs of the common package.
     */
    /**
     * \@stable
     */
    var VERSION = new core.Version('4.4.7');

    var AutocompleteItem = /** @class */ (function () {
        function AutocompleteItem(title, id, original) {
            this.title = title;
            this.id = id;
            this.original = original;
        }
        return AutocompleteItem;
    }());
    /**
     *
     * @param items
     * @param titleKey
     * @param childrenKey
     * @constructor
     * @dynamic
     */
    function SearchableAutoCompleteItems(items, titleKey, childrenKey) {
        if (childrenKey === void 0) { childrenKey = null; }
        return items.reduce(function (r, i) {
            var t = SearchableAutoCompleteString(i[titleKey], i.id);
            if (typeof r[t] === 'undefined') {
                r[t] = TransformToAutocompleteItem(i, titleKey, childrenKey);
            }
            return r;
        }, {});
    }
    /**
     *
     * @param key
     * @param {string | number} id
     * @returns {string}
     * @constructor
     */
    function SearchableAutoCompleteString(key, id) {
        return key.replace(/ /g, "_") + "_id_" + String(id);
    }
    /**
     *
     * @param {string} str
     * @returns {string}
     * @constructor
     */
    function ComparableAutoCompleteString(str) {
        return str.replace(/_/g, " ");
    }
    /**
     * object must have an ID
     * @constructor
     */
    function TransformToAutocompleteItem(object, titleKey, childrenKey) {
        if (childrenKey === void 0) { childrenKey = null; }
        var item = new AutocompleteItem(object[titleKey], object.id, object);
        /**
         * if there are children, add these.
         */
        if (childrenKey !== null)
            item.children = object[childrenKey];
        return item;
    }

    var AutocompleteGroup = /** @class */ (function () {
        function AutocompleteGroup() {
            this.async = null;
            this.removals = [];
        }
        /**
         *
         * @param value
         * @param titleKey
         * @constructor
         */
        AutocompleteGroup.prototype.SetNewValue = function (value, titleKey) {
            var values = SearchableAutoCompleteItems(value, titleKey);
            this.SetCopy(values);
            /**
             *
             * @type {AutocompleteItem[]}
             */
            this.value = this.FilterRemovals(this.removals, values);
        };
        /**
         *
         * @param ids
         * @constructor
         */
        AutocompleteGroup.prototype.Removables = function (ids) {
            this.removals = ids;
            /**
             *
             * @type {AutocompleteItem[]}
             */
            this.value = this.FilterRemovals(this.removals, this._copy);
        };
        /**
         *
         * @constructor
         */
        AutocompleteGroup.prototype.InitialValue = function () {
            this.value = this.FilterRemovals(this.removals, this.initialValue);
            /**
             *
             */
            this.SetCopy(this.initialValue);
        };
        /**
         *
         * @constructor
         */
        AutocompleteGroup.prototype.SetCopy = function (values) {
            this._copy = Object.assign([], values);
        };
        /**
         *
         * @param value
         * @constructor
         */
        AutocompleteGroup.prototype.SetValues = function (value) {
            this.value = SearchableAutoCompleteItems(value, this.keys.titleKey, this.keys.childrenKey);
            /**
             *
             */
            this.initialValue = Object.assign({}, this.value);
            this.SetCopy(Object.assign({}, this.value));
        };
        /**
         *
         * @param {any[]} removals
         * @param value
         * @constructor
         */
        AutocompleteGroup.prototype.FilterRemovals = function (removals, value) {
            var filtered = Object.assign({}, value);
            var key, keys = [];
            for (key in filtered) {
                if (filtered.hasOwnProperty(key)) {
                    removals.forEach(function (id) {
                        // Comparable string and ID
                        var f = "_id_" + String(id);
                        var c = key.substring(key.indexOf(f), key.length);
                        if (f === c) {
                            keys.push(key);
                        }
                    });
                }
            }
            keys.forEach(function (k) {
                delete filtered[k];
            });
            return filtered;
        };
        return AutocompleteGroup;
    }());
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
    function CreateNewAutocompleteGroup(placeholder, key, value, keys, parent, completion, searchLength) {
        if (parent === void 0) { parent = ''; }
        if (completion === void 0) { completion = true; }
        if (searchLength === void 0) { searchLength = 2; }
        var group = new AutocompleteGroup();
        group.key = key;
        group.keys = keys;
        group.placeholder = placeholder;
        group.parent = parent;
        group.completion = completion;
        group.searchLength = searchLength;
        /**
         * Initial value needed, if we empty search box or want to clear it, it needs to be reset.
         * Setting copy, used if user wants to remove values (by id.). This _ list gets filtered.
         */
        group.SetValues(value);
        return group;
    }

    var UsedCodeList = {
        ArrowDown: 40,
        ArrowUp: 38,
        Enter: 13,
        Escape: 27,
        Tab: 9,
        MetaLeft: 91,
        AltLeft: 18,
        ControlLeft: 17,
        ShiftLeft: 16,
        ArrowLeft: 37,
        ArrowRight: 39,
        MetaRight: 93,
        AltRight: 18
    };
    /**
     *
     * @param array
     * @returns {Array}
     * @constructor
     */
    function ReturnStringArrayByID(array) {
        return array.reduce(function (result, item) {
            result.push(item.id.toString());
            return result;
        }, []);
    }
    /**
     *
     * @param removals
     * @param list
     * @returns {Array}
     * @constructor
     */
    function FilterRemovals(removals, list) {
        return list.filter(function (item) {
            return removals.indexOf(item.id.toString()) <= -1;
        });
    }
    /**
     *
     * @returns {boolean}
     * @constructor
     */
    function IsMobileOrTablet() {
        var isMobile = false;
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
            isMobile = true;
        }
        return isMobile;
    }
    function NotUsedKey(code) {
        return typeof UsedCodeList[code] === 'undefined';
    }

    var NgDropdownDirective = /** @class */ (function () {
        function NgDropdownDirective(_eref) {
            this._eref = _eref;
            this.list = [];
            this.active = null;
            this.input = null;
            this.element = null;
            this.key = '';
            this.completion = true;
            this.hover = new core.EventEmitter();
            this.selected = new core.EventEmitter();
            this.closed = new core.EventEmitter();
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
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgDropdownDirective.prototype, "list", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgDropdownDirective.prototype, "active", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Element)
        ], NgDropdownDirective.prototype, "input", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Element)
        ], NgDropdownDirective.prototype, "element", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgDropdownDirective.prototype, "key", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean)
        ], NgDropdownDirective.prototype, "completion", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], NgDropdownDirective.prototype, "hover", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], NgDropdownDirective.prototype, "selected", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], NgDropdownDirective.prototype, "closed", void 0);
        __decorate([
            core.HostBinding('class.open'),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], NgDropdownDirective.prototype, "opened", null);
        __decorate([
            core.HostListener('document:click', ['$event']),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, Boolean]),
            __metadata("design:returntype", void 0)
        ], NgDropdownDirective.prototype, "Close", null);
        NgDropdownDirective = __decorate([
            core.Directive({
                selector: '[ngDropdown]'
            }),
            __metadata("design:paramtypes", [core.ElementRef])
        ], NgDropdownDirective);
        return NgDropdownDirective;
    }());

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    // CommonJS / Node have global context exposed as "global" variable.
    // We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
    // the global "global" var for now.
    var __window = typeof window !== 'undefined' && window;
    var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
        self instanceof WorkerGlobalScope && self;
    var __global = typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
    var _root = __window || __global || __self;
    var root_1 = _root;
    // Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
    // This is needed when used with angular/tsickle which inserts a goog.module statement.
    // Wrap in IIFE
    (function () {
        if (!_root) {
            throw new Error('RxJS could not find any global context (window, self, global)');
        }
    })();


    var root = {
    	root: root_1
    };

    var root$1 = /*#__PURE__*/Object.freeze({
        default: root,
        __moduleExports: root,
        root: root_1
    });

    function isFunction(x) {
        return typeof x === 'function';
    }
    var isFunction_2 = isFunction;


    var isFunction_1 = {
    	isFunction: isFunction_2
    };

    var isFunction$1 = /*#__PURE__*/Object.freeze({
        default: isFunction_1,
        __moduleExports: isFunction_1,
        isFunction: isFunction_2
    });

    var isArray_1 = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });


    var isArray = {
    	isArray: isArray_1
    };

    var isArray$1 = /*#__PURE__*/Object.freeze({
        default: isArray,
        __moduleExports: isArray,
        isArray: isArray_1
    });

    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    var isObject_2 = isObject;


    var isObject_1 = {
    	isObject: isObject_2
    };

    var isObject$1 = /*#__PURE__*/Object.freeze({
        default: isObject_1,
        __moduleExports: isObject_1,
        isObject: isObject_2
    });

    // typeof any so that it we don't have to cast when comparing a result to the error object
    var errorObject_1 = { e: {} };


    var errorObject = {
    	errorObject: errorObject_1
    };

    var errorObject$1 = /*#__PURE__*/Object.freeze({
        default: errorObject,
        __moduleExports: errorObject,
        errorObject: errorObject_1
    });

    var errorObject_1$1 = ( errorObject$1 && errorObject ) || errorObject$1;

    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject_1$1.errorObject.e = e;
            return errorObject_1$1.errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    var tryCatch_2 = tryCatch;


    var tryCatch_1 = {
    	tryCatch: tryCatch_2
    };

    var tryCatch$1 = /*#__PURE__*/Object.freeze({
        default: tryCatch_1,
        __moduleExports: tryCatch_1,
        tryCatch: tryCatch_2
    });

    var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = (function (_super) {
        __extends$1(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ?
                errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error));
    var UnsubscriptionError_2 = UnsubscriptionError;


    var UnsubscriptionError_1 = {
    	UnsubscriptionError: UnsubscriptionError_2
    };

    var UnsubscriptionError$1 = /*#__PURE__*/Object.freeze({
        default: UnsubscriptionError_1,
        __moduleExports: UnsubscriptionError_1,
        UnsubscriptionError: UnsubscriptionError_2
    });

    var isArray_1$1 = ( isArray$1 && isArray ) || isArray$1;

    var isObject_1$1 = ( isObject$1 && isObject_1 ) || isObject$1;

    var isFunction_1$1 = ( isFunction$1 && isFunction_1 ) || isFunction$1;

    var tryCatch_1$1 = ( tryCatch$1 && tryCatch_1 ) || tryCatch$1;

    var UnsubscriptionError_1$1 = ( UnsubscriptionError$1 && UnsubscriptionError_1 ) || UnsubscriptionError$1;

    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = (function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.closed = false;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            // null out _subscriptions first so any child subscriptions that attempt
            // to remove themselves from this subscription will noop
            this._subscriptions = null;
            var index = -1;
            var len = _parents ? _parents.length : 0;
            // if this._parent is null, then so is this._parents, and we
            // don't have to remove ourselves from any parent subscriptions.
            while (_parent) {
                _parent.remove(this);
                // if this._parents is null or index >= len,
                // then _parent is set to null, and the loop exits
                _parent = ++index < len && _parents[index] || null;
            }
            if (isFunction_1$1.isFunction(_unsubscribe)) {
                var trial = tryCatch_1$1.tryCatch(_unsubscribe).call(this);
                if (trial === errorObject_1$1.errorObject) {
                    hasErrors = true;
                    errors = errors || (errorObject_1$1.errorObject.e instanceof UnsubscriptionError_1$1.UnsubscriptionError ?
                        flattenUnsubscriptionErrors(errorObject_1$1.errorObject.e.errors) : [errorObject_1$1.errorObject.e]);
                }
            }
            if (isArray_1$1.isArray(_subscriptions)) {
                index = -1;
                len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject_1$1.isObject(sub)) {
                        var trial = tryCatch_1$1.tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject_1$1.errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject_1$1.errorObject.e;
                            if (err instanceof UnsubscriptionError_1$1.UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError_1$1.UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `closed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || (teardown === Subscription.EMPTY)) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var subscription = teardown;
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            var subscriptions = this._subscriptions || (this._subscriptions = []);
            subscriptions.push(subscription);
            subscription._addParent(this);
            return subscription;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.prototype._addParent = function (parent) {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            if (!_parent || _parent === parent) {
                // If we don't have a parent, or the new parent is the same as the
                // current parent, then set this._parent to the new parent.
                this._parent = parent;
            }
            else if (!_parents) {
                // If there's already one parent, but not multiple, allocate an Array to
                // store the rest of the parent Subscriptions.
                this._parents = [parent];
            }
            else if (_parents.indexOf(parent) === -1) {
                // Only add the new parent to the _parents list if it's not already there.
                _parents.push(parent);
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    var Subscription_2 = Subscription;
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1$1.UnsubscriptionError) ? err.errors : err); }, []);
    }


    var Subscription_1 = {
    	Subscription: Subscription_2
    };

    var Subscription$1 = /*#__PURE__*/Object.freeze({
        default: Subscription_1,
        __moduleExports: Subscription_1,
        Subscription: Subscription_2
    });

    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) { throw err; },
        complete: function () { }
    };


    var Observer = {
    	empty: empty
    };

    var Observer$1 = /*#__PURE__*/Object.freeze({
        default: Observer,
        __moduleExports: Observer,
        empty: empty
    });

    var root_1$1 = ( root$1 && root ) || root$1;

    var rxSubscriber = createCommonjsModule(function (module, exports) {

    var Symbol = root_1$1.root.Symbol;
    exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
        Symbol.for('rxSubscriber') : '@@rxSubscriber';
    /**
     * @deprecated use rxSubscriber instead
     */
    exports.$$rxSubscriber = exports.rxSubscriber;

    });
    var rxSubscriber_1 = rxSubscriber.rxSubscriber;
    var rxSubscriber_2 = rxSubscriber.$$rxSubscriber;

    var rxSubscriber$1 = /*#__PURE__*/Object.freeze({
        default: rxSubscriber,
        __moduleExports: rxSubscriber,
        rxSubscriber: rxSubscriber_1,
        $$rxSubscriber: rxSubscriber_2
    });

    var Subscription_1$1 = ( Subscription$1 && Subscription_1 ) || Subscription$1;

    var Observer_1 = ( Observer$1 && Observer ) || Observer$1;

    var rxSubscriber_1$1 = ( rxSubscriber$1 && rxSubscriber ) || rxSubscriber$1;

    var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };




    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = (function (_super) {
        __extends$2(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = Observer_1.empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = Observer_1.empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        // HACK(benlesh): To resolve an issue where Node users may have multiple
                        // copies of rxjs in their node_modules directory.
                        if (isTrustedSubscriber(destinationOrNext)) {
                            var trustedSubscriber = destinationOrNext[rxSubscriber_1$1.rxSubscriber]();
                            this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                            this.destination = trustedSubscriber;
                            trustedSubscriber.add(this);
                        }
                        else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber_1$1.rxSubscriber] = function () { return this; };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        /** @deprecated internal use only */ Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            this._parent = null;
            this._parents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parent = _parent;
            this._parents = _parents;
            return this;
        };
        return Subscriber;
    }(Subscription_1$1.Subscription));
    var Subscriber_2 = Subscriber;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = (function (_super) {
        __extends$2(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            _super.call(this);
            this._parentSubscriber = _parentSubscriber;
            var next;
            var context = this;
            if (isFunction_1$1.isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== Observer_1.empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction_1$1.isFunction(context.unsubscribe)) {
                        this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = this.unsubscribe.bind(this);
                }
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._error) {
                    if (!_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                }
                else {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        /** @deprecated internal use only */ SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));
    function isTrustedSubscriber(obj) {
        return obj instanceof Subscriber || ('syncErrorThrowable' in obj && obj[rxSubscriber_1$1.rxSubscriber]);
    }


    var Subscriber_1 = {
    	Subscriber: Subscriber_2
    };

    var Subscriber$1 = /*#__PURE__*/Object.freeze({
        default: Subscriber_1,
        __moduleExports: Subscriber_1,
        Subscriber: Subscriber_2
    });

    var Subscriber_1$1 = ( Subscriber$1 && Subscriber_1 ) || Subscriber$1;

    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber_1$1.Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber_1$1.rxSubscriber]) {
                return nextOrObserver[rxSubscriber_1$1.rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber_1$1.Subscriber(Observer_1.empty);
        }
        return new Subscriber_1$1.Subscriber(nextOrObserver, error, complete);
    }
    var toSubscriber_2 = toSubscriber;


    var toSubscriber_1 = {
    	toSubscriber: toSubscriber_2
    };

    var toSubscriber$1 = /*#__PURE__*/Object.freeze({
        default: toSubscriber_1,
        __moduleExports: toSubscriber_1,
        toSubscriber: toSubscriber_2
    });

    var observable = createCommonjsModule(function (module, exports) {

    function getSymbolObservable(context) {
        var $$observable;
        var Symbol = context.Symbol;
        if (typeof Symbol === 'function') {
            if (Symbol.observable) {
                $$observable = Symbol.observable;
            }
            else {
                $$observable = Symbol('observable');
                Symbol.observable = $$observable;
            }
        }
        else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    exports.getSymbolObservable = getSymbolObservable;
    exports.observable = getSymbolObservable(root_1$1.root);
    /**
     * @deprecated use observable instead
     */
    exports.$$observable = exports.observable;

    });
    var observable_1 = observable.getSymbolObservable;
    var observable_2 = observable.observable;
    var observable_3 = observable.$$observable;

    var observable$1 = /*#__PURE__*/Object.freeze({
        default: observable,
        __moduleExports: observable,
        getSymbolObservable: observable_1,
        observable: observable_2,
        $$observable: observable_3
    });

    /* tslint:disable:no-empty */
    function noop() { }
    var noop_2 = noop;


    var noop_1 = {
    	noop: noop_2
    };

    var noop$1 = /*#__PURE__*/Object.freeze({
        default: noop_1,
        __moduleExports: noop_1,
        noop: noop_2
    });

    var noop_1$1 = ( noop$1 && noop_1 ) || noop$1;

    /* tslint:enable:max-line-length */
    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i - 0] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    var pipe_2 = pipe;
    /* @internal */
    function pipeFromArray(fns) {
        if (!fns) {
            return noop_1$1.noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }
    var pipeFromArray_1 = pipeFromArray;


    var pipe_1 = {
    	pipe: pipe_2,
    	pipeFromArray: pipeFromArray_1
    };

    var pipe$1 = /*#__PURE__*/Object.freeze({
        default: pipe_1,
        __moduleExports: pipe_1,
        pipe: pipe_2,
        pipeFromArray: pipeFromArray_1
    });

    var toSubscriber_1$1 = ( toSubscriber$1 && toSubscriber_1 ) || toSubscriber$1;

    var observable_1$1 = ( observable$1 && observable ) || observable$1;

    var pipe_1$1 = ( pipe$1 && pipe_1 ) || pipe$1;

    /**
     * A representation of any set of values over any amount of time. This is the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = (function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable = new Observable();
            observable.source = this;
            observable.operator = operator;
            return observable;
        };
        /**
         * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
         *
         * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
         *
         * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
         * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
         * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
         * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
         * thought.
         *
         * Apart from starting the execution of an Observable, this method allows you to listen for values
         * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
         * following ways.
         *
         * The first way is creating an object that implements {@link Observer} interface. It should have methods
         * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
         * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
         * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
         * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
         * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
         * be left uncaught.
         *
         * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
         * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
         * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
         * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
         * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
         * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
         *
         * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
         * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
         * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
         * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
         *
         * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
         * It is an Observable itself that decides when these functions will be called. For example {@link of}
         * by default emits all its values synchronously. Always check documentation for how given Observable
         * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
         *
         * @example <caption>Subscribe with an Observer</caption>
         * const sumObserver = {
         *   sum: 0,
         *   next(value) {
         *     console.log('Adding: ' + value);
         *     this.sum = this.sum + value;
         *   },
         *   error() { // We actually could just remove this method,
         *   },        // since we do not really care about errors right now.
         *   complete() {
         *     console.log('Sum equals: ' + this.sum);
         *   }
         * };
         *
         * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
         * .subscribe(sumObserver);
         *
         * // Logs:
         * // "Adding: 1"
         * // "Adding: 2"
         * // "Adding: 3"
         * // "Sum equals: 6"
         *
         *
         * @example <caption>Subscribe with functions</caption>
         * let sum = 0;
         *
         * Rx.Observable.of(1, 2, 3)
         * .subscribe(
         *   function(value) {
         *     console.log('Adding: ' + value);
         *     sum = sum + value;
         *   },
         *   undefined,
         *   function() {
         *     console.log('Sum equals: ' + sum);
         *   }
         * );
         *
         * // Logs:
         * // "Adding: 1"
         * // "Adding: 2"
         * // "Adding: 3"
         * // "Sum equals: 6"
         *
         *
         * @example <caption>Cancel a subscription</caption>
         * const subscription = Rx.Observable.interval(1000).subscribe(
         *   num => console.log(num),
         *   undefined,
         *   () => console.log('completed!') // Will not be called, even
         * );                                // when cancelling subscription
         *
         *
         * setTimeout(() => {
         *   subscription.unsubscribe();
         *   console.log('unsubscribed!');
         * }, 2500);
         *
         * // Logs:
         * // 0 after 1s
         * // 1 after 2s
         * // "unsubscribed!" after 2.5s
         *
         *
         * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
         *  Observable.
         * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled.
         * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         * @method subscribe
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber_1$1.toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this.source);
            }
            else {
                sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
                sink.error(err);
            }
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1$1.root.Rx && root_1$1.root.Rx.config && root_1$1.root.Rx.config.Promise) {
                    PromiseCtor = root_1$1.root.Rx.config.Promise;
                }
                else if (root_1$1.root.Promise) {
                    PromiseCtor = root_1$1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                // Must be declared in a separate statement to avoid a RefernceError when
                // accessing subscription below in the closure due to Temporal Dead Zone.
                var subscription;
                subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        }
                        catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    }
                    else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        /** @deprecated internal use only */ Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable_1$1.observable] = function () {
            return this;
        };
        /* tslint:enable:max-line-length */
        /**
         * Used to stitch together functional operators into a chain.
         * @method pipe
         * @return {Observable} the Observable result of all of the operators having
         * been called in the order they were passed in.
         *
         * @example
         *
         * import { map, filter, scan } from 'rxjs/operators';
         *
         * Rx.Observable.interval(1000)
         *   .pipe(
         *     filter(x => x % 2 === 0),
         *     map(x => x + x),
         *     scan((acc, x) => acc + x)
         *   )
         *   .subscribe(x => console.log(x))
         */
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i - 0] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipe_1$1.pipeFromArray(operations)(this);
        };
        /* tslint:enable:max-line-length */
        Observable.prototype.toPromise = function (PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (root_1$1.root.Rx && root_1$1.root.Rx.config && root_1$1.root.Rx.config.Promise) {
                    PromiseCtor = root_1$1.root.Rx.config.Promise;
                }
                else if (root_1$1.root.Promise) {
                    PromiseCtor = root_1$1.root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    var Observable_2 = Observable;


    var Observable_1 = {
    	Observable: Observable_2
    };

    var Observable$1 = /*#__PURE__*/Object.freeze({
        default: Observable_1,
        __moduleExports: Observable_1,
        Observable: Observable_2
    });

    var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = (function (_super) {
        __extends$3(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error));
    var ObjectUnsubscribedError_2 = ObjectUnsubscribedError;


    var ObjectUnsubscribedError_1 = {
    	ObjectUnsubscribedError: ObjectUnsubscribedError_2
    };

    var ObjectUnsubscribedError$1 = /*#__PURE__*/Object.freeze({
        default: ObjectUnsubscribedError_1,
        __moduleExports: ObjectUnsubscribedError_1,
        ObjectUnsubscribedError: ObjectUnsubscribedError_2
    });

    var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = (function (_super) {
        __extends$4(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            _super.call(this);
            this.subject = subject;
            this.subscriber = subscriber;
            this.closed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription_1$1.Subscription));
    var SubjectSubscription_2 = SubjectSubscription;


    var SubjectSubscription_1 = {
    	SubjectSubscription: SubjectSubscription_2
    };

    var SubjectSubscription$1 = /*#__PURE__*/Object.freeze({
        default: SubjectSubscription_1,
        __moduleExports: SubjectSubscription_1,
        SubjectSubscription: SubjectSubscription_2
    });

    var Observable_1$1 = ( Observable$1 && Observable_1 ) || Observable$1;

    var ObjectUnsubscribedError_1$1 = ( ObjectUnsubscribedError$1 && ObjectUnsubscribedError_1 ) || ObjectUnsubscribedError$1;

    var SubjectSubscription_1$1 = ( SubjectSubscription$1 && SubjectSubscription_1 ) || SubjectSubscription$1;

    var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };






    /**
     * @class SubjectSubscriber<T>
     */
    var SubjectSubscriber = (function (_super) {
        __extends$5(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            _super.call(this, destination);
            this.destination = destination;
        }
        return SubjectSubscriber;
    }(Subscriber_1$1.Subscriber));
    /**
     * @class Subject<T>
     */
    var Subject = (function (_super) {
        __extends$5(Subject, _super);
        function Subject() {
            _super.call(this);
            this.observers = [];
            this.closed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
        }
        Subject.prototype[rxSubscriber_1$1.rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        /** @deprecated internal use only */ Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError_1$1.ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription_1$1.Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription_1$1.Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription_1$1.SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable_1$1.Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable_1$1.Observable));
    var Subject_2 = Subject;
    /**
     * @class AnonymousSubject<T>
     */
    var AnonymousSubject = (function (_super) {
        __extends$5(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        /** @deprecated internal use only */ AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription_1$1.Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));

    var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * A unit of work to be executed in a {@link Scheduler}. An action is typically
     * created from within a Scheduler and an RxJS user does not need to concern
     * themselves about creating and manipulating an Action.
     *
     * ```ts
     * class Action<T> extends Subscription {
     *   new (scheduler: Scheduler, work: (state?: T) => void);
     *   schedule(state?: T, delay: number = 0): Subscription;
     * }
     * ```
     *
     * @class Action<T>
     */
    var Action = (function (_super) {
        __extends$6(Action, _super);
        function Action(scheduler, work) {
            _super.call(this);
        }
        /**
         * Schedules this action on its parent Scheduler for execution. May be passed
         * some context object, `state`. May happen at some point in the future,
         * according to the `delay` parameter, if specified.
         * @param {T} [state] Some contextual data that the `work` function uses when
         * called by the Scheduler.
         * @param {number} [delay] Time to wait before executing the work, where the
         * time unit is implicit and defined by the Scheduler.
         * @return {void}
         */
        Action.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            return this;
        };
        return Action;
    }(Subscription_1$1.Subscription));
    var Action_2 = Action;


    var Action_1 = {
    	Action: Action_2
    };

    var Action$1 = /*#__PURE__*/Object.freeze({
        default: Action_1,
        __moduleExports: Action_1,
        Action: Action_2
    });

    var Action_1$1 = ( Action$1 && Action_1 ) || Action$1;

    var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };


    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var AsyncAction = (function (_super) {
        __extends$7(AsyncAction, _super);
        function AsyncAction(scheduler, work) {
            _super.call(this, scheduler, work);
            this.scheduler = scheduler;
            this.work = work;
            this.pending = false;
        }
        AsyncAction.prototype.schedule = function (state, delay) {
            if (delay === void 0) { delay = 0; }
            if (this.closed) {
                return this;
            }
            // Always replace the current state with the new state.
            this.state = state;
            // Set the pending flag indicating that this action has been scheduled, or
            // has recursively rescheduled itself.
            this.pending = true;
            var id = this.id;
            var scheduler = this.scheduler;
            //
            // Important implementation note:
            //
            // Actions only execute once by default, unless rescheduled from within the
            // scheduled callback. This allows us to implement single and repeat
            // actions via the same code path, without adding API surface area, as well
            // as mimic traditional recursion but across asynchronous boundaries.
            //
            // However, JS runtimes and timers distinguish between intervals achieved by
            // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
            // serial `setTimeout` calls can be individually delayed, which delays
            // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
            // guarantee the interval callback will be invoked more precisely to the
            // interval period, regardless of load.
            //
            // Therefore, we use `setInterval` to schedule single and repeat actions.
            // If the action reschedules itself with the same delay, the interval is not
            // canceled. If the action doesn't reschedule, or reschedules with a
            // different delay, the interval will be canceled after scheduled callback
            // execution.
            //
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, delay);
            }
            this.delay = delay;
            // If this action has already an async Id, don't request a new one.
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
        };
        AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            return root_1$1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
        };
        AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
            if (delay === void 0) { delay = 0; }
            // If this action is rescheduled with the same delay time, don't clear the interval id.
            if (delay !== null && this.delay === delay && this.pending === false) {
                return id;
            }
            // Otherwise, if the action's delay time is different from the current delay,
            // or the action has been rescheduled before it's executed, clear the interval id
            return root_1$1.root.clearInterval(id) && undefined || undefined;
        };
        /**
         * Immediately executes this action and the `work` it contains.
         * @return {any}
         */
        AsyncAction.prototype.execute = function (state, delay) {
            if (this.closed) {
                return new Error('executing a cancelled action');
            }
            this.pending = false;
            var error = this._execute(state, delay);
            if (error) {
                return error;
            }
            else if (this.pending === false && this.id != null) {
                // Dequeue if the action didn't reschedule itself. Don't call
                // unsubscribe(), because the action could reschedule later.
                // For example:
                // ```
                // scheduler.schedule(function doWork(counter) {
                //   /* ... I'm a busy worker bee ... */
                //   var originalAction = this;
                //   /* wait 100ms before rescheduling the action */
                //   setTimeout(function () {
                //     originalAction.schedule(counter + 1);
                //   }, 100);
                // }, 1000);
                // ```
                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
        };
        AsyncAction.prototype._execute = function (state, delay) {
            var errored = false;
            var errorValue = undefined;
            try {
                this.work(state);
            }
            catch (e) {
                errored = true;
                errorValue = !!e && e || new Error(e);
            }
            if (errored) {
                this.unsubscribe();
                return errorValue;
            }
        };
        /** @deprecated internal use only */ AsyncAction.prototype._unsubscribe = function () {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;
            if (index !== -1) {
                actions.splice(index, 1);
            }
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
        };
        return AsyncAction;
    }(Action_1$1.Action));
    var AsyncAction_2 = AsyncAction;


    var AsyncAction_1 = {
    	AsyncAction: AsyncAction_2
    };

    var AsyncAction$1 = /*#__PURE__*/Object.freeze({
        default: AsyncAction_1,
        __moduleExports: AsyncAction_1,
        AsyncAction: AsyncAction_2
    });

    /**
     * An execution context and a data structure to order tasks and schedule their
     * execution. Provides a notion of (potentially virtual) time, through the
     * `now()` getter method.
     *
     * Each unit of work in a Scheduler is called an {@link Action}.
     *
     * ```ts
     * class Scheduler {
     *   now(): number;
     *   schedule(work, delay?, state?): Subscription;
     * }
     * ```
     *
     * @class Scheduler
     */
    var Scheduler = (function () {
        function Scheduler(SchedulerAction, now) {
            if (now === void 0) { now = Scheduler.now; }
            this.SchedulerAction = SchedulerAction;
            this.now = now;
        }
        /**
         * Schedules a function, `work`, for execution. May happen at some point in
         * the future, according to the `delay` parameter, if specified. May be passed
         * some context object, `state`, which will be passed to the `work` function.
         *
         * The given arguments will be processed an stored as an Action object in a
         * queue of actions.
         *
         * @param {function(state: ?T): ?Subscription} work A function representing a
         * task, or some unit of work to be executed by the Scheduler.
         * @param {number} [delay] Time to wait before executing the work, where the
         * time unit is implicit and defined by the Scheduler itself.
         * @param {T} [state] Some contextual data that the `work` function uses when
         * called by the Scheduler.
         * @return {Subscription} A subscription in order to be able to unsubscribe
         * the scheduled work.
         */
        Scheduler.prototype.schedule = function (work, delay, state) {
            if (delay === void 0) { delay = 0; }
            return new this.SchedulerAction(this, work).schedule(state, delay);
        };
        Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
        return Scheduler;
    }());
    var Scheduler_2 = Scheduler;


    var Scheduler_1 = {
    	Scheduler: Scheduler_2
    };

    var Scheduler$1 = /*#__PURE__*/Object.freeze({
        default: Scheduler_1,
        __moduleExports: Scheduler_1,
        Scheduler: Scheduler_2
    });

    var Scheduler_1$1 = ( Scheduler$1 && Scheduler_1 ) || Scheduler$1;

    var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    var AsyncScheduler = (function (_super) {
        __extends$8(AsyncScheduler, _super);
        function AsyncScheduler() {
            _super.apply(this, arguments);
            this.actions = [];
            /**
             * A flag to indicate whether the Scheduler is currently executing a batch of
             * queued actions.
             * @type {boolean}
             */
            this.active = false;
            /**
             * An internal ID used to track the latest asynchronous task such as those
             * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
             * others.
             * @type {any}
             */
            this.scheduled = undefined;
        }
        AsyncScheduler.prototype.flush = function (action) {
            var actions = this.actions;
            if (this.active) {
                actions.push(action);
                return;
            }
            var error;
            this.active = true;
            do {
                if (error = action.execute(action.state, action.delay)) {
                    break;
                }
            } while (action = actions.shift()); // exhaust the scheduler queue
            this.active = false;
            if (error) {
                while (action = actions.shift()) {
                    action.unsubscribe();
                }
                throw error;
            }
        };
        return AsyncScheduler;
    }(Scheduler_1$1.Scheduler));
    var AsyncScheduler_2 = AsyncScheduler;


    var AsyncScheduler_1 = {
    	AsyncScheduler: AsyncScheduler_2
    };

    var AsyncScheduler$1 = /*#__PURE__*/Object.freeze({
        default: AsyncScheduler_1,
        __moduleExports: AsyncScheduler_1,
        AsyncScheduler: AsyncScheduler_2
    });

    var AsyncAction_1$1 = ( AsyncAction$1 && AsyncAction_1 ) || AsyncAction$1;

    var AsyncScheduler_1$1 = ( AsyncScheduler$1 && AsyncScheduler_1 ) || AsyncScheduler$1;

    /**
     *
     * Async Scheduler
     *
     * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
     *
     * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
     * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
     * in intervals.
     *
     * If you just want to "defer" task, that is to perform it right after currently
     * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
     * better choice will be the {@link asap} scheduler.
     *
     * @example <caption>Use async scheduler to delay task</caption>
     * const task = () => console.log('it works!');
     *
     * Rx.Scheduler.async.schedule(task, 2000);
     *
     * // After 2 seconds logs:
     * // "it works!"
     *
     *
     * @example <caption>Use async scheduler to repeat task in intervals</caption>
     * function task(state) {
     *   console.log(state);
     *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
     *                                   // which we reschedule with new state and delay
     * }
     *
     * Rx.Scheduler.async.schedule(task, 3000, 0);
     *
     * // Logs:
     * // 0 after 3s
     * // 1 after 4s
     * // 2 after 5s
     * // 3 after 6s
     *
     * @static true
     * @name async
     * @owner Scheduler
     */
    var async_1 = new AsyncScheduler_1$1.AsyncScheduler(AsyncAction_1$1.AsyncAction);


    var async = {
    	async: async_1
    };

    var async$1 = /*#__PURE__*/Object.freeze({
        default: async,
        __moduleExports: async,
        async: async_1
    });

    var async_1$1 = ( async$1 && async ) || async$1;

    var __extends$9 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };


    /**
     * Emits a value from the source Observable only after a particular time span
     * has passed without another source emission.
     *
     * <span class="informal">It's like {@link delay}, but passes only the most
     * recent value from each burst of emissions.</span>
     *
     * <img src="./img/debounceTime.png" width="100%">
     *
     * `debounceTime` delays values emitted by the source Observable, but drops
     * previous pending delayed emissions if a new value arrives on the source
     * Observable. This operator keeps track of the most recent value from the
     * source Observable, and emits that only when `dueTime` enough time has passed
     * without any other value appearing on the source Observable. If a new value
     * appears before `dueTime` silence occurs, the previous value will be dropped
     * and will not be emitted on the output Observable.
     *
     * This is a rate-limiting operator, because it is impossible for more than one
     * value to be emitted in any time window of duration `dueTime`, but it is also
     * a delay-like operator since output emissions do not occur at the same time as
     * they did on the source Observable. Optionally takes a {@link IScheduler} for
     * managing timers.
     *
     * @example <caption>Emit the most recent click after a burst of clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.debounceTime(1000);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link auditTime}
     * @see {@link debounce}
     * @see {@link delay}
     * @see {@link sampleTime}
     * @see {@link throttleTime}
     *
     * @param {number} dueTime The timeout duration in milliseconds (or the time
     * unit determined internally by the optional `scheduler`) for the window of
     * time required to wait for emission silence before emitting the most recent
     * source value.
     * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
     * managing the timers that handle the timeout for each value.
     * @return {Observable} An Observable that delays the emissions of the source
     * Observable by the specified `dueTime`, and may drop some values if they occur
     * too frequently.
     * @method debounceTime
     * @owner Observable
     */
    function debounceTime(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = async_1$1.async; }
        return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
    }
    var debounceTime_2 = debounceTime;
    var DebounceTimeOperator = (function () {
        function DebounceTimeOperator(dueTime, scheduler) {
            this.dueTime = dueTime;
            this.scheduler = scheduler;
        }
        DebounceTimeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
        };
        return DebounceTimeOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DebounceTimeSubscriber = (function (_super) {
        __extends$9(DebounceTimeSubscriber, _super);
        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
            _super.call(this, destination);
            this.dueTime = dueTime;
            this.scheduler = scheduler;
            this.debouncedSubscription = null;
            this.lastValue = null;
            this.hasValue = false;
        }
        DebounceTimeSubscriber.prototype._next = function (value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
        };
        DebounceTimeSubscriber.prototype._complete = function () {
            this.debouncedNext();
            this.destination.complete();
        };
        DebounceTimeSubscriber.prototype.debouncedNext = function () {
            this.clearDebounce();
            if (this.hasValue) {
                this.destination.next(this.lastValue);
                this.lastValue = null;
                this.hasValue = false;
            }
        };
        DebounceTimeSubscriber.prototype.clearDebounce = function () {
            var debouncedSubscription = this.debouncedSubscription;
            if (debouncedSubscription !== null) {
                this.remove(debouncedSubscription);
                debouncedSubscription.unsubscribe();
                this.debouncedSubscription = null;
            }
        };
        return DebounceTimeSubscriber;
    }(Subscriber_1$1.Subscriber));
    function dispatchNext(subscriber) {
        subscriber.debouncedNext();
    }


    var debounceTime_1 = {
    	debounceTime: debounceTime_2
    };

    var debounceTime$1 = /*#__PURE__*/Object.freeze({
        default: debounceTime_1,
        __moduleExports: debounceTime_1,
        debounceTime: debounceTime_2
    });

    var debounceTime_1$1 = ( debounceTime$1 && debounceTime_1 ) || debounceTime$1;

    /**
     * Emits a value from the source Observable only after a particular time span
     * has passed without another source emission.
     *
     * <span class="informal">It's like {@link delay}, but passes only the most
     * recent value from each burst of emissions.</span>
     *
     * <img src="./img/debounceTime.png" width="100%">
     *
     * `debounceTime` delays values emitted by the source Observable, but drops
     * previous pending delayed emissions if a new value arrives on the source
     * Observable. This operator keeps track of the most recent value from the
     * source Observable, and emits that only when `dueTime` enough time has passed
     * without any other value appearing on the source Observable. If a new value
     * appears before `dueTime` silence occurs, the previous value will be dropped
     * and will not be emitted on the output Observable.
     *
     * This is a rate-limiting operator, because it is impossible for more than one
     * value to be emitted in any time window of duration `dueTime`, but it is also
     * a delay-like operator since output emissions do not occur at the same time as
     * they did on the source Observable. Optionally takes a {@link IScheduler} for
     * managing timers.
     *
     * @example <caption>Emit the most recent click after a burst of clicks</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.debounceTime(1000);
     * result.subscribe(x => console.log(x));
     *
     * @see {@link auditTime}
     * @see {@link debounce}
     * @see {@link delay}
     * @see {@link sampleTime}
     * @see {@link throttleTime}
     *
     * @param {number} dueTime The timeout duration in milliseconds (or the time
     * unit determined internally by the optional `scheduler`) for the window of
     * time required to wait for emission silence before emitting the most recent
     * source value.
     * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
     * managing the timers that handle the timeout for each value.
     * @return {Observable} An Observable that delays the emissions of the source
     * Observable by the specified `dueTime`, and may drop some values if they occur
     * too frequently.
     * @method debounceTime
     * @owner Observable
     */
    function debounceTime$2(dueTime, scheduler) {
        if (scheduler === void 0) { scheduler = async_1$1.async; }
        return debounceTime_1$1.debounceTime(dueTime, scheduler)(this);
    }
    var debounceTime_3 = debounceTime$2;


    var debounceTime_2$1 = {
    	debounceTime: debounceTime_3
    };

    var debounceTime$3 = /*#__PURE__*/Object.freeze({
        default: debounceTime_2$1,
        __moduleExports: debounceTime_2$1,
        debounceTime: debounceTime_3
    });

    var debounceTime_1$2 = ( debounceTime$3 && debounceTime_2$1 ) || debounceTime$3;

    Observable_1$1.Observable.prototype.debounceTime = debounceTime_1$2.debounceTime;

    var CompleterComponent = /** @class */ (function () {
        function CompleterComponent(_zone) {
            this._zone = _zone;
            this.cleared = new core.EventEmitter();
            this.selected = new core.EventEmitter();
            this.noResult = new core.EventEmitter();
            this.group = {};
            this._change = new Subject_2();
            this._items = {};
            this._completer = '';
            this._highlight = '';
            this._DOM = {
                notFound: false,
                empty: false,
                placeholder: null,
                selected: '',
                isLoading: false
            };
        }
        /**
         *
         */
        CompleterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._zone.runOutsideAngular(function () {
                _this._change
                    .debounceTime(300)
                    .subscribe(function (value) {
                    _this._zone.run(function () {
                        if (_this.group.async !== null) {
                            _this.RunAsyncFunction(value);
                        }
                        else {
                            _this.OnModelChange(value);
                        }
                    });
                });
            });
            this.SetItems();
        };
        /**
         * Only used when completion is off.
         * @constructor
         */
        CompleterComponent.prototype.RegisterClick = function () {
            if (!this.group.completion) {
                this.SwitchDropdownState();
            }
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.DropdownArray = function () {
            if (this.group.completion) {
                this.SwitchDropdownState();
            }
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.SwitchDropdownState = function () {
            if (this.dropdown._open) {
                this.CloseDropdown();
                return;
            }
            /**
             *
             */
            this.OpenDropdown();
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.CloseDropdown = function () {
            this.dropdown._open = false;
            /**
             *
             * @type {string}
             */
            this._DOM.placeholder = null;
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.OpenDropdown = function () {
            this.dropdown.Open();
            /**
             *
             * @type {string}
             */
            this._DOM.placeholder = null;
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.SetItems = function () {
            this._items = this.group.value;
            this.IsInitialEmpty();
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.SelectItem = function (item) {
            var i;
            if (typeof item === 'string') {
                i = this._items[item];
                this._DOM.selected = item;
            }
            else {
                i = item;
                this._DOM.selected = SearchableAutoCompleteString(item.title, item.id);
            }
            this._completer = i.title;
            this._highlight = '';
            this.dropdown.Close(null, true);
            this.selected.emit({ group: { key: this.group.key }, item: i });
        };
        /**
         *
         * @param {string} value
         * @returns {Promise<void>}
         * @constructor
         */
        CompleterComponent.prototype.RunAsyncFunction = function (value) {
            return __awaiter(this, void 0, void 0, function () {
                var values;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._completer = value;
                            this._highlight = value;
                            this._DOM.selected = null;
                            if (!(value.length === 0)) return [3 /*break*/, 1];
                            this.group.InitialValue();
                            this.ClearModel();
                            this.dropdown.Close('', true);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(value.length > this.group.searchLength)) return [3 /*break*/, 3];
                            this._DOM.isLoading = true;
                            return [4 /*yield*/, this.group.async(value)];
                        case 2:
                            values = _a.sent();
                            this.group.SetNewValue(values, this.group.keys.titleKey);
                            this._DOM.isLoading = false;
                            this._items = this.group.value;
                            this.EmptySearch(this._items, value);
                            // User has typed something now, results could be shown. We need to remove the "is-initial-empty" class.
                            this.IsInitialEmpty();
                            this.dropdown.Open();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         * @param value
         * @constructor
         */
        CompleterComponent.prototype.OnModelChange = function (value) {
            this._completer = value;
            this._highlight = value;
            this._DOM.selected = null;
            if (value.length === 0) {
                this.ClearModel();
                this.dropdown.Close('', true);
            }
            else if (value.length > this.group.searchLength) {
                this.CompareItemsAndSet(value);
            }
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.ClearModel = function () {
            this._DOM.selected = null;
            this._DOM.notFound = false;
            this.cleared.emit(this.group.key);
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.CompareItemsAndSet = function (value) {
            var obj = {};
            for (var key in this.group.value) {
                if (ComparableAutoCompleteString(key).toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    obj[key] = this.group.value[key];
                }
            }
            this._items = obj;
            this.EmptySearch(this._items, value);
            // User has typed something now, results could be shown. We need to remove the "is-initial-empty" class.
            this.IsInitialEmpty();
            this.dropdown.Open();
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.OnInputBlurred = function () {
            if (!this.HasChosenValue()) {
                /**
                 * Let component know completer input has been cleared -
                 * this function shows the list again, also resets children, if chosen.
                 */
                this.OnModelChange('');
            }
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.OnHoverDropdownItem = function (item) {
            if (typeof item == 'string') {
                this._DOM.placeholder = this._items[item];
                return;
            }
            if (item == null) {
                this._DOM.placeholder = null;
                return;
            }
            this._DOM.placeholder = item;
        };
        // =======================================================================//
        // ! Utils                                                                //
        // =======================================================================//
        CompleterComponent.prototype.IsInitialEmpty = function () {
            if (Object.keys(this._items).length === 0 && this._completer.length === 0) {
                this._DOM.empty = true;
                return;
            }
            this._DOM.empty = false;
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.HasChosenValue = function () {
            return this._DOM.selected !== null;
        };
        /**
         *
         * @param {Object} obj
         * @param {string} query
         * @constructor
         */
        CompleterComponent.prototype.EmptySearch = function (obj, query) {
            if (Object.keys(obj).length > 0) {
                this._DOM.notFound = false;
                return;
            }
            this._DOM.notFound = true;
            this.noResult.emit({ group: { key: this.group.key }, query: query });
        };
        /**
         *
         * @constructor
         */
        CompleterComponent.prototype.ClearValue = function () {
            this._completer = '';
            this._DOM.selected = null;
            this.group.InitialValue();
            this.IsInitialEmpty();
            /**
             *
             */
            this.selected.emit({ group: { key: this.group.key }, item: null });
        };
        __decorate([
            core.ViewChild(NgDropdownDirective),
            __metadata("design:type", NgDropdownDirective)
        ], CompleterComponent.prototype, "dropdown", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CompleterComponent.prototype, "cleared", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], CompleterComponent.prototype, "selected", void 0);
        __decorate([
            core.Output('no-result'),
            __metadata("design:type", core.EventEmitter)
        ], CompleterComponent.prototype, "noResult", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", AutocompleteGroup)
        ], CompleterComponent.prototype, "group", void 0);
        CompleterComponent = __decorate([
            core.Component({
                selector: 'ng-completer',
                template: "\n      <div #element class=\"ng-autocomplete-dropdown\" [ngClass]=\"{'open': dropdown._open, 'is-loading': _DOM.isLoading, 'is-async': group.async !== null}\">\n\n        <!--GROUP: {{group.key}}-->\n\n        <div class=\"ng-autocomplete-inputs\" (click)=\"RegisterClick()\"\n             [ngClass]=\"{'completion-off': !group.completion}\">\n                <span class=\"ng-autocomplete-placeholder\"\n                      *ngIf=\"_DOM.placeholder\">\n                  <ng-container *ngIf=\"group.placeholderValue\">\n                      <ng-template *ngTemplateOutlet=\"group.placeholderValue; context: {$implicit: _DOM.placeholder}\"></ng-template>\n                  </ng-container>\n                  <ng-template [ngIf]=\"!group.placeholderValue\">\n                      {{_DOM.placeholder.title}}\n                  </ng-template>\n                </span>\n          <input #input type=\"text\" [placeholder]=\"group.placeholder\" name=\"completer\" [(ngModel)]=\"_completer\"\n                 (ngModelChange)=\"_change.next($event);\"\n                 [value]=\"_completer\"\n                 autocomplete=\"off\"\n                 (click)=\"OpenDropdown()\"\n                 (focus)=\"OpenDropdown()\" class=\"ng-autocomplete-input\">\n\n          <span [ngClass]=\"{'open': dropdown._open}\" class=\"ng-autocomplete-dropdown-icon\"\n                (click)=\"DropdownArray()\"></span>\n        </div>\n\n        <div class=\"ng-dropdown\" ngDropdown [list]=\"_items\" [element]=\"element\" [input]=\"input\"\n             [ngClass]=\"{'is-initial-empty': _DOM.empty}\"\n             [active]=\"_DOM.selected\" [key]=\"group.key\"\n             [completion]=\"group.completion\"\n             (hover)=\"OnHoverDropdownItem($event)\"\n             (selected)=\"SelectItem($event)\"\n             (closed)=\"OnInputBlurred()\"\n        >\n          <div *ngIf=\"_DOM.notFound && group.noResults\" class=\"dropdown-item no-results\">\n            <ng-container *ngIf=\"group.noResults\">\n              <ng-template *ngTemplateOutlet=\"group.noResults; context: {$implicit: _completer}\"></ng-template>\n            </ng-container>\n          </div>\n\n          <div class=\"dropdown-item\" *ngFor=\"let item of _items | keys; let i = index\"\n               (click)=\"SelectItem(_items[item])\">\n\n            <ng-container *ngIf=\"group.dropdownValue\">\n              <ng-template\n                *ngTemplateOutlet=\"group.dropdownValue; context: {$implicit: _items[item], highlight: _items[item].title | highlight:_highlight}\"></ng-template>\n            </ng-container>\n\n            <div *ngIf=\"!group.dropdownValue\" [innerHTML]=\"_items[item].title | highlight:_highlight\"></div>\n          </div>\n        </div>\n      </div>",
                styles: ["\n        .ng-autocomplete-inputs {\n            position: relative;\n        }\n\n        .ng-autocomplete-inputs.completion-off {\n            cursor: pointer;\n        }\n\n        .ng-autocomplete-inputs.completion-off input {\n            pointer-events: none;\n        }\n\n        .ng-autocomplete-placeholder {\n            pointer-events: none;\n        }\n\n        .ng-autocomplete-dropdown-icon {\n\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown {\n            display: none;\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown.is-empty {\n          display: none;\n        }\n\n        .ng-autocomplete-dropdown .ng-dropdown.open {\n            display: block;\n        }\n    "]
            }),
            __metadata("design:paramtypes", [core.NgZone])
        ], CompleterComponent);
        return CompleterComponent;
    }());

    var NgAutocompleteComponent = /** @class */ (function () {
        function NgAutocompleteComponent() {
            this.selected = new core.EventEmitter();
            this.noResult = new core.EventEmitter();
            this.group = [];
            this.key = '';
            this.classes = [];
            this._viewHasBeenInit = false;
        }
        NgAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        };
        /**
         *
         */
        NgAutocompleteComponent.prototype.ngOnInit = function () {
        };
        /**
         *
         */
        NgAutocompleteComponent.prototype.ngAfterViewChecked = function () {
            var el = this.init.nativeElement.querySelector('.after-view-init');
            if (window.getComputedStyle(el).length > 0) {
                this._viewHasBeenInit = true;
            }
        };
        /**
         *
         * @constructor
         * @param selected
         */
        NgAutocompleteComponent.prototype.ListenToSelected = function (selected) {
            this.selected.emit(selected);
            /**
             *
             */
            this.SetChildren(selected);
        };
        /**
         *
         * @constructor
         * @param group
         */
        NgAutocompleteComponent.prototype.NoResult = function (group) {
            this.noResult.emit(group);
        };
        /**
         *
         * @constructor
         */
        NgAutocompleteComponent.prototype.InputCleared = function (key) {
            var _this = this;
            this.group.forEach(function (group) {
                if (group.key === key || group.parent === key) {
                    _this.ResetInput(group.key);
                }
            });
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            this.TriggerChange();
        };
        /**
         *
         * @param selected
         * @constructor
         */
        NgAutocompleteComponent.prototype.SetChildren = function (selected) {
            var _this = this;
            this.group.forEach(function (item) {
                if (item.parent == selected.group.key) {
                    _this.ResetInput(item.key);
                    /**
                     *
                     */
                    if (selected.item !== null && typeof selected.item.children !== 'undefined') {
                        item.SetNewValue(selected.item.children, selected.group.keys.titleKey);
                    }
                }
            });
            /**
             * Items may have changed, need to te re-set list in completer components.
             */
            this.TriggerChange();
        };
        /**
         *
         * @constructor
         */
        NgAutocompleteComponent.prototype.TriggerChange = function () {
            this.completers.forEach(function (completer) {
                completer.SetItems();
            });
        };
        // =======================================================================//
        // ! Utils                                                                //
        // =======================================================================//
        /**
         *
         * @param {string} key
         * @returns {CompleterComponent}
         * @constructor
         */
        NgAutocompleteComponent.prototype.GetInput = function (key) {
            return this.completers.reduce(function (result, completer) {
                if (completer.group.key === key) {
                    result = completer;
                }
                return result;
            }, {});
        };
        /**
         *
         * @param {string} key
         * @param {(completer: CompleterComponent) => void} f
         * @constructor
         */
        NgAutocompleteComponent.prototype.SubscribeInput = function (key, f) {
            if (this._viewHasBeenInit) {
                var completer = this.GetInput(key);
                /**
                 *
                 */
                f(completer);
                return;
            }
            var s = this.FindInput(key).subscribe(function (completer) {
                f(completer);
                /**
                 *
                 */
                s.unsubscribe();
            });
        };
        /**
         *
         * @param key
         * @returns {CompleterComponent}
         * @constructor
         */
        NgAutocompleteComponent.prototype.FindInput = function (key) {
            var _this = this;
            var s = new Subject_2();
            var i = setInterval(function () {
                if (_this._viewHasBeenInit) {
                    s.next(_this.GetInput(key));
                    s.complete();
                    /**
                     *
                     */
                    clearInterval(i);
                }
            }, 1000);
            return s;
        };
        /**
         *
         * @param key
         * @constructor
         */
        NgAutocompleteComponent.prototype.ResetInput = function (key) {
            this.SubscribeInput(key, function (completer) {
                completer.ClearValue();
            });
        };
        /**
         *
         * @param key
         * @param values
         * @constructor
         */
        NgAutocompleteComponent.prototype.SetValues = function (key, values) {
            var _this = this;
            this.SubscribeInput(key, function (completer) {
                completer.group.SetValues(values);
                /**
                 * Items may have changed, need to te re-set list in completer components.
                 */
                _this.TriggerChange();
            });
        };
        /**
         *
         * @param {string} key
         * @param {"noResults" | "selectedValue"} type
         * @param {TemplateRef<any>} template
         * @constructor
         */
        NgAutocompleteComponent.prototype.SetTemplate = function (key, type, template) {
            var _this = this;
            this.SubscribeInput(key, function (completer) {
                completer.group[type] = template;
                /**
                 * Items may have changed, need to te re-set list in completer components.
                 */
                _this.TriggerChange();
            });
        };
        /**
         *
         * @param {string} key
         * @param promise
         * @constructor
         */
        NgAutocompleteComponent.prototype.SetAsync = function (key, promise) {
            var _this = this;
            this.SubscribeInput(key, function (completer) {
                completer.group.async = promise;
                /**
                 * Items may have changed, need to te re-set list in completer components.
                 */
                _this.TriggerChange();
            });
        };
        /**
         *
         * @param key
         * @param id
         * @constructor
         */
        NgAutocompleteComponent.prototype.SelectItem = function (key, id) {
            this.SubscribeInput(key, function (completer) {
                Object.keys(completer._items).forEach(function (key) {
                    var f = "_id_" + String(id);
                    var c = key.substring(key.indexOf(f), key.length);
                    if (f === c) {
                        completer.SelectItem(completer._items[key]);
                    }
                });
            });
        };
        /**
         *
         * @param key
         * @param ids
         * @constructor
         */
        NgAutocompleteComponent.prototype.RemovableValues = function (key, ids) {
            var _this = this;
            this.SubscribeInput(key, function (completer) {
                completer.group.Removables(ReturnStringArrayByID(ids));
                /**
                 * Items may have changed, need to te re-set list in completer components.
                 */
                _this.TriggerChange();
            });
        };
        /**
         *
         * @constructor
         */
        NgAutocompleteComponent.prototype.ResetInputs = function () {
            var _this = this;
            this.group.forEach(function (item) {
                _this.ResetInput(item.key);
            });
        };
        // =======================================================================//
        // ! Static (utils)                                                       //
        // =======================================================================//
        /**
         *
         * @constructor
         */
        NgAutocompleteComponent.FindCompleter = function (key, list) {
            var completer = list.filter(function (completer) {
                return key === completer.key;
            });
            if (typeof completer[0] !== 'undefined') {
                return completer[0];
            }
            return null;
        };
        __decorate([
            core.ViewChildren(CompleterComponent),
            __metadata("design:type", core.QueryList)
        ], NgAutocompleteComponent.prototype, "completers", void 0);
        __decorate([
            core.ViewChild('init'),
            __metadata("design:type", core.ElementRef)
        ], NgAutocompleteComponent.prototype, "init", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], NgAutocompleteComponent.prototype, "selected", void 0);
        __decorate([
            core.Output('no-result'),
            __metadata("design:type", core.EventEmitter)
        ], NgAutocompleteComponent.prototype, "noResult", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgAutocompleteComponent.prototype, "group", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgAutocompleteComponent.prototype, "key", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgAutocompleteComponent.prototype, "classes", void 0);
        NgAutocompleteComponent = __decorate([
            core.Component({
                selector: 'ng-autocomplete',
                template: "\n        <div #init style=\"display: none;\"><span class=\"after-view-init\"></span></div>\n        <ng-completer [ngClass]=\"classes\" *ngFor=\"let item of group\" (cleared)=\"InputCleared($event)\"\n                      (no-result)=\"NoResult($event)\"\n                      (selected)=\"ListenToSelected($event)\"\n                      [group]=\"item\"></ng-completer>\n    "
            }),
            __metadata("design:paramtypes", [])
        ], NgAutocompleteComponent);
        return NgAutocompleteComponent;
    }());

    var __extends$10 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var EmptyObservable = (function (_super) {
        __extends$10(EmptyObservable, _super);
        function EmptyObservable(scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable that emits no items to the Observer and immediately
         * emits a complete notification.
         *
         * <span class="informal">Just emits 'complete', and nothing else.
         * </span>
         *
         * <img src="./img/empty.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the complete notification. It can be used for composing with other
         * Observables, such as in a {@link mergeMap}.
         *
         * @example <caption>Emit the number 7, then complete.</caption>
         * var result = Rx.Observable.empty().startWith(7);
         * result.subscribe(x => console.log(x));
         *
         * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
         * var interval = Rx.Observable.interval(1000);
         * var result = interval.mergeMap(x =>
         *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
         * );
         * result.subscribe(x => console.log(x));
         *
         * // Results in the following to the console:
         * // x is equal to the count on the interval eg(0,1,2,3,...)
         * // x will occur every 1000ms
         * // if x % 2 is equal to 1 print abc
         * // if x % 2 is not equal to 1 nothing will be output
         *
         * @see {@link create}
         * @see {@link never}
         * @see {@link of}
         * @see {@link throw}
         *
         * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
         * the emission of the complete notification.
         * @return {Observable} An "empty" Observable: emits only the complete
         * notification.
         * @static true
         * @name empty
         * @owner Observable
         */
        EmptyObservable.create = function (scheduler) {
            return new EmptyObservable(scheduler);
        };
        EmptyObservable.dispatch = function (arg) {
            var subscriber = arg.subscriber;
            subscriber.complete();
        };
        /** @deprecated internal use only */ EmptyObservable.prototype._subscribe = function (subscriber) {
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
            }
            else {
                subscriber.complete();
            }
        };
        return EmptyObservable;
    }(Observable_1$1.Observable));
    var EmptyObservable_2 = EmptyObservable;


    var EmptyObservable_1 = {
    	EmptyObservable: EmptyObservable_2
    };

    var EmptyObservable$1 = /*#__PURE__*/Object.freeze({
        default: EmptyObservable_1,
        __moduleExports: EmptyObservable_1,
        EmptyObservable: EmptyObservable_2
    });

    var isArrayLike_1 = (function (x) { return x && typeof x.length === 'number'; });


    var isArrayLike = {
    	isArrayLike: isArrayLike_1
    };

    var isArrayLike$1 = /*#__PURE__*/Object.freeze({
        default: isArrayLike,
        __moduleExports: isArrayLike,
        isArrayLike: isArrayLike_1
    });

    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    var isPromise_2 = isPromise;


    var isPromise_1 = {
    	isPromise: isPromise_2
    };

    var isPromise$1 = /*#__PURE__*/Object.freeze({
        default: isPromise_1,
        __moduleExports: isPromise_1,
        isPromise: isPromise_2
    });

    var iterator = createCommonjsModule(function (module, exports) {

    function symbolIteratorPonyfill(root) {
        var Symbol = root.Symbol;
        if (typeof Symbol === 'function') {
            if (!Symbol.iterator) {
                Symbol.iterator = Symbol('iterator polyfill');
            }
            return Symbol.iterator;
        }
        else {
            // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
            var Set_1 = root.Set;
            if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
                return '@@iterator';
            }
            var Map_1 = root.Map;
            // required for compatability with es6-shim
            if (Map_1) {
                var keys = Object.getOwnPropertyNames(Map_1.prototype);
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                    if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                        return key;
                    }
                }
            }
            return '@@iterator';
        }
    }
    exports.symbolIteratorPonyfill = symbolIteratorPonyfill;
    exports.iterator = symbolIteratorPonyfill(root_1$1.root);
    /**
     * @deprecated use iterator instead
     */
    exports.$$iterator = exports.iterator;

    });
    var iterator_1 = iterator.symbolIteratorPonyfill;
    var iterator_2 = iterator.iterator;
    var iterator_3 = iterator.$$iterator;

    var iterator$1 = /*#__PURE__*/Object.freeze({
        default: iterator,
        __moduleExports: iterator,
        symbolIteratorPonyfill: iterator_1,
        iterator: iterator_2,
        $$iterator: iterator_3
    });

    var __extends$11 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var InnerSubscriber = (function (_super) {
        __extends$11(InnerSubscriber, _super);
        function InnerSubscriber(parent, outerValue, outerIndex) {
            _super.call(this);
            this.parent = parent;
            this.outerValue = outerValue;
            this.outerIndex = outerIndex;
            this.index = 0;
        }
        InnerSubscriber.prototype._next = function (value) {
            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
        };
        InnerSubscriber.prototype._error = function (error) {
            this.parent.notifyError(error, this);
            this.unsubscribe();
        };
        InnerSubscriber.prototype._complete = function () {
            this.parent.notifyComplete(this);
            this.unsubscribe();
        };
        return InnerSubscriber;
    }(Subscriber_1$1.Subscriber));
    var InnerSubscriber_2 = InnerSubscriber;


    var InnerSubscriber_1 = {
    	InnerSubscriber: InnerSubscriber_2
    };

    var InnerSubscriber$1 = /*#__PURE__*/Object.freeze({
        default: InnerSubscriber_1,
        __moduleExports: InnerSubscriber_1,
        InnerSubscriber: InnerSubscriber_2
    });

    var isArrayLike_1$1 = ( isArrayLike$1 && isArrayLike ) || isArrayLike$1;

    var isPromise_1$1 = ( isPromise$1 && isPromise_1 ) || isPromise$1;

    var iterator_1$1 = ( iterator$1 && iterator ) || iterator$1;

    var InnerSubscriber_1$1 = ( InnerSubscriber$1 && InnerSubscriber_1 ) || InnerSubscriber$1;

    function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
        var destination = new InnerSubscriber_1$1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
        if (destination.closed) {
            return null;
        }
        if (result instanceof Observable_1$1.Observable) {
            if (result._isScalar) {
                destination.next(result.value);
                destination.complete();
                return null;
            }
            else {
                destination.syncErrorThrowable = true;
                return result.subscribe(destination);
            }
        }
        else if (isArrayLike_1$1.isArrayLike(result)) {
            for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
                destination.next(result[i]);
            }
            if (!destination.closed) {
                destination.complete();
            }
        }
        else if (isPromise_1$1.isPromise(result)) {
            result.then(function (value) {
                if (!destination.closed) {
                    destination.next(value);
                    destination.complete();
                }
            }, function (err) { return destination.error(err); })
                .then(null, function (err) {
                // Escaping the Promise trap: globally throw unhandled errors
                root_1$1.root.setTimeout(function () { throw err; });
            });
            return destination;
        }
        else if (result && typeof result[iterator_1$1.iterator] === 'function') {
            var iterator = result[iterator_1$1.iterator]();
            do {
                var item = iterator.next();
                if (item.done) {
                    destination.complete();
                    break;
                }
                destination.next(item.value);
                if (destination.closed) {
                    break;
                }
            } while (true);
        }
        else if (result && typeof result[observable_1$1.observable] === 'function') {
            var obs = result[observable_1$1.observable]();
            if (typeof obs.subscribe !== 'function') {
                destination.error(new TypeError('Provided object does not correctly implement Symbol.observable'));
            }
            else {
                return obs.subscribe(new InnerSubscriber_1$1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
            }
        }
        else {
            var value = isObject_1$1.isObject(result) ? 'an invalid object' : "'" + result + "'";
            var msg = ("You provided " + value + " where a stream was expected.")
                + ' You can provide an Observable, Promise, Array, or Iterable.';
            destination.error(new TypeError(msg));
        }
        return null;
    }
    var subscribeToResult_2 = subscribeToResult;


    var subscribeToResult_1 = {
    	subscribeToResult: subscribeToResult_2
    };

    var subscribeToResult$1 = /*#__PURE__*/Object.freeze({
        default: subscribeToResult_1,
        __moduleExports: subscribeToResult_1,
        subscribeToResult: subscribeToResult_2
    });

    var __extends$12 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var OuterSubscriber = (function (_super) {
        __extends$12(OuterSubscriber, _super);
        function OuterSubscriber() {
            _super.apply(this, arguments);
        }
        OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.destination.next(innerValue);
        };
        OuterSubscriber.prototype.notifyError = function (error, innerSub) {
            this.destination.error(error);
        };
        OuterSubscriber.prototype.notifyComplete = function (innerSub) {
            this.destination.complete();
        };
        return OuterSubscriber;
    }(Subscriber_1$1.Subscriber));
    var OuterSubscriber_2 = OuterSubscriber;


    var OuterSubscriber_1 = {
    	OuterSubscriber: OuterSubscriber_2
    };

    var OuterSubscriber$1 = /*#__PURE__*/Object.freeze({
        default: OuterSubscriber_1,
        __moduleExports: OuterSubscriber_1,
        OuterSubscriber: OuterSubscriber_2
    });

    var EmptyObservable_1$1 = ( EmptyObservable$1 && EmptyObservable_1 ) || EmptyObservable$1;

    var subscribeToResult_1$1 = ( subscribeToResult$1 && subscribeToResult_1 ) || subscribeToResult$1;

    var OuterSubscriber_1$1 = ( OuterSubscriber$1 && OuterSubscriber_1 ) || OuterSubscriber$1;

    var __extends$13 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };





    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ForkJoinObservable = (function (_super) {
        __extends$13(ForkJoinObservable, _super);
        function ForkJoinObservable(sources, resultSelector) {
            _super.call(this);
            this.sources = sources;
            this.resultSelector = resultSelector;
        }
        /* tslint:enable:max-line-length */
        /**
         * Joins last values emitted by passed Observables.
         *
         * <span class="informal">Wait for Observables to complete and then combine last values they emitted.</span>
         *
         * <img src="./img/forkJoin.png" width="100%">
         *
         * `forkJoin` is an operator that takes any number of Observables which can be passed either as an array
         * or directly as arguments. If no input Observables are provided, resulting stream will complete
         * immediately.
         *
         * `forkJoin` will wait for all passed Observables to complete and then it will emit an array with last
         * values from corresponding Observables. So if you pass `n` Observables to the operator, resulting
         * array will have `n` values, where first value is the last thing emitted by the first Observable,
         * second value is the last thing emitted by the second Observable and so on. That means `forkJoin` will
         * not emit more than once and it will complete after that. If you need to emit combined values not only
         * at the end of lifecycle of passed Observables, but also throughout it, try out {@link combineLatest}
         * or {@link zip} instead.
         *
         * In order for resulting array to have the same length as the number of input Observables, whenever any of
         * that Observables completes without emitting any value, `forkJoin` will complete at that moment as well
         * and it will not emit anything either, even if it already has some last values from other Observables.
         * Conversely, if there is an Observable that never completes, `forkJoin` will never complete as well,
         * unless at any point some other Observable completes without emitting value, which brings us back to
         * the previous case. Overall, in order for `forkJoin` to emit a value, all Observables passed as arguments
         * have to emit something at least once and complete.
         *
         * If any input Observable errors at some point, `forkJoin` will error as well and all other Observables
         * will be immediately unsubscribed.
         *
         * Optionally `forkJoin` accepts project function, that will be called with values which normally
         * would land in emitted array. Whatever is returned by project function, will appear in output
         * Observable instead. This means that default project can be thought of as a function that takes
         * all its arguments and puts them into an array. Note that project function will be called only
         * when output Observable is supposed to emit a result.
         *
         * @example <caption>Use forkJoin with operator emitting immediately</caption>
         * const observable = Rx.Observable.forkJoin(
         *   Rx.Observable.of(1, 2, 3, 4),
         *   Rx.Observable.of(5, 6, 7, 8)
         * );
         * observable.subscribe(
         *   value => console.log(value),
         *   err => {},
         *   () => console.log('This is how it ends!')
         * );
         *
         * // Logs:
         * // [4, 8]
         * // "This is how it ends!"
         *
         *
         * @example <caption>Use forkJoin with operator emitting after some time</caption>
         * const observable = Rx.Observable.forkJoin(
         *   Rx.Observable.interval(1000).take(3), // emit 0, 1, 2 every second and complete
         *   Rx.Observable.interval(500).take(4) // emit 0, 1, 2, 3 every half a second and complete
         * );
         * observable.subscribe(
         *   value => console.log(value),
         *   err => {},
         *   () => console.log('This is how it ends!')
         * );
         *
         * // Logs:
         * // [2, 3] after 3 seconds
         * // "This is how it ends!" immediately after
         *
         *
         * @example <caption>Use forkJoin with project function</caption>
         * const observable = Rx.Observable.forkJoin(
         *   Rx.Observable.interval(1000).take(3), // emit 0, 1, 2 every second and complete
         *   Rx.Observable.interval(500).take(4), // emit 0, 1, 2, 3 every half a second and complete
         *   (n, m) => n + m
         * );
         * observable.subscribe(
         *   value => console.log(value),
         *   err => {},
         *   () => console.log('This is how it ends!')
         * );
         *
         * // Logs:
         * // 5 after 3 seconds
         * // "This is how it ends!" immediately after
         *
         * @see {@link combineLatest}
         * @see {@link zip}
         *
         * @param {...SubscribableOrPromise} sources Any number of Observables provided either as an array or as an arguments
         * passed directly to the operator.
         * @param {function} [project] Function that takes values emitted by input Observables and returns value
         * that will appear in resulting Observable instead of default array.
         * @return {Observable} Observable emitting either an array of last values emitted by passed Observables
         * or value from project function.
         * @static true
         * @name forkJoin
         * @owner Observable
         */
        ForkJoinObservable.create = function () {
            var sources = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                sources[_i - 0] = arguments[_i];
            }
            if (sources === null || arguments.length === 0) {
                return new EmptyObservable_1$1.EmptyObservable();
            }
            var resultSelector = null;
            if (typeof sources[sources.length - 1] === 'function') {
                resultSelector = sources.pop();
            }
            // if the first and only other argument besides the resultSelector is an array
            // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
            if (sources.length === 1 && isArray_1$1.isArray(sources[0])) {
                sources = sources[0];
            }
            if (sources.length === 0) {
                return new EmptyObservable_1$1.EmptyObservable();
            }
            return new ForkJoinObservable(sources, resultSelector);
        };
        /** @deprecated internal use only */ ForkJoinObservable.prototype._subscribe = function (subscriber) {
            return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
        };
        return ForkJoinObservable;
    }(Observable_1$1.Observable));
    var ForkJoinObservable_2 = ForkJoinObservable;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ForkJoinSubscriber = (function (_super) {
        __extends$13(ForkJoinSubscriber, _super);
        function ForkJoinSubscriber(destination, sources, resultSelector) {
            _super.call(this, destination);
            this.sources = sources;
            this.resultSelector = resultSelector;
            this.completed = 0;
            this.haveValues = 0;
            var len = sources.length;
            this.total = len;
            this.values = new Array(len);
            for (var i = 0; i < len; i++) {
                var source = sources[i];
                var innerSubscription = subscribeToResult_1$1.subscribeToResult(this, source, null, i);
                if (innerSubscription) {
                    innerSubscription.outerIndex = i;
                    this.add(innerSubscription);
                }
            }
        }
        ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
            this.values[outerIndex] = innerValue;
            if (!innerSub._hasValue) {
                innerSub._hasValue = true;
                this.haveValues++;
            }
        };
        ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
            var destination = this.destination;
            var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
            var len = values.length;
            if (!innerSub._hasValue) {
                destination.complete();
                return;
            }
            this.completed++;
            if (this.completed !== len) {
                return;
            }
            if (haveValues === len) {
                var value = resultSelector ? resultSelector.apply(this, values) : values;
                destination.next(value);
            }
            destination.complete();
        };
        return ForkJoinSubscriber;
    }(OuterSubscriber_1$1.OuterSubscriber));


    var ForkJoinObservable_1 = {
    	ForkJoinObservable: ForkJoinObservable_2
    };

    var ForkJoinObservable$1 = /*#__PURE__*/Object.freeze({
        default: ForkJoinObservable_1,
        __moduleExports: ForkJoinObservable_1,
        ForkJoinObservable: ForkJoinObservable_2
    });

    var ForkJoinObservable_1$1 = ( ForkJoinObservable$1 && ForkJoinObservable_1 ) || ForkJoinObservable$1;

    var forkJoin_1 = ForkJoinObservable_1$1.ForkJoinObservable.create;

    var __extends$14 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };


    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var PromiseObservable = (function (_super) {
        __extends$14(PromiseObservable, _super);
        function PromiseObservable(promise, scheduler) {
            _super.call(this);
            this.promise = promise;
            this.scheduler = scheduler;
        }
        /**
         * Converts a Promise to an Observable.
         *
         * <span class="informal">Returns an Observable that just emits the Promise's
         * resolved value, then completes.</span>
         *
         * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
         * Observable. If the Promise resolves with a value, the output Observable
         * emits that resolved value as a `next`, and then completes. If the Promise
         * is rejected, then the output Observable emits the corresponding Error.
         *
         * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
         * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
         * result.subscribe(x => console.log(x), e => console.error(e));
         *
         * @see {@link bindCallback}
         * @see {@link from}
         *
         * @param {PromiseLike<T>} promise The promise to be converted.
         * @param {Scheduler} [scheduler] An optional IScheduler to use for scheduling
         * the delivery of the resolved value (or the rejection).
         * @return {Observable<T>} An Observable which wraps the Promise.
         * @static true
         * @name fromPromise
         * @owner Observable
         */
        PromiseObservable.create = function (promise, scheduler) {
            return new PromiseObservable(promise, scheduler);
        };
        /** @deprecated internal use only */ PromiseObservable.prototype._subscribe = function (subscriber) {
            var _this = this;
            var promise = this.promise;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        subscriber.next(this.value);
                        subscriber.complete();
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.next(value);
                            subscriber.complete();
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.error(err);
                        }
                    })
                        .then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        root_1$1.root.setTimeout(function () { throw err; });
                    });
                }
            }
            else {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        return scheduler.schedule(dispatchNext$1, 0, { value: this.value, subscriber: subscriber });
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchNext$1, 0, { value: value, subscriber: subscriber }));
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                        }
                    })
                        .then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        root_1$1.root.setTimeout(function () { throw err; });
                    });
                }
            }
        };
        return PromiseObservable;
    }(Observable_1$1.Observable));
    var PromiseObservable_2 = PromiseObservable;
    function dispatchNext$1(arg) {
        var value = arg.value, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.error(err);
        }
    }


    var PromiseObservable_1 = {
    	PromiseObservable: PromiseObservable_2
    };

    var PromiseObservable$1 = /*#__PURE__*/Object.freeze({
        default: PromiseObservable_1,
        __moduleExports: PromiseObservable_1,
        PromiseObservable: PromiseObservable_2
    });

    var PromiseObservable_1$1 = ( PromiseObservable$1 && PromiseObservable_1 ) || PromiseObservable$1;

    var fromPromise_1 = PromiseObservable_1$1.PromiseObservable.create;

    var __extends$15 = (commonjsGlobal && commonjsGlobal.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var map_2 = map;
    var MapOperator = (function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    var MapOperator_1 = MapOperator;
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MapSubscriber = (function (_super) {
        __extends$15(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            _super.call(this, destination);
            this.project = project;
            this.count = 0;
            this.thisArg = thisArg || this;
        }
        // NOTE: This looks unoptimized, but it's actually purposefully NOT
        // using try/catch optimizations.
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber_1$1.Subscriber));


    var map_1 = {
    	map: map_2,
    	MapOperator: MapOperator_1
    };

    var map$1 = /*#__PURE__*/Object.freeze({
        default: map_1,
        __moduleExports: map_1,
        map: map_2,
        MapOperator: MapOperator_1
    });

    var map_1$1 = ( map$1 && map_1 ) || map$1;

    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map$2(project, thisArg) {
        return map_1$1.map(project, thisArg)(this);
    }
    var map_3 = map$2;

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _DOM = ((null));
    /**
     * @return {?}
     */
    function getDOM() {
        return _DOM;
    }
    /**
     * @param {?} adapter
     * @return {?}
     */
    /**
     * @param {?} adapter
     * @return {?}
     */
    function setRootDomAdapter(adapter) {
        if (!_DOM) {
            _DOM = adapter;
        }
    }
    /**
     * Provides DOM operations in an environment-agnostic way.
     *
     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     * @abstract
     */
    var DomAdapter = (function () {
        function DomAdapter() {
            this.resourceLoaderType = ((null));
        }
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.hasProperty = function (element, name) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setProperty = function (el, name, value) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.getProperty = function (el, name) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} methodName
         * @param {?} args
         * @return {?}
         */
        DomAdapter.prototype.invoke = function (el, methodName, args) { };
        /**
         * @abstract
         * @param {?} error
         * @return {?}
         */
        DomAdapter.prototype.logError = function (error) { };
        /**
         * @abstract
         * @param {?} error
         * @return {?}
         */
        DomAdapter.prototype.log = function (error) { };
        /**
         * @abstract
         * @param {?} error
         * @return {?}
         */
        DomAdapter.prototype.logGroup = function (error) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.logGroupEnd = function () { };
        Object.defineProperty(DomAdapter.prototype, "attrToPropMap", {
            /**
             * Maps attribute names to their corresponding property names for cases
             * where attribute name doesn't match property name.
             * @return {?}
             */
            get: function () { return this._attrToPropMap; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) { this._attrToPropMap = value; },
            enumerable: true,
            configurable: true
        });
        /**
         * @abstract
         * @param {?} nodeA
         * @param {?} nodeB
         * @return {?}
         */
        DomAdapter.prototype.contains = function (nodeA, nodeB) { };
        /**
         * @abstract
         * @param {?} templateHtml
         * @return {?}
         */
        DomAdapter.prototype.parse = function (templateHtml) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
        DomAdapter.prototype.querySelector = function (el, selector) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
        DomAdapter.prototype.querySelectorAll = function (el, selector) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} evt
         * @param {?} listener
         * @return {?}
         */
        DomAdapter.prototype.on = function (el, evt, listener) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} evt
         * @param {?} listener
         * @return {?}
         */
        DomAdapter.prototype.onAndCancel = function (el, evt, listener) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} evt
         * @return {?}
         */
        DomAdapter.prototype.dispatchEvent = function (el, evt) { };
        /**
         * @abstract
         * @param {?} eventType
         * @return {?}
         */
        DomAdapter.prototype.createMouseEvent = function (eventType) { };
        /**
         * @abstract
         * @param {?} eventType
         * @return {?}
         */
        DomAdapter.prototype.createEvent = function (eventType) { };
        /**
         * @abstract
         * @param {?} evt
         * @return {?}
         */
        DomAdapter.prototype.preventDefault = function (evt) { };
        /**
         * @abstract
         * @param {?} evt
         * @return {?}
         */
        DomAdapter.prototype.isPrevented = function (evt) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getInnerHTML = function (el) { };
        /**
         * Returns content if el is a <template> element, null otherwise.
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getTemplateContent = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getOuterHTML = function (el) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.nodeName = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.nodeValue = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.type = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.content = function (node) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.firstChild = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.nextSibling = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.parentElement = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.childNodes = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.childNodesAsList = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.clearNodes = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.appendChild = function (el, node) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.removeChild = function (el, node) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} newNode
         * @param {?} oldNode
         * @return {?}
         */
        DomAdapter.prototype.replaceChild = function (el, newNode, oldNode) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.remove = function (el) { };
        /**
         * @abstract
         * @param {?} parent
         * @param {?} ref
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.insertBefore = function (parent, ref, node) { };
        /**
         * @abstract
         * @param {?} parent
         * @param {?} ref
         * @param {?} nodes
         * @return {?}
         */
        DomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) { };
        /**
         * @abstract
         * @param {?} parent
         * @param {?} el
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.insertAfter = function (parent, el, node) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setInnerHTML = function (el, value) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getText = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setText = function (el, value) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getValue = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setValue = function (el, value) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getChecked = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setChecked = function (el, value) { };
        /**
         * @abstract
         * @param {?} text
         * @return {?}
         */
        DomAdapter.prototype.createComment = function (text) { };
        /**
         * @abstract
         * @param {?} html
         * @return {?}
         */
        DomAdapter.prototype.createTemplate = function (html) { };
        /**
         * @abstract
         * @param {?} tagName
         * @param {?=} doc
         * @return {?}
         */
        DomAdapter.prototype.createElement = function (tagName, doc) { };
        /**
         * @abstract
         * @param {?} ns
         * @param {?} tagName
         * @param {?=} doc
         * @return {?}
         */
        DomAdapter.prototype.createElementNS = function (ns, tagName, doc) { };
        /**
         * @abstract
         * @param {?} text
         * @param {?=} doc
         * @return {?}
         */
        DomAdapter.prototype.createTextNode = function (text, doc) { };
        /**
         * @abstract
         * @param {?} attrName
         * @param {?} attrValue
         * @param {?=} doc
         * @return {?}
         */
        DomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) { };
        /**
         * @abstract
         * @param {?} css
         * @param {?=} doc
         * @return {?}
         */
        DomAdapter.prototype.createStyleElement = function (css, doc) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.createShadowRoot = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getShadowRoot = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getHost = function (el) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getDistributedNodes = function (el) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.clone /*<T extends Node>*/ = function (node) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.getElementsByClassName = function (element, name) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.getElementsByTagName = function (element, name) { };
        /**
         * @abstract
         * @param {?} element
         * @return {?}
         */
        DomAdapter.prototype.classList = function (element) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        DomAdapter.prototype.addClass = function (element, className) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        DomAdapter.prototype.removeClass = function (element, className) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        DomAdapter.prototype.hasClass = function (element, className) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} styleName
         * @param {?} styleValue
         * @return {?}
         */
        DomAdapter.prototype.setStyle = function (element, styleName, styleValue) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */
        DomAdapter.prototype.removeStyle = function (element, styleName) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */
        DomAdapter.prototype.getStyle = function (element, styleName) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} styleName
         * @param {?=} styleValue
         * @return {?}
         */
        DomAdapter.prototype.hasStyle = function (element, styleName, styleValue) { };
        /**
         * @abstract
         * @param {?} element
         * @return {?}
         */
        DomAdapter.prototype.tagName = function (element) { };
        /**
         * @abstract
         * @param {?} element
         * @return {?}
         */
        DomAdapter.prototype.attributeMap = function (element) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.hasAttribute = function (element, attribute) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} ns
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.getAttribute = function (element, attribute) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} ns
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.getAttributeNS = function (element, ns, attribute) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setAttribute = function (element, name, value) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} ns
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setAttributeNS = function (element, ns, name, value) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.removeAttribute = function (element, attribute) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} ns
         * @param {?} attribute
         * @return {?}
         */
        DomAdapter.prototype.removeAttributeNS = function (element, ns, attribute) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.templateAwareRoot = function (el) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.createHtmlDocument = function () { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.getBoundingClientRect = function (el) { };
        /**
         * @abstract
         * @param {?} doc
         * @return {?}
         */
        DomAdapter.prototype.getTitle = function (doc) { };
        /**
         * @abstract
         * @param {?} doc
         * @param {?} newTitle
         * @return {?}
         */
        DomAdapter.prototype.setTitle = function (doc, newTitle) { };
        /**
         * @abstract
         * @param {?} n
         * @param {?} selector
         * @return {?}
         */
        DomAdapter.prototype.elementMatches = function (n, selector) { };
        /**
         * @abstract
         * @param {?} el
         * @return {?}
         */
        DomAdapter.prototype.isTemplateElement = function (el) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.isTextNode = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.isCommentNode = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.isElementNode = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.hasShadowRoot = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.isShadowRoot = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.importIntoDoc /*<T extends Node>*/ = function (node) { };
        /**
         * @abstract
         * @param {?} node
         * @return {?}
         */
        DomAdapter.prototype.adoptNode /*<T extends Node>*/ = function (node) { };
        /**
         * @abstract
         * @param {?} element
         * @return {?}
         */
        DomAdapter.prototype.getHref = function (element) { };
        /**
         * @abstract
         * @param {?} event
         * @return {?}
         */
        DomAdapter.prototype.getEventKey = function (event) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} baseUrl
         * @param {?} href
         * @return {?}
         */
        DomAdapter.prototype.resolveAndSetHref = function (element, baseUrl, href) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.supportsDOMEvents = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.supportsNativeShadowDOM = function () { };
        /**
         * @abstract
         * @param {?} doc
         * @param {?} target
         * @return {?}
         */
        DomAdapter.prototype.getGlobalEventTarget = function (doc, target) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.getHistory = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.getLocation = function () { };
        /**
         * @abstract
         * @param {?} doc
         * @return {?}
         */
        DomAdapter.prototype.getBaseHref = function (doc) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.resetBaseElement = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.getUserAgent = function () { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setData = function (element, name, value) { };
        /**
         * @abstract
         * @param {?} element
         * @return {?}
         */
        DomAdapter.prototype.getComputedStyle = function (element) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.getData = function (element, name) { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.supportsWebAnimation = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.performanceNow = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.getAnimationPrefix = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.getTransitionEnd = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.supportsAnimation = function () { };
        /**
         * @abstract
         * @return {?}
         */
        DomAdapter.prototype.supportsCookies = function () { };
        /**
         * @abstract
         * @param {?} name
         * @return {?}
         */
        DomAdapter.prototype.getCookie = function (name) { };
        /**
         * @abstract
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DomAdapter.prototype.setCookie = function (name, value) { };
        return DomAdapter;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provides DOM operations in any browser environment.
     *
     * \@security Tread carefully! Interacting with the DOM directly is dangerous and
     * can introduce XSS risks.
     * @abstract
     */
    var GenericBrowserDomAdapter = (function (_super) {
        __extends(GenericBrowserDomAdapter, _super);
        function GenericBrowserDomAdapter() {
            var _this = _super.call(this) || this;
            _this._animationPrefix = null;
            _this._transitionEnd = null;
            try {
                var element_1 = _this.createElement('div', document);
                if (_this.getStyle(element_1, 'animationName') != null) {
                    _this._animationPrefix = '';
                }
                else {
                    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (_this.getStyle(element_1, domPrefixes[i] + 'AnimationName') != null) {
                            _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            break;
                        }
                    }
                }
                var transEndEventNames_1 = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend'
                };
                Object.keys(transEndEventNames_1).forEach(function (key) {
                    if (_this.getStyle(element_1, key) != null) {
                        _this._transitionEnd = transEndEventNames_1[key];
                    }
                });
            }
            catch (e) {
                _this._animationPrefix = null;
                _this._transitionEnd = null;
            }
            return _this;
        }
        /**
         * @param {?} el
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.getDistributedNodes = function (el) { return ((el)).getDistributedNodes(); };
        /**
         * @param {?} el
         * @param {?} baseUrl
         * @param {?} href
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
        };
        /**
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.supportsDOMEvents = function () { return true; };
        /**
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.supportsNativeShadowDOM = function () {
            return typeof ((document.body)).createShadowRoot === 'function';
        };
        /**
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.getAnimationPrefix = function () { return this._animationPrefix ? this._animationPrefix : ''; };
        /**
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.getTransitionEnd = function () { return this._transitionEnd ? this._transitionEnd : ''; };
        /**
         * @return {?}
         */
        GenericBrowserDomAdapter.prototype.supportsAnimation = function () {
            return this._animationPrefix != null && this._transitionEnd != null;
        };
        return GenericBrowserDomAdapter;
    }(DomAdapter));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _attrToPropMap = {
        'class': 'className',
        'innerHtml': 'innerHTML',
        'readonly': 'readOnly',
        'tabindex': 'tabIndex',
    };
    var DOM_KEY_LOCATION_NUMPAD = 3;
    // Map to convert some key or keyIdentifier values to what will be returned by getEventKey
    var _keyMap = {
        // The following values are here for cross-browser compatibility and to match the W3C standard
        // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
        '\b': 'Backspace',
        '\t': 'Tab',
        '\x7F': 'Delete',
        '\x1B': 'Escape',
        'Del': 'Delete',
        'Esc': 'Escape',
        'Left': 'ArrowLeft',
        'Right': 'ArrowRight',
        'Up': 'ArrowUp',
        'Down': 'ArrowDown',
        'Menu': 'ContextMenu',
        'Scroll': 'ScrollLock',
        'Win': 'OS'
    };
    // There is a bug in Chrome for numeric keypad keys:
    // https://code.google.com/p/chromium/issues/detail?id=155654
    // 1, 2, 3 ... are reported as A, B, C ...
    var _chromeNumKeyPadMap = {
        'A': '1',
        'B': '2',
        'C': '3',
        'D': '4',
        'E': '5',
        'F': '6',
        'G': '7',
        'H': '8',
        'I': '9',
        'J': '*',
        'K': '+',
        'M': '-',
        'N': '.',
        'O': '/',
        '\x60': '0',
        '\x90': 'NumLock'
    };
    var nodeContains;
    if (core.ɵglobal['Node']) {
        nodeContains = core.ɵglobal['Node'].prototype.contains || function (node) {
            return !!(this.compareDocumentPosition(node) & 16);
        };
    }
    var BrowserDomAdapter = (function (_super) {
        __extends(BrowserDomAdapter, _super);
        function BrowserDomAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} templateHtml
         * @return {?}
         */
        BrowserDomAdapter.prototype.parse = function (templateHtml) { throw new Error('parse not implemented'); };
        /**
         * @return {?}
         */
        BrowserDomAdapter.makeCurrent = function () { setRootDomAdapter(new BrowserDomAdapter()); };
        /**
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasProperty = function (element, name) { return name in element; };
        /**
         * @param {?} el
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setProperty = function (el, name, value) { ((el))[name] = value; };
        /**
         * @param {?} el
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getProperty = function (el, name) { return ((el))[name]; };
        /**
         * @param {?} el
         * @param {?} methodName
         * @param {?} args
         * @return {?}
         */
        BrowserDomAdapter.prototype.invoke = function (el, methodName, args) { ((el))[methodName].apply(((el)), args); };
        /**
         * @param {?} error
         * @return {?}
         */
        BrowserDomAdapter.prototype.logError = function (error) {
            if (window.console) {
                if (console.error) {
                    console.error(error);
                }
                else {
                    console.log(error);
                }
            }
        };
        /**
         * @param {?} error
         * @return {?}
         */
        BrowserDomAdapter.prototype.log = function (error) {
            if (window.console) {
                window.console.log && window.console.log(error);
            }
        };
        /**
         * @param {?} error
         * @return {?}
         */
        BrowserDomAdapter.prototype.logGroup = function (error) {
            if (window.console) {
                window.console.group && window.console.group(error);
            }
        };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.logGroupEnd = function () {
            if (window.console) {
                window.console.groupEnd && window.console.groupEnd();
            }
        };
        Object.defineProperty(BrowserDomAdapter.prototype, "attrToPropMap", {
            /**
             * @return {?}
             */
            get: function () { return _attrToPropMap; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} nodeA
         * @param {?} nodeB
         * @return {?}
         */
        BrowserDomAdapter.prototype.contains = function (nodeA, nodeB) { return nodeContains.call(nodeA, nodeB); };
        /**
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
        BrowserDomAdapter.prototype.querySelector = function (el, selector) { return el.querySelector(selector); };
        /**
         * @param {?} el
         * @param {?} selector
         * @return {?}
         */
        BrowserDomAdapter.prototype.querySelectorAll = function (el, selector) { return el.querySelectorAll(selector); };
        /**
         * @param {?} el
         * @param {?} evt
         * @param {?} listener
         * @return {?}
         */
        BrowserDomAdapter.prototype.on = function (el, evt, listener) { el.addEventListener(evt, listener, false); };
        /**
         * @param {?} el
         * @param {?} evt
         * @param {?} listener
         * @return {?}
         */
        BrowserDomAdapter.prototype.onAndCancel = function (el, evt, listener) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () { el.removeEventListener(evt, listener, false); };
        };
        /**
         * @param {?} el
         * @param {?} evt
         * @return {?}
         */
        BrowserDomAdapter.prototype.dispatchEvent = function (el, evt) { el.dispatchEvent(evt); };
        /**
         * @param {?} eventType
         * @return {?}
         */
        BrowserDomAdapter.prototype.createMouseEvent = function (eventType) {
            var /** @type {?} */ evt = document.createEvent('MouseEvent');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        /**
         * @param {?} eventType
         * @return {?}
         */
        BrowserDomAdapter.prototype.createEvent = function (eventType) {
            var /** @type {?} */ evt = document.createEvent('Event');
            evt.initEvent(eventType, true, true);
            return evt;
        };
        /**
         * @param {?} evt
         * @return {?}
         */
        BrowserDomAdapter.prototype.preventDefault = function (evt) {
            evt.preventDefault();
            evt.returnValue = false;
        };
        /**
         * @param {?} evt
         * @return {?}
         */
        BrowserDomAdapter.prototype.isPrevented = function (evt) {
            return evt.defaultPrevented || evt.returnValue != null && !evt.returnValue;
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getInnerHTML = function (el) { return el.innerHTML; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getTemplateContent = function (el) {
            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getOuterHTML = function (el) { return el.outerHTML; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.nodeName = function (node) { return node.nodeName; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.type = function (node) { return node.type; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.content = function (node) {
            if (this.hasProperty(node, 'content')) {
                return ((node)).content;
            }
            else {
                return node;
            }
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.parentElement = function (el) { return el.parentNode; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.childNodesAsList = function (el) {
            var /** @type {?} */ childNodes = el.childNodes;
            var /** @type {?} */ res = new Array(childNodes.length);
            for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
                res[i] = childNodes[i];
            }
            return res;
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.clearNodes = function (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        };
        /**
         * @param {?} el
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.appendChild = function (el, node) { el.appendChild(node); };
        /**
         * @param {?} el
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.removeChild = function (el, node) { el.removeChild(node); };
        /**
         * @param {?} el
         * @param {?} newChild
         * @param {?} oldChild
         * @return {?}
         */
        BrowserDomAdapter.prototype.replaceChild = function (el, newChild, oldChild) { el.replaceChild(newChild, oldChild); };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.remove = function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        };
        /**
         * @param {?} parent
         * @param {?} ref
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.insertBefore = function (parent, ref, node) { parent.insertBefore(node, ref); };
        /**
         * @param {?} parent
         * @param {?} ref
         * @param {?} nodes
         * @return {?}
         */
        BrowserDomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) {
            nodes.forEach(function (n) { return parent.insertBefore(n, ref); });
        };
        /**
         * @param {?} parent
         * @param {?} ref
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.insertAfter = function (parent, ref, node) { parent.insertBefore(node, ref.nextSibling); };
        /**
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setInnerHTML = function (el, value) { el.innerHTML = value; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getText = function (el) { return el.textContent; };
        /**
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setText = function (el, value) { el.textContent = value; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getValue = function (el) { return el.value; };
        /**
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setValue = function (el, value) { el.value = value; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getChecked = function (el) { return el.checked; };
        /**
         * @param {?} el
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
        /**
         * @param {?} text
         * @return {?}
         */
        BrowserDomAdapter.prototype.createComment = function (text) { return document.createComment(text); };
        /**
         * @param {?} html
         * @return {?}
         */
        BrowserDomAdapter.prototype.createTemplate = function (html) {
            var /** @type {?} */ t = document.createElement('template');
            t.innerHTML = html;
            return t;
        };
        /**
         * @param {?} tagName
         * @param {?=} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.createElement = function (tagName, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createElement(tagName);
        };
        /**
         * @param {?} ns
         * @param {?} tagName
         * @param {?=} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.createElementNS = function (ns, tagName, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createElementNS(ns, tagName);
        };
        /**
         * @param {?} text
         * @param {?=} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.createTextNode = function (text, doc) {
            if (doc === void 0) { doc = document; }
            return doc.createTextNode(text);
        };
        /**
         * @param {?} attrName
         * @param {?} attrValue
         * @param {?=} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.createScriptTag = function (attrName, attrValue, doc) {
            if (doc === void 0) { doc = document; }
            var /** @type {?} */ el = (doc.createElement('SCRIPT'));
            el.setAttribute(attrName, attrValue);
            return el;
        };
        /**
         * @param {?} css
         * @param {?=} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.createStyleElement = function (css, doc) {
            if (doc === void 0) { doc = document; }
            var /** @type {?} */ style = (doc.createElement('style'));
            this.appendChild(style, this.createTextNode(css));
            return style;
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.createShadowRoot = function (el) { return ((el)).createShadowRoot(); };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getShadowRoot = function (el) { return ((el)).shadowRoot; };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getHost = function (el) { return ((el)).host; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.clone = function (node) { return node.cloneNode(true); };
        /**
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getElementsByClassName = function (element, name) {
            return element.getElementsByClassName(name);
        };
        /**
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getElementsByTagName = function (element, name) {
            return element.getElementsByTagName(name);
        };
        /**
         * @param {?} element
         * @return {?}
         */
        BrowserDomAdapter.prototype.classList = function (element) { return Array.prototype.slice.call(element.classList, 0); };
        /**
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        BrowserDomAdapter.prototype.addClass = function (element, className) { element.classList.add(className); };
        /**
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        BrowserDomAdapter.prototype.removeClass = function (element, className) { element.classList.remove(className); };
        /**
         * @param {?} element
         * @param {?} className
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasClass = function (element, className) {
            return element.classList.contains(className);
        };
        /**
         * @param {?} element
         * @param {?} styleName
         * @param {?} styleValue
         * @return {?}
         */
        BrowserDomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
            element.style[styleName] = styleValue;
        };
        /**
         * @param {?} element
         * @param {?} stylename
         * @return {?}
         */
        BrowserDomAdapter.prototype.removeStyle = function (element, stylename) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[stylename] = '';
        };
        /**
         * @param {?} element
         * @param {?} stylename
         * @return {?}
         */
        BrowserDomAdapter.prototype.getStyle = function (element, stylename) { return element.style[stylename]; };
        /**
         * @param {?} element
         * @param {?} styleName
         * @param {?=} styleValue
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
            var /** @type {?} */ value = this.getStyle(element, styleName) || '';
            return styleValue ? value == styleValue : value.length > 0;
        };
        /**
         * @param {?} element
         * @return {?}
         */
        BrowserDomAdapter.prototype.tagName = function (element) { return element.tagName; };
        /**
         * @param {?} element
         * @return {?}
         */
        BrowserDomAdapter.prototype.attributeMap = function (element) {
            var /** @type {?} */ res = new Map();
            var /** @type {?} */ elAttrs = element.attributes;
            for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
                var /** @type {?} */ attrib = elAttrs[i];
                res.set(attrib.name, attrib.value);
            }
            return res;
        };
        /**
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasAttribute = function (element, attribute) {
            return element.hasAttribute(attribute);
        };
        /**
         * @param {?} element
         * @param {?} ns
         * @param {?} attribute
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
            return element.hasAttributeNS(ns, attribute);
        };
        /**
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        BrowserDomAdapter.prototype.getAttribute = function (element, attribute) {
            return element.getAttribute(attribute);
        };
        /**
         * @param {?} element
         * @param {?} ns
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getAttributeNS = function (element, ns, name) {
            return element.getAttributeNS(ns, name);
        };
        /**
         * @param {?} element
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setAttribute = function (element, name, value) { element.setAttribute(name, value); };
        /**
         * @param {?} element
         * @param {?} ns
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setAttributeNS = function (element, ns, name, value) {
            element.setAttributeNS(ns, name, value);
        };
        /**
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */
        BrowserDomAdapter.prototype.removeAttribute = function (element, attribute) { element.removeAttribute(attribute); };
        /**
         * @param {?} element
         * @param {?} ns
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.removeAttributeNS = function (element, ns, name) {
            element.removeAttributeNS(ns, name);
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.templateAwareRoot = function (el) { return this.isTemplateElement(el) ? this.content(el) : el; };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.createHtmlDocument = function () {
            return document.implementation.createHTMLDocument('fakeTitle');
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getBoundingClientRect = function (el) {
            try {
                return el.getBoundingClientRect();
            }
            catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
        };
        /**
         * @param {?} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.getTitle = function (doc) { return document.title; };
        /**
         * @param {?} doc
         * @param {?} newTitle
         * @return {?}
         */
        BrowserDomAdapter.prototype.setTitle = function (doc, newTitle) { document.title = newTitle || ''; };
        /**
         * @param {?} n
         * @param {?} selector
         * @return {?}
         */
        BrowserDomAdapter.prototype.elementMatches = function (n, selector) {
            if (n instanceof HTMLElement) {
                return n.matches && n.matches(selector) ||
                    n.msMatchesSelector && n.msMatchesSelector(selector) ||
                    n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
            }
            return false;
        };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.isTemplateElement = function (el) {
            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
        };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.isCommentNode = function (node) { return node.nodeType === Node.COMMENT_NODE; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.hasShadowRoot = function (node) {
            return node.shadowRoot != null && node instanceof HTMLElement;
        };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.isShadowRoot = function (node) { return node instanceof DocumentFragment; };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.importIntoDoc = function (node) { return document.importNode(this.templateAwareRoot(node), true); };
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserDomAdapter.prototype.adoptNode = function (node) { return document.adoptNode(node); };
        /**
         * @param {?} el
         * @return {?}
         */
        BrowserDomAdapter.prototype.getHref = function (el) { return ((el)).href; };
        /**
         * @param {?} event
         * @return {?}
         */
        BrowserDomAdapter.prototype.getEventKey = function (event) {
            var /** @type {?} */ key = event.key;
            if (key == null) {
                key = event.keyIdentifier;
                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                // Safari cf
                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                if (key == null) {
                    return 'Unidentified';
                }
                if (key.startsWith('U+')) {
                    key = String.fromCharCode(parseInt(key.substring(2), 16));
                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                        // There is a bug in Chrome for numeric keypad keys:
                        // https://code.google.com/p/chromium/issues/detail?id=155654
                        // 1, 2, 3 ... are reported as A, B, C ...
                        key = ((_chromeNumKeyPadMap))[key];
                    }
                }
            }
            return _keyMap[key] || key;
        };
        /**
         * @param {?} doc
         * @param {?} target
         * @return {?}
         */
        BrowserDomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
            if (target === 'window') {
                return window;
            }
            if (target === 'document') {
                return document;
            }
            if (target === 'body') {
                return document.body;
            }
            return null;
        };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.getHistory = function () { return window.history; };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.getLocation = function () { return window.location; };
        /**
         * @param {?} doc
         * @return {?}
         */
        BrowserDomAdapter.prototype.getBaseHref = function (doc) {
            var /** @type {?} */ href = getBaseElementHref();
            return href == null ? null : relativePath(href);
        };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.resetBaseElement = function () { baseElement = null; };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.getUserAgent = function () { return window.navigator.userAgent; };
        /**
         * @param {?} element
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setData = function (element, name, value) {
            this.setAttribute(element, 'data-' + name, value);
        };
        /**
         * @param {?} element
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getData = function (element, name) {
            return this.getAttribute(element, 'data-' + name);
        };
        /**
         * @param {?} element
         * @return {?}
         */
        BrowserDomAdapter.prototype.getComputedStyle = function (element) { return getComputedStyle(element); };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.supportsWebAnimation = function () {
            return typeof ((Element)).prototype['animate'] === 'function';
        };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.performanceNow = function () {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            return window.performance && window.performance.now ? window.performance.now() :
                new Date().getTime();
        };
        /**
         * @return {?}
         */
        BrowserDomAdapter.prototype.supportsCookies = function () { return true; };
        /**
         * @param {?} name
         * @return {?}
         */
        BrowserDomAdapter.prototype.getCookie = function (name) { return parseCookieValue(document.cookie, name); };
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        BrowserDomAdapter.prototype.setCookie = function (name, value) {
            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
            // not clear other cookies.
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        };
        return BrowserDomAdapter;
    }(GenericBrowserDomAdapter));
    var baseElement = null;
    /**
     * @return {?}
     */
    function getBaseElementHref() {
        if (!baseElement) {
            baseElement = ((document.querySelector('base')));
            if (!baseElement) {
                return null;
            }
        }
        return baseElement.getAttribute('href');
    }
    // based on urlUtils.js in AngularJS 1
    var urlParsingNode;
    /**
     * @param {?} url
     * @return {?}
     */
    function relativePath(url) {
        if (!urlParsingNode) {
            urlParsingNode = document.createElement('a');
        }
        urlParsingNode.setAttribute('href', url);
        return (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname :
            '/' + urlParsingNode.pathname;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @deprecated import from `\@angular/common` instead.
     */
    var DOCUMENT$1 = DOCUMENT;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @return {?}
     */
    function supportsState() {
        return !!window.history.pushState;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
     * This class should not be used directly by an application developer. Instead, use
     * {\@link Location}.
     */
    var BrowserPlatformLocation = (function (_super) {
        __extends(BrowserPlatformLocation, _super);
        /**
         * @param {?} _doc
         */
        function BrowserPlatformLocation(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._init();
            return _this;
        }
        /**
         * \@internal
         * @return {?}
         */
        BrowserPlatformLocation.prototype._init = function () {
            this._location = getDOM().getLocation();
            this._history = getDOM().getHistory();
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "location", {
            /**
             * @return {?}
             */
            get: function () { return this._location; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BrowserPlatformLocation.prototype.getBaseHrefFromDOM = function () { return ((getDOM().getBaseHref(this._doc))); };
        /**
         * @param {?} fn
         * @return {?}
         */
        BrowserPlatformLocation.prototype.onPopState = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', fn, false);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        BrowserPlatformLocation.prototype.onHashChange = function (fn) {
            getDOM().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', fn, false);
        };
        Object.defineProperty(BrowserPlatformLocation.prototype, "pathname", {
            /**
             * @return {?}
             */
            get: function () { return this._location.pathname; },
            /**
             * @param {?} newPath
             * @return {?}
             */
            set: function (newPath) { this._location.pathname = newPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "search", {
            /**
             * @return {?}
             */
            get: function () { return this._location.search; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BrowserPlatformLocation.prototype, "hash", {
            /**
             * @return {?}
             */
            get: function () { return this._location.hash; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @return {?}
         */
        BrowserPlatformLocation.prototype.pushState = function (state, title, url) {
            if (supportsState()) {
                this._history.pushState(state, title, url);
            }
            else {
                this._location.hash = url;
            }
        };
        /**
         * @param {?} state
         * @param {?} title
         * @param {?} url
         * @return {?}
         */
        BrowserPlatformLocation.prototype.replaceState = function (state, title, url) {
            if (supportsState()) {
                this._history.replaceState(state, title, url);
            }
            else {
                this._location.hash = url;
            }
        };
        /**
         * @return {?}
         */
        BrowserPlatformLocation.prototype.forward = function () { this._history.forward(); };
        /**
         * @return {?}
         */
        BrowserPlatformLocation.prototype.back = function () { this._history.back(); };
        return BrowserPlatformLocation;
    }(PlatformLocation));
    BrowserPlatformLocation.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    BrowserPlatformLocation.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * An id that identifies a particular application being bootstrapped, that should
     * match across the client/server boundary.
     */
    var TRANSITION_ID = new core.InjectionToken('TRANSITION_ID');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var BrowserGetTestability = (function () {
        function BrowserGetTestability() {
        }
        /**
         * @return {?}
         */
        BrowserGetTestability.init = function () { core.setTestabilityGetter(new BrowserGetTestability()); };
        /**
         * @param {?} registry
         * @return {?}
         */
        BrowserGetTestability.prototype.addToWindow = function (registry) {
            core.ɵglobal['getAngularTestability'] = function (elem, findInAncestors) {
                if (findInAncestors === void 0) { findInAncestors = true; }
                var /** @type {?} */ testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return testability;
            };
            core.ɵglobal['getAllAngularTestabilities'] = function () { return registry.getAllTestabilities(); };
            core.ɵglobal['getAllAngularRootElements'] = function () { return registry.getAllRootElements(); };
            var /** @type {?} */ whenAllStable = function (callback /** TODO #9100 */) {
                var /** @type {?} */ testabilities = core.ɵglobal['getAllAngularTestabilities']();
                var /** @type {?} */ count = testabilities.length;
                var /** @type {?} */ didWork = false;
                var /** @type {?} */ decrement = function (didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!core.ɵglobal['frameworkStabilizers']) {
                core.ɵglobal['frameworkStabilizers'] = [];
            }
            core.ɵglobal['frameworkStabilizers'].push(whenAllStable);
        };
        /**
         * @param {?} registry
         * @param {?} elem
         * @param {?} findInAncestors
         * @return {?}
         */
        BrowserGetTestability.prototype.findTestabilityInTree = function (registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var /** @type {?} */ t = registry.getTestability(elem);
            if (t != null) {
                return t;
            }
            else if (!findInAncestors) {
                return null;
            }
            if (getDOM().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, getDOM().getHost(elem), true);
            }
            return this.findTestabilityInTree(registry, getDOM().parentElement(elem), true);
        };
        return BrowserGetTestability;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} input
     * @return {?}
     */
    /**
     * @param {?} input
     * @return {?}
     */
    /**
     * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
     * `name` is `'probe'`.
     * @param {?} name Name under which it will be exported. Keep in mind this will be a property of the
     * global `ng` object.
     * @param {?} value The value to export.
     * @return {?}
     */
    function exportNgVar(name, value) {
        if (!ng) {
            core.ɵglobal['ng'] = ng = ((core.ɵglobal['ng'])) || {};
        }
        ng[name] = value;
    }
    var ng;
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CORE_TOKENS = {
        'ApplicationRef': core.ApplicationRef,
        'NgZone': core.NgZone,
    };
    var INSPECT_GLOBAL_NAME = 'probe';
    var CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
    /**
     * Returns a {\@link DebugElement} for the given native DOM element, or
     * null if the given native element does not have an Angular view associated
     * with it.
     * @param {?} element
     * @return {?}
     */
    function inspectNativeElement(element) {
        return core.getDebugNode(element);
    }
    /**
     * Deprecated. Use the one from '\@angular/core'.
     * @deprecated
     */
    var NgProbeToken$1 = (function () {
        /**
         * @param {?} name
         * @param {?} token
         */
        function NgProbeToken$1(name, token) {
            this.name = name;
            this.token = token;
        }
        return NgProbeToken$1;
    }());
    /**
     * @param {?} extraTokens
     * @param {?} coreTokens
     * @return {?}
     */
    function _createNgProbe(extraTokens, coreTokens) {
        var /** @type {?} */ tokens = (extraTokens || []).concat(coreTokens || []);
        exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
        exportNgVar(CORE_TOKENS_GLOBAL_NAME, Object.assign({}, CORE_TOKENS, _ngProbeTokensToMap(tokens || [])));
        return function () { return inspectNativeElement; };
    }
    /**
     * @param {?} tokens
     * @return {?}
     */
    function _ngProbeTokensToMap(tokens) {
        return tokens.reduce(function (prev, t) { return (prev[t.name] = t.token, prev); }, {});
    }
    /**
     * Providers which support debugging Angular applications (e.g. via `ng.probe`).
     */
    var ELEMENT_PROBE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: _createNgProbe,
            deps: [
                [NgProbeToken$1, new core.Optional()],
                [core.NgProbeToken, new core.Optional()],
            ],
            multi: true,
        },
    ];
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@stable
     */
    var EVENT_MANAGER_PLUGINS = new core.InjectionToken('EventManagerPlugins');
    /**
     * @abstract
     */
    var EventManagerPlugin = (function () {
        /**
         * @param {?} _doc
         */
        function EventManagerPlugin(_doc) {
            this._doc = _doc;
        }
        /**
         * @abstract
         * @param {?} eventName
         * @return {?}
         */
        EventManagerPlugin.prototype.supports = function (eventName) { };
        /**
         * @abstract
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */
        EventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) { };
        /**
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */
        EventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            var /** @type {?} */ target = getDOM().getGlobalEventTarget(this._doc, element);
            if (!target) {
                throw new Error("Unsupported event target " + target + " for event " + eventName);
            }
            return this.addEventListener(target, eventName, handler);
        };
        return EventManagerPlugin;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SharedStylesHost = (function () {
        function SharedStylesHost() {
            /**
             * \@internal
             */
            this._stylesSet = new Set();
        }
        /**
         * @param {?} styles
         * @return {?}
         */
        SharedStylesHost.prototype.addStyles = function (styles) {
            var _this = this;
            var /** @type {?} */ additions = new Set();
            styles.forEach(function (style) {
                if (!_this._stylesSet.has(style)) {
                    _this._stylesSet.add(style);
                    additions.add(style);
                }
            });
            this.onStylesAdded(additions);
        };
        /**
         * @param {?} additions
         * @return {?}
         */
        SharedStylesHost.prototype.onStylesAdded = function (additions) { };
        /**
         * @return {?}
         */
        SharedStylesHost.prototype.getAllStyles = function () { return Array.from(this._stylesSet); };
        return SharedStylesHost;
    }());
    SharedStylesHost.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    SharedStylesHost.ctorParameters = function () { return []; };
    var DomSharedStylesHost = (function (_super) {
        __extends(DomSharedStylesHost, _super);
        /**
         * @param {?} _doc
         */
        function DomSharedStylesHost(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            _this._hostNodes = new Set();
            _this._styleNodes = new Set();
            _this._hostNodes.add(_doc.head);
            return _this;
        }
        /**
         * @param {?} styles
         * @param {?} host
         * @return {?}
         */
        DomSharedStylesHost.prototype._addStylesToHost = function (styles, host) {
            var _this = this;
            styles.forEach(function (style) {
                var /** @type {?} */ styleEl = _this._doc.createElement('style');
                styleEl.textContent = style;
                _this._styleNodes.add(host.appendChild(styleEl));
            });
        };
        /**
         * @param {?} hostNode
         * @return {?}
         */
        DomSharedStylesHost.prototype.addHost = function (hostNode) {
            this._addStylesToHost(this._stylesSet, hostNode);
            this._hostNodes.add(hostNode);
        };
        /**
         * @param {?} hostNode
         * @return {?}
         */
        DomSharedStylesHost.prototype.removeHost = function (hostNode) { this._hostNodes.delete(hostNode); };
        /**
         * @param {?} additions
         * @return {?}
         */
        DomSharedStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            this._hostNodes.forEach(function (hostNode) { return _this._addStylesToHost(additions, hostNode); });
        };
        /**
         * @return {?}
         */
        DomSharedStylesHost.prototype.ngOnDestroy = function () { this._styleNodes.forEach(function (styleNode) { return getDOM().remove(styleNode); }); };
        return DomSharedStylesHost;
    }(SharedStylesHost));
    DomSharedStylesHost.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    DomSharedStylesHost.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NAMESPACE_URIS = {
        'svg': 'http://www.w3.org/2000/svg',
        'xhtml': 'http://www.w3.org/1999/xhtml',
        'xlink': 'http://www.w3.org/1999/xlink',
        'xml': 'http://www.w3.org/XML/1998/namespace',
        'xmlns': 'http://www.w3.org/2000/xmlns/',
    };
    var COMPONENT_REGEX = /%COMP%/g;
    var COMPONENT_VARIABLE = '%COMP%';
    var HOST_ATTR = "_nghost-" + COMPONENT_VARIABLE;
    var CONTENT_ATTR = "_ngcontent-" + COMPONENT_VARIABLE;
    /**
     * @param {?} componentShortId
     * @return {?}
     */
    function shimContentAttribute(componentShortId) {
        return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    /**
     * @param {?} componentShortId
     * @return {?}
     */
    function shimHostAttribute(componentShortId) {
        return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
    }
    /**
     * @param {?} compId
     * @param {?} styles
     * @param {?} target
     * @return {?}
     */
    function flattenStyles(compId, styles, target) {
        for (var /** @type {?} */ i = 0; i < styles.length; i++) {
            var /** @type {?} */ style = styles[i];
            if (Array.isArray(style)) {
                flattenStyles(compId, style, target);
            }
            else {
                style = style.replace(COMPONENT_REGEX, compId);
                target.push(style);
            }
        }
        return target;
    }
    /**
     * @param {?} eventHandler
     * @return {?}
     */
    function decoratePreventDefault(eventHandler) {
        return function (event) {
            var /** @type {?} */ allowDefaultBehavior = eventHandler(event);
            if (allowDefaultBehavior === false) {
                // TODO(tbosch): move preventDefault into event plugins...
                event.preventDefault();
                event.returnValue = false;
            }
        };
    }
    var DefaultDomRenderer2 = (function () {
        /**
         * @param {?} eventManager
         */
        function DefaultDomRenderer2(eventManager) {
            this.eventManager = eventManager;
            this.data = Object.create(null);
        }
        /**
         * @return {?}
         */
        DefaultDomRenderer2.prototype.destroy = function () { };
        /**
         * @param {?} name
         * @param {?=} namespace
         * @return {?}
         */
        DefaultDomRenderer2.prototype.createElement = function (name, namespace) {
            if (namespace) {
                return document.createElementNS(NAMESPACE_URIS[namespace], name);
            }
            return document.createElement(name);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DefaultDomRenderer2.prototype.createComment = function (value) { return document.createComment(value); };
        /**
         * @param {?} value
         * @return {?}
         */
        DefaultDomRenderer2.prototype.createText = function (value) { return document.createTextNode(value); };
        /**
         * @param {?} parent
         * @param {?} newChild
         * @return {?}
         */
        DefaultDomRenderer2.prototype.appendChild = function (parent, newChild) { parent.appendChild(newChild); };
        /**
         * @param {?} parent
         * @param {?} newChild
         * @param {?} refChild
         * @return {?}
         */
        DefaultDomRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
            if (parent) {
                parent.insertBefore(newChild, refChild);
            }
        };
        /**
         * @param {?} parent
         * @param {?} oldChild
         * @return {?}
         */
        DefaultDomRenderer2.prototype.removeChild = function (parent, oldChild) {
            if (parent) {
                parent.removeChild(oldChild);
            }
        };
        /**
         * @param {?} selectorOrNode
         * @return {?}
         */
        DefaultDomRenderer2.prototype.selectRootElement = function (selectorOrNode) {
            var /** @type {?} */ el = typeof selectorOrNode === 'string' ? document.querySelector(selectorOrNode) :
                selectorOrNode;
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
            el.textContent = '';
            return el;
        };
        /**
         * @param {?} node
         * @return {?}
         */
        DefaultDomRenderer2.prototype.parentNode = function (node) { return node.parentNode; };
        /**
         * @param {?} node
         * @return {?}
         */
        DefaultDomRenderer2.prototype.nextSibling = function (node) { return node.nextSibling; };
        /**
         * @param {?} el
         * @param {?} name
         * @param {?} value
         * @param {?=} namespace
         * @return {?}
         */
        DefaultDomRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
            if (namespace) {
                name = namespace + ":" + name;
                var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.setAttributeNS(namespaceUri, name, value);
                }
                else {
                    el.setAttribute(name, value);
                }
            }
            else {
                el.setAttribute(name, value);
            }
        };
        /**
         * @param {?} el
         * @param {?} name
         * @param {?=} namespace
         * @return {?}
         */
        DefaultDomRenderer2.prototype.removeAttribute = function (el, name, namespace) {
            if (namespace) {
                var /** @type {?} */ namespaceUri = NAMESPACE_URIS[namespace];
                if (namespaceUri) {
                    el.removeAttributeNS(namespaceUri, name);
                }
                else {
                    el.removeAttribute(namespace + ":" + name);
                }
            }
            else {
                el.removeAttribute(name);
            }
        };
        /**
         * @param {?} el
         * @param {?} name
         * @return {?}
         */
        DefaultDomRenderer2.prototype.addClass = function (el, name) { el.classList.add(name); };
        /**
         * @param {?} el
         * @param {?} name
         * @return {?}
         */
        DefaultDomRenderer2.prototype.removeClass = function (el, name) { el.classList.remove(name); };
        /**
         * @param {?} el
         * @param {?} style
         * @param {?} value
         * @param {?} flags
         * @return {?}
         */
        DefaultDomRenderer2.prototype.setStyle = function (el, style, value, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.setProperty(style, value, !!(flags & core.RendererStyleFlags2.Important) ? 'important' : '');
            }
            else {
                el.style[style] = value;
            }
        };
        /**
         * @param {?} el
         * @param {?} style
         * @param {?} flags
         * @return {?}
         */
        DefaultDomRenderer2.prototype.removeStyle = function (el, style, flags) {
            if (flags & core.RendererStyleFlags2.DashCase) {
                el.style.removeProperty(style);
            }
            else {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                el.style[style] = '';
            }
        };
        /**
         * @param {?} el
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        DefaultDomRenderer2.prototype.setProperty = function (el, name, value) {
            checkNoSyntheticProp(name, 'property');
            el[name] = value;
        };
        /**
         * @param {?} node
         * @param {?} value
         * @return {?}
         */
        DefaultDomRenderer2.prototype.setValue = function (node, value) { node.nodeValue = value; };
        /**
         * @param {?} target
         * @param {?} event
         * @param {?} callback
         * @return {?}
         */
        DefaultDomRenderer2.prototype.listen = function (target, event, callback) {
            checkNoSyntheticProp(event, 'listener');
            if (typeof target === 'string') {
                return (this.eventManager.addGlobalEventListener(target, event, decoratePreventDefault(callback)));
            }
            return ((this.eventManager.addEventListener(target, event, decoratePreventDefault(callback))));
        };
        return DefaultDomRenderer2;
    }());
    var AT_CHARCODE = '@'.charCodeAt(0);
    /**
     * @param {?} name
     * @param {?} nameKind
     * @return {?}
     */
    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }
    var EmulatedEncapsulationDomRenderer2 = (function (_super) {
        __extends(EmulatedEncapsulationDomRenderer2, _super);
        /**
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         * @param {?} component
         */
        function EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.component = component;
            var styles = flattenStyles(component.id, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this.contentAttr = shimContentAttribute(component.id);
            _this.hostAttr = shimHostAttribute(component.id);
            return _this;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        EmulatedEncapsulationDomRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
        /**
         * @param {?} parent
         * @param {?} name
         * @return {?}
         */
        EmulatedEncapsulationDomRenderer2.prototype.createElement = function (parent, name) {
            var /** @type {?} */ el = _super.prototype.createElement.call(this, parent, name);
            _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
            return el;
        };
        return EmulatedEncapsulationDomRenderer2;
    }(DefaultDomRenderer2));
    var ShadowDomRenderer = (function (_super) {
        __extends(ShadowDomRenderer, _super);
        /**
         * @param {?} eventManager
         * @param {?} sharedStylesHost
         * @param {?} hostEl
         * @param {?} component
         */
        function ShadowDomRenderer(eventManager, sharedStylesHost, hostEl, component) {
            var _this = _super.call(this, eventManager) || this;
            _this.sharedStylesHost = sharedStylesHost;
            _this.hostEl = hostEl;
            _this.component = component;
            _this.shadowRoot = hostEl.createShadowRoot();
            _this.sharedStylesHost.addHost(_this.shadowRoot);
            var styles = flattenStyles(component.id, component.styles, []);
            for (var i = 0; i < styles.length; i++) {
                var styleEl = document.createElement('style');
                styleEl.textContent = styles[i];
                _this.shadowRoot.appendChild(styleEl);
            }
            return _this;
        }
        /**
         * @param {?} node
         * @return {?}
         */
        ShadowDomRenderer.prototype.nodeOrShadowRoot = function (node) { return node === this.hostEl ? this.shadowRoot : node; };
        /**
         * @return {?}
         */
        ShadowDomRenderer.prototype.destroy = function () { this.sharedStylesHost.removeHost(this.shadowRoot); };
        /**
         * @param {?} parent
         * @param {?} newChild
         * @return {?}
         */
        ShadowDomRenderer.prototype.appendChild = function (parent, newChild) {
            return _super.prototype.appendChild.call(this, this.nodeOrShadowRoot(parent), newChild);
        };
        /**
         * @param {?} parent
         * @param {?} newChild
         * @param {?} refChild
         * @return {?}
         */
        ShadowDomRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
            return _super.prototype.insertBefore.call(this, this.nodeOrShadowRoot(parent), newChild, refChild);
        };
        /**
         * @param {?} parent
         * @param {?} oldChild
         * @return {?}
         */
        ShadowDomRenderer.prototype.removeChild = function (parent, oldChild) {
            return _super.prototype.removeChild.call(this, this.nodeOrShadowRoot(parent), oldChild);
        };
        /**
         * @param {?} node
         * @return {?}
         */
        ShadowDomRenderer.prototype.parentNode = function (node) {
            return this.nodeOrShadowRoot(_super.prototype.parentNode.call(this, this.nodeOrShadowRoot(node)));
        };
        return ShadowDomRenderer;
    }(DefaultDomRenderer2));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DomEventsPlugin = (function (_super) {
        __extends(DomEventsPlugin, _super);
        /**
         * @param {?} doc
         */
        function DomEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        /**
         * @param {?} eventName
         * @return {?}
         */
        DomEventsPlugin.prototype.supports = function (eventName) { return true; };
        /**
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */
        DomEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            element.addEventListener(eventName, /** @type {?} */ (handler), false);
            return function () { return element.removeEventListener(eventName, /** @type {?} */ (handler), false); };
        };
        return DomEventsPlugin;
    }(EventManagerPlugin));
    DomEventsPlugin.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    DomEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EVENT_NAMES = {
        // pan
        'pan': true,
        'panstart': true,
        'panmove': true,
        'panend': true,
        'pancancel': true,
        'panleft': true,
        'panright': true,
        'panup': true,
        'pandown': true,
        // pinch
        'pinch': true,
        'pinchstart': true,
        'pinchmove': true,
        'pinchend': true,
        'pinchcancel': true,
        'pinchin': true,
        'pinchout': true,
        // press
        'press': true,
        'pressup': true,
        // rotate
        'rotate': true,
        'rotatestart': true,
        'rotatemove': true,
        'rotateend': true,
        'rotatecancel': true,
        // swipe
        'swipe': true,
        'swipeleft': true,
        'swiperight': true,
        'swipeup': true,
        'swipedown': true,
        // tap
        'tap': true,
    };
    /**
     * A DI token that you can use to provide{\@link HammerGestureConfig} to Angular. Use it to configure
     * Hammer gestures.
     *
     * \@experimental
     */
    var HAMMER_GESTURE_CONFIG = new core.InjectionToken('HammerGestureConfig');
    /**
     * \@experimental
     */
    var HammerGestureConfig = (function () {
        function HammerGestureConfig() {
            this.events = [];
            this.overrides = {};
        }
        /**
         * @param {?} element
         * @return {?}
         */
        HammerGestureConfig.prototype.buildHammer = function (element) {
            var /** @type {?} */ mc = new Hammer(element);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var /** @type {?} */ eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        };
        return HammerGestureConfig;
    }());
    HammerGestureConfig.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    HammerGestureConfig.ctorParameters = function () { return []; };
    var HammerGesturesPlugin = (function (_super) {
        __extends(HammerGesturesPlugin, _super);
        /**
         * @param {?} doc
         * @param {?} _config
         */
        function HammerGesturesPlugin(doc, _config) {
            var _this = _super.call(this, doc) || this;
            _this._config = _config;
            return _this;
        }
        /**
         * @param {?} eventName
         * @return {?}
         */
        HammerGesturesPlugin.prototype.supports = function (eventName) {
            if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
                return false;
            }
            if (!((window)).Hammer) {
                throw new Error("Hammer.js is not loaded, can not bind " + eventName + " event");
            }
            return true;
        };
        /**
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */
        HammerGesturesPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var _this = this;
            var /** @type {?} */ zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var /** @type {?} */ mc = _this._config.buildHammer(element);
                var /** @type {?} */ callback = function (eventObj) {
                    zone.runGuarded(function () { handler(eventObj); });
                };
                mc.on(eventName, callback);
                return function () { return mc.off(eventName, callback); };
            });
        };
        /**
         * @param {?} eventName
         * @return {?}
         */
        HammerGesturesPlugin.prototype.isCustomEvent = function (eventName) { return this._config.events.indexOf(eventName) > -1; };
        return HammerGesturesPlugin;
    }(EventManagerPlugin));
    HammerGesturesPlugin.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    HammerGesturesPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
        { type: HammerGestureConfig, decorators: [{ type: core.Inject, args: [HAMMER_GESTURE_CONFIG,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
    var MODIFIER_KEY_GETTERS = {
        'alt': function (event) { return event.altKey; },
        'control': function (event) { return event.ctrlKey; },
        'meta': function (event) { return event.metaKey; },
        'shift': function (event) { return event.shiftKey; }
    };
    /**
     * \@experimental
     */
    var KeyEventsPlugin = (function (_super) {
        __extends(KeyEventsPlugin, _super);
        /**
         * @param {?} doc
         */
        function KeyEventsPlugin(doc) {
            return _super.call(this, doc) || this;
        }
        /**
         * @param {?} eventName
         * @return {?}
         */
        KeyEventsPlugin.prototype.supports = function (eventName) { return KeyEventsPlugin.parseEventName(eventName) != null; };
        /**
         * @param {?} element
         * @param {?} eventName
         * @param {?} handler
         * @return {?}
         */
        KeyEventsPlugin.prototype.addEventListener = function (element, eventName, handler) {
            var /** @type {?} */ parsedEvent = ((KeyEventsPlugin.parseEventName(eventName)));
            var /** @type {?} */ outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
            });
        };
        /**
         * @param {?} eventName
         * @return {?}
         */
        KeyEventsPlugin.parseEventName = function (eventName) {
            var /** @type {?} */ parts = eventName.toLowerCase().split('.');
            var /** @type {?} */ domEventName = parts.shift();
            if ((parts.length === 0) || !(domEventName === 'keydown' || domEventName === 'keyup')) {
                return null;
            }
            var /** @type {?} */ key = KeyEventsPlugin._normalizeKey(/** @type {?} */ ((parts.pop())));
            var /** @type {?} */ fullKey = '';
            MODIFIER_KEYS.forEach(function (modifierName) {
                var /** @type {?} */ index = parts.indexOf(modifierName);
                if (index > -1) {
                    parts.splice(index, 1);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var /** @type {?} */ result = {};
            result['domEventName'] = domEventName;
            result['fullKey'] = fullKey;
            return result;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        KeyEventsPlugin.getEventFullKey = function (event) {
            var /** @type {?} */ fullKey = '';
            var /** @type {?} */ key = getDOM().getEventKey(event);
            key = key.toLowerCase();
            if (key === ' ') {
                key = 'space'; // for readability
            }
            else if (key === '.') {
                key = 'dot'; // because '.' is used as a separator in event names
            }
            MODIFIER_KEYS.forEach(function (modifierName) {
                if (modifierName != key) {
                    var /** @type {?} */ modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        };
        /**
         * @param {?} fullKey
         * @param {?} handler
         * @param {?} zone
         * @return {?}
         */
        KeyEventsPlugin.eventCallback = function (fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (KeyEventsPlugin.getEventFullKey(event) === fullKey) {
                    zone.runGuarded(function () { return handler(event); });
                }
            };
        };
        /**
         * \@internal
         * @param {?} keyName
         * @return {?}
         */
        KeyEventsPlugin._normalizeKey = function (keyName) {
            // TODO: switch to a Map if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        };
        return KeyEventsPlugin;
    }(EventManagerPlugin));
    KeyEventsPlugin.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    KeyEventsPlugin.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This helper class is used to get hold of an inert tree of DOM elements containing dirty HTML
     * that needs sanitizing.
     * Depending upon browser support we must use one of three strategies for doing this.
     * Support: Safari 10.x -> XHR strategy
     * Support: Firefox -> DomParser strategy
     * Default: InertDocument strategy
     */
    var InertBodyHelper = (function () {
        /**
         * @param {?} defaultDoc
         * @param {?} DOM
         */
        function InertBodyHelper(defaultDoc, DOM) {
            this.defaultDoc = defaultDoc;
            this.DOM = DOM;
            var inertDocument = this.DOM.createHtmlDocument();
            this.inertBodyElement = inertDocument.body;
            if (this.inertBodyElement == null) {
                // usually there should be only one body element in the document, but IE doesn't have any, so
                // we need to create one.
                var inertHtml = this.DOM.createElement('html', inertDocument);
                this.inertBodyElement = this.DOM.createElement('body', inertDocument);
                this.DOM.appendChild(inertHtml, this.inertBodyElement);
                this.DOM.appendChild(inertDocument, inertHtml);
            }
            this.DOM.setInnerHTML(this.inertBodyElement, '<svg><g onload="this.parentNode.remove()"></g></svg>');
            if (this.inertBodyElement.querySelector && !this.inertBodyElement.querySelector('svg')) {
                // We just hit the Safari 10.1 bug - which allows JS to run inside the SVG G element
                // so use the XHR strategy.
                this.getInertBodyElement = this.getInertBodyElement_XHR;
                return;
            }
            this.DOM.setInnerHTML(this.inertBodyElement, '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');
            if (this.inertBodyElement.querySelector && this.inertBodyElement.querySelector('svg img')) {
                // We just hit the Firefox bug - which prevents the inner img JS from being sanitized
                // so use the DOMParser strategy, if it is available.
                // If the DOMParser is not available then we are not in Firefox (Server/WebWorker?) so we
                // fall through to the default strategy below.
                if (isDOMParserAvailable()) {
                    this.getInertBodyElement = this.getInertBodyElement_DOMParser;
                    return;
                }
            }
            // None of the bugs were hit so it is safe for us to use the default InertDocument strategy
            this.getInertBodyElement = this.getInertBodyElement_InertDocument;
        }
        /**
         * Use XHR to create and fill an inert body element (on Safari 10.1)
         * See
         * https://github.com/cure53/DOMPurify/blob/a992d3a75031cb8bb032e5ea8399ba972bdf9a65/src/purify.js#L439-L449
         * @param {?} html
         * @return {?}
         */
        InertBodyHelper.prototype.getInertBodyElement_XHR = function (html) {
            // We add these extra elements to ensure that the rest of the content is parsed as expected
            // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
            // `<head>` tag.
            html = '<body><remove></remove>' + html + '</body>';
            try {
                html = encodeURI(html);
            }
            catch (e) {
                return null;
            }
            var /** @type {?} */ xhr = new XMLHttpRequest();
            xhr.responseType = 'document';
            xhr.open('GET', 'data:text/html;charset=utf-8,' + html, false);
            xhr.send(null);
            var /** @type {?} */ body = xhr.response.body;
            body.removeChild(/** @type {?} */ ((body.firstChild)));
            return body;
        };
        /**
         * Use DOMParser to create and fill an inert body element (on Firefox)
         * See https://github.com/cure53/DOMPurify/releases/tag/0.6.7
         *
         * @param {?} html
         * @return {?}
         */
        InertBodyHelper.prototype.getInertBodyElement_DOMParser = function (html) {
            // We add these extra elements to ensure that the rest of the content is parsed as expected
            // e.g. leading whitespace is maintained and tags like `<meta>` do not get hoisted to the
            // `<head>` tag.
            html = '<body><remove></remove>' + html + '</body>';
            try {
                var /** @type {?} */ body = (new ((window))
                    .DOMParser()
                    .parseFromString(html, 'text/html')
                    .body);
                body.removeChild(/** @type {?} */ ((body.firstChild)));
                return body;
            }
            catch (e) {
                return null;
            }
        };
        /**
         * Use an HTML5 `template` element, if supported, or an inert body element created via
         * `createHtmlDocument` to create and fill an inert DOM element.
         * This is the default sane strategy to use if the browser does not require one of the specialised
         * strategies above.
         * @param {?} html
         * @return {?}
         */
        InertBodyHelper.prototype.getInertBodyElement_InertDocument = function (html) {
            // Prefer using <template> element if supported.
            var /** @type {?} */ templateEl = this.DOM.createElement('template');
            if ('content' in templateEl) {
                this.DOM.setInnerHTML(templateEl, html);
                return templateEl;
            }
            this.DOM.setInnerHTML(this.inertBodyElement, html);
            // Support: IE 9-11 only
            // strip custom-namespaced attributes on IE<=11
            if (this.defaultDoc.documentMode) {
                this.stripCustomNsAttrs(this.inertBodyElement);
            }
            return this.inertBodyElement;
        };
        /**
         * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
         * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g.
         * 'ns1:xlink:foo').
         *
         * This is undesirable since we don't want to allow any of these custom attributes. This method
         * strips them all.
         * @param {?} el
         * @return {?}
         */
        InertBodyHelper.prototype.stripCustomNsAttrs = function (el) {
            var _this = this;
            this.DOM.attributeMap(el).forEach(function (_, attrName) {
                if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
                    _this.DOM.removeAttribute(el, attrName);
                }
            });
            for (var _i = 0, _a = this.DOM.childNodesAsList(el); _i < _a.length; _i++) {
                var n = _a[_i];
                if (this.DOM.isElementNode(n))
                    this.stripCustomNsAttrs(/** @type {?} */ (n));
            }
        };
        return InertBodyHelper;
    }());
    /**
     * We need to determine whether the DOMParser exists in the global context.
     * The try-catch is because, on some browsers, trying to access this property
     * on window can actually throw an error.
     *
     * @suppress {uselessCode}
     * @return {?}
     */
    function isDOMParserAvailable() {
        try {
            return !!((window)).DOMParser;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * This regular expression matches a subset of URLs that will not cause script
     * execution if used in URL context within a HTML document. Specifically, this
     * regular expression matches if (comment from here on and regex copied from
     * Soy's EscapingConventions):
     * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
     * (2) or no protocol.  A protocol must be followed by a colon. The below
     *     allows that by allowing colons only after one of the characters [/?#].
     *     A colon after a hash (#) must be in the fragment.
     *     Otherwise, a colon after a (?) must be in a query.
     *     Otherwise, a colon after a single solidus (/) must be in a path.
     *     Otherwise, a colon after a double solidus (//) must be in the authority
     *     (before port).
     *
     * The pattern disallows &, used in HTML entity declarations before
     * one of the characters in [/?#]. This disallows HTML entities used in the
     * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
     * It also disallows HTML entities in the first path part of a relative path,
     * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
     * that. More importantly, it disallows masking of a colon,
     * e.g. "javascript&#58;...".
     *
     * This regular expression was taken from the Closure sanitization library.
     */
    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     */
    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    /**
     * @param {?} url
     * @return {?}
     */
    function sanitizeUrl(url) {
        url = String(url);
        if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN))
            return url;
        if (core.isDevMode()) {
            getDOM().log("WARNING: sanitizing unsafe URL value " + url + " (see http://g.co/ng/security#xss)");
        }
        return 'unsafe:' + url;
    }
    /**
     * @param {?} srcset
     * @return {?}
     */
    function sanitizeSrcset(srcset) {
        srcset = String(srcset);
        return srcset.split(',').map(function (srcset) { return sanitizeUrl(srcset.trim()); }).join(', ');
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} tags
     * @return {?}
     */
    function tagSet(tags) {
        var /** @type {?} */ res = {};
        for (var _i = 0, _a = tags.split(','); _i < _a.length; _i++) {
            var t = _a[_i];
            res[t] = true;
        }
        return res;
    }
    /**
     * @param {...?} sets
     * @return {?}
     */
    function merge() {
        var sets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sets[_i] = arguments[_i];
        }
        var /** @type {?} */ res = {};
        for (var _a = 0, sets_1 = sets; _a < sets_1.length; _a++) {
            var s = sets_1[_a];
            for (var /** @type {?} */ v in s) {
                if (s.hasOwnProperty(v))
                    res[v] = true;
            }
        }
        return res;
    }
    // Good source of info about elements and attributes
    // http://dev.w3.org/html5/spec/Overview.html#semantics
    // http://simon.html5.org/html-elements
    // Safe Void Elements - HTML5
    // http://dev.w3.org/html5/spec/Overview.html#void-elements
    var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
    // Elements that you can, intentionally, leave open (and which close themselves)
    // http://dev.w3.org/html5/spec/Overview.html#optional-tags
    var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
    var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
    var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
    // Safe Block Elements - HTML5
    var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' +
        'aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' +
        'h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'));
    // Inline Elements - HTML5
    var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,audio,b,' +
        'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,' +
        'samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'));
    var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
    // Attributes that have href and hence need to be sanitized
    var URI_ATTRS = tagSet('background,cite,href,itemtype,longdesc,poster,src,xlink:href');
    // Attributes that have special href set hence need to be sanitized
    var SRCSET_ATTRS = tagSet('srcset');
    var HTML_ATTRS = tagSet('abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,' +
        'compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,' +
        'ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,' +
        'scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,' +
        'valign,value,vspace,width');
    // NB: This currently consciously doesn't support SVG. SVG sanitization has had several security
    // issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
    // innerHTML is required, SVG attributes should be added here.
    // NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
    // can be sanitized, but they increase security surface area without a legitimate use case, so they
    // are left out here.
    var VALID_ATTRS = merge(URI_ATTRS, SRCSET_ATTRS, HTML_ATTRS);
    /**
     * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
     * attributes.
     */
    var SanitizingHtmlSerializer = (function () {
        function SanitizingHtmlSerializer() {
            this.sanitizedSomething = false;
            this.buf = [];
            this.DOM = getDOM();
        }
        /**
         * @param {?} el
         * @return {?}
         */
        SanitizingHtmlSerializer.prototype.sanitizeChildren = function (el) {
            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
            // However this code never accesses properties off of `document` before deleting its contents
            // again, so it shouldn't be vulnerable to DOM clobbering.
            var /** @type {?} */ current = ((this.DOM.firstChild(el)));
            while (current) {
                if (this.DOM.isElementNode(current)) {
                    this.startElement(/** @type {?} */ (current));
                }
                else if (this.DOM.isTextNode(current)) {
                    this.chars(/** @type {?} */ ((this.DOM.nodeValue(current))));
                }
                else {
                    // Strip non-element, non-text nodes.
                    this.sanitizedSomething = true;
                }
                if (this.DOM.firstChild(current)) {
                    current = ((this.DOM.firstChild(current)));
                    continue;
                }
                while (current) {
                    // Leaving the element. Walk up and to the right, closing tags as we go.
                    if (this.DOM.isElementNode(current)) {
                        this.endElement(/** @type {?} */ (current));
                    }
                    var /** @type {?} */ next = this.checkClobberedElement(current, /** @type {?} */ ((this.DOM.nextSibling(current))));
                    if (next) {
                        current = next;
                        break;
                    }
                    current = this.checkClobberedElement(current, /** @type {?} */ ((this.DOM.parentElement(current))));
                }
            }
            return this.buf.join('');
        };
        /**
         * @param {?} element
         * @return {?}
         */
        SanitizingHtmlSerializer.prototype.startElement = function (element) {
            var _this = this;
            var /** @type {?} */ tagName = this.DOM.nodeName(element).toLowerCase();
            if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
                this.sanitizedSomething = true;
                return;
            }
            this.buf.push('<');
            this.buf.push(tagName);
            this.DOM.attributeMap(element).forEach(function (value, attrName) {
                var /** @type {?} */ lower = attrName.toLowerCase();
                if (!VALID_ATTRS.hasOwnProperty(lower)) {
                    _this.sanitizedSomething = true;
                    return;
                }
                // TODO(martinprobst): Special case image URIs for data:image/...
                if (URI_ATTRS[lower])
                    value = sanitizeUrl(value);
                if (SRCSET_ATTRS[lower])
                    value = sanitizeSrcset(value);
                _this.buf.push(' ');
                _this.buf.push(attrName);
                _this.buf.push('="');
                _this.buf.push(encodeEntities(value));
                _this.buf.push('"');
            });
            this.buf.push('>');
        };
        /**
         * @param {?} current
         * @return {?}
         */
        SanitizingHtmlSerializer.prototype.endElement = function (current) {
            var /** @type {?} */ tagName = this.DOM.nodeName(current).toLowerCase();
            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
                this.buf.push('</');
                this.buf.push(tagName);
                this.buf.push('>');
            }
        };
        /**
         * @param {?} chars
         * @return {?}
         */
        SanitizingHtmlSerializer.prototype.chars = function (chars) { this.buf.push(encodeEntities(chars)); };
        /**
         * @param {?} node
         * @param {?} nextNode
         * @return {?}
         */
        SanitizingHtmlSerializer.prototype.checkClobberedElement = function (node, nextNode) {
            if (nextNode && this.DOM.contains(node, nextNode)) {
                throw new Error("Failed to sanitize html because the element is clobbered: " + this.DOM.getOuterHTML(node));
            }
            return nextNode;
        };
        return SanitizingHtmlSerializer;
    }());
    // Regular Expressions for parsing tags and attributes
    var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    // ! to ~ is the ASCII range.
    var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
    /**
     * Escapes all potentially dangerous characters, so that the
     * resulting string can be safely inserted into attribute or
     * element text.
     * @param {?} value
     * @return {?}
     */
    function encodeEntities(value) {
        return value.replace(/&/g, '&amp;')
            .replace(SURROGATE_PAIR_REGEXP, function (match) {
            var /** @type {?} */ hi = match.charCodeAt(0);
            var /** @type {?} */ low = match.charCodeAt(1);
            return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
        })
            .replace(NON_ALPHANUMERIC_REGEXP, function (match) { return '&#' + match.charCodeAt(0) + ';'; })
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    var inertBodyHelper;
    /**
     * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
     * the DOM in a browser environment.
     * @param {?} defaultDoc
     * @param {?} unsafeHtmlInput
     * @return {?}
     */
    function sanitizeHtml(defaultDoc, unsafeHtmlInput) {
        var /** @type {?} */ DOM = getDOM();
        var /** @type {?} */ inertBodyElement = null;
        try {
            inertBodyHelper = inertBodyHelper || new InertBodyHelper(defaultDoc, DOM);
            // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
            var /** @type {?} */ unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : '';
            inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
            // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
            // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
            var /** @type {?} */ mXSSAttempts = 5;
            var /** @type {?} */ parsedHtml = unsafeHtml;
            do {
                if (mXSSAttempts === 0) {
                    throw new Error('Failed to sanitize html because the input is unstable');
                }
                mXSSAttempts--;
                unsafeHtml = parsedHtml;
                parsedHtml = DOM.getInnerHTML(inertBodyElement);
                inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
            } while (unsafeHtml !== parsedHtml);
            var /** @type {?} */ sanitizer = new SanitizingHtmlSerializer();
            var /** @type {?} */ safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(inertBodyElement) || inertBodyElement);
            if (core.isDevMode() && sanitizer.sanitizedSomething) {
                DOM.log('WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).');
            }
            return safeHtml;
        }
        finally {
            // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
            if (inertBodyElement) {
                var /** @type {?} */ parent = DOM.getTemplateContent(inertBodyElement) || inertBodyElement;
                for (var _i = 0, _a = DOM.childNodesAsList(parent); _i < _a.length; _i++) {
                    var child = _a[_i];
                    DOM.removeChild(parent, child);
                }
            }
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Regular expression for safe style values.
     *
     * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
     *
     * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
     * font-family) and hence could allow multiple values to get injected, but that should pose no risk
     * of XSS.
     *
     * The function expression checks only for XSS safety, not for CSS validity.
     *
     * This regular expression was taken from the Closure sanitization library, and augmented for
     * transformation values.
     */
    var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
    var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
    var COLOR_FNS = '(?:rgb|hsl)a?';
    var GRADIENTS = '(?:repeating-)?(?:linear|radial)-gradient';
    var CSS3_FNS = '(?:calc|attr)';
    var FN_ARGS = '\\([-0-9.%, #a-zA-Z]+\\)';
    var SAFE_STYLE_VALUE = new RegExp("^(" + VALUES + "|" +
        ("(?:" + TRANSFORMATION_FNS + "|" + COLOR_FNS + "|" + GRADIENTS + "|" + CSS3_FNS + ")") +
        (FN_ARGS + ")$"), 'g');
    /**
     * Matches a `url(...)` value with an arbitrary argument as long as it does
     * not contain parentheses.
     *
     * The URL value still needs to be sanitized separately.
     *
     * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
     * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
     * by observing whether scroll bars are displayed, or character ranges used by a font face
     * definition.
     *
     * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
     * binding a URL value without further cooperation from the page will cause an information leak, and
     * if so, it is just a leak, not a full blown XSS vulnerability.
     *
     * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
     * code is permissive and allows URLs that sanitize otherwise.
     */
    var URL_RE = /^url\(([^)]+)\)$/;
    /**
     * Checks that quotes (" and ') are properly balanced inside a string. Assumes
     * that neither escape (\) nor any other character that could result in
     * breaking out of a string parsing context are allowed;
     * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
     *
     * This code was taken from the Closure sanitization library.
     * @param {?} value
     * @return {?}
     */
    function hasBalancedQuotes(value) {
        var /** @type {?} */ outsideSingle = true;
        var /** @type {?} */ outsideDouble = true;
        for (var /** @type {?} */ i = 0; i < value.length; i++) {
            var /** @type {?} */ c = value.charAt(i);
            if (c === '\'' && outsideDouble) {
                outsideSingle = !outsideSingle;
            }
            else if (c === '"' && outsideSingle) {
                outsideDouble = !outsideDouble;
            }
        }
        return outsideSingle && outsideDouble;
    }
    /**
     * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
     * value) and returns a value that is safe to use in a browser environment.
     * @param {?} value
     * @return {?}
     */
    function sanitizeStyle(value) {
        value = String(value).trim(); // Make sure it's actually a string.
        if (!value)
            return '';
        // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
        // reasoning behind this.
        var /** @type {?} */ urlMatch = value.match(URL_RE);
        if ((urlMatch && sanitizeUrl(urlMatch[1]) === urlMatch[1]) ||
            value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
            return value; // Safe style values.
        }
        if (core.isDevMode()) {
            getDOM().log("WARNING: sanitizing unsafe style value " + value + " (see http://g.co/ng/security#xss).");
        }
        return 'unsafe';
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
     * values to be safe to use in the different DOM contexts.
     *
     * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
     * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
     * the website.
     *
     * In specific situations, it might be necessary to disable sanitization, for example if the
     * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
     * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
     * methods, and then binding to that value from the template.
     *
     * These situations should be very rare, and extraordinary care must be taken to avoid creating a
     * Cross Site Scripting (XSS) security bug!
     *
     * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
     * close as possible to the source of the value, to make it easy to verify no security bug is
     * created by its use.
     *
     * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
     * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
     * code. The sanitizer leaves safe values intact.
     *
     * \@security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
     * sanitization for the value passed in. Carefully check and audit all values and code paths going
     * into this call. Make sure any user data is appropriately escaped for this security context.
     * For more detail, see the [Security Guide](http://g.co/ng/security).
     *
     * \@stable
     * @abstract
     */
    var DomSanitizer = (function () {
        function DomSanitizer() {
        }
        /**
         * Sanitizes a value for use in the given SecurityContext.
         *
         * If value is trusted for the context, this method will unwrap the contained safe value and use
         * it directly. Otherwise, value will be sanitized to be safe in the given context, for example
         * by replacing URLs that have an unsafe protocol part (such as `javascript:`). The implementation
         * is responsible to make sure that the value can definitely be safely used in the given context.
         * @abstract
         * @param {?} context
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.sanitize = function (context, value) { };
        /**
         * Bypass security and trust the given value to be safe HTML. Only use this when the bound HTML
         * is unsafe (e.g. contains `<script>` tags) and the code should be executed. The sanitizer will
         * leave safe HTML intact, so in most situations this method should not be used.
         *
         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
         * security risks!
         * @abstract
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.bypassSecurityTrustHtml = function (value) { };
        /**
         * Bypass security and trust the given value to be safe style value (CSS).
         *
         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
         * security risks!
         * @abstract
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.bypassSecurityTrustStyle = function (value) { };
        /**
         * Bypass security and trust the given value to be safe JavaScript.
         *
         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
         * security risks!
         * @abstract
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.bypassSecurityTrustScript = function (value) { };
        /**
         * Bypass security and trust the given value to be a safe style URL, i.e. a value that can be used
         * in hyperlinks or `<img src>`.
         *
         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
         * security risks!
         * @abstract
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.bypassSecurityTrustUrl = function (value) { };
        /**
         * Bypass security and trust the given value to be a safe resource URL, i.e. a location that may
         * be used to load executable code from, like `<script src>`, or `<iframe src>`.
         *
         * **WARNING:** calling this method with untrusted user data exposes your application to XSS
         * security risks!
         * @abstract
         * @param {?} value
         * @return {?}
         */
        DomSanitizer.prototype.bypassSecurityTrustResourceUrl = function (value) { };
        return DomSanitizer;
    }());
    var DomSanitizerImpl = (function (_super) {
        __extends(DomSanitizerImpl, _super);
        /**
         * @param {?} _doc
         */
        function DomSanitizerImpl(_doc) {
            var _this = _super.call(this) || this;
            _this._doc = _doc;
            return _this;
        }
        /**
         * @param {?} ctx
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.sanitize = function (ctx, value) {
            if (value == null)
                return null;
            switch (ctx) {
                case core.SecurityContext.NONE:
                    return (value);
                case core.SecurityContext.HTML:
                    if (value instanceof SafeHtmlImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'HTML');
                    return sanitizeHtml(this._doc, String(value));
                case core.SecurityContext.STYLE:
                    if (value instanceof SafeStyleImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Style');
                    return sanitizeStyle(/** @type {?} */ (value));
                case core.SecurityContext.SCRIPT:
                    if (value instanceof SafeScriptImpl)
                        return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Script');
                    throw new Error('unsafe value used in a script context');
                case core.SecurityContext.URL:
                    if (value instanceof SafeResourceUrlImpl || value instanceof SafeUrlImpl) {
                        // Allow resource URLs in URL contexts, they are strictly more trusted.
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'URL');
                    return sanitizeUrl(String(value));
                case core.SecurityContext.RESOURCE_URL:
                    if (value instanceof SafeResourceUrlImpl) {
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'ResourceURL');
                    throw new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)');
                default:
                    throw new Error("Unexpected SecurityContext " + ctx + " (see http://g.co/ng/security#xss)");
            }
        };
        /**
         * @param {?} value
         * @param {?} expectedType
         * @return {?}
         */
        DomSanitizerImpl.prototype.checkNotSafeValue = function (value, expectedType) {
            if (value instanceof SafeValueImpl) {
                throw new Error("Required a safe " + expectedType + ", got a " + value.getTypeName() + " " +
                    "(see http://g.co/ng/security#xss)");
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.bypassSecurityTrustHtml = function (value) { return new SafeHtmlImpl(value); };
        /**
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.bypassSecurityTrustStyle = function (value) { return new SafeStyleImpl(value); };
        /**
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.bypassSecurityTrustScript = function (value) { return new SafeScriptImpl(value); };
        /**
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.bypassSecurityTrustUrl = function (value) { return new SafeUrlImpl(value); };
        /**
         * @param {?} value
         * @return {?}
         */
        DomSanitizerImpl.prototype.bypassSecurityTrustResourceUrl = function (value) {
            return new SafeResourceUrlImpl(value);
        };
        return DomSanitizerImpl;
    }(DomSanitizer));
    DomSanitizerImpl.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    DomSanitizerImpl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [DOCUMENT$1,] },] },
    ]; };
    /**
     * @abstract
     */
    var SafeValueImpl = (function () {
        /**
         * @param {?} changingThisBreaksApplicationSecurity
         */
        function SafeValueImpl(changingThisBreaksApplicationSecurity) {
            this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
            // empty
        }
        /**
         * @abstract
         * @return {?}
         */
        SafeValueImpl.prototype.getTypeName = function () { };
        /**
         * @return {?}
         */
        SafeValueImpl.prototype.toString = function () {
            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity +
                " (see http://g.co/ng/security#xss)";
        };
        return SafeValueImpl;
    }());
    var SafeHtmlImpl = (function (_super) {
        __extends(SafeHtmlImpl, _super);
        function SafeHtmlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SafeHtmlImpl.prototype.getTypeName = function () { return 'HTML'; };
        return SafeHtmlImpl;
    }(SafeValueImpl));
    var SafeStyleImpl = (function (_super) {
        __extends(SafeStyleImpl, _super);
        function SafeStyleImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SafeStyleImpl.prototype.getTypeName = function () { return 'Style'; };
        return SafeStyleImpl;
    }(SafeValueImpl));
    var SafeScriptImpl = (function (_super) {
        __extends(SafeScriptImpl, _super);
        function SafeScriptImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SafeScriptImpl.prototype.getTypeName = function () { return 'Script'; };
        return SafeScriptImpl;
    }(SafeValueImpl));
    var SafeUrlImpl = (function (_super) {
        __extends(SafeUrlImpl, _super);
        function SafeUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SafeUrlImpl.prototype.getTypeName = function () { return 'URL'; };
        return SafeUrlImpl;
    }(SafeValueImpl));
    var SafeResourceUrlImpl = (function (_super) {
        __extends(SafeResourceUrlImpl, _super);
        function SafeResourceUrlImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        SafeResourceUrlImpl.prototype.getTypeName = function () { return 'ResourceURL'; };
        return SafeResourceUrlImpl;
    }(SafeValueImpl));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [
        { provide: core.PLATFORM_ID, useValue: PLATFORM_BROWSER_ID },
        { provide: core.PLATFORM_INITIALIZER, useValue: initDomAdapter, multi: true },
        { provide: PlatformLocation, useClass: BrowserPlatformLocation },
        { provide: DOCUMENT$1, useFactory: _document, deps: [] },
    ];
    /**
     * \@stable
     */
    var platformBrowser = core.createPlatformFactory(core.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS);
    /**
     * @return {?}
     */
    function initDomAdapter() {
        BrowserDomAdapter.makeCurrent();
        BrowserGetTestability.init();
    }
    /**
     * @return {?}
     */
    function _document() {
        return document;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @module
     * @description
     * Entry point for all public APIs of the common package.
     */
    /**
     * \@stable
     */
    var VERSION$1 = new core.Version('4.4.7');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Base class for control directives.
     *
     * Only used internally in the forms module.
     *
     * \@stable
     * @abstract
     */
    var AbstractControlDirective = (function () {
        function AbstractControlDirective() {
        }
        /**
         * The {\@link FormControl}, {\@link FormGroup}, or {\@link FormArray}
         * that backs this directive. Most properties fall through to that
         * instance.
         * @abstract
         * @return {?}
         */
        AbstractControlDirective.prototype.control = function () { };
        Object.defineProperty(AbstractControlDirective.prototype, "value", {
            /**
             * The value of the control.
             * @return {?}
             */
            get: function () { return this.control ? this.control.value : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
            /**
             * A control is `valid` when its `status === VALID`.
             *
             * In order to have this status, the control must have passed all its
             * validation checks.
             * @return {?}
             */
            get: function () { return this.control ? this.control.valid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
            /**
             * A control is `invalid` when its `status === INVALID`.
             *
             * In order to have this status, the control must have failed
             * at least one of its validation checks.
             * @return {?}
             */
            get: function () { return this.control ? this.control.invalid : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
            /**
             * A control is `pending` when its `status === PENDING`.
             *
             * In order to have this status, the control must be in the
             * middle of conducting a validation check.
             * @return {?}
             */
            get: function () { return this.control ? this.control.pending : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
            /**
             * A control is `disabled` when its `status === DISABLED`.
             *
             * Disabled controls are exempt from validation checks and
             * are not included in the aggregate value of their ancestor
             * controls.
             * @return {?}
             */
            get: function () { return this.control ? this.control.disabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
            /**
             * A control is `enabled` as long as its `status !== DISABLED`.
             *
             * In other words, it has a status of `VALID`, `INVALID`, or
             * `PENDING`.
             * @return {?}
             */
            get: function () { return this.control ? this.control.enabled : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
            /**
             * Returns any errors generated by failing validation. If there
             * are no errors, it will return null.
             * @return {?}
             */
            get: function () { return this.control ? this.control.errors : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
            /**
             * A control is `pristine` if the user has not yet changed
             * the value in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return this.control ? this.control.pristine : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
            /**
             * A control is `dirty` if the user has changed the value
             * in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return this.control ? this.control.dirty : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
            /**
             * A control is marked `touched` once the user has triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return this.control ? this.control.touched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
            /**
             * A control is `untouched` if the user has not yet triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return this.control ? this.control.untouched : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
            /**
             * Emits an event every time the validation status of the control
             * is re-calculated.
             * @return {?}
             */
            get: function () {
                return this.control ? this.control.statusChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
            /**
             * Emits an event every time the value of the control changes, in
             * the UI or programmatically.
             * @return {?}
             */
            get: function () {
                return this.control ? this.control.valueChanges : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlDirective.prototype, "path", {
            /**
             * Returns an array that represents the path from the top-level form
             * to this control. Each index is the string name of the control on
             * that level.
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        /**
         * Resets the form control. This means by default:
         *
         * * it is marked as `pristine`
         * * it is marked as `untouched`
         * * value is set to null
         *
         * For more information, see {\@link AbstractControl}.
         * @param {?=} value
         * @return {?}
         */
        AbstractControlDirective.prototype.reset = function (value) {
            if (value === void 0) { value = undefined; }
            if (this.control)
                this.control.reset(value);
        };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns false.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
        };
        /**
         * Returns error data if the control with the given path has the error specified. Otherwise
         * returns null or undefined.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControlDirective.prototype.getError = function (errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
        };
        return AbstractControlDirective;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A directive that contains multiple {\@link NgControl}s.
     *
     * Only used by the forms module.
     *
     * \@stable
     * @abstract
     */
    var ControlContainer = (function (_super) {
        __extends(ControlContainer, _super);
        function ControlContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ControlContainer.prototype, "formDirective", {
            /**
             * Get the form to which this container belongs.
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ControlContainer.prototype, "path", {
            /**
             * Get the path to this container.
             * @return {?}
             */
            get: function () { return null; },
            enumerable: true,
            configurable: true
        });
        return ControlContainer;
    }(AbstractControlDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    /**
     * Providers for validators to be used for {\@link FormControl}s in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * \@stable
     */
    var NG_VALIDATORS = new core.InjectionToken('NgValidators');
    /**
     * Providers for asynchronous validators to be used for {\@link FormControl}s
     * in a form.
     *
     * Provide this using `multi: true` to add validators.
     *
     * See {\@link NG_VALIDATORS} for more details.
     *
     * \@stable
     */
    var NG_ASYNC_VALIDATORS = new core.InjectionToken('NgAsyncValidators');
    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    /**
     * Provides a set of validators used by form controls.
     *
     * A validator is a function that processes a {\@link FormControl} or collection of
     * controls and returns a map of errors. A null map means that validation has passed.
     *
     * ### Example
     *
     * ```typescript
     * var loginControl = new FormControl("", Validators.required)
     * ```
     *
     * \@stable
     */
    var Validators = (function () {
        function Validators() {
        }
        /**
         * Validator that requires controls to have a value greater than a number.
         * @param {?} min
         * @return {?}
         */
        Validators.min = function (min) {
            return function (control) {
                if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ value = parseFloat(control.value);
                // Controls with NaN values after parsing should be treated as not having a
                // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
                return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
            };
        };
        /**
         * Validator that requires controls to have a value less than a number.
         * @param {?} max
         * @return {?}
         */
        Validators.max = function (max) {
            return function (control) {
                if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ value = parseFloat(control.value);
                // Controls with NaN values after parsing should be treated as not having a
                // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
                return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
            };
        };
        /**
         * Validator that requires controls to have a non-empty value.
         * @param {?} control
         * @return {?}
         */
        Validators.required = function (control) {
            return isEmptyInputValue(control.value) ? { 'required': true } : null;
        };
        /**
         * Validator that requires control value to be true.
         * @param {?} control
         * @return {?}
         */
        Validators.requiredTrue = function (control) {
            return control.value === true ? null : { 'required': true };
        };
        /**
         * Validator that performs email validation.
         * @param {?} control
         * @return {?}
         */
        Validators.email = function (control) {
            return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
        };
        /**
         * Validator that requires controls to have a value of a minimum length.
         * @param {?} minLength
         * @return {?}
         */
        Validators.minLength = function (minLength) {
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length < minLength ?
                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * Validator that requires controls to have a value of a maximum length.
         * @param {?} maxLength
         * @return {?}
         */
        Validators.maxLength = function (maxLength) {
            return function (control) {
                var /** @type {?} */ length = control.value ? control.value.length : 0;
                return length > maxLength ?
                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                    null;
            };
        };
        /**
         * Validator that requires a control to match a regex to its value.
         * @param {?} pattern
         * @return {?}
         */
        Validators.pattern = function (pattern) {
            if (!pattern)
                return Validators.nullValidator;
            var /** @type {?} */ regex;
            var /** @type {?} */ regexStr;
            if (typeof pattern === 'string') {
                regexStr = "^" + pattern + "$";
                regex = new RegExp(regexStr);
            }
            else {
                regexStr = pattern.toString();
                regex = pattern;
            }
            return function (control) {
                if (isEmptyInputValue(control.value)) {
                    return null; // don't validate empty values to allow optional controls
                }
                var /** @type {?} */ value = control.value;
                return regex.test(value) ? null :
                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
            };
        };
        /**
         * No-op validator.
         * @param {?} c
         * @return {?}
         */
        Validators.nullValidator = function (c) { return null; };
        /**
         * @param {?} validators
         * @return {?}
         */
        Validators.compose = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = (validators.filter(isPresent));
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                return _mergeErrors(_executeValidators(control, presentValidators));
            };
        };
        /**
         * @param {?} validators
         * @return {?}
         */
        Validators.composeAsync = function (validators) {
            if (!validators)
                return null;
            var /** @type {?} */ presentValidators = (validators.filter(isPresent));
            if (presentValidators.length == 0)
                return null;
            return function (control) {
                var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
                return map_3.call(forkJoin_1(observables), _mergeErrors);
            };
        };
        return Validators;
    }());
    /**
     * @param {?} o
     * @return {?}
     */
    function isPresent(o) {
        return o != null;
    }
    /**
     * @param {?} r
     * @return {?}
     */
    function toObservable(r) {
        var /** @type {?} */ obs = core.ɵisPromise(r) ? fromPromise_1(r) : r;
        if (!(core.ɵisObservable(obs))) {
            throw new Error("Expected validator to return Promise or Observable.");
        }
        return obs;
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    /**
     * @param {?} control
     * @param {?} validators
     * @return {?}
     */
    function _executeAsyncValidators(control, validators) {
        return validators.map(function (v) { return v(control); });
    }
    /**
     * @param {?} arrayOfErrors
     * @return {?}
     */
    function _mergeErrors(arrayOfErrors) {
        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
            return errors != null ? Object.assign({}, /** @type {?} */ ((res)), errors) : ((res));
        }, {});
        return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Used to provide a {\@link ControlValueAccessor} for form controls.
     *
     * See {\@link DefaultValueAccessor} for how to implement one.
     * \@stable
     */
    var NG_VALUE_ACCESSOR = new core.InjectionToken('NgValueAccessor');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return CheckboxControlValueAccessor; }),
        multi: true,
    };
    /**
     * The accessor for writing a value and listening to changes on a checkbox input element.
     *
     *  ### Example
     *  ```
     *  <input type="checkbox" name="rememberLogin" ngModel>
     *  ```
     *
     *  \@stable
     */
    var CheckboxControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        return CheckboxControlValueAccessor;
    }());
    CheckboxControlValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    CheckboxControlValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return DefaultValueAccessor; }),
        multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     * @return {?}
     */
    function _isAndroid() {
        var /** @type {?} */ userAgent = getDOM() ? getDOM().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * Turn this mode on if you want form directives to buffer IME input until compositionend
     * \@experimental
     */
    var COMPOSITION_BUFFER_MODE = new core.InjectionToken('CompositionEventMode');
    /**
     * The default accessor for writing a value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="text" name="searchQuery" ngModel>
     *  ```
     *
     *  \@stable
     */
    var DefaultValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _compositionMode
         */
        function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._compositionMode = _compositionMode;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            /**
             * Whether the user is creating a composition string (IME events).
             */
            this._composing = false;
            if (this._compositionMode == null) {
                this._compositionMode = !_isAndroid();
            }
        }
        /**
         * @param {?} value
         * @return {?}
         */
        DefaultValueAccessor.prototype.writeValue = function (value) {
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        DefaultValueAccessor.prototype._handleInput = function (value) {
            if (!this._compositionMode || (this._compositionMode && !this._composing)) {
                this.onChange(value);
            }
        };
        /**
         * \@internal
         * @return {?}
         */
        DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        DefaultValueAccessor.prototype._compositionEnd = function (value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
        };
        return DefaultValueAccessor;
    }());
    DefaultValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                    // TODO: vsavkin replace the above selector with the one below it once
                    // https://github.com/angular/angular/issues/3011 is implemented
                    // selector: '[ngModel],[formControl],[formControlName]',
                    host: {
                        '(input)': '_handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '_compositionStart()',
                        '(compositionend)': '_compositionEnd($event.target.value)'
                    },
                    providers: [DEFAULT_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    DefaultValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [COMPOSITION_BUFFER_MODE,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }
    /**
     * @param {?} validator
     * @return {?}
     */
    function normalizeAsyncValidator(validator) {
        if (((validator)).validate) {
            return function (c) { return ((validator)).validate(c); };
        }
        else {
            return (validator);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NumberValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a number value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="number" [(ngModel)]="age">
     *  ```
     */
    var NumberValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function NumberValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NumberValueAccessor.prototype.writeValue = function (value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var /** @type {?} */ normalizedValue = value == null ? '' : value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NumberValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        return NumberValueAccessor;
    }());
    NumberValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [NUMBER_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    NumberValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @return {?}
     */
    function unimplemented() {
        throw new Error('unimplemented');
    }
    /**
     * A base class that all control directive extend.
     * It binds a {\@link FormControl} object to a DOM element.
     *
     * Used internally by Angular forms.
     *
     * \@stable
     * @abstract
     */
    var NgControl = (function (_super) {
        __extends(NgControl, _super);
        function NgControl() {
            var _this = _super.apply(this, arguments) || this;
            /**
             * \@internal
             */
            _this._parent = null;
            _this.name = null;
            _this.valueAccessor = null;
            /**
             * \@internal
             */
            _this._rawValidators = [];
            /**
             * \@internal
             */
            _this._rawAsyncValidators = [];
            return _this;
        }
        Object.defineProperty(NgControl.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgControl.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () { return (unimplemented()); },
            enumerable: true,
            configurable: true
        });
        /**
         * @abstract
         * @param {?} newValue
         * @return {?}
         */
        NgControl.prototype.viewToModelUpdate = function (newValue) { };
        return NgControl;
    }(AbstractControlDirective));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return RadioControlValueAccessor; }),
        multi: true
    };
    /**
     * Internal class used by Angular to uncheck radio buttons with the matching name.
     */
    var RadioControlRegistry = (function () {
        function RadioControlRegistry() {
            this._accessors = [];
        }
        /**
         * @param {?} control
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.add = function (control, accessor) {
            this._accessors.push([control, accessor]);
        };
        /**
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.remove = function (accessor) {
            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
                if (this._accessors[i][1] === accessor) {
                    this._accessors.splice(i, 1);
                    return;
                }
            }
        };
        /**
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype.select = function (accessor) {
            var _this = this;
            this._accessors.forEach(function (c) {
                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                    c[1].fireUncheck(accessor.value);
                }
            });
        };
        /**
         * @param {?} controlPair
         * @param {?} accessor
         * @return {?}
         */
        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
            if (!controlPair[0].control)
                return false;
            return controlPair[0]._parent === accessor._control._parent &&
                controlPair[1].name === accessor.name;
        };
        return RadioControlRegistry;
    }());
    RadioControlRegistry.decorators = [
        { type: core.Injectable },
    ];
    /**
     * @nocollapse
     */
    RadioControlRegistry.ctorParameters = function () { return []; };
    /**
     * \@whatItDoes Writes radio control values and listens to radio control changes.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any radio control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use radio buttons with form directives
     *
     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
     * in the same group have the same `name` attribute.  Radio buttons with different `name`
     * attributes do not affect each other.
     *
     * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
     *
     * When using radio buttons in a reactive form, radio buttons in the same group should have the
     * same `formControlName`. You can also add a `name` attribute, but it's optional.
     *
     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     *  * **npm package**: `\@angular/forms`
     *
     *  \@stable
     */
    var RadioControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _registry
         * @param {?} _injector
         */
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._registry = _registry;
            this._injector = _injector;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype.ngOnInit = function () {
            this._control = this._injector.get(NgControl);
            this._checkName();
            this._registry.add(this._control, this);
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
        /**
         * @param {?} value
         * @return {?}
         */
        RadioControlValueAccessor.prototype.writeValue = function (value) {
            this._state = value === this.value;
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this._fn = fn;
            this.onChange = function () {
                fn(_this.value);
                _this._registry.select(_this);
            };
        };
        /**
         * @param {?} value
         * @return {?}
         */
        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
        /**
         * @param {?} fn
         * @return {?}
         */
        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype._checkName = function () {
            if (this.name && this.formControlName && this.name !== this.formControlName) {
                this._throwNameError();
            }
            if (!this.name && this.formControlName)
                this.name = this.formControlName;
        };
        /**
         * @return {?}
         */
        RadioControlValueAccessor.prototype._throwNameError = function () {
            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        };
        return RadioControlValueAccessor;
    }());
    RadioControlValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                    providers: [RADIO_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    RadioControlValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
        { type: RadioControlRegistry, },
        { type: core.Injector, },
    ]; };
    RadioControlValueAccessor.propDecorators = {
        'name': [{ type: core.Input },],
        'formControlName': [{ type: core.Input },],
        'value': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return RangeValueAccessor; }),
        multi: true
    };
    /**
     * The accessor for writing a range value and listening to changes that is used by the
     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
     *
     *  ### Example
     *  ```
     *  <input type="range" [(ngModel)]="age" >
     *  ```
     */
    var RangeValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function RangeValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        /**
         * @param {?} value
         * @return {?}
         */
        RangeValueAccessor.prototype.writeValue = function (value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RangeValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        return RangeValueAccessor;
    }());
    RangeValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [RANGE_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    RangeValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return SelectControlValueAccessor; }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString(id, value) {
        if (id == null)
            return "" + value;
        if (value && typeof value === 'object')
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * \@whatItDoes Writes values and listens to changes on a select element.
     *
     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
     * to keep the view synced with the {\@link FormControl} model.
     *
     * \@howToUse
     *
     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
     * value accessor will be active on any select control that has a form directive. You do
     * **not** need to add a special selector to activate it.
     *
     * ### How to use select controls with form directives
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * If your option values are simple strings, you can bind to the normal `value` property
     * on the option.  If your option values happen to be objects (and you'd like to save the
     * selection in your form as an object), use `ngValue` instead:
     *
     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * In reactive forms, you'll also want to add your form directive (`formControlName` or
     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
     * choice of binding to the  `value` or `ngValue` property on the select's options.
     *
     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Caveat: Option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * #### Syntax
     *
     * ```
     * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * Note: We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var SelectControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /**
             * \@internal
             */
            this._optionMap = new Map();
            /**
             * \@internal
             */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._compareWith = core.ɵlooseIdentical;
        }
        Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
            /**
             * @param {?} fn
             * @return {?}
             */
            set: function (fn) {
                if (typeof fn !== 'function') {
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        SelectControlValueAccessor.prototype.writeValue = function (value) {
            this.value = value;
            var /** @type {?} */ id = this._getOptionId(value);
            if (id == null) {
                this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }
            var /** @type {?} */ valueString = _buildValueString(id, value);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (valueString) {
                _this.value = _this._getOptionValue(valueString);
                fn(_this.value);
            };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * \@internal
         * @return {?}
         */
        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (this._compareWith(this._optionMap.get(id), value))
                    return id;
            }
            return null;
        };
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */
        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId(valueString);
            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        };
        return SelectControlValueAccessor;
    }());
    SelectControlValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [SELECT_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    SelectControlValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    SelectControlValueAccessor.propDecorators = {
        'compareWith': [{ type: core.Input },],
    };
    /**
     * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * \@howToUse
     *
     * See docs for {\@link SelectControlValueAccessor} for usage examples.
     *
     * \@stable
     */
    var NgSelectOption = (function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select)
                this.id = this._select._registerOption();
        }
        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select == null)
                    return;
                this._select._optionMap.set(this.id, value);
                this._setElementValue(_buildValueString(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectOption.prototype, "value", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._setElementValue(value);
                if (this._select)
                    this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        NgSelectOption.prototype._setElementValue = function (value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
        };
        /**
         * @return {?}
         */
        NgSelectOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        return NgSelectOption;
    }());
    NgSelectOption.decorators = [
        { type: core.Directive, args: [{ selector: 'option' },] },
    ];
    /**
     * @nocollapse
     */
    NgSelectOption.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core.Renderer2, },
        { type: SelectControlValueAccessor, decorators: [{ type: core.Optional }, { type: core.Host },] },
    ]; };
    NgSelectOption.propDecorators = {
        'ngValue': [{ type: core.Input, args: ['ngValue',] },],
        'value': [{ type: core.Input, args: ['value',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
        multi: true
    };
    /**
     * @param {?} id
     * @param {?} value
     * @return {?}
     */
    function _buildValueString$1(id, value) {
        if (id == null)
            return "" + value;
        if (typeof value === 'string')
            value = "'" + value + "'";
        if (value && typeof value === 'object')
            value = 'Object';
        return (id + ": " + value).slice(0, 50);
    }
    /**
     * @param {?} valueString
     * @return {?}
     */
    function _extractId$1(valueString) {
        return valueString.split(':')[0];
    }
    /**
     * The accessor for writing a value and listening to changes on a select element.
     *
     *  ### Caveat: Options selection
     *
     * Angular uses object identity to select options. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
     * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects options by the return value of the function.
     *
     * #### Syntax
     *
     * ```
     * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * \@stable
     */
    var SelectMultipleControlValueAccessor = (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            /**
             * \@internal
             */
            this._optionMap = new Map();
            /**
             * \@internal
             */
            this._idCounter = 0;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._compareWith = core.ɵlooseIdentical;
        }
        Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
            /**
             * @param {?} fn
             * @return {?}
             */
            set: function (fn) {
                if (typeof fn !== 'function') {
                    throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
            var _this = this;
            this.value = value;
            var /** @type {?} */ optionSelectedStateSetter;
            if (Array.isArray(value)) {
                // convert values to ids
                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
            }
            else {
                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
            }
            this._optionMap.forEach(optionSelectedStateSetter);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
            var _this = this;
            this.onChange = function (_) {
                var /** @type {?} */ selected = [];
                if (_.hasOwnProperty('selectedOptions')) {
                    var /** @type {?} */ options = _.selectedOptions;
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
                else {
                    var /** @type {?} */ options = (_.options);
                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
                        var /** @type {?} */ opt = options.item(i);
                        if (opt.selected) {
                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
                            selected.push(val);
                        }
                    }
                }
                _this.value = selected;
                fn(selected);
            };
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
            var /** @type {?} */ id = (this._idCounter++).toString();
            this._optionMap.set(id, value);
            return id;
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
                var id = _a[_i];
                if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
                    return id;
            }
            return null;
        };
        /**
         * \@internal
         * @param {?} valueString
         * @return {?}
         */
        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
            var /** @type {?} */ id = _extractId$1(valueString);
            return this._optionMap.has(id) ? ((this._optionMap.get(id)))._value : valueString;
        };
        return SelectMultipleControlValueAccessor;
    }());
    SelectMultipleControlValueAccessor.decorators = [
        { type: core.Directive, args: [{
                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    SelectMultipleControlValueAccessor.ctorParameters = function () { return [
        { type: core.Renderer2, },
        { type: core.ElementRef, },
    ]; };
    SelectMultipleControlValueAccessor.propDecorators = {
        'compareWith': [{ type: core.Input },],
    };
    /**
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * ### Example
     *
     * ```
     * <select multiple name="city" ngModel>
     *   <option *ngFor="let c of cities" [value]="c"></option>
     * </select>
     * ```
     */
    var NgSelectMultipleOption = (function () {
        /**
         * @param {?} _element
         * @param {?} _renderer
         * @param {?} _select
         */
        function NgSelectMultipleOption(_element, _renderer, _select) {
            this._element = _element;
            this._renderer = _renderer;
            this._select = _select;
            if (this._select) {
                this.id = this._select._registerOption(this);
            }
        }
        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select == null)
                    return;
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                if (this._select) {
                    this._value = value;
                    this._setElementValue(_buildValueString$1(this.id, value));
                    this._select.writeValue(this._select.value);
                }
                else {
                    this._setElementValue(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        NgSelectMultipleOption.prototype._setElementValue = function (value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
        };
        /**
         * \@internal
         * @param {?} selected
         * @return {?}
         */
        NgSelectMultipleOption.prototype._setSelected = function (selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        };
        /**
         * @return {?}
         */
        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
            if (this._select) {
                this._select._optionMap.delete(this.id);
                this._select.writeValue(this._select.value);
            }
        };
        return NgSelectMultipleOption;
    }());
    NgSelectMultipleOption.decorators = [
        { type: core.Directive, args: [{ selector: 'option' },] },
    ];
    /**
     * @nocollapse
     */
    NgSelectMultipleOption.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core.Renderer2, },
        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core.Optional }, { type: core.Host },] },
    ]; };
    NgSelectMultipleOption.propDecorators = {
        'ngValue': [{ type: core.Input, args: ['ngValue',] },],
        'value': [{ type: core.Input, args: ['value',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} name
     * @param {?} parent
     * @return {?}
     */
    function controlPath(name, parent) {
        return ((parent.path)).concat([name]);
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpControl(control, dir) {
        if (!control)
            _throwError(dir, 'Cannot find control with');
        if (!dir.valueAccessor)
            _throwError(dir, 'No value accessor for form control with');
        control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
        control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
        ((dir.valueAccessor)).writeValue(control.value); /** @type {?} */
        ((
        // view -> model
        dir.valueAccessor)).registerOnChange(function (newValue) {
            dir.viewToModelUpdate(newValue);
            control.markAsDirty();
            control.setValue(newValue, { emitModelToViewChange: false });
        }); /** @type {?} */
        ((
        // touched
        dir.valueAccessor)).registerOnTouched(function () { return control.markAsTouched(); });
        control.registerOnChange(function (newValue, emitModelEvent) {
            ((
            // control -> view
            dir.valueAccessor)).writeValue(newValue);
            // control -> ngModel
            if (emitModelEvent)
                dir.viewToModelUpdate(newValue);
        });
        if (((dir.valueAccessor)).setDisabledState) {
            control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((((dir.valueAccessor)).setDisabledState))(isDisabled); });
        }
        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
        dir._rawValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (((validator)).registerOnValidatorChange)
                ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
        });
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function cleanUpControl(control, dir) {
        ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
        ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
        dir._rawValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        dir._rawAsyncValidators.forEach(function (validator) {
            if (validator.registerOnValidatorChange) {
                validator.registerOnValidatorChange(null);
            }
        });
        if (control)
            control._clearChangeFns();
    }
    /**
     * @param {?} control
     * @param {?} dir
     * @return {?}
     */
    function setUpFormContainer(control, dir) {
        if (control == null)
            _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }
    /**
     * @param {?} dir
     * @return {?}
     */
    function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }
    /**
     * @param {?} dir
     * @param {?} message
     * @return {?}
     */
    function _throwError(dir, message) {
        var /** @type {?} */ messageEnd;
        if (((dir.path)).length > 1) {
            messageEnd = "path: '" + ((dir.path)).join(' -> ') + "'";
        }
        else if (((dir.path))[0]) {
            messageEnd = "name: '" + dir.path + "'";
        }
        else {
            messageEnd = 'unspecified name attribute';
        }
        throw new Error(message + " " + messageEnd);
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeValidators(validators) {
        return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    function composeAsyncValidators(validators) {
        return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
            null;
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model'))
            return false;
        var /** @type {?} */ change = changes['model'];
        if (change.isFirstChange())
            return true;
        return !core.ɵlooseIdentical(viewModel, change.currentValue);
    }
    var BUILTIN_ACCESSORS = [
        CheckboxControlValueAccessor,
        RangeValueAccessor,
        NumberValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
    ];
    /**
     * @param {?} valueAccessor
     * @return {?}
     */
    function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
    }
    /**
     * @param {?} dir
     * @param {?} valueAccessors
     * @return {?}
     */
    function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors)
            return null;
        var /** @type {?} */ defaultAccessor = undefined;
        var /** @type {?} */ builtinAccessor = undefined;
        var /** @type {?} */ customAccessor = undefined;
        valueAccessors.forEach(function (v) {
            if (v.constructor === DefaultValueAccessor) {
                defaultAccessor = v;
            }
            else if (isBuiltInAccessor(v)) {
                if (builtinAccessor)
                    _throwError(dir, 'More than one built-in value accessor matches form control with');
                builtinAccessor = v;
            }
            else {
                if (customAccessor)
                    _throwError(dir, 'More than one custom value accessor matches form control with');
                customAccessor = v;
            }
        });
        if (customAccessor)
            return customAccessor;
        if (builtinAccessor)
            return builtinAccessor;
        if (defaultAccessor)
            return defaultAccessor;
        _throwError(dir, 'No valid value accessor for form control with');
        return null;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
     *
     * \@stable
     */
    var AbstractFormGroupDirective = (function (_super) {
        __extends(AbstractFormGroupDirective, _super);
        function AbstractFormGroupDirective() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        AbstractFormGroupDirective.prototype.ngOnInit = function () {
            this._checkParentType(); /** @type {?} */
            ((this.formDirective)).addFormGroup(this);
        };
        /**
         * @return {?}
         */
        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormGroup(this);
            }
        };
        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
            /**
             * Get the {\@link FormGroup} backing this binding.
             * @return {?}
             */
            get: function () { return ((this.formDirective)).getFormGroup(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
            /**
             * Get the path to this control group.
             * @return {?}
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
            /**
             * Get the {\@link Form} to which this group belongs.
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._asyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @return {?}
         */
        AbstractFormGroupDirective.prototype._checkParentType = function () { };
        return AbstractFormGroupDirective;
    }(ControlContainer));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var AbstractControlStatus = (function () {
        /**
         * @param {?} cd
         */
        function AbstractControlStatus(cd) {
            this._cd = cd;
        }
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.touched : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.valid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
            /**
             * @return {?}
             */
            get: function () { return this._cd.control ? this._cd.control.pending : false; },
            enumerable: true,
            configurable: true
        });
        return AbstractControlStatus;
    }());
    var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending',
    };
    /**
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status. The following classes are applied as the properties
     * become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * \@stable
     */
    var NgControlStatus = (function (_super) {
        __extends(NgControlStatus, _super);
        /**
         * @param {?} cd
         */
        function NgControlStatus(cd) {
            return _super.call(this, cd) || this;
        }
        return NgControlStatus;
    }(AbstractControlStatus));
    NgControlStatus.decorators = [
        { type: core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
    ];
    /**
     * @nocollapse
     */
    NgControlStatus.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: core.Self },] },
    ]; };
    /**
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * \@stable
     */
    var NgControlStatusGroup = (function (_super) {
        __extends(NgControlStatusGroup, _super);
        /**
         * @param {?} cd
         */
        function NgControlStatusGroup(cd) {
            return _super.call(this, cd) || this;
        }
        return NgControlStatusGroup;
    }(AbstractControlStatus));
    NgControlStatusGroup.decorators = [
        { type: core.Directive, args: [{
                    selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                    host: ngControlStatusHost
                },] },
    ];
    /**
     * @nocollapse
     */
    NgControlStatusGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Self },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
     */
    var VALID = 'VALID';
    /**
     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
     */
    var INVALID = 'INVALID';
    /**
     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
     * errors are not yet available for the input value.
     */
    var PENDING = 'PENDING';
    /**
     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
     * calculations of validity or value.
     */
    var DISABLED = 'DISABLED';
    /**
     * @param {?} control
     * @param {?} path
     * @param {?} delimiter
     * @return {?}
     */
    function _find(control, path, delimiter) {
        if (path == null)
            return null;
        if (!(path instanceof Array)) {
            path = ((path)).split(delimiter);
        }
        if (path instanceof Array && (path.length === 0))
            return null;
        return ((path)).reduce(function (v, name) {
            if (v instanceof FormGroup) {
                return v.controls[name] || null;
            }
            if (v instanceof FormArray) {
                return v.at(/** @type {?} */ (name)) || null;
            }
            return null;
        }, control);
    }
    /**
     * @param {?=} validator
     * @return {?}
     */
    function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }
    /**
     * @param {?=} asyncValidator
     * @return {?}
     */
    function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
            asyncValidator || null;
    }
    /**
     * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
     * {\@link FormArray}.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * \@stable
     * @abstract
     */
    var AbstractControl = (function () {
        /**
         * @param {?} validator
         * @param {?} asyncValidator
         */
        function AbstractControl(validator, asyncValidator) {
            this.validator = validator;
            this.asyncValidator = asyncValidator;
            /**
             * \@internal
             */
            this._onCollectionChange = function () { };
            this._pristine = true;
            this._touched = false;
            /**
             * \@internal
             */
            this._onDisabledChange = [];
        }
        Object.defineProperty(AbstractControl.prototype, "value", {
            /**
             * The value of the control.
             * @return {?}
             */
            get: function () { return this._value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "parent", {
            /**
             * The parent control.
             * @return {?}
             */
            get: function () { return this._parent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "status", {
            /**
             * The validation status of the control. There are four possible
             * validation statuses:
             *
             * * **VALID**:  control has passed all validation checks
             * * **INVALID**: control has failed at least one validation check
             * * **PENDING**: control is in the midst of conducting a validation check
             * * **DISABLED**: control is exempt from validation checks
             *
             * These statuses are mutually exclusive, so a control cannot be
             * both valid AND invalid or invalid AND disabled.
             * @return {?}
             */
            get: function () { return this._status; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valid", {
            /**
             * A control is `valid` when its `status === VALID`.
             *
             * In order to have this status, the control must have passed all its
             * validation checks.
             * @return {?}
             */
            get: function () { return this._status === VALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "invalid", {
            /**
             * A control is `invalid` when its `status === INVALID`.
             *
             * In order to have this status, the control must have failed
             * at least one of its validation checks.
             * @return {?}
             */
            get: function () { return this._status === INVALID; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pending", {
            /**
             * A control is `pending` when its `status === PENDING`.
             *
             * In order to have this status, the control must be in the
             * middle of conducting a validation check.
             * @return {?}
             */
            get: function () { return this._status == PENDING; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "disabled", {
            /**
             * A control is `disabled` when its `status === DISABLED`.
             *
             * Disabled controls are exempt from validation checks and
             * are not included in the aggregate value of their ancestor
             * controls.
             * @return {?}
             */
            get: function () { return this._status === DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "enabled", {
            /**
             * A control is `enabled` as long as its `status !== DISABLED`.
             *
             * In other words, it has a status of `VALID`, `INVALID`, or
             * `PENDING`.
             * @return {?}
             */
            get: function () { return this._status !== DISABLED; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "errors", {
            /**
             * Returns any errors generated by failing validation. If there
             * are no errors, it will return null.
             * @return {?}
             */
            get: function () { return this._errors; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "pristine", {
            /**
             * A control is `pristine` if the user has not yet changed
             * the value in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return this._pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "dirty", {
            /**
             * A control is `dirty` if the user has changed the value
             * in the UI.
             *
             * Note that programmatic changes to a control's value will
             * *not* mark it dirty.
             * @return {?}
             */
            get: function () { return !this.pristine; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "touched", {
            /**
             * A control is marked `touched` once the user has triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "untouched", {
            /**
             * A control is `untouched` if the user has not yet triggered
             * a `blur` event on it.
             * @return {?}
             */
            get: function () { return !this._touched; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
            /**
             * Emits an event every time the value of the control changes, in
             * the UI or programmatically.
             * @return {?}
             */
            get: function () { return this._valueChanges; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
            /**
             * Emits an event every time the validation status of the control
             * is re-calculated.
             * @return {?}
             */
            get: function () { return this._statusChanges; },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this will overwrite any existing sync validators.
         * @param {?} newValidator
         * @return {?}
         */
        AbstractControl.prototype.setValidators = function (newValidator) {
            this.validator = coerceToValidator(newValidator);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * will overwrite any existing async validators.
         * @param {?} newValidator
         * @return {?}
         */
        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
            this.asyncValidator = coerceToAsyncValidator(newValidator);
        };
        /**
         * Empties out the sync validator list.
         * @return {?}
         */
        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
        /**
         * Empties out the async validator list.
         * @return {?}
         */
        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
        /**
         * Marks the control as `touched`.
         *
         * This will also mark all direct ancestors as `touched` to maintain
         * the model.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.markAsTouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._touched = true;
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsTouched(opts);
            }
        };
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, it will also mark all children as `untouched`
         * to maintain the model, and re-calculate the `touched` status of all parent
         * controls.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.markAsUntouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._touched = false;
            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
            if (this._parent && !opts.onlySelf) {
                this._parent._updateTouched(opts);
            }
        };
        /**
         * Marks the control as `dirty`.
         *
         * This will also mark all direct ancestors as `dirty` to maintain
         * the model.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.markAsDirty = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._pristine = false;
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsDirty(opts);
            }
        };
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, it will also mark all children as `pristine`
         * to maintain the model, and re-calculate the `pristine` status of all parent
         * controls.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.markAsPristine = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._pristine = true;
            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
            if (this._parent && !opts.onlySelf) {
                this._parent._updatePristine(opts);
            }
        };
        /**
         * Marks the control as `pending`.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.markAsPending = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._status = PENDING;
            if (this._parent && !opts.onlySelf) {
                this._parent.markAsPending(opts);
            }
        };
        /**
         * Disables the control. This means the control will be exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children will be disabled to maintain the model.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.disable = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._status = DISABLED;
            this._errors = null;
            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
            this._updateValue();
            if (opts.emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            this._updateAncestors(!!opts.onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
        };
        /**
         * Enables the control. This means the control will be included in validation checks and
         * the aggregate value of its parent. Its status is re-calculated based on its value and
         * its validators.
         *
         * If the control has children, all children will be enabled.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.enable = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._status = VALID;
            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
            this._updateAncestors(!!opts.onlySelf);
            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
        };
        /**
         * @param {?} onlySelf
         * @return {?}
         */
        AbstractControl.prototype._updateAncestors = function (onlySelf) {
            if (this._parent && !onlySelf) {
                this._parent.updateValueAndValidity();
                this._parent._updatePristine();
                this._parent._updateTouched();
            }
        };
        /**
         * @param {?} parent
         * @return {?}
         */
        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
        /**
         * Sets the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.setValue = function (value, options) { };
        /**
         * Patches the value of the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.patchValue = function (value, options) { };
        /**
         * Resets the control. Abstract method (implemented in sub-classes).
         * @abstract
         * @param {?=} value
         * @param {?=} options
         * @return {?}
         */
        AbstractControl.prototype.reset = function (value, options) { };
        /**
         * Re-calculates the value and validation status of the control.
         *
         * By default, it will also update the value and validity of its ancestors.
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.updateValueAndValidity = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._setInitialStatus();
            this._updateValue();
            if (this.enabled) {
                this._cancelExistingSubscription();
                this._errors = this._runValidator();
                this._status = this._calculateStatus();
                if (this._status === VALID || this._status === PENDING) {
                    this._runAsyncValidator(opts.emitEvent);
                }
            }
            if (opts.emitEvent !== false) {
                this._valueChanges.emit(this._value);
                this._statusChanges.emit(this._status);
            }
            if (this._parent && !opts.onlySelf) {
                this._parent.updateValueAndValidity(opts);
            }
        };
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype._updateTreeValidity = function (opts) {
            if (opts === void 0) { opts = { emitEvent: true }; }
            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
            this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
        /**
         * @return {?}
         */
        AbstractControl.prototype._runValidator = function () {
            return this.validator ? this.validator(this) : null;
        };
        /**
         * @param {?=} emitEvent
         * @return {?}
         */
        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
            var _this = this;
            if (this.asyncValidator) {
                this._status = PENDING;
                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
                this._asyncValidationSubscription =
                    obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
            }
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._cancelExistingSubscription = function () {
            if (this._asyncValidationSubscription) {
                this._asyncValidationSubscription.unsubscribe();
            }
        };
        /**
         * Sets errors on a form control.
         *
         * This is used when validations are run manually by the user, rather than automatically.
         *
         * Calling `setErrors` will also update the validity of the parent control.
         *
         * ### Example
         *
         * ```
         * const login = new FormControl("someLogin");
         * login.setErrors({
         *   "notUnique": true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({"notUnique": true});
         *
         * login.setValue("someOtherLogin");
         *
         * expect(login.valid).toEqual(true);
         * ```
         * @param {?} errors
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype.setErrors = function (errors, opts) {
            if (opts === void 0) { opts = {}; }
            this._errors = errors;
            this._updateControlsErrors(opts.emitEvent !== false);
        };
        /**
         * Retrieves a child control given the control's name or path.
         *
         * Paths can be passed in as an array or a string delimited by a dot.
         *
         * To get a control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         * @param {?} path
         * @return {?}
         */
        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
        /**
         * Returns error data if the control with the given path has the error specified. Otherwise
         * returns null or undefined.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControl.prototype.getError = function (errorCode, path) {
            var /** @type {?} */ control = path ? this.get(path) : this;
            return control && control._errors ? control._errors[errorCode] : null;
        };
        /**
         * Returns true if the control with the given path has the error specified. Otherwise
         * returns false.
         *
         * If no path is given, it checks for the error on the present control.
         * @param {?} errorCode
         * @param {?=} path
         * @return {?}
         */
        AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
        Object.defineProperty(AbstractControl.prototype, "root", {
            /**
             * Retrieves the top-level ancestor of this control.
             * @return {?}
             */
            get: function () {
                var /** @type {?} */ x = this;
                while (x._parent) {
                    x = x._parent;
                }
                return x;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * \@internal
         * @param {?} emitEvent
         * @return {?}
         */
        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
            this._status = this._calculateStatus();
            if (emitEvent) {
                this._statusChanges.emit(this._status);
            }
            if (this._parent) {
                this._parent._updateControlsErrors(emitEvent);
            }
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._initObservables = function () {
            this._valueChanges = new core.EventEmitter();
            this._statusChanges = new core.EventEmitter();
        };
        /**
         * @return {?}
         */
        AbstractControl.prototype._calculateStatus = function () {
            if (this._allControlsDisabled())
                return DISABLED;
            if (this._errors)
                return INVALID;
            if (this._anyControlsHaveStatus(PENDING))
                return PENDING;
            if (this._anyControlsHaveStatus(INVALID))
                return INVALID;
            return VALID;
        };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        AbstractControl.prototype._updateValue = function () { };
        /**
         * \@internal
         * @abstract
         * @param {?} cb
         * @return {?}
         */
        AbstractControl.prototype._forEachChild = function (cb) { };
        /**
         * \@internal
         * @abstract
         * @param {?} condition
         * @return {?}
         */
        AbstractControl.prototype._anyControls = function (condition) { };
        /**
         * \@internal
         * @abstract
         * @return {?}
         */
        AbstractControl.prototype._allControlsDisabled = function () { };
        /**
         * \@internal
         * @param {?} status
         * @return {?}
         */
        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
            return this._anyControls(function (control) { return control.status === status; });
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._anyControlsDirty = function () {
            return this._anyControls(function (control) { return control.dirty; });
        };
        /**
         * \@internal
         * @return {?}
         */
        AbstractControl.prototype._anyControlsTouched = function () {
            return this._anyControls(function (control) { return control.touched; });
        };
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype._updatePristine = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._pristine = !this._anyControlsDirty();
            if (this._parent && !opts.onlySelf) {
                this._parent._updatePristine(opts);
            }
        };
        /**
         * \@internal
         * @param {?=} opts
         * @return {?}
         */
        AbstractControl.prototype._updateTouched = function (opts) {
            if (opts === void 0) { opts = {}; }
            this._touched = this._anyControlsTouched();
            if (this._parent && !opts.onlySelf) {
                this._parent._updateTouched(opts);
            }
        };
        /**
         * \@internal
         * @param {?} formState
         * @return {?}
         */
        AbstractControl.prototype._isBoxedValue = function (formState) {
            return typeof formState === 'object' && formState !== null &&
                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        };
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */
        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
        return AbstractControl;
    }());
    /**
     * \@whatItDoes Tracks the value and validation status of an individual form control.
     *
     * It is one of the three fundamental building blocks of Angular forms, along with
     * {\@link FormGroup} and {\@link FormArray}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormControl}, you can pass in an initial value as the
     * first argument. Example:
     *
     * ```ts
     * const ctrl = new FormControl('some value');
     * console.log(ctrl.value);     // 'some value'
     * ```
     *
     * You can also initialize the control with a form state object on instantiation,
     * which includes both the value and whether or not the control is disabled.
     * You can't use the value key without the disabled key; both are required
     * to use this way of initialization.
     *
     * ```ts
     * const ctrl = new FormControl({value: 'n/a', disabled: true});
     * console.log(ctrl.value);     // 'n/a'
     * console.log(ctrl.status);   // 'DISABLED'
     * ```
     *
     * To include a sync validator (or an array of sync validators) with the control,
     * pass it in as the second argument. Async validators are also supported, but
     * have to be passed in separately as the third arg.
     *
     * ```ts
     * const ctrl = new FormControl('', Validators.required);
     * console.log(ctrl.value);     // ''
     * console.log(ctrl.status);   // 'INVALID'
     * ```
     *
     * See its superclass, {\@link AbstractControl}, for more properties and methods.
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormControl = (function (_super) {
        __extends(FormControl, _super);
        /**
         * @param {?=} formState
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormControl(formState, validator, asyncValidator) {
            if (formState === void 0) { formState = null; }
            var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
            /**
             * \@internal
             */
            _this._onChange = [];
            _this._applyFormState(formState);
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            _this._initObservables();
            return _this;
        }
        /**
         * Set the value of the form control to `value`.
         *
         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
         * and not its parent component. This defaults to false.
         *
         * If `emitEvent` is `true`, this
         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
         * to true (as it falls through to `updateValueAndValidity`).
         *
         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
         * specified.
         *
         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormControl.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this._value = value;
            if (this._onChange.length && options.emitModelToViewChange !== false) {
                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, options.emitViewToModelChange !== false); });
            }
            this.updateValueAndValidity(options);
        };
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {\@link FormControl#setValue} at this level.
         * It exists for symmetry with {\@link FormGroup#patchValue} on `FormGroups` and `FormArrays`,
         * where it does behave differently.
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormControl.prototype.patchValue = function (value, options) {
            if (options === void 0) { options = {}; }
            this.setValue(value, options);
        };
        /**
         * Resets the form control. This means by default:
         *
         * * it is marked as `pristine`
         * * it is marked as `untouched`
         * * value is set to null
         *
         * You can also reset to a specific form state by passing through a standalone
         * value or a form state object that contains both a value and a disabled state
         * (these are the only two properties that cannot be calculated).
         *
         * Ex:
         *
         * ```ts
         * this.control.reset('Nancy');
         *
         * console.log(this.control.value);  // 'Nancy'
         * ```
         *
         * OR
         *
         * ```
         * this.control.reset({value: 'Nancy', disabled: true});
         *
         * console.log(this.control.value);  // 'Nancy'
         * console.log(this.control.status);  // 'DISABLED'
         * ```
         * @param {?=} formState
         * @param {?=} options
         * @return {?}
         */
        FormControl.prototype.reset = function (formState, options) {
            if (formState === void 0) { formState = null; }
            if (options === void 0) { options = {}; }
            this._applyFormState(formState);
            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this._value, options);
        };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._updateValue = function () { };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormControl.prototype._anyControls = function (condition) { return false; };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
        /**
         * Register a listener for change events.
         * @param {?} fn
         * @return {?}
         */
        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
        /**
         * \@internal
         * @return {?}
         */
        FormControl.prototype._clearChangeFns = function () {
            this._onChange = [];
            this._onDisabledChange = [];
            this._onCollectionChange = function () { };
        };
        /**
         * Register a listener for disabled events.
         * @param {?} fn
         * @return {?}
         */
        FormControl.prototype.registerOnDisabledChange = function (fn) {
            this._onDisabledChange.push(fn);
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormControl.prototype._forEachChild = function (cb) { };
        /**
         * @param {?} formState
         * @return {?}
         */
        FormControl.prototype._applyFormState = function (formState) {
            if (this._isBoxedValue(formState)) {
                this._value = formState.value;
                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                    this.enable({ onlySelf: true, emitEvent: false });
            }
            else {
                this._value = formState;
            }
        };
        return FormControl;
    }(AbstractControl));
    /**
     * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
     * instances.
     *
     * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
     * with each control name as the key.  It calculates its status by reducing the statuses
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {\@link FormControl} and {\@link FormArray}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
     * argument. The key for each child will be the name under which it is registered.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * You can also include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Example
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormGroup = (function (_super) {
        __extends(FormGroup, _super);
        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormGroup(controls, validator, asyncValidator) {
            var _this = _super.call(this, validator || null, asyncValidator || null) || this;
            _this.controls = controls;
            _this._initObservables();
            _this._setUpControls();
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update value or validity of the control, so for
         * most cases you'll want to use {\@link FormGroup#addControl} instead.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.registerControl = function (name, control) {
            if (this.controls[name])
                return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
            return control;
        };
        /**
         * Add a control to this group.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.addControl = function (name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove a control from this group.
         * @param {?} name
         * @return {?}
         */
        FormGroup.prototype.removeControl = function (name) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         * @param {?} name
         * @param {?} control
         * @return {?}
         */
        FormGroup.prototype.setControl = function (name, control) {
            if (this.controls[name])
                this.controls[name]._registerOnCollectionChange(function () { });
            delete (this.controls[name]);
            if (control)
                this.registerControl(name, control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * It will return false for disabled controls. If you'd like to check for
         * existence in the group only, use {\@link AbstractControl#get} instead.
         * @param {?} controlName
         * @return {?}
         */
        FormGroup.prototype.contains = function (controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        };
        /**
         *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
         *  the structure of the group, with control names as keys.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.setValue({first: 'Nancy', last: 'Drew'});
         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         *
         *  ```
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormGroup.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this._checkAllValuesPresent(value);
            Object.keys(value).forEach(function (name) {
                _this._throwIfControlMissing(name);
                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
        };
        /**
         *  Patches the value of the {\@link FormGroup}. It accepts an object with control
         *  names as keys, and will do its best to match the values to the correct controls
         *  in the group.
         *
         *  It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const form = new FormGroup({
         *     first: new FormControl(),
         *     last: new FormControl()
         *  });
         *  console.log(form.value);   // {first: null, last: null}
         *
         *  form.patchValue({first: 'Nancy'});
         *  console.log(form.value);   // {first: 'Nancy', last: null}
         *
         *  ```
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormGroup.prototype.patchValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            Object.keys(value).forEach(function (name) {
                if (_this.controls[name]) {
                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
                }
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Resets the {\@link FormGroup}. This means by default:
         *
         * * The group and all descendants are marked `pristine`
         * * The group and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * can be a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * ### Example
         *
         * ```ts
         * this.form.reset({first: 'name', last: 'last name'});
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * - OR -
         *
         * ```
         * this.form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} options
         * @return {?}
         */
        FormGroup.prototype.reset = function (value, options) {
            if (value === void 0) { value = {}; }
            if (options === void 0) { options = {}; }
            this._forEachChild(function (control, name) {
                control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
            this._updatePristine(options);
            this._updateTouched(options);
        };
        /**
         * The aggregate value of the {\@link FormGroup}, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the group.
         * @return {?}
         */
        FormGroup.prototype.getRawValue = function () {
            return this._reduceChildren({}, function (acc, control, name) {
                acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
                return acc;
            });
        };
        /**
         * \@internal
         * @param {?} name
         * @return {?}
         */
        FormGroup.prototype._throwIfControlMissing = function (name) {
            if (!Object.keys(this.controls).length) {
                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.controls[name]) {
                throw new Error("Cannot find form control with name: " + name + ".");
            }
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormGroup.prototype._forEachChild = function (cb) {
            var _this = this;
            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) {
                control.setParent(_this);
                control._registerOnCollectionChange(_this._onCollectionChange);
            });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormGroup.prototype._anyControls = function (condition) {
            var _this = this;
            var /** @type {?} */ res = false;
            this._forEachChild(function (control, name) {
                res = res || (_this.contains(name) && condition(control));
            });
            return res;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._reduceValue = function () {
            var _this = this;
            return this._reduceChildren({}, function (acc, control, name) {
                if (control.enabled || _this.disabled) {
                    acc[name] = control.value;
                }
                return acc;
            });
        };
        /**
         * \@internal
         * @param {?} initValue
         * @param {?} fn
         * @return {?}
         */
        FormGroup.prototype._reduceChildren = function (initValue, fn) {
            var /** @type {?} */ res = initValue;
            this._forEachChild(function (control, name) { res = fn(res, control, name); });
            return res;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroup.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
                var controlName = _a[_i];
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
            return Object.keys(this.controls).length > 0 || this.disabled;
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        FormGroup.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, name) {
                if (value[name] === undefined) {
                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
                }
            });
        };
        return FormGroup;
    }(AbstractControl));
    /**
     * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
     * {\@link FormGroup} or {\@link FormArray} instances.
     *
     * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
     * It calculates its status by reducing the statuses of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with {\@link FormControl} and {\@link FormGroup}.
     *
     * \@howToUse
     *
     * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
     * argument.
     *
     * ### Example
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * You can also include array-level validators as the second arg, or array-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ### Adding or removing controls
     *
     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that will result in strange and unexpected behavior such
     * as broken change detection.
     *
     * * **npm package**: `\@angular/forms`
     *
     * \@stable
     */
    var FormArray = (function (_super) {
        __extends(FormArray, _super);
        /**
         * @param {?} controls
         * @param {?=} validator
         * @param {?=} asyncValidator
         */
        function FormArray(controls, validator, asyncValidator) {
            var _this = _super.call(this, validator || null, asyncValidator || null) || this;
            _this.controls = controls;
            _this._initObservables();
            _this._setUpControls();
            _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            return _this;
        }
        /**
         * Get the {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype.at = function (index) { return this.controls[index]; };
        /**
         * Insert a new {\@link AbstractControl} at the end of the array.
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.push = function (control) {
            this.controls.push(control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Insert a new {\@link AbstractControl} at the given `index` in the array.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.insert = function (index, control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Remove the control at the given `index` in the array.
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype.removeAt = function (index) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        /**
         * Replace an existing control.
         * @param {?} index
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype.setControl = function (index, control) {
            if (this.controls[index])
                this.controls[index]._registerOnCollectionChange(function () { });
            this.controls.splice(index, 1);
            if (control) {
                this.controls.splice(index, 0, control);
                this._registerControl(control);
            }
            this.updateValueAndValidity();
            this._onCollectionChange();
        };
        Object.defineProperty(FormArray.prototype, "length", {
            /**
             * Length of the control array.
             * @return {?}
             */
            get: function () { return this.controls.length; },
            enumerable: true,
            configurable: true
        });
        /**
         *  Sets the value of the {\@link FormArray}. It accepts an array that matches
         *  the structure of the control.
         *
         * This method performs strict checks, so it will throw an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.setValue(['Nancy', 'Drew']);
         *  console.log(arr.value);   // ['Nancy', 'Drew']
         *  ```
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormArray.prototype.setValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this._checkAllValuesPresent(value);
            value.forEach(function (newValue, index) {
                _this._throwIfControlMissing(index);
                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
        };
        /**
         *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
         *  structure of the control, and will do its best to match the values to the correct
         *  controls in the group.
         *
         *  It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         *  ### Example
         *
         *  ```
         *  const arr = new FormArray([
         *     new FormControl(),
         *     new FormControl()
         *  ]);
         *  console.log(arr.value);   // [null, null]
         *
         *  arr.patchValue(['Nancy']);
         *  console.log(arr.value);   // ['Nancy', null]
         *  ```
         * @param {?} value
         * @param {?=} options
         * @return {?}
         */
        FormArray.prototype.patchValue = function (value, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            value.forEach(function (newValue, index) {
                if (_this.at(index)) {
                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
                }
            });
            this.updateValueAndValidity(options);
        };
        /**
         * Resets the {\@link FormArray}. This means by default:
         *
         * * The array and all descendants are marked `pristine`
         * * The array and all descendants are marked `untouched`
         * * The value of all descendants will be null or null maps
         *
         * You can also reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state can be a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * ### Example
         *
         * ```ts
         * this.arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * - OR -
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         * @param {?=} value
         * @param {?=} options
         * @return {?}
         */
        FormArray.prototype.reset = function (value, options) {
            if (value === void 0) { value = []; }
            if (options === void 0) { options = {}; }
            this._forEachChild(function (control, index) {
                control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
            });
            this.updateValueAndValidity(options);
            this._updatePristine(options);
            this._updateTouched(options);
        };
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * If you'd like to include all values regardless of disabled status, use this method.
         * Otherwise, the `value` property is the best way to get the value of the array.
         * @return {?}
         */
        FormArray.prototype.getRawValue = function () {
            return this.controls.map(function (control) {
                return control instanceof FormControl ? control.value : ((control)).getRawValue();
            });
        };
        /**
         * \@internal
         * @param {?} index
         * @return {?}
         */
        FormArray.prototype._throwIfControlMissing = function (index) {
            if (!this.controls.length) {
                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }
            if (!this.at(index)) {
                throw new Error("Cannot find form control at index " + index);
            }
        };
        /**
         * \@internal
         * @param {?} cb
         * @return {?}
         */
        FormArray.prototype._forEachChild = function (cb) {
            this.controls.forEach(function (control, index) { cb(control, index); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._updateValue = function () {
            var _this = this;
            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
        };
        /**
         * \@internal
         * @param {?} condition
         * @return {?}
         */
        FormArray.prototype._anyControls = function (condition) {
            return this.controls.some(function (control) { return control.enabled && condition(control); });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._setUpControls = function () {
            var _this = this;
            this._forEachChild(function (control) { return _this._registerControl(control); });
        };
        /**
         * \@internal
         * @param {?} value
         * @return {?}
         */
        FormArray.prototype._checkAllValuesPresent = function (value) {
            this._forEachChild(function (control, i) {
                if (value[i] === undefined) {
                    throw new Error("Must supply a value for form control at index: " + i + ".");
                }
            });
        };
        /**
         * \@internal
         * @return {?}
         */
        FormArray.prototype._allControlsDisabled = function () {
            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
                var control = _a[_i];
                if (control.enabled)
                    return false;
            }
            return this.controls.length > 0 || this.disabled;
        };
        /**
         * @param {?} control
         * @return {?}
         */
        FormArray.prototype._registerControl = function (control) {
            control.setParent(this);
            control._registerOnCollectionChange(this._onCollectionChange);
        };
        return FormArray;
    }(AbstractControl));
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return NgForm; })
    };
    var resolvedPromise = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * \@howToUse
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You can export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
     * will give you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, you'll want to use {\@link NgModel} with a
     * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
     * sub-groups within the form.
     *
     * You can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * If you want to import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     *  \@stable
     */
    var NgForm = (function (_super) {
        __extends(NgForm, _super);
        /**
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgForm(validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._submitted = false;
            _this.ngSubmit = new core.EventEmitter();
            _this.form =
                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
            return _this;
        }
        Object.defineProperty(NgForm.prototype, "submitted", {
            /**
             * @return {?}
             */
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForm.prototype, "controls", {
            /**
             * @return {?}
             */
            get: function () { return this.form.controls; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.addControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                dir._control = (container.registerControl(dir.name, dir.control));
                setUpControl(dir.control, dir);
                dir.control.updateValueAndValidity({ emitEvent: false });
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.removeControl = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.addFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                var /** @type {?} */ group = new FormGroup({});
                setUpFormContainer(group, dir);
                container.registerControl(dir.name, group);
                group.updateValueAndValidity({ emitEvent: false });
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.removeFormGroup = function (dir) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ container = _this._findContainer(dir.path);
                if (container) {
                    container.removeControl(dir.name);
                }
            });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */
        NgForm.prototype.updateModel = function (dir, value) {
            var _this = this;
            resolvedPromise.then(function () {
                var /** @type {?} */ ctrl = (_this.form.get(/** @type {?} */ ((dir.path))));
                ctrl.setValue(value);
            });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgForm.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        /**
         * @return {?}
         */
        NgForm.prototype.onReset = function () { this.resetForm(); };
        /**
         * @param {?=} value
         * @return {?}
         */
        NgForm.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /**
         * \@internal
         * @param {?} path
         * @return {?}
         */
        NgForm.prototype._findContainer = function (path) {
            path.pop();
            return path.length ? (this.form.get(path)) : this.form;
        };
        return NgForm;
    }(ControlContainer));
    NgForm.decorators = [
        { type: core.Directive, args: [{
                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                    providers: [formDirectiveProvider],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    outputs: ['ngSubmit'],
                    exportAs: 'ngForm'
                },] },
    ];
    /**
     * @nocollapse
     */
    NgForm.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var TemplateDrivenErrors = (function () {
        function TemplateDrivenErrors() {
        }
        /**
         * @return {?}
         */
        TemplateDrivenErrors.modelParentException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.formGroupNameException = function () {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.missingNameException = function () {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        };
        /**
         * @return {?}
         */
        TemplateDrivenErrors.modelGroupParentException = function () {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
        };
        return TemplateDrivenErrors;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return NgModelGroup; })
    };
    /**
     * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used as a child of {\@link NgForm} (or in other words,
     * within `<form>` tags).
     *
     * Use this directive if you'd like to create a sub-group within a form. This can
     * come in handy if you want to validate a sub-group of your form separately from
     * the rest of your form, or if some values in your domain model make more sense to
     * consume together in a nested object.
     *
     * Pass in the name you'd like this sub-group to have and it will become the key
     * for the sub-group in the form's full value. You can also export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `FormsModule`
     *
     * \@stable
     */
    var NgModelGroup = (function (_super) {
        __extends(NgModelGroup, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function NgModelGroup(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        /**
         * \@internal
         * @return {?}
         */
        NgModelGroup.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelGroupParentException();
            }
        };
        return NgModelGroup;
    }(AbstractFormGroupDirective));
    NgModelGroup.decorators = [
        { type: core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
    ];
    /**
     * @nocollapse
     */
    NgModelGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Host }, { type: core.SkipSelf },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    NgModelGroup.propDecorators = {
        'name': [{ type: core.Input, args: ['ngModelGroup',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formControlBinding = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return NgModel; })
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */
    var resolvedPromise$1 = Promise.resolve(null);
    /**
     * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
     * to a form control element.
     *
     * The {\@link FormControl} instance will track the value, user interaction, and
     * validation status of the control and keep the view synced with the model. If used
     * within a parent form, the directive will also register itself with the form as a child
     * control.
     *
     * \@howToUse
     *
     * This directive can be used by itself or as part of a larger form. All you need is the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional {\@link Input}. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
     * the domain model in your class as well.
     *
     * If you wish to inspect the properties of the associated {\@link FormControl} (like
     * validity state), you can also export the directive into a local template variable using
     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
     * will fall through to the control anyway, so you can access them directly. You can see a
     * full list of properties directly available in {\@link AbstractControlDirective}.
     *
     * The following is an example of a simple standalone control using `ngModel`:
     *
     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * It's worth noting that in the context of a parent form, you often can skip one-way or
     * two-way binding because the parent form will sync the value for you. You can access
     * its properties by exporting it into a local template variable using `ngForm` (ex:
     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * Take a look at an example of using `ngModel` within a form:
     *
     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * To see `ngModel` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: `FormsModule`
     *
     *  \@stable
     */
    var NgModel = (function (_super) {
        __extends(NgModel, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function NgModel(parent, validators, asyncValidators, valueAccessors) {
            var _this = _super.call(this) || this;
            /**
             * \@internal
             */
            _this._control = new FormControl();
            /**
             * \@internal
             */
            _this._registered = false;
            _this.update = new core.EventEmitter();
            _this._parent = parent;
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgModel.prototype.ngOnChanges = function (changes) {
            this._checkForErrors();
            if (!this._registered)
                this._setUpControl();
            if ('isDisabled' in changes) {
                this._updateDisabled(changes);
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this._updateValue(this.model);
                this.viewModel = this.model;
            }
        };
        /**
         * @return {?}
         */
        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
        Object.defineProperty(NgModel.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () {
                return this._parent ? controlPath(this.name, this._parent) : [this.name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgModel.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        NgModel.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        /**
         * @return {?}
         */
        NgModel.prototype._setUpControl = function () {
            this._isStandalone() ? this._setUpStandalone() :
                this.formDirective.addControl(this);
            this._registered = true;
        };
        /**
         * @return {?}
         */
        NgModel.prototype._isStandalone = function () {
            return !this._parent || !!(this.options && this.options.standalone);
        };
        /**
         * @return {?}
         */
        NgModel.prototype._setUpStandalone = function () {
            setUpControl(this._control, this);
            this._control.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkForErrors = function () {
            if (!this._isStandalone()) {
                this._checkParentType();
            }
            this._checkName();
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkParentType = function () {
            if (!(this._parent instanceof NgModelGroup) &&
                this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
            }
            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
            }
        };
        /**
         * @return {?}
         */
        NgModel.prototype._checkName = function () {
            if (this.options && this.options.name)
                this.name = this.options.name;
            if (!this._isStandalone() && !this.name) {
                TemplateDrivenErrors.missingNameException();
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NgModel.prototype._updateValue = function (value) {
            var _this = this;
            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgModel.prototype._updateDisabled = function (changes) {
            var _this = this;
            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
            resolvedPromise$1.then(function () {
                if (isDisabled && !_this.control.disabled) {
                    _this.control.disable();
                }
                else if (!isDisabled && _this.control.disabled) {
                    _this.control.enable();
                }
            });
        };
        return NgModel;
    }(NgControl));
    NgModel.decorators = [
        { type: core.Directive, args: [{
                    selector: '[ngModel]:not([formControlName]):not([formControl])',
                    providers: [formControlBinding],
                    exportAs: 'ngModel'
                },] },
    ];
    /**
     * @nocollapse
     */
    NgModel.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    NgModel.propDecorators = {
        'name': [{ type: core.Input },],
        'isDisabled': [{ type: core.Input, args: ['disabled',] },],
        'model': [{ type: core.Input, args: ['ngModel',] },],
        'options': [{ type: core.Input, args: ['ngModelOptions',] },],
        'update': [{ type: core.Output, args: ['ngModelChange',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ReactiveErrors = (function () {
        function ReactiveErrors() {
        }
        /**
         * @return {?}
         */
        ReactiveErrors.controlParentException = function () {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.ngModelGroupException = function () {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.missingFormException = function () {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.groupParentException = function () {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.arrayParentException = function () {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
        };
        /**
         * @return {?}
         */
        ReactiveErrors.disabledAttrWarning = function () {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        };
        return ReactiveErrors;
    }());
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formControlBinding$1 = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return FormControlDirective; })
    };
    /**
     * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
     * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
     * {\@link FormControlDirective}.
     *
     * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
     * it does not require that your {\@link FormControl} instance be part of any parent
     * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
     * exists above it.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormControl} instance. See a full list of available properties in
     * {\@link AbstractControl}.
     *
     * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
     * or you can set it programmatically later using {\@link AbstractControl#setValue setValue} or
     * {\@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     *  \@stable
     */
    var FormControlDirective = (function (_super) {
        __extends(FormControlDirective, _super);
        /**
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlDirective(validators, asyncValidators, valueAccessors) {
            var _this = _super.call(this) || this;
            _this.update = new core.EventEmitter();
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
            /**
             * @param {?} isDisabled
             * @return {?}
             */
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlDirective.prototype.ngOnChanges = function (changes) {
            if (this._isControlChanged(changes)) {
                setUpControl(this.form, this);
                if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
                    ((((this.valueAccessor)).setDisabledState))(true);
                }
                this.form.updateValueAndValidity({ emitEvent: false });
            }
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.form.setValue(this.model);
                this.viewModel = this.model;
            }
        };
        Object.defineProperty(FormControlDirective.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._rawAsyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlDirective.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} newValue
         * @return {?}
         */
        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlDirective.prototype._isControlChanged = function (changes) {
            return changes.hasOwnProperty('form');
        };
        return FormControlDirective;
    }(NgControl));
    FormControlDirective.decorators = [
        { type: core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
    ];
    /**
     * @nocollapse
     */
    FormControlDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    FormControlDirective.propDecorators = {
        'form': [{ type: core.Input, args: ['formControl',] },],
        'model': [{ type: core.Input, args: ['ngModel',] },],
        'update': [{ type: core.Output, args: ['ngModelChange',] },],
        'isDisabled': [{ type: core.Input, args: ['disabled',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormGroupDirective; })
    };
    /**
     * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive accepts an existing {\@link FormGroup} instance. It will then use this
     * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
     * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
     * and {\@link FormArrayName} directives.
     *
     * **Set value**: You can set the form's initial value when instantiating the
     * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
     * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
     * to the {\@link FormGroup}'s {\@link AbstractControl#valueChanges valueChanges} event.  You can also
     * listen to its {\@link AbstractControl#statusChanges statusChanges} event to be notified when the
     * validation status is re-calculated.
     *
     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
     * submission event.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */
    var FormGroupDirective = (function (_super) {
        __extends(FormGroupDirective, _super);
        /**
         * @param {?} _validators
         * @param {?} _asyncValidators
         */
        function FormGroupDirective(_validators, _asyncValidators) {
            var _this = _super.call(this) || this;
            _this._validators = _validators;
            _this._asyncValidators = _asyncValidators;
            _this._submitted = false;
            _this.directives = [];
            _this.form = ((null));
            _this.ngSubmit = new core.EventEmitter();
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FormGroupDirective.prototype.ngOnChanges = function (changes) {
            this._checkFormPresent();
            if (changes.hasOwnProperty('form')) {
                this._updateValidators();
                this._updateDomValue();
                this._updateRegistrations();
            }
        };
        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
            /**
             * @return {?}
             */
            get: function () { return this._submitted; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this.form; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroupDirective.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return []; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addControl = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
            this.directives.push(dir);
            return ctrl;
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addFormGroup = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.addFormArray = function (dir) {
            var /** @type {?} */ ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({ emitEvent: false });
        };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.removeFormArray = function (dir) { };
        /**
         * @param {?} dir
         * @return {?}
         */
        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
        /**
         * @param {?} dir
         * @param {?} value
         * @return {?}
         */
        FormGroupDirective.prototype.updateModel = function (dir, value) {
            var /** @type {?} */ ctrl = (this.form.get(dir.path));
            ctrl.setValue(value);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        FormGroupDirective.prototype.onSubmit = function ($event) {
            this._submitted = true;
            this.ngSubmit.emit($event);
            return false;
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
        /**
         * @param {?=} value
         * @return {?}
         */
        FormGroupDirective.prototype.resetForm = function (value) {
            if (value === void 0) { value = undefined; }
            this.form.reset(value);
            this._submitted = false;
        };
        /**
         * \@internal
         * @return {?}
         */
        FormGroupDirective.prototype._updateDomValue = function () {
            var _this = this;
            this.directives.forEach(function (dir) {
                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
                if (dir._control !== newCtrl) {
                    cleanUpControl(dir._control, dir);
                    if (newCtrl)
                        setUpControl(newCtrl, dir);
                    dir._control = newCtrl;
                }
            });
            this.form._updateTreeValidity({ emitEvent: false });
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._updateRegistrations = function () {
            var _this = this;
            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
            if (this._oldForm)
                this._oldForm._registerOnCollectionChange(function () { });
            this._oldForm = this.form;
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._updateValidators = function () {
            var /** @type {?} */ sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
        };
        /**
         * @return {?}
         */
        FormGroupDirective.prototype._checkFormPresent = function () {
            if (!this.form) {
                ReactiveErrors.missingFormException();
            }
        };
        return FormGroupDirective;
    }(ControlContainer));
    FormGroupDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[formGroup]',
                    providers: [formDirectiveProvider$1],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    exportAs: 'ngForm'
                },] },
    ];
    /**
     * @nocollapse
     */
    FormGroupDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormGroupDirective.propDecorators = {
        'form': [{ type: core.Input, args: ['formGroup',] },],
        'ngSubmit': [{ type: core.Output },],
    };
    /**
     * @template T
     * @param {?} list
     * @param {?} el
     * @return {?}
     */
    function remove(list, el) {
        var /** @type {?} */ index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
        }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormGroupName; })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
     *
     * \@howToUse
     *
     * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormGroup} you want to link, and
     * will look for a {\@link FormGroup} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form groups can come in handy when you want to validate a sub-group of a
     * form separately from the rest or when you'd like to group the values of certain
     * controls into their own nested object.
     *
     * **Access the group**: You can access the associated {\@link FormGroup} using the
     * {\@link AbstractControl#get} method. Ex: `this.form.get('name')`.
     *
     * You can also access individual controls within the group using dot syntax.
     * Ex: `this.form.get('name.first')`
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormGroup}, or you can set it programmatically later using
     * {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the group, you can
     * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */
    var FormGroupName = (function (_super) {
        __extends(FormGroupName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormGroupName(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        /**
         * \@internal
         * @return {?}
         */
        FormGroupName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.groupParentException();
            }
        };
        return FormGroupName;
    }(AbstractFormGroupDirective));
    FormGroupName.decorators = [
        { type: core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
    ];
    /**
     * @nocollapse
     */
    FormGroupName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormGroupName.propDecorators = {
        'name': [{ type: core.Input, args: ['formGroupName',] },],
    };
    var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: core.forwardRef(function () { return FormArrayName; })
    };
    /**
     * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested {\@link FormArray} you want to link, and
     * will look for a {\@link FormArray} registered with that name in the parent
     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
     *
     * Nested form arrays can come in handy when you have a group of form controls but
     * you're not sure how many there will be. Form arrays allow you to create new
     * form controls dynamically.
     *
     * **Access the array**: You can access the associated {\@link FormArray} using the
     * {\@link AbstractControl#get} method on the parent {\@link FormGroup}.
     * Ex: `this.form.get('cities')`.
     *
     * **Get the value**: the `value` property is always synced and available on the
     * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
     *
     * **Set the value**: You can set an initial value for each child control when instantiating
     * the {\@link FormArray}, or you can set the value programmatically later using the
     * {\@link FormArray}'s {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}
     * methods.
     *
     * **Listen to value**: If you want to listen to changes in the value of the array, you can
     * subscribe to the {\@link FormArray}'s {\@link AbstractControl#valueChanges} event.  You can also
     * listen to its {\@link AbstractControl#statusChanges} event to be notified when the validation
     * status is re-calculated.
     *
     * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
     * calling its {\@link FormArray#push} method.
     *  Ex: `this.form.get('cities').push(new FormControl());`
     *
     * ### Example
     *
     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * * **npm package**: `\@angular/forms`
     *
     * * **NgModule**: `ReactiveFormsModule`
     *
     * \@stable
     */
    var FormArrayName = (function (_super) {
        __extends(FormArrayName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         */
        function FormArrayName(parent, validators, asyncValidators) {
            var _this = _super.call(this) || this;
            _this._parent = parent;
            _this._validators = validators;
            _this._asyncValidators = asyncValidators;
            return _this;
        }
        /**
         * @return {?}
         */
        FormArrayName.prototype.ngOnInit = function () {
            this._checkParentType(); /** @type {?} */
            ((this.formDirective)).addFormArray(this);
        };
        /**
         * @return {?}
         */
        FormArrayName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeFormArray(this);
            }
        };
        Object.defineProperty(FormArrayName.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return ((this.formDirective)).getFormArray(this); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () {
                return this._parent ? (this._parent.formDirective) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return controlPath(this.name, this._parent); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._validators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return composeAsyncValidators(this._asyncValidators);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormArrayName.prototype._checkParentType = function () {
            if (_hasInvalidParent(this._parent)) {
                ReactiveErrors.arrayParentException();
            }
        };
        return FormArrayName;
    }(ControlContainer));
    FormArrayName.decorators = [
        { type: core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
    ];
    /**
     * @nocollapse
     */
    FormArrayName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
    ]; };
    FormArrayName.propDecorators = {
        'name': [{ type: core.Input, args: ['formArrayName',] },],
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
            !(parent instanceof FormArrayName);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var controlNameBinding = {
        provide: NgControl,
        useExisting: core.forwardRef(function () { return FormControlName; })
    };
    /**
     * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
     * element by name.
     *
     * In other words, this directive ensures that any values written to the {\@link FormControl}
     * instance programmatically will be written to the DOM element (model -> view). Conversely,
     * any values written to the DOM element through user input will be reflected in the
     * {\@link FormControl} instance (view -> model).
     *
     * \@howToUse
     *
     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the {\@link FormControl} instance you want to
     * link, and will look for a {\@link FormControl} registered with that name in the
     * closest {\@link FormGroup} or {\@link FormArray} above it.
     *
     * **Access the control**: You can access the {\@link FormControl} associated with
     * this directive by using the {\@link AbstractControl#get get} method.
     * Ex: `this.form.get('first');`
     *
     * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
     * See a full list of available properties in {\@link AbstractControl}.
     *
     *  **Set value**: You can set an initial value for the control when instantiating the
     *  {\@link FormControl}, or you can set it programmatically later using
     *  {\@link AbstractControl#setValue setValue} or {\@link AbstractControl#patchValue patchValue}.
     *
     * **Listen to value**: If you want to listen to changes in the value of the control, you can
     * subscribe to the {\@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
     * {\@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
     * re-calculated.
     *
     * ### Example
     *
     * In this example, we create form controls for first name and last name.
     *
     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: {\@link RadioControlValueAccessor}
     * * Selects: {\@link SelectControlValueAccessor}
     *
     * **npm package**: `\@angular/forms`
     *
     * **NgModule**: {\@link ReactiveFormsModule}
     *
     *  \@stable
     */
    var FormControlName = (function (_super) {
        __extends(FormControlName, _super);
        /**
         * @param {?} parent
         * @param {?} validators
         * @param {?} asyncValidators
         * @param {?} valueAccessors
         */
        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
            var _this = _super.call(this) || this;
            _this._added = false;
            _this.update = new core.EventEmitter();
            _this._parent = parent;
            _this._rawValidators = validators || [];
            _this._rawAsyncValidators = asyncValidators || [];
            _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
            return _this;
        }
        Object.defineProperty(FormControlName.prototype, "isDisabled", {
            /**
             * @param {?} isDisabled
             * @return {?}
             */
            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        FormControlName.prototype.ngOnChanges = function (changes) {
            if (!this._added)
                this._setUpControl();
            if (isPropertyUpdated(changes, this.viewModel)) {
                this.viewModel = this.model;
                this.formDirective.updateModel(this, this.model);
            }
        };
        /**
         * @return {?}
         */
        FormControlName.prototype.ngOnDestroy = function () {
            if (this.formDirective) {
                this.formDirective.removeControl(this);
            }
        };
        /**
         * @param {?} newValue
         * @return {?}
         */
        FormControlName.prototype.viewToModelUpdate = function (newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
        };
        Object.defineProperty(FormControlName.prototype, "path", {
            /**
             * @return {?}
             */
            get: function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "formDirective", {
            /**
             * @return {?}
             */
            get: function () { return this._parent ? this._parent.formDirective : null; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "validator", {
            /**
             * @return {?}
             */
            get: function () { return composeValidators(this._rawValidators); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
            /**
             * @return {?}
             */
            get: function () {
                return ((composeAsyncValidators(this._rawAsyncValidators)));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormControlName.prototype, "control", {
            /**
             * @return {?}
             */
            get: function () { return this._control; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormControlName.prototype._checkParentType = function () {
            if (!(this._parent instanceof FormGroupName) &&
                this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
            }
            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
                !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
            }
        };
        /**
         * @return {?}
         */
        FormControlName.prototype._setUpControl = function () {
            this._checkParentType();
            this._control = this.formDirective.addControl(this);
            if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
                ((((this.valueAccessor)).setDisabledState))(true);
            }
            this._added = true;
        };
        return FormControlName;
    }(NgControl));
    FormControlName.decorators = [
        { type: core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
    ];
    /**
     * @nocollapse
     */
    FormControlName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
    ]; };
    FormControlName.propDecorators = {
        'name': [{ type: core.Input, args: ['formControlName',] },],
        'model': [{ type: core.Input, args: ['ngModel',] },],
        'update': [{ type: core.Output, args: ['ngModelChange',] },],
        'isDisabled': [{ type: core.Input, args: ['disabled',] },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return RequiredValidator; }),
        multi: true
    };
    var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return CheckboxRequiredValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `required` validator to any controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * \@stable
     */
    var RequiredValidator = (function () {
        function RequiredValidator() {
        }
        Object.defineProperty(RequiredValidator.prototype, "required", {
            /**
             * @return {?}
             */
            get: function () { return this._required; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._required = value != null && value !== false && "" + value !== 'false';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} c
         * @return {?}
         */
        RequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.required(c) : null;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        return RequiredValidator;
    }());
    RequiredValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                    providers: [REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] },
    ];
    /**
     * @nocollapse
     */
    RequiredValidator.ctorParameters = function () { return []; };
    RequiredValidator.propDecorators = {
        'required': [{ type: core.Input },],
    };
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * \@experimental
     */
    var CheckboxRequiredValidator = (function (_super) {
        __extends(CheckboxRequiredValidator, _super);
        function CheckboxRequiredValidator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} c
         * @return {?}
         */
        CheckboxRequiredValidator.prototype.validate = function (c) {
            return this.required ? Validators.requiredTrue(c) : null;
        };
        return CheckboxRequiredValidator;
    }(RequiredValidator));
    CheckboxRequiredValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                    providers: [CHECKBOX_REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] },
    ];
    /**
     * @nocollapse
     */
    CheckboxRequiredValidator.ctorParameters = function () { return []; };
    /**
     * Provider which adds {\@link EmailValidator} to {\@link NG_VALIDATORS}.
     */
    var EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return EmailValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `email` validator to controls marked with the
     * `email` attribute, via the {\@link NG_VALIDATORS} binding.
     *
     * ### Example
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * \@experimental
     */
    var EmailValidator = (function () {
        function EmailValidator() {
        }
        Object.defineProperty(EmailValidator.prototype, "email", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._enabled = value === '' || value === true || value === 'true';
                if (this._onChange)
                    this._onChange();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} c
         * @return {?}
         */
        EmailValidator.prototype.validate = function (c) {
            return this._enabled ? Validators.email(c) : null;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        return EmailValidator;
    }());
    EmailValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                },] },
    ];
    /**
     * @nocollapse
     */
    EmailValidator.ctorParameters = function () { return []; };
    EmailValidator.propDecorators = {
        'email': [{ type: core.Input },],
    };
    /**
     * Provider which adds {\@link MinLengthValidator} to {\@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {\@example common/forms/ts/validators/validators.ts region='min'}
     */
    var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MinLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
     *
     * \@stable
     */
    var MinLengthValidator = (function () {
        function MinLengthValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MinLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('minlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        MinLengthValidator.prototype.validate = function (c) {
            return this.minlength == null ? null : this._validator(c);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        MinLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.minLength(parseInt(this.minlength, 10));
        };
        return MinLengthValidator;
    }());
    MinLengthValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                    providers: [MIN_LENGTH_VALIDATOR],
                    host: { '[attr.minlength]': 'minlength ? minlength : null' }
                },] },
    ];
    /**
     * @nocollapse
     */
    MinLengthValidator.ctorParameters = function () { return []; };
    MinLengthValidator.propDecorators = {
        'minlength': [{ type: core.Input },],
    };
    /**
     * Provider which adds {\@link MaxLengthValidator} to {\@link NG_VALIDATORS}.
     *
     * ## Example:
     *
     * {\@example common/forms/ts/validators/validators.ts region='max'}
     */
    var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return MaxLengthValidator; }),
        multi: true
    };
    /**
     * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
     * `formControl`,
     * or control with `ngModel` that also has a `maxlength` attribute.
     *
     * \@stable
     */
    var MaxLengthValidator = (function () {
        function MaxLengthValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
            if ('maxlength' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        MaxLengthValidator.prototype.validate = function (c) {
            return this.maxlength != null ? this._validator(c) : null;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        MaxLengthValidator.prototype._createValidator = function () {
            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
        };
        return MaxLengthValidator;
    }());
    MaxLengthValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                    providers: [MAX_LENGTH_VALIDATOR],
                    host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                },] },
    ];
    /**
     * @nocollapse
     */
    MaxLengthValidator.ctorParameters = function () { return []; };
    MaxLengthValidator.propDecorators = {
        'maxlength': [{ type: core.Input },],
    };
    var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: core.forwardRef(function () { return PatternValidator; }),
        multi: true
    };
    /**
     * A Directive that adds the `pattern` validator to any controls marked with the
     * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
     * as the regex to validate Control value against.  Follows pattern attribute
     * semantics; i.e. regex must match entire Control value.
     *
     * ### Example
     *
     * ```
     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
     * ```
     * \@stable
     */
    var PatternValidator = (function () {
        function PatternValidator() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        PatternValidator.prototype.ngOnChanges = function (changes) {
            if ('pattern' in changes) {
                this._createValidator();
                if (this._onChange)
                    this._onChange();
            }
        };
        /**
         * @param {?} c
         * @return {?}
         */
        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
        /**
         * @param {?} fn
         * @return {?}
         */
        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
        /**
         * @return {?}
         */
        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
        return PatternValidator;
    }());
    PatternValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                    providers: [PATTERN_VALIDATOR],
                    host: { '[attr.pattern]': 'pattern ? pattern : null' }
                },] },
    ];
    /**
     * @nocollapse
     */
    PatternValidator.ctorParameters = function () { return []; };
    PatternValidator.propDecorators = {
        'pattern': [{ type: core.Input },],
    };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @module
     * @description
     * Entry point for all public APIs of the common package.
     */
    /**
     * \@stable
     */
    var VERSION$2 = new core.Version('4.4.7');
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * \@whatItDoes Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * \@experimental
     */
    var NgNoValidate = (function () {
        function NgNoValidate() {
        }
        return NgNoValidate;
    }());
    NgNoValidate.decorators = [
        { type: core.Directive, args: [{
                    selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                    host: { 'novalidate': '' },
                },] },
    ];
    /**
     * @nocollapse
     */
    NgNoValidate.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SHARED_FORM_DIRECTIVES = [
        NgNoValidate,
        NgSelectOption,
        NgSelectMultipleOption,
        DefaultValueAccessor,
        NumberValueAccessor,
        RangeValueAccessor,
        CheckboxControlValueAccessor,
        SelectControlValueAccessor,
        SelectMultipleControlValueAccessor,
        RadioControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        RequiredValidator,
        MinLengthValidator,
        MaxLengthValidator,
        PatternValidator,
        CheckboxRequiredValidator,
        EmailValidator,
    ];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */
    var InternalFormsSharedModule = (function () {
        function InternalFormsSharedModule() {
        }
        return InternalFormsSharedModule;
    }());
    InternalFormsSharedModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES,
                },] },
    ];
    /**
     * @nocollapse
     */
    InternalFormsSharedModule.ctorParameters = function () { return []; };
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The ng module for forms.
     * \@stable
     */
    var FormsModule = (function () {
        function FormsModule() {
        }
        return FormsModule;
    }());
    FormsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                    providers: [RadioControlRegistry],
                    exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                },] },
    ];
    /**
     * @nocollapse
     */
    FormsModule.ctorParameters = function () { return []; };

    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        HighlightPipe.prototype.transform = function (text, search) {
            if (typeof search === 'undefined') {
                return text;
            }
            var pattern = search.replace(/[\-\[\]\/{}()*+?.\\^$|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) { return t.length > 0; }).join('|');
            /**
             *
             */
            return text.replace(new RegExp(pattern, 'gi'), function (match) { return "<span class=\"dropdown-item-highlight\">" + match + "</span>"; });
        };
        HighlightPipe = __decorate([
            core.Pipe({
                name: 'highlight'
            })
        ], HighlightPipe);
        return HighlightPipe;
    }());

    var KeyValuePipe = /** @class */ (function () {
        function KeyValuePipe() {
        }
        KeyValuePipe.prototype.transform = function (value, args) {
            var keys = [];
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
        KeyValuePipe = __decorate([
            core.Pipe({
                name: 'keys'
            })
        ], KeyValuePipe);
        return KeyValuePipe;
    }());

    var NgAutoCompleteModule = /** @class */ (function () {
        function NgAutoCompleteModule() {
        }
        NgAutoCompleteModule = __decorate([
            core.NgModule({
                imports: [
                    CommonModule,
                    FormsModule
                ],
                exports: [
                    NgAutocompleteComponent,
                    CompleterComponent
                ],
                declarations: [
                    NgAutocompleteComponent,
                    CompleterComponent,
                    NgDropdownDirective,
                    HighlightPipe,
                    KeyValuePipe
                ]
            })
        ], NgAutoCompleteModule);
        return NgAutoCompleteModule;
    }());

    exports.NgAutoCompleteModule = NgAutoCompleteModule;
    exports.NgDropdownDirective = NgDropdownDirective;
    exports.HighlightPipe = HighlightPipe;
    exports.NgAutocompleteComponent = NgAutocompleteComponent;
    exports.AutocompleteItem = AutocompleteItem;
    exports.SearchableAutoCompleteItems = SearchableAutoCompleteItems;
    exports.SearchableAutoCompleteString = SearchableAutoCompleteString;
    exports.ComparableAutoCompleteString = ComparableAutoCompleteString;
    exports.TransformToAutocompleteItem = TransformToAutocompleteItem;
    exports.AutocompleteGroup = AutocompleteGroup;
    exports.CreateNewAutocompleteGroup = CreateNewAutocompleteGroup;
    exports.ReturnStringArrayByID = ReturnStringArrayByID;
    exports.FilterRemovals = FilterRemovals;
    exports.IsMobileOrTablet = IsMobileOrTablet;
    exports.NotUsedKey = NotUsedKey;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-autocomplete.umd.js.map
