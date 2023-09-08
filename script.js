function showPortfolio() {
    var portfolioContainer = document.querySelector(".portfolio-container");

    // Toggle the display property
    if (portfolioContainer.style.display === "none" || portfolioContainer.style.display === "") {
        portfolioContainer.style.display = "block";
    } else {
        portfolioContainer.style.display = "none";
    }
}

function showContact() {
    var contactInfo = document.getElementById("contact-info");

    // Toggle the display property
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}
