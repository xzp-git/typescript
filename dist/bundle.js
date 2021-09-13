(function () {
  'use strict';

  //泛型的用处在于 当我们调用的时候 确定类型 而不是一开始就写好类型，类型不确定，只有在执行的时候才能确定
  //2. 多个泛型 元组进行类型交换
  var swap = function (tuple) {
      return [tuple[1], tuple[0]];
  };
  swap([123, 'sss00']);
  var computeArrayLength = function (arr1, arr2) {
      return arr1.length + arr2.length;
  };
  computeArrayLength('123', { length: 3 });
  var getVal = function (obj, key) {
      if (typeof obj !== 'object') {
          return;
      }
      return obj[key];
  };
  getVal({ a: 1 }, 'a');
  //泛型可以给类来使用
  var GetArrayMax = /** @class */ (function () {
      function GetArrayMax() {
          this.arr = [];
      }
      GetArrayMax.prototype.add = function (val) {
          this.arr.push(val);
      };
      GetArrayMax.prototype.getMax = function () {
          var arr = this.arr;
          var max = arr[0];
          for (var i = 1; i < arr.length; i++) {
              arr[i] > max ? max = arr[i] : null;
          }
          return max;
      };
      return GetArrayMax;
  }());
  var arr = new GetArrayMax(); // 泛型只有当使用后才知道具体的类型
  arr.add(1);
  arr.add(2);
  arr.add(3);
  arr.getMax();

}());
//# sourceMappingURL=bundle.js.map
