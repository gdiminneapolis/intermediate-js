var result = $("#result");

$("button").on("click", function() {

    var currentResult = parseInt(result.html());
    var operation = $(this).html();
    var change = parseInt(operation + "1");
    var newResult = parseInt(currentResult) + change;

    result.html(newResult);
    result.addClass("changing");

    setTimeout(function(){
        result.removeClass("changing");
    }, 200);

});