"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
//import { router } from '../../routes/loginRoute';
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routBinder(Methods_1.Methods.get);
exports.put = routBinder(Methods_1.Methods.put);
exports.post = routBinder(Methods_1.Methods.post);
exports.del = routBinder(Methods_1.Methods.del);
exports.patch = routBinder(Methods_1.Methods.patch);
