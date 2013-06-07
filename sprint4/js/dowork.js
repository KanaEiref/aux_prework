
$("#q").keyup(function () {
    $(this).instantSearch(
        {jsonurl: "data/contacts.json", outputElement: "#output"});
}); // close key up
            