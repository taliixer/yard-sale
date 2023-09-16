import { productList } from './utils/addProductsHome.js'
import { productRender } from './utils/renderProducts.js'

// ? Snipet to select the html elements
const $ = (selector) => document.querySelector(selector);

// ? Iconos con interaccion
const correoBarraNavegacion = $('.navbar-email');
const hamburguerMenu = $('.header_menu');
const botonShoppingCart = $('.logo_shopping-cart');
const productDetailCloseIcon = $('.product-detail-close')

// ? Elementos a modificar
export const mobileMenu = $('.mobile-menu');
export const productDetailSection = $('#productDetail');
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
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

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
    hiddenElements(productsInMyShoppingCart, productDetailSection)
}

function openShoppingCar() {
    productsInMyShoppingCart.classList.toggle('inactive');
    mobileMenu.classList.remove('showMenu');
    productDetailSection.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailSection.classList.add('inactive');
}

productRender(productList);