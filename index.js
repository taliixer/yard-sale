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
const cardContainer = $('.cards-container');

const productList = [];

productList.push ({
    nombre:'Bike',
    precio: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    nombre:'Bicycle helmet',
    precio: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    nombre:'Bicycle helmet',
    precio: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    nombre:'Bicycle helmet',
    precio: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    nombre:'Seat',
    precio: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    nombre:'Tennis Montain Bike',
    precio: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    nombre:'Sunglasses',
    precio: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    nombre:'Sunglasses',
    precio: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    nombre:'Bicycle seat bag',
    precio: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

console.table(productList);

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

function productRender(array) {
    
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image)
    
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
    
    
        cardContainer.appendChild(productCard);
    }   
}

productRender(productList);

