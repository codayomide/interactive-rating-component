const submitBtn = document.querySelector('#submit-btn');
const ratingState = document.querySelector('#rating-state');
const thankYouState = document.querySelector('#thank-you-state');
const choice = document.querySelector('#choice');

let ratingBtns = document.querySelectorAll('.rate');
let rate = 0;

ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        rate = btn.innerHTML;
        ratingBtns.forEach(btn => btn.classList.remove('selected'));
        btn.classList.add('selected');
    });
});

submitBtn.addEventListener('click', rateHandler);

function rateHandler() {
    if (rate === 0) {
        alert("Please rate us");
    } else {
        choice.innerHTML = rate;
        ratingState.classList.add('no-display');
        thankYouState.classList.remove('no-display');
    };
};