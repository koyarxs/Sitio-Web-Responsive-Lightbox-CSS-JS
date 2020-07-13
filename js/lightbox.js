const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const botonmenu1 = document.querySelector('.botonmenu');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'))

    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    botonmenu1.style.opacity = '1'
        
    }
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    botonmenu1.style.opacity = '0'

}
