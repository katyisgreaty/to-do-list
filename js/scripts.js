//business logic
function ToDoList(chore, description){
  this.chore = chore;
  this.describe = description;
}

//user interface logic

$(document).ready(function() {
  $("form.to-do-list").submit(function(event) {
    event.preventDefault();
    var inputtedChore = $('input.chore').val();
    var inputtedDescription = $('input.description').val();

    var newToDoList = new ToDoList(inputtedChore, inputtedDescription);

    $("ul#chores").append("<li><span class='chore-list'>" + newToDoList.chore + "</span><div class='itemDescription'><button class='finish btn btn-primary'>Finished!</button></div></li>");

    $(".chore-list").last().click(function() {
      $(this.).show();
      $("#show-chores h2").text(newToDoList.chore);
      $(".describe").text(newToDoList.describe);
      // $("#show-chores").append("<button class='finish btn btn-primary'>Finished!</button>");
      // $(".finish").click(function() {
      //
      // });

      //try .next() to select div in your click event handler

    });

    $("input.chore").val("");
    $("input.description").val("");
    });
});
