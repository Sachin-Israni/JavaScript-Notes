let draggable = document.querySelectorAll('.draggable')
let container = document.querySelectorAll('.container')

draggable.forEach(dra => {
    dra.addEventListener('dragstart', () => {
        dra.classList.add('dragging')
    })
    dra.addEventListener('dragend', () => {
        dra.classList.remove('dragging')
    })
})
container.forEach(container => {
    container.addEventListener('dragover',(e)=>{
        e.preventDefault()
        const dragaable=document.querySelector('.dragging')
        container.appendChild(dragaable)
    })
})