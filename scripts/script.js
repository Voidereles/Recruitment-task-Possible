window.onload = function () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let dd = today.getDate();

    // let myDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    // var options = { day: 'numeric', month: 'long', year: 'numeric' };
    // console.log(myDate.toLocaleDateString('en-EN', options));
    if (dd < 10) {
        dd = "0" + dd;
    }

    today = dd + " " + monthNames[today.getMonth()] + " " + today.getFullYear();

    const date = document.getElementById("date");
    date.insertAdjacentText("beforeend", today);
}

const imagesTotal = 10;
let currentImage = 1;

function previousArrow() {
    $('#previousArrow').addClass("button-inactive");
    $('#nextArrow').removeClass("button-inactive");
    $('#gallery-thumbnails').removeClass("slide-right");
    $('#nextArrowIcon').removeClass('arrow-inactive');
    $('#previousArrowIcon').addClass('arrow-inactive');
}

function nextArrow() {
    $('#previousArrow').removeClass("button-inactive");
    $('#nextArrow').addClass("button-inactive");
    $('#gallery-thumbnails').addClass("slide-right");
    $('#gallery-thumbnails').addClass("slide-right");
    $('#nextArrowIcon').addClass('arrow-inactive');
    $('#previousArrowIcon').removeClass('arrow-inactive');
}

function changeImage(imageNumber) {
    $('figure#person' + currentImage).removeClass("big-image-active");
    $('figure#person' + currentImage).addClass("big-image-hidden");

    $('#thumbnails-image' + currentImage + ' img').removeClass("active");
    currentImage = imageNumber;
    $('figure#person' + imageNumber).removeClass("big-image-hidden");
    $('figure#person' + imageNumber).addClass("big-image-active");
    $('#thumbnails-image' + imageNumber + ' img').addClass("active");
}