/* global define, React */
define("hello", ["Component"], function(Component) {
  "use strict";
  return {
    hello: function() {
      React.render(
        React.createElement(Component, null),
        document.querySelector('body')
      );
    }
  };
});
