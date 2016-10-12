//var body = document.getElementById("bodyElement");//document.getElementsByTagName("body")[0];
var navigation = document.getElementById("navigation");
loadContent('home.html');

window.addEventListener("scroll", function (evt) {
    if (window.pageYOffset > navigation.getBoundingClientRect().bottom || document.documentElement.scrollTop > navigation.getBoundingClientRect().bottom || document.body.scrollTop > navigation.getBoundingClientRect().bottom || 0 > navigation.getBoundingClientRect().bottom) {
        navigation.className = "navbar navfixed";
    } else {
        navigation.className = "navbar navstatic";
    }
});

function loadContent(source) {
    console.log(source - 'updated');
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp);
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log(xmlhttp.responseText);
            document.getElementById("content").innerHTML = xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("GET", source, true);
    xmlhttp.send();
}
