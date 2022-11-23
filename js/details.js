// Check status on onload
window.onload=function(){
    var firstVisit = localStorage.getItem("firstVisit");
    if(firstVisit != 'false'){
        window.location.replace("./index.html");
        return;
    }
    // Display the page
    document.getElementById('main').style.display = 'inline';
}