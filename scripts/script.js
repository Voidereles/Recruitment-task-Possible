window.onload = function () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let dd = today.getDate();

    if (dd < 10) {
        dd = "0" + dd;
    }

    today = dd + " " + monthNames[today.getMonth()] + " " + today.getFullYear();

    const date = document.getElementById("date");
    date.insertAdjacentText("beforeend", today);
}