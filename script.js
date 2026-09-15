// Simple welcome message
console.log("Hadi Portfolio Website Loaded");

// Smooth button interaction
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked");
    });
});

function openImage(imageSource) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = imageSource;
    popup.style.display = "flex";
}

function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}