$(document).ready(function () {
  $("#load").on("click", function (event) {
    $.get("/all", function (data) {
    });
  });

  $(".save").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var stringId = $(this).attr('id').split('-');
    var title = stringId[0];
    var times = stringId[1];
    var newSave = {
      title: title,
      times: times,
      notes: ""
    };
    // Send the POST request.
    $.ajax("/save", {
      type: "POST",
      data: newSave
    })
  });

  $(".submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var stringId = $(this).attr('id').split('+');
    var title = stringId[0];
    var id = stringId[2];
    var notes = $("#text_" + id).val();
    var times = stringId[1];
    var newSave = {
      id: id,
      title: title,
      times: times,
      notes: notes
    };
    // Send the POST request.
    $.ajax("/update", {
      type: "POST",
      data: newSave
    }).then(function (result) {
      location.reload();
    });
  });

  $(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var stringId = $(this).attr('id').split('-');
    var title = stringId[0];
    var times = stringId[1];
    var newSave = {
      title: title,
      times: times
    };
    // Send the POST request.
    $.ajax("/delete", {
      type: "POST",
      data: newSave
    }).then(function (result) {
      location.reload();
    });
  });

  $("#loadS").on("click", function (event) {
    $.get("/saved", function (data) {
    });
  });
});
