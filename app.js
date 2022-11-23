const container = document.querySelector('.container')

window.addEventListener('scroll', ()=> {

    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
  
    //console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight}  | Altura personalizada = ${scrollHeight - 3}`)
    scrollTop + clientHeight > scrollHeight - 3 && setTimeout(newContainer, 2000)    
})

const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box d'
    container.appendChild(box)
}