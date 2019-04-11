import { Pipe } from "@angular/core";
var HighlightPipe = (function () {
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
    return HighlightPipe;
}());
export { HighlightPipe };
HighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'highlight'
            },] },
];
/** @nocollapse */
HighlightPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=highlight.js.map