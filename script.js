const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('#submit-btn');
const ratingState = document.querySelector('#rating-state');
const thankYouState = document.querySelector('#thank-you-state');
const choice = document.querySelector('#choice')

// if (ratingBtns[0].classList.contains('selected')) {
//     ratingBtns[1].classList.remove('selected');
//     ratingBtns[2].classList.remove('selected');
//     ratingBtns[3].classList.remove('selected');
//     ratingBtns[4].classList.remove('selected');
// };

// if (ratingBtns[1].classList.contains('selected')) {
//     ratingBtns[0].classList.remove('selected');
//     ratingBtns[2].classList.remove('selected');
//     ratingBtns[3].classList.remove('selected');
//     ratingBtns[4].classList.remove('selected');
// }; 

// if (ratingBtns[2].classList.contains('selected')) {
//     ratingBtns[0].classList.remove('selected');
//     ratingBtns[1].classList.remove('selected');
//     ratingBtns[3].classList.remove('selected');
//     ratingBtns[4].classList.remove('selected');
// };

// if (ratingBtns[3].classList.contains('selected')) {
//     ratingBtns[0].classList.remove('selected');
//     ratingBtns[1].classList.remove('selected');
//     ratingBtns[2].classList.remove('selected');
//     ratingBtns[4].classList.remove('selected');
// };

// if (ratingBtns[4].classList.contains('selected')) {
//     ratingBtns[0].classList.remove('selected');
//     ratingBtns[1].classList.remove('selected');
//     ratingBtns[2].classList.remove('selected');
//     ratingBtns[3].classList.remove('selected');
// };


ratingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');
        } else {
            btn.classList.add('selected');
        };
    });

    submitBtn.addEventListener('click', () => {
        thankYouState.classList.remove('no-display');
        ratingState.classList.add('no-display');

        let ratingData = btn.innerHTML;

        if (btn.classList.contains('selected')) {
            choice.innerHTML = ratingData;
        };
    })
});