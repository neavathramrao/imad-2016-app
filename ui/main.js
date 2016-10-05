console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = ("I Have changed this to new value");

var img = document.getElementById("ram");

var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}

img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};