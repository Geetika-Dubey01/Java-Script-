


    const button = document.getElementById("btn");
    button.addEventListener("mousedown",() =>(button.style.background="red")
);
button.addEventListener("mouseup",() => {
    button.style.backgroundColor = "green";
    button.textContent = "button has been released";
});



    
