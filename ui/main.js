//Counter code

var button = document.getElementById("counter");


button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.readyState === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
    }
    // Not Done yet        
        
    };
    //Make request
    request.open("GET", "http://neavathramrao.imad.hasura-app.io/counter", true);
    request.send(null);
};

var nameInput = document.getElementById("name");
var nameInput = nameInput.value;
submit.onclick = function () {
    var name = ['Name1', 'Name2', 'Name3'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
};