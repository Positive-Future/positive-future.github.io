"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (target) {
    var options = target.options || {};
    if (!options.methods || !options.methods.jsonld || typeof options.methods.jsonld !== 'function') {
        return;
    }
    options.jsonld = options.methods.jsonld;
    delete options.methods.jsonld;
});
