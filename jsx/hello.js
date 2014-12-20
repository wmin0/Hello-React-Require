/* global define */
define(["react"], function(React) {
  "use strict";
  return {
    hello: function() {
      React.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
      );
    }
  };
});
