//Snipet to select the html elements
const $ = (selector) => document.querySelector(selector);

// Info logo icons
const email = $('.navbar-email');
const hamburguerMenu = $('.header_menu');
const shoppingCart = $('.logo_shopping-cart');

// Info section
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu');
const shoppingSection = $('.product-detail');
const mainContainer = $('.main-container');

email.addEventListener('click', openProfile);
hamburguerMenu.addEventListener('click', openMenu);
shoppingCart.addEventListener('click',  openShoppingCar);
mainContainer.addEventListener('click', reset);

function reset() {
    shoppingSection.classList.add('inactive');
    mobileMenu.classList.remove('showMenu');
}

// ? Function to show and hide elements
function openProfile() {
    desktopMenu.classList.toggle('inactive');
}

function openMenu() {
    const isShoppingSectionOpen = !shoppingSection.classList.contains('inactive');

    if(isShoppingSectionOpen) {
        shoppingSection.classList.add('inactive');
    }

    mobileMenu.classList.toggle('showMenu');
}

function openShoppingCar() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMobileMenuOpen) {
        mobileMenu.classList.remove('showMenu');
    }


    shoppingSection.classList.toggle('inactive');
}

