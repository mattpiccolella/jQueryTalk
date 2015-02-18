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
    $(document).scroll(function() {
        $("title").text("SCROLLED");
    });
    var keysPressed = 0;
    $("#autocomplete").keypress(function() {
      keysPressed++;
      $("#keys").text("Keys Pressed: " + keysPressed);
    });
});