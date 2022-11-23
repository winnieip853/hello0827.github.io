// Check status on onload
window.onload=function(){
    var firstVisit = localStorage.getItem("firstVisit");
    if(firstVisit != 'false'){
        window.location.href = "./index.html";
    }
    // Display the page
    document.getElementById('main').style.display = 'inline';
}