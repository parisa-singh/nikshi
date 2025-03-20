document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");

    // Hover effect for the donation button
    const donateBtn = document.querySelector(".donate-btn");

    donateBtn.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#ffffff";
        this.style.color = "#f1a600";
    });

    donateBtn.addEventListener("mouseout", function () {
        this.style.backgroundColor = "#f1a600";
        this.style.color = "#0a1a44";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");

    const missionBoxes = document.querySelectorAll(".mission-box");

    window.addEventListener("scroll", function () {
        missionBoxes.forEach(box => {
            const boxPos = box.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (boxPos < screenPos) {
                box.classList.add("show");
            }
        });
    });
});
