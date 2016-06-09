(function  () {
    var words = [
    "Front-End Developer",
    "Creativa",
    "Autodidacta",
    "Comprometida",
    "y Mamá"],
    i=0;
    setInterval(function ( ) {
        $('#changingword').fadeOut(function ( ) {
            $('this').html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 4000) 
})();