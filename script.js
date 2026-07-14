function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Your message has been sent successfully!");

    return true;
}

// Image Slider

var images = [

    "images/iphone.jpg",

    "images/samsung.jpg",

    "images/vivo.jpg"

];

var index = 0;

function changeImage(){

    document.getElementById("sliderImage").src = images[index];

    index++;

    if(index == images.length){

        index = 0;
    }
}

setInterval(changeImage,2000);
