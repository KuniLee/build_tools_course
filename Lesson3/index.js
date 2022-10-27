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

const audioFiles = [
    {
        src: require('@audio/v-mire-zhivotnyh.mp3'),
        title: "Звуки природы"
    }, {
        src: require('@audio/vjijyjr.mp3'),
        title: "Ургант"
    }
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

for (const audio of audioFiles) {
    const card = document.createElement('div')
    card.className = 'col-12 col-sm-6 col-xl-4'
    card.insertAdjacentHTML('afterbegin', `<div class="card">
<div class="audio"><audio controls preload="none"> 
<source src="${audio.src}" type="audio/mp3"> 
</audio></div><div class="card-body"><p class="card-title text-center">${audio.title}</p></div></div>`)
    cardsContainer.append(card)
}
