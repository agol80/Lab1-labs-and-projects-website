const button = document.getElementById("mybutton");
const mousearea = document.getElementById("mousearea");

button.addEventListener("mouseover", function() {
    button.textContent = "Do not click! 😠";
    button.style.backgroundColor = "yellow";
})
button.addEventListener("click", function() {
    button.textContent = "Ouch! 🤕";
    button.style.backgroundColor = "red";
})
button.addEventListener("mouseleave", function() {
    button.textContent = "Phew! 😌";
    button.style.backgroundColor = "lightgreen";
})
button.addEventListener("dblclick", function() {
    button.textContent = "Double trouble! 🤩";
    button.style.backgroundColor = "pink";
})
button.addEventListener("mousemove", function() {
    button.textContent = "I see you! 👀";
    button.style.backgroundColor = "lightblue";
})
