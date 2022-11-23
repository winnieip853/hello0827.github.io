function handleFormSubmit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // The URL is depends on the Google Form design
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSdX3NpTaRO3yfToGGXSwjrhqv6DnYa7ykXpRPaRPrrtxLaB9A/formResponse?&submit=Submit?usp=pp_url&entry.351528761='+name+'&entry.766696082='+email+'&entry.588126903='+phone, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'no-cors'
    })
    .then((response) => {
        console.log(response);
        // Set Local Storage after submit
        localStorage.setItem("firstVisit", false);
        $("#message").modal('toggle'); //see here usage
    })
}



function redirect(){
    window.location.href = "./details.html";
}

// Check status on onload
window.onload=function(){
    var firstVisit = localStorage.getItem("firstVisit");
    if(firstVisit == 'false'){
        window.location.replace("./details.html");
        return;
    }

    // Display the page
    document.getElementById('main').style.display = 'inline';

    const form = document.getElementById('sampleForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        handleFormSubmit();
    });
}
