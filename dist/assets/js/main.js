/* global require */
require({
  paths: {
    "order": "../../../lib/requirejs/order",
    "react": "../../../lib/react/react"
  }
});

require([
  'react'
], function (React) {
  window.React = React;
  require(['hello'], function(hello) {
    "use strict";
    hello.hello();
  });
});
