 // ==== Use a function to make sure everything loads first =============
$(function(){
 // ========== create-form on index.handlebars line 11 =========
     $(".create-form").on("sumbit", function (event) {
      //alert("you clicked the button") this button works.
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      // createBurger will find an element with a "burger_name" attribute equal to the string "burger"
      var createBurger = {
        burger_name: $("#createBurger").val().trim(),
        devoured: 0
      };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: createBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });

     // ==== eatBurger on index.handlebars line 36 =======
    $("#eatBurger").on("click", function (event) {
      event.preventDefault();

      //change devoured to true
      var id = $(this).data("id");

      // devouredNow on index.handlebars line 37
      var devouredNow = {
        devoured: 1
      };

      // Reload the page to get the updated list
      $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: devouredNow
      }).then(
        function () {
          console.log("Burger is devoured");
          location.reload();
        });
    });

    // == deleteBurger on index.handlebars line 55 ===

    $(".deleteBurger").on("click", function (event) {
      event.preventDefault();

      //change devoured to delete
      var id = $(this).data("id");
      
      // Send message to delete burger
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(function() {
        console.log("delete id ", id);
        location.reload();
      });
           
     }
  );
});



