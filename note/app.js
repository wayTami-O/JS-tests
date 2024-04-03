const inputElement = document.getElementById('title')
const btn = document.getElementById('create')
const list = document.getElementById('list')

// const notes = ['Записать блок про массивы', 'рассказать пидору секрет']

// объект с информацией 
const notes = [
        {
        title: 'выучить js ',
        completed: false
    }, {
        title: 'пойти в tltpro',
        completed: true
    }
]
// заполняем лист, проверяем пустой ли он
function render() {
    list.innerHTML = ''
    if (notes.length === 0) {
        list.innerHTML = `<p>Нет элементов</p>`
    }
    for (let i = 0; i < notes.length; i++) {
        list.insertAdjacentHTML('beforeend', getNote(notes[i], i))
    }
}

render()
// клик который добавляет заметку + обновляет весь список 
btn.onclick = function() {
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    if (inputElement.value.length === 0) {
        return
    } 
    notes.push(newNote)
    render()
    inputElement.value = ''
}
// клик из листа, в котором определям куда кликнули 
list.onclick = function(event) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
    render()
}
// вставляем разметку страницы + обосзначаем её индекс (сокрщение кода)
function getNote(note, index) {
    return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
        <span class="${note.completed ? "text-decoration-line-through" : ""}">${note.title}</span>
        <span>
            <span class="btn btn-small btn-${note.completed ? "warning" : "success"}" data-index="${index}" data-type="toggle" >&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove" >&times;</span>
        </span>
        </li>
    `
}