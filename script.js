const button = document.querySelector(".slider");
const price = document.querySelectorAll(".price > h1");

button.addEventListener("click", function(){
    if(price[0].innerHTML === "199.99")
        price[0].innerHTML = "19.99";
    else price[0].innerHTML = "199.99";

    if(price[1].innerHTML === "249.99")
        price[1].innerHTML = "24.99";
    else price[1].innerHTML = "249.99";

    if(price[2].innerHTML === "399.99")
        price[2].innerHTML = "39.99";
    else price[2].innerHTML = "399.99";
});