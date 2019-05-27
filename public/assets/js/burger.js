  $(function() { 
    $("#createBurger").on("submit", function (event) {
      alert("you clicked the button")
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      // nameBurger will find an element with a "name" attribute equal to the string "burger"
      var nameBurger = {
        burger_name: $("#nameBurger").val().trim(),
        devoured: 0
      };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: nameBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
    $(".eatBurger").on("click", function (event) {
      event.preventDefault();

      //change devoured to true
      var id = $(this).data("id");
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

    $(".deleteBurger").on("click", function (event) {
      event.preventDefault();

      //change devoured to delete
      var id = $(this).data("id");
      
      // Reload the page to delete burger
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });

  }); 

