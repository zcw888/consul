(function() {
  "use strict";
  App.Geographies = {
    initialize: function() {
      return $(".headings-selector option").on("mousedown", function(event) {
        event.preventDefault();
        clicked_option = event.target;
        was_selected = $(clicked_option).prop("selected");
        if (was_selected === true) {
          return $(clicked_option).prop("selected", false);
        } else if (was_selected === false) {
          return $(clicked_option).prop("selected", true);
        }
      });
    }
  };
}).call(this);
