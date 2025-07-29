const mydiv = document.getElementById("my_div");
mydiv.addEventListener("mousemove",() => {
    mydiv.style.backgroundColor = "purple";
    mydiv.style.cursor = "pointer";
    mydiv.style.height = "500px";
    mydiv.style.width = "500px";
    mydiv.style.border = "2px solid red";
    mydiv.innerText = 'This is after hovering';
    mydiv.style.height = '500px';
 
});