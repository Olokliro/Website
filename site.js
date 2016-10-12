var body = document.getElementsByTagName("body")[0];
var navigation = document.getElementById("navigation");


window.addEventListener("scroll", function (evt) {
    console.log("body - " + body.scrollTop);
    console.log("nav - " + navigation.getBoundingClientRect().bottom);
    if (body.scrollTop > navigation.getBoundingClientRect().bottom) {
        navigation.className = "navbar navfixed";
    } else {
        navigation.className = "navbar navstatic";
    }
});

function loadContent(source) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", source, true);
    xmlhttp.send();
}
