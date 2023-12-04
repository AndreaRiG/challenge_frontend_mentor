// si es una clase lo inicio con un punto si es por id le coloco un #

//cantidad de articulos ingresados por usuarios

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
});

// activando el boton ADD TO CART para agregar los productos al carrito

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);


addToCartBtn.addEventListener('click', () => {


    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();


});

//mostrar el modal con el contenido del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
// let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');
    if (lastValue == 0) {
        productContainer.innerHTML = '<p class= "cart-empty">Your cart is empty</p>';
    } else {
        drawProductInModal();
    }
});

//Cambiar las imagenes cuando se presionen las flechas en los circulos
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

const imagesUrls = [
    '../images/image-product-1.jpg',
    '../images/image-product-2.jpg',
    '../images/image-product-3.jpg',
    '../images/image-product-4.jpg'
]

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', () => {
    changePreviusImage(imageContainer);
});


//Mostrar el modal de imagenes cuando hago click en la imagen principal

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModal = document.querySelector('.modal-gallery__close')



imageContainer.addEventListener('click', () => {
    imagesModal.style.display = 'grid';
});

closeModal.addEventListener('click', () => {
    imagesModal.style.display = 'none';
})

//cambiar las imagenes principales desde los thumbnails

let thumbnails = document.querySelectorAll('.gallery__thumbnail')
thumbnails = [...thumbnails]
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=> {
console.log(event.target.id)
imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
})
//antes era un nodelist =prototipo y ahora es un arreglo con 4 elementos con un spread operator

//cambiar las imagenes principales desde los thumbnails en el modal

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
const modalImageContainer = document.querySelector('.modal-gallery__image--container')
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalthumbnail =>{
    modalthumbnail.addEventListener('click',event=>{
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
})

//cambiar imagen principal de modal

const previusModalBtn = document.querySelector('.modal-gallery__previus');

const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
});

previusModalBtn.addEventListener('click', () => {
    changePreviusImage(modalImageContainer);
});


//Mostrar el navbar cuando presiono el menu de hamburguesa

const hamburgerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});


//Funciones

//Borrar carrito

function deleteProduct() {
    const deleteProductBtn = document.querySelector('.cart-modal__delete');


    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class= "cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    })
}





function drawProductInModal() {
    productContainer.innerHTML = `<div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
                <p class="cart-modal__product">Autum Limited Edition...</p>
                <p class="cart-modal__price">$125.00 x 3 <span>$375.00</span></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
            </div>
            <button class="cart-modal__checkout">Checkout</button>`

    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x ${lastValue}<span>$${lastValue * 125}.00</span>`
}


function changeNextImage(imgContainer) {
    if (imgIndex === 4) {
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}

function changePreviusImage(imgContainer) {
    if (imgIndex === 1) {
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`

}