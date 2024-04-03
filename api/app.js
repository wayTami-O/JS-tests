const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filterUser = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render(filterUser)
})

async function start() {
    try{
        list.innerHTML = `Loading...`
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 5000)
    } catch(e){
        list.innerHTML = err.massage()
    }
}

function render(user = []) {
    if (user.length === 0) {
        list.innerHTML = 'Нету юзера'
    } else {
        const html = user.map(toHTML).join('')
        list.innerHTML = html
    }
}

function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>`
}

start()