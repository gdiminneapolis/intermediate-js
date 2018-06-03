button.addEventListener("click", function() {
    // ...logic for setting innerHTML on result...

    result.className = "changing";
    setTimeout(function(){
        result.className = "";
    }, 200);

});