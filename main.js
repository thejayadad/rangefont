
let size = document.getElementById("size");
slider.oninput = fontSize;

function fontSize(){
    text.style.fontSize = this.value + "px";
    size.innerText = this.value;
}