/* global define, React */
define("Component", function() {
  "use strict";
  return React.createClass({
    render: function() {
      return (
        <div className="Component">
          Hello, world! I am a Component.
        </div>
      );
    }
  });
});
