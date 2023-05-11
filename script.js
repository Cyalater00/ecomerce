/////   json file /////

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

///// JSON /////

let http = new XMLHttpRequest(); // The XMLHttpRequest object is created and assigned to the http variable.

http.open("get", "products.json", true); // The open() method is called on the http object to specify the HTTP request method, URL.

http.send(); // The send() method is called on the http object to send the HTTP request to the server.

http.onload = function () { // The onload event handler is defined on the http object to handle the response when it is received. It checks that the response has a readyState of 4 and a status code of 200 (which means the request was successful), and then parses the JSON data using JSON.parse().
  if (this.readyState == 4 && this.status == 200) { // A loop is used to iterate through each product in the JSON data and generate HTML content for it using a template literal string.
    let products = JSON.parse(this.responseText); //The innerHTML property of an HTML element with the class "products" is set to the output variable, which displays the dynamically generated HTML content on the page.

    let output = "";

    for (let item of products) {
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
};
// Overall, this code fetches product information from a JSON file and dynamically generates HTML content for each product, which is then displayed on the page.

/////   json file ends ////



////// search btn ///////
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
////search btn /////

/////// Shopping bag stlye //////
let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#bag-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
//////// end of shopping bag ////////

/////// User Login //////
let loginForm = document.querySelector(".login-form"); // The loginForm variable is assigned the value of the first HTML element with the class "login-form".

document.querySelector("#login-btn").onclick = () => {
  // The classList property of the loginForm element is toggled to add or remove the "active" class. This class can be used to show or hide the login form, depending on whether it's currently active or not.
  loginForm.classList.toggle("active"); // The searchForm, shoppingCart, and navbar elements have their "active" classes removed, which ensures that they are hidden if they were previously active.
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};
// In summary, this code toggles the visibility of the login form while hiding other active elements on the page.

//////// end user login ////////

/////// Hamm burger menu //////
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
//////// end burger menu  ////////

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

// swiper
var swiper = new Swiper(".trending-slider", {
  loop: true, // loop: Sets the slider to loop continuously.
  spaceBetween: 20, // spaceBetween: Sets the space between slides.
  autoplay: { // autoplay: Enables autoplay and sets the delay between slide transitions to 3.3 seconds. It also disables the autoplay when a user interacts with the slider.
    delay: 2300,
    disableOnInterection: false,
  },
  centeredSlides: true, //centeredSlides: Centers the active slide.
  breakpoints: { //breakpoints: Sets the number of slides to display at different screen sizes. For screens smaller than 768px, the slider displays one slide per view. For screens between 768px and 1020px, the slider displays two slides per view. For screens larger than 1020px, the slider displays three slides per view.
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
// Overall, this code initializes and configures a responsive slider with autoplay and multiple display options based on screen size.
