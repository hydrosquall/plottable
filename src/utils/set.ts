///<reference path="../reference.ts" />

module Plottable {
  export module Utils {
    /**
     * Shim for ES6 set.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
     */
    export class Set<T> {
      public size = 0;

      private _values: T[];

      constructor() {
        this._values = [];
      }

      public add(value: T) {
        if (!this.has(value)) {
          this._values.push(value);
          this.size++;
        }
        return this;
      }

      public delete(value: T) {
        var index = this._values.indexOf(value);
        if (index !== -1) {
          this._values.splice(index, 1);
          this.size--;
          return true;
        }
        return false;
      }

      public has(value: T) {
        return this._values.indexOf(value) !== -1;
      }

      /**
       * The forEach method executes the provided callback once for each value which actually exists
       * in the Set object. It is not invoked for values which have been deleted. However, it is executed
       * for values which are present but have the value undefined.
       *
       * Callback is invoked with three arguments:
       *   - the element value
       *   - the element value
       *   - the Set object being traversed
       *
       * @param {(value: T, value2: T, set: Set<T>) => void} callback The callback to be invoked
       * @param {any} thisArg The `this` context
       */
      public forEach(callback: (value: T, value2: T, set: Set<T>) => void, thisArg?: any) {
        this._values.forEach((value: T) => {
          callback.call(thisArg, value, value, this);
        });
      }
    }
  }
}
