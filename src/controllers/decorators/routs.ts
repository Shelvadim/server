import 'reflect-metadata';
//import { router } from '../../routes/loginRoute';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routBinder(Methods.get);
export const put = routBinder(Methods.put);
export const post = routBinder(Methods.post);
export const del = routBinder(Methods.del);
export const patch = routBinder(Methods.patch);
