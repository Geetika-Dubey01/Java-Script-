let pass = document.getElementById("passward");
let toggle_checkbox = document.getElementsById("togglecheckbox");
toggle_checkbox.addEventListener("change",function() {
    if (toggle_checkbox.checked == true) {
        pass.type = "text";
    } else {
        pass.type = "passward";
    }
});