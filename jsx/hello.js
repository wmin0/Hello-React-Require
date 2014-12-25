/* global define, React */
define("hello", ["Component"], function(Component) {
  "use strict";
  return {
    hello: function() {
      React.render(
        <Component />,
        document.querySelector('body')
      );
    }
  };
});
