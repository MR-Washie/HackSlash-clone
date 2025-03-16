const barEle = document.querySelector(".fa-bars-container");

const hideheaderEle = document.querySelector(".hideheader")

const hideheadearEleContainer = document.querySelector(".hideheader-container");


barEle.addEventListener("click", (e)=> {
    console.log("hello");
    // headerEle.style.display = "block";
    barEle.style.display = "none";
    hideheaderEle.style.display = "block";

})

const cross = document.querySelector(".fa-xmark");

cross.addEventListener("click", (e) => {
    barEle.style.display = "block";
    hideheaderEle.style.display = "none";
})