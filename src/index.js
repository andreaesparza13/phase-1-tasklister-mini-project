document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        buildList(e.target['new-task-description'].value)
        form.reset()
    })
});

function buildList(item) {
    const pList = document.createElement('p')
    const btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    pList.textContent = `${item}    `
    pList.appendChild(btn)
    document.querySelector('#tasks').appendChild(pList)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}