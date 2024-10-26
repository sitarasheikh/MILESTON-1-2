const toggleButton = document.getElementById("toggleButton") as HTMLButtonElement;
const profilePic = document.getElementById("profilePic") as HTMLDivElement;

let isVisible = false;

toggleButton.addEventListener("click", () => {
    isVisible = !isVisible;
    if (isVisible) {
        profilePic.style.display = "block";
        toggleButton.innerText = "Hide Profile Picture";
    } else {
        profilePic.style.display = "none";
        toggleButton.innerText = "Show Profile Picture";
    }
});
