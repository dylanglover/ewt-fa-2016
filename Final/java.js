window.addEventListener('load', function(evt) {
    console.log('The global script has loaded.');
});

function $(query) {
    return document.querySelector(query);
}

function $$(query) {
    return [].slice.call(document.querySelectorAll(query));
}


// -----------------------

window.addEventListener("click", function toggleOverlay() {

    var overlay = $('#overlay');
    var specialBox = $('#specialBox');
    overlay.style.opacity = .2;
    if (overlay.style.display == "block") {
        overlay.style.display = "none";
        specialBox.style.display = "none";
    } else {
        overlay.style.display = "block";
        specialBox.style.display = "block";
    }


});
