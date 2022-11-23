// Check status on onload
window.onload=function(){
    var firstVisit = localStorage.getItem("firstVisit");
    if(firstVisit != 'false'){
        window.location.href = "./index.html";
    }
}