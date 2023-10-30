function animateColors() {
    const redElement = document.getElementById("red");
    const ylwElement = document.getElementById("ylw");
    const grnElement = document.getElementById("grn");
    const pgrnElement = document.getElementById("redylw");
    const ppgrnElement = document.getElementById("grnylw");

    redElement.style.backgroundColor = "red";
    setTimeout(() => {
        redElement.style.backgroundColor = "rgba(255, 0, 0, 0.286)";
    }, 10000);

    setTimeout(() => {
        ylwElement.style.backgroundColor = "yellow";
        setTimeout(() => {
            ylwElement.style.backgroundColor = "rgba(255, 255, 0, 0.25)";
        }, 2000);
    }, 10000);

    ppgrnElement.style.backgroundColor = "green";
    setTimeout(() => {
        ppgrnElement.style.backgroundColor = "rgba(0, 128, 0, 0.157)";
    }, 10000);

    setTimeout(() => {
        pgrnElement.style.backgroundColor = "red";
        setTimeout(() => {
            pgrnElement.style.backgroundColor = "rgba(255, 0, 0, 0.157)";
        }, 10000);
    }, 12000);
    setTimeout(() => {
        grnElement.style.backgroundColor = "green";
        setTimeout(() => {
            grnElement.style.backgroundColor = "rgba(0, 128, 0, 0.157)";
            animateColors();
        }, 10000);
    }, 12000);


    



    
}

animateColors();