export function switcher(radioButtons, chapters) {
    radioButtons.addEventListener('change', function (ev) {
        chapters.forEach(el => {
            if (el.id === ev.target.value) el.removeAttribute('hidden')
            else el.setAttribute('hidden', true)
        })
    })
}