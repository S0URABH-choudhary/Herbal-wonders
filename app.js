const btn = document.getElementById("futurebtn");
const vid = document.getElementById("futurevid");

btn.addEventListener("mouseenter", function(){
    vid.style.opacity = "1";
})
btn.addEventListener("mouseleave", function(){
    vid.style.opacity = "0";
})