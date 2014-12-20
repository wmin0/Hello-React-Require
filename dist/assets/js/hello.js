/* global define */
define(["react"], function(React) {
  "use strict";
  return {
    hello: function() {
      React.render(
        React.createElement("h1", null, "Hello, world!"),
        document.getElementById('example')
      );
    }
  };
});
