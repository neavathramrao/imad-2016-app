console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = ("I Have changed this to new value");

var img = document.getElementById("ram");

img.onclick = function () {
    img.style.marginLeft = '100px';
};