
$( document ).ready(function() {

    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,
        slideNumber: true,
        transition: 'slide' // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        //dependencies: [
        //    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        //    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //    { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        //    { src: 'plugin/zoom-js/zoom.js', async: true },
        //    { src: 'plugin/notes/notes.js', async: true }
        //]
    });

    var big_image = document.getElementById("large_image");
    var thumbnails = document.getElementsByClassName("thumbnail");

    for(var i = 0; i < thumbnails.length; i++){

        thumbnails[i].addEventListener("click", function(){

            var currently_selected = document.getElementById("selected_thumb");

            if(currently_selected){
                currently_selected.setAttribute("id", "");
            }

            big_image.innerHTML = this.innerHTML;

            this.setAttribute("id", "selected_thumb");

        });

    }

    var result = document.getElementById("result");
    var ddr = document.getElementById("ddr");
    var add = document.getElementById("ddr_add");
    var subtract = document.getElementById("ddr_subtract");

    var buttons = ddr.getElementsByTagName("button");

    console.log(buttons);

    for(var j = 0; j < buttons.length; j++){

        console.log("in here");

        buttons[j].addEventListener("click", function() {

            var change = this.innerHTML + "1";
            var changeAsInt = parseInt(change);

            result.innerHTML = parseInt(result.innerHTML) + changeAsInt;
            updateClass();

        });

    }

    var result2 = document.getElementById("result2");
    var ddr2 = document.getElementById("ddr2");

    var moreBtns = ddr2.getElementsByTagName("button");

    console.log(buttons);

    for(var k = 0; k < moreBtns.length; k++){

        console.log("in here");

        moreBtns[k].addEventListener("click", function() {

            var change = this.innerHTML + "1";
            var changeAsInt = parseInt(change);

            result2.innerHTML = parseInt(result2.innerHTML) + changeAsInt;
            updateClass();

        });

    }

    function updateClass() {

        result.className = "changing";
        result2.className = "changing";

        setTimeout(function(){
            result.className = "";
            result2.className = "";
        }, 200);

    }

});