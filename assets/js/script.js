const precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
const cantidadSpan = document.querySelector(".cantidad")
const aumentar = document.querySelector(".aumentar")
const disminuir = document.querySelector(".disminuir")
const totalSpan = document.querySelector(".valor-total")

precioSpan.innerHTML = precio

let cantidad = 0

function actualizarTotal () {
    totalSpan.innerHTML = cantidad * precio 
}

aumentar.addEventListener("click", () =>{
    cantidad +=1
    cantidadSpan.innerHTML = cantidad
    actualizarTotal()
})

disminuir.addEventListener("click", () =>{
    if (cantidad >0)
    cantidad -=1
    cantidadSpan.innerHTML = cantidad
    actualizarTotal()
})


