button.addEventListener("click", function() {

    var operation = this.innerHTML; //  will either be a '-' or '+' string.
    var currentResult = parseInt(result.innerHTML); // current result as integer
    var newResult; // declare newResult so we can set it later

    // use a conditional statement
    if (operation === "+") {
        newResult = currentResult + 1;
    }
    else {
        newResult = currentResult - 1;
    }

    result.innerHMTL = newResult; // set the innerHTML of result to newResult
});