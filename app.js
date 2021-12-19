const reviews = [
    {
        id: 1, 
        name: 'susan smith',
        job: 'ux designer',
        img: './person-1.png',
        text: 'dolor sit amet consectetur adipisicing elit. Totam nulla dolor molestiae adipisci voluptatem quaerat aliquam sint tempora optio rerum.',

    },
    {
        id: 2, 
        name: 'marisol brigitta',
        job: 'web developer',
        img: './person-2.png',
        text: 'adipisci voluptatem quaerat aliquam sint tempora optio rerum. Totam nulla dolor molestiae adipisci Totam nulla dolor molestiae adipisci Totam nulla dolor molestiae adipisci adipisci voluptatem quaerat aliquam sint tempora optio rerum. Totam nulla dolor molestiae adipisci Totam nulla dolor molestiae adipisci Totam nulla dolor molestiae adipisci ',

    },
    {
        id: 3, 
        name: 'susan sanders',
        job: 'marketer',
        img: './person-3.png',
        text: 'amet consectetur adipisicing elit. Totam nulla dolor molestiae adipisci voluptatem quaerat aliquam sint tempora optio rerum.',

    },
    {
        id: 4, 
        name: 'mira pietari',
        job: 'publisher',
        img: './person-4.png',
        text: 'totam nulla dolor molestiae adipisci voluptatem quaerat aliquam sint tempora optio rerum.',

    },
    {
        id: 5, 
        name: 'douglas micajah',
        job: 'manager',
        img: './person-5.png',
        text: 'voluptatem quaerat aliquam sint tempora optio rerum molestiae adipisci voluptatem quaerat aliquam sint tempora optio rerum.',

    },
];

//select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const reviewContent = document.querySelector('.review-content')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//set starting item
var currentItem = 0;
// console.log(typeof(currentItem))

//load initial item
window.addEventListener('DOMContentLoaded', function() {
    showCard(currentItem)
});

function showCard(currentItem) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

prevBtn.addEventListener('click', function() {
    if (currentItem == 0) {
        currentItem = reviews.length - 1;
    } else {
        currentItem--;
    }
    showCard(currentItem);
    transitionCard();
})

nextBtn.addEventListener('click', function() {
    if (currentItem == reviews.length - 1) {
        currentItem = 0;
    } else {
    currentItem++;
    }
    showCard(currentItem);
    transitionCard();
})

function transitionCard() {
    reviewContent.classList.add('transition');
    setTimeout(function() {
        reviewContent.classList.remove('transition')}, 120)
}