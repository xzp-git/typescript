(function () {
  'use strict';

  var fn = (function () {
      return ++fn.count;
  });
  fn.count = 0;
  console.log(fn());
  console.log(fn());
  console.log(fn());

}());
//# sourceMappingURL=bundle.js.map
