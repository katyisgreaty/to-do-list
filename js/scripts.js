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

    $("ul#chores").append("<li><span class='chore-list'>" + newToDoList.chore + "</span><button type='button' class='delete-me'>Delete</button></li>");

    $(".chore-list").last().click(function() {
      $("#show-chores").show();
      $("#show-chores h2").text(newToDoList.chore);
      $(".describe").text(newToDoList.describe);
    });

    $(".delete-me").off().click(function() {
      // console.log("theclickworked");
      // debugger;
      var deletedObject = $(this).prev().addClass('strike-out');
      console.log($(this).prev());
      $("#done-chores").append("<li>" + $(this).prev().text() + "</li>");
      $(this).parent().remove();
    });

    $("input.chore").val("");
    $("input.description").val("");
  });
});
