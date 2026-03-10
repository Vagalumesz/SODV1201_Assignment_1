// displays the pic after 10 seconds
setTimeout(function() {
    let img = document.getElementById("profile-picture");
    if (img) {
        img.style.display = "block"; // shows the image
    } else {
        console.error("Image element not found!");
    }
}, 10000); 

// display the date in footer
document.getElementById("current-date").textContent = new Date().toLocaleDateString();

