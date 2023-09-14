const row = document.querySelector('.carousel-container');
const movies = document.querySelectorAll('.movie');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

//---- Event Listener for Right Arrow ----//
rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
});

//---- Event Listener for Left Arrow ----//
leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;
});

//---- Pagination ----//
const numberPages = Math.ceil(movies.length / 5);
for(let i = 0; i < numberPages; i++){
    const indicator = document.createElement('button');

    if(i === 0){
        indicator.classList.add('active');
    }

    document.querySelector('.indicators').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    });
}