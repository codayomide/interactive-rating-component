const info = document.getElementById("info");
const noOfStars = 5;
let ratings; 
let submitBtn;

if (!ratings) {
    ratings = document.createElement("div");
    ratings.id = "ratings";
    
    for (let i = 0; i < noOfStars; i++) {
        const ratingComponent = document.createElement("button");
        ratingComponent.setAttribute("data-rating", i + 1);
        ratingComponent.className = "rating";
        ratingComponent.innerText = `${i + 1}`;
        ratings.append(ratingComponent);
    };
};

if (!submitBtn) {
    submitBtn = document.createElement("button");
    submitBtn.id = "submit-btn";
    submitBtn.innerHTML = "SUBMIT";
};

info.append(ratings, submitBtn);
