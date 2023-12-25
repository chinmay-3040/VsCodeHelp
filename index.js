var clicked = 0;

function fun(idx) {
    var colour = document.querySelectorAll(".cont3-4 button")[idx].style.backgroundColor;

    if (colour == "white") {
        if (clicked==0) {
            document.querySelectorAll(".cont3-4 button")[idx].style.backgroundColor = "green";
            document.querySelectorAll(".cont3-4 button")[idx].style.color = "white";

            document.querySelector(".cont3-5 button").style.backgroundColor = "RGB(20,103,205";
            document.querySelector(".cont3-5 button").style.color = "white";
            clicked = 1;
        } else {
            alert("Click a single button");
        }
    } else {
        document.querySelectorAll(".cont3-4 button")[idx].style.backgroundColor = "white";
        document.querySelectorAll(".cont3-4 button")[idx].style.color = "grey";

        document.querySelector(".cont3-5 button").style.backgroundColor = "white";
        document.querySelector(".cont3-5 button").style.color = "grey";
        clicked = 0;
    }
}


function fun2(){
    // alert("Clicked");
    window.location.href = "./thankyou.html";
}