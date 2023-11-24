let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 140;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => console.log("azlan456", data));