    /////   json file /////
// fetch("products.json")

// .then(function(response){

//     return response.json();

// })

// .then(function(products){

//     let placeholder = document.querySelector("#data-output");

//     let out = "";

//     for(let product of products){

//         out += `

//         <section class="products">

//                 <img src="${item.image}" alt="${item.image}">

//                 <p class="title">${item.title}</p>

//                 <p class="description">${item.description}</p>

//                 <p class="price">

//                 <span>${item.price}</span>

//                 <span>&dollar;</span>

//                 </p>

//                 <p class="cart"> add to cart </p>
    
//                 </section>
        
//         `;
//     }

//     placeholder.innerHTML = out;

// })



// let http = new XMLHttpRequest();

// http.open('get', 'products.json', true);

// http.send();

// http.onload = function(){

//     if(this.readyState == 4 && this.status == 200){

//         let products = JSON.parse(this.responseText);

//         let output = "";

//         for(let item of products){
//             output += `
            
//             <section class="Products" id="Products">

//     <div class="swiper product-slider">

//     <div class="swiper-wrapper">

//         <div class="swiper-slide box">

//         <img src="${item.image}" alt="${item.image}

//         <p class="description">${item.description}</p>

//         <p class="price">

//         <span>&dollar;</span>

//         <span>${item.price}</span>
//      </p>
        
//             <div class="stars">
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star-half-alt"></i>
//             </div>
//             <a href="#" class="btn">add to cart</a>
//         </div>

//         </section>

//             `;
//         }

//         document.querySelector(".products").innerHTML = output;
//     }

// }

    let http = new XMLHttpRequest();

    http.open('get', 'products.json', true);
    
    http.send();

    http.onload = function(){

        if(this.readyState == 4 && this.status == 200){

            let products = JSON.parse(this.responseText);

            let output = "";

            for(let item of products){
                output += `
                
                <section class="products" id="products">

                <div class="items"><img src="${item.image}" alt="${item.image}">
            
                <p class="description">${item.description}</p>
            
                <p class="price">
            
                <span>${item.price}</span>
            
                <span>&dollar;</span>
            
                </p>
            
                <p class="cart"> add to cart <i class="fa-solid fa-cart-plus"></i></p></div>
            
                </section>

                `;
            }

            document.querySelector(".products").innerHTML = output;
        }

    }
    /////   json file ends ////
      
      
      
      
      
      
      
      
      
      ////// search btn ///////
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
        ////search btn /////

    /////// Shopping bag stlye //////
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#bag-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
    //////// end of shopping bag ////////

        /////// User Login //////
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
    //////// end user login ////////

            /////// Hamm burger menu //////
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
    //////// end burger menu  ////////

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// swiper 
var swiper = new Swiper(".trending-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 3700,
        disableOnInterection: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
