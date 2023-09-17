import { mobileMenu } from "../main.js";
import { addProductsShoppingCart } from './addProductsShoppingCart.js'


const galleryProducts = document.querySelector('.cards-container');

//Creacion dinamica Galeria productos Home
export function productRender(array) {
    
    for (const product of array){

        //Crear elementos
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productPriece = document.createElement('p');
        const productName = document.createElement('p');
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        
        //Estilizar elementos
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        productImage.setAttribute('src', product.image)
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        //Dar el contenido a los elementos
        productPriece.textContent = `${product.precio},00`;
        productName.textContent = product.nombre;
        
        //Estructurar HTML
        productInfoDiv.append(productPriece, productName);
        productFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productFigure)
        productCard.append(productImage, productInfo);
        galleryProducts.appendChild(productCard);
        
        //Eventos de escucha
        productImage.addEventListener('click', () => createProductDetailAside (product.precio,product.nombre,'descripcion',product.image));
        productImgCard.addEventListener('click', addProductsShoppingCart)
    }   
}

//Creacion dinamica Detalles del producto Home
function createProductDetailAside (precio,nombre,descripcion,imagen){
    //Elemento Padre
    const renderProductDetail = document.querySelector('.renderProductDetail')

    const asideProduct = document.createElement('aside')
    const contenedorIconClose = document.createElement('div')
    const iconClose = document.createElement('img')
    const imagenProduct = document.createElement('img')
    const contenedorInfoProduct = document.createElement('div')
    const productPriece = document.createElement('p')
    const productName = document.createElement('p')
    const productDescription = document.createElement('p')
    const addButton = document.createElement('button')
    const iconShoppingCart = document.createElement('img')

    //Estilizar elementos
    asideProduct.setAttribute('id','productDetail')
    contenedorIconClose.classList.add('product-detail-close')
    iconClose.setAttribute('src','./icons/icon_close.png')
    imagenProduct.setAttribute('src',imagen)
    contenedorInfoProduct.classList.add('product-info')
    addButton.classList.add('primary-button','add-to-cart-button')
    addButton.setAttribute('id','addProductButton')
    iconShoppingCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    //Contenido de elementos
    productPriece.textContent = precio
    productName.textContent = nombre
    productDescription.textContent = descripcion
    addButton.textContent = 'Add to cart'

    //Estructurar HTML
    contenedorIconClose.appendChild(iconClose)
    addButton.appendChild(iconShoppingCart)
    contenedorInfoProduct.append(productPriece,productName,productDescription,addButton)
    asideProduct.append(contenedorIconClose,imagenProduct,contenedorInfoProduct)
    renderProductDetail.appendChild(asideProduct)

    //Eventos de escucha
    contenedorIconClose.addEventListener('click', closeProductDetailAside)
    addButton.addEventListener('click', addProductsShoppingCart)

    openProductDetailAside ()

    //Info Templeate
// {
//     <aside id="productDetail" class="inactive">
//     <div class="product-detail-close">
//       <img src="./icons/icon_close.png" alt="close">
//     </div>
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
//     <div class="product-info">
//       <p>$35,00</p>
//       <p>Bike</p>
//       <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//       <button id="addProductButton" class="primary-button add-to-cart-button">
//         <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//         Add to cart
//       </button>
//     </div>
//   </aside>
// }    
}

//Cerrar otros contenedores cuando la info del producto esta abierta
function openProductDetailAside (){
    mobileMenu.classList.remove('showMenu');
}

// Eliminar dinamicamente el HTML de la informacion del producto creada anteriormente cuando se de click en el icono de cerrar
function closeProductDetailAside() {
    const renderProductDetail = document.querySelector('.renderProductDetail')
    const productDetail = document.querySelector('#productDetail')

    renderProductDetail.removeChild(productDetail)
}