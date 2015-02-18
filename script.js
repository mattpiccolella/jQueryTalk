$(document).ready(function() {
    $("#addbutton").click(function() {
        $("#content").append("<p>My name is Matt!</p>");
    });
    $("#addbutton").hover(
      function() {
        $("#hide").hide();
      },
      function() {
        $("#hide").show();
      }
    );
});