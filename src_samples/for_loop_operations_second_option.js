button.addEventListener("click", function() {

    var operation = this.innerHTML; //  will either be a '-' or '+' string.
    var currentResult = parseInt(result.innerHTML); // current result as integer

    var change = operation + "1";
    var changeAsInt = parseInt(change); // will be either -1 or +1

    // this either adding negative 1 or adding positive 1
    var newResult = currentResult + changeAsInt;

    result.innerHMTL = newResult; // set the innerHTML of result to newResult

});