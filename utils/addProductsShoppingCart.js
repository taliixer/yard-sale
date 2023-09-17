// Construccion dinamica de los elementos dentro del carrito de compras cuando se da clieck en agregar al carrito en la informacion de un producto

export function addProductsShoppingCart() {
    //Elemento padre
    const contenedorProductosAgregados = document.querySelector('#allProductsInCart')

    //Creacion de elementos
    const contenedorPrincipal = document.createElement('div')
    const contenedorImagen = document.createElement('figure')
    const imagenProducto = document.createElement('img')
    const nombreProducto = document.createElement('p')
    const precioProducto = document.createElement('p')
    const iconoEliminarProducto = document.createElement('p')

    //Estilizar elementos
    contenedorPrincipal.classList.add('shopping-cart')
    imagenProducto.setAttribute('src','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    iconoEliminarProducto.setAttribute('src','../icons/icon_close.png')

    //Agregar contenido a los elementos
    nombreProducto.textContent = 'Bike'
    precioProducto.textContent = '$30,00'

    //Estructurar el HTML
    contenedorImagen.appendChild(imagenProducto)
    contenedorPrincipal.append(
        contenedorImagen,
        nombreProducto,
        precioProducto,
        iconoEliminarProducto
    )
    contenedorProductosAgregados.appendChild(contenedorPrincipal)
}

// Info Templeate
{/* <div class="shopping-cart">
<figure>
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
</figure>
<p>Bike</p>
<p>$30,00</p>
<img src="./icons/icon_close.png" alt="close">
</div> */}