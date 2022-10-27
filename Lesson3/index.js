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
    card.insertAdjacentHTML('afterbegin', `<img src="${image.src}"></img><p>${image.title}</p>`)
    cardsContainer.append(card)
}