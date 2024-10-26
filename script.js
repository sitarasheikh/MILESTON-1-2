var toggleButton = document.getElementById("toggleButton");
var profilePic = document.getElementById("profilePic");
var isVisible = false;
toggleButton.addEventListener("click", function () {
    isVisible = !isVisible;
    if (isVisible) {
        profilePic.style.display = "block";
        toggleButton.innerText = "Hide Profile Picture";
    }
    else {
        profilePic.style.display = "none";
        toggleButton.innerText = "Show Profile Picture";
    }
});
