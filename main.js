import { productList } from './utils/addProductsHome.js'
import { productRender } from './utils/renderProducts.js'


// ? Snipet to select the html elements
const $ = (selector) => document.querySelector(selector);

// ? Iconos con interaccion
const correoBarraNavegacion = $('.navbar-email');
const hamburguerMenu = $('.header_menu');
const botonShoppingCart = $('.logo_shopping-cart');

// ? Elementos a modificar
export const mobileMenu = $('.mobile-menu');
const desktopMenu = $('.desktop-menu');
const productsInMyShoppingCart = $('#shoppingCartContainer');
const containerGalleryProducts = $('.main-container');

//? Add Event Listeners
correoBarraNavegacion.addEventListener('click', openProfile);
hamburguerMenu.addEventListener('click', openMenu);
botonShoppingCart.addEventListener('click',  openShoppingCar);
botonShoppingCart.addEventListener('click',  () => {
});
containerGalleryProducts.addEventListener('click', () => {
    hiddenElements(productsInMyShoppingCart)
});

// ? Function to show and hide elements
function hiddenElements(...elementos) {
    
    for (const elemento of elementos) {
        elemento.classList.add('inactive');
    }
}

function openProfile() {
    desktopMenu.classList.toggle('inactive');
}

function openMenu() {
    mobileMenu.classList.toggle('showMenu');
    hiddenElements(productsInMyShoppingCart)
    closeDetailSection()
}

function openShoppingCar() {
    productsInMyShoppingCart.classList.toggle('inactive');
    mobileMenu.classList.remove('showMenu');
    closeDetailSection()
}

function closeDetailSection() {
    let productDetailSection = document.getElementById('productDetail')

    if(document.body.contains(productDetailSection)){
        const renderProductDetail = document.querySelector('.renderProductDetail')
        const productDetail = document.querySelector('#productDetail')
        renderProductDetail.removeChild(productDetail)
    }
}

productRender(productList);