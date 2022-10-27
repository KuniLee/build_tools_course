import '@/src/style.scss'

const images = [
    {
        src: require('@images/1.png'),
        title: "Лес"
    }, {
        src: require('@images/2.png'),
        title: "Ресторан"
    }, {
        src: require('@images/3.png'),
        title: "Кот"
    }, {
        src: require('@images/4.png'),
        title: "Стена"
    },
]

const cardsContainer = document.querySelector('.row')
for (const image of images) {
    const card = document.createElement('div')
    card.className = 'col-12 col-sm-6 col-xl-4'
    card.insertAdjacentHTML('afterbegin', `<div class="card"><img class="card-img-top" alt="${image.title}" 
src="${image.src}">
 <div class="card-body"><p class="card-title text-center">${image.title}</p></div></div>`)
    cardsContainer.append(card)
}