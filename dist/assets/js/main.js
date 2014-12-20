/* global require */
require({
  paths: {
    "order": "../../../lib/requirejs/order",
    "react": "../../../lib/react/react"
  }
});

require([
  'hello'
], function (hello) {
  "use strict";
  hello.hello();
});
