const ratingBtns = document.querySelectorAll('.rating-btn');


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
        console.log(btn)
    });
});