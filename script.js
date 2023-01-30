const burger_ul = document.querySelector("#burger_ul");

burger_ul.style.display = "none";

const burger_icon = document.querySelector("#burger").addEventListener("click", function(){

    if(burger_ul.style.display == "none") burger_ul.style.display = "block";

    else burger_ul.style.display = "none";
});