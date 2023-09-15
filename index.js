//Snipet to select the html elements
const $ = (selector) => document.querySelector(selector);

// Info Iconos con interaccion
const correoBarraNavegacion = $('.navbar-email');
const hamburguerMenu = $('.header_menu');
const botonShoppingCart = $('.logo_shopping-cart');
const productDetailCloseIcon = $('.product-detail-close')

// Info Elementos a modificar
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu');
const productsInMyShoppingCart = $('#shoppingCartContainer');
const productDetailSection = $('#productDetail');
const containerGalleryProducts = $('.main-container');
const galleryProducts = $('.cards-container');

//? Add Event Listeners
correoBarraNavegacion.addEventListener('click', openProfile);
hamburguerMenu.addEventListener('click', openMenu);
botonShoppingCart.addEventListener('click',  openShoppingCar);
containerGalleryProducts.addEventListener('click', () => {
    reset(productsInMyShoppingCart, mobileMenu)
});
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

//? Variables
const productList = [];

function ingresarProducto(nombre,precio,imagen) {
    const producto = {
        nombre: nombre,
        precio: precio,
        image: imagen
    }
    productList.push(producto);
}

ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);
ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);
ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);
ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);
ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);
ingresarProducto(
    'Bike',
    12700, 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
);
ingresarProducto(
    'Tennis Montain Bike',
    2200,
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
);

// * Esta funcion me ayuda a ocultar los elementos de menu cuando hay otro menu abierto
function reset(elementoParaEsconder,elementoParaMostrar) {
    elementoParaEsconder.classList.add('inactive');
    elementoParaMostrar.classList.remove('inactive');
}

// ? Function to show and hide elements
function openProfile() {
    desktopMenu.classList.toggle('inactive');
}

function openShoppingCar() {

    //* Validando que productDetailSection este abierto si ese es el caso entonces va a llamar a la fucnion reset donde se esconde el detail section y se muestra el productsInMyShoppingCart

    if(!productDetailSection.classList.contains('inactive')){
        reset(productDetailSection, productsInMyShoppingCart)
    }else{
        productsInMyShoppingCart.classList.toggle('inactive');
    }

    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMobileMenuOpen) {
        mobileMenu.classList.remove('showMenu');
    }
}

function openMenu() {
    const isproductsInMyShoppingCartOpen = !productsInMyShoppingCart.classList.contains('inactive');

    const isproductDetailSectionOpen = !productDetailSection.classList.contains('inactive');

    if(isproductsInMyShoppingCartOpen) {
        productsInMyShoppingCart.classList.add('inactive');
    }else if(isproductDetailSectionOpen){
        reset(productDetailSection, mobileMenu)
        mobileMenu.classList.toggle('showMenu');
    }else{
        mobileMenu.classList.toggle('showMenu');
    }
}

//* Renderizacion de los productos de HTML con JavaScript
function productRender(array) {
    
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image)
        productImage.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
    
    
    
        const productInfoDiv = document.createElement('div');
    
        const productPriece = document.createElement('p');
        productPriece.textContent = `${product.precio},00`;
    
        const productName = document.createElement('p');
        productName.textContent = product.nombre;
    
        productInfoDiv.append(productPriece, productName);
    
    
    
    
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv, productFigure)
    
        productCard.append(productImage, productInfo);
    
    
        galleryProducts.appendChild(productCard);
    }   
}

function openProductDetailAside (){
    productDetailSection.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailSection.classList.add('inactive');
}

productRender(productList);

