import { productDetailSection } from "../main.js";
import { mobileMenu } from "../main.js";

const galleryProducts = document.querySelector('.cards-container');

export function productRender(array) {
    
    for (const product of array){
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
    // reset(mobileMenu, productDetailSection)
    productDetailSection.classList.remove('inactive');
    mobileMenu.classList.remove('showMenu');
}