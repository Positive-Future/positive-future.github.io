"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mergeHead_1 = __importDefault(require("./mergeHead"));
exports.default = (function (_options) {
    if (_options === void 0) { _options = {}; }
    var options = __assign({ space: 2 }, _options);
    return {
        beforeCreate: function () {
            var _this = this;
            if (this.$options && typeof this.$options.jsonld === 'function') {
                var originalHead_1 = this.$options.head;
                this.$options.head = function () {
                    return mergeHead_1.default.call(_this, originalHead_1, options);
                };
            }
        },
    };
});
