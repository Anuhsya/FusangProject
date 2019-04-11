import { Pipe } from '@angular/core';
var KeyValuePipe = (function () {
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
    return KeyValuePipe;
}());
export { KeyValuePipe };
KeyValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'keys'
            },] },
];
/** @nocollapse */
KeyValuePipe.ctorParameters = function () { return []; };
//# sourceMappingURL=key-value.js.map