$(document).ready(function() {
    $("#search").click(function() {
      console.log("HERE!");
      var url = "http://api.culpa.info/courses/search/" + $("#searchbox").val();
      console.log(url);
      $.ajax({
          url : url,
          dataType:"json",
          success:function(data) {
              
          }
      });
    });
});