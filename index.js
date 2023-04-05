async function readdata() {
    const res1 = await fetch('./items.json');
    const data1 = await res1.json();
    // feature card container data on html file (Add to cart)
    showfeatureCard(data1);
    const res2 = await fetch('./items.json');
    const data2 = await res2.json();
    showcarousel(data2);
    // carousel card container data on html file (Add to Cart)
    const res3 = await fetch('./blog-card.json');
    const data3 = await res3.json();
    showblog(data3.blog_card);
    const res4 = await fetch('./quote-carousel.json');
    const data4 = await res4.json();
    showquote(data4.quote_carousel);
    const res5 = await fetch('./carousel-collection.json');
    const data5 = await res5.json();
    showcollections(data5.carousel_collection);
    const res6 = await fetch('./most-view.json');
    const data6 = await res6.json();
    showmostview(data6.most_view);
}
readdata();

// Show Card Data on HTML file
function showfeatureCard(Data) {
    let featuresCard = document.getElementById("features-card-container");
    let html = `<div id="features-card" class="owl-carousel owl-theme">`
    Data.products.forEach((element) => {
        if (element.type == "card") {
            html += `
            <div class="item">
            <div class="card">
                <img class="card-img-bottom"
                    src="${element.img}"
                    alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title">${element.title}</h3>
                    <a> ${element.price} </a>
                    <hr>
                    <br />
                    <div class="feature-cart">
                        <button onclick="addToCart(${element.id})">Add to
                            Cart</button>
                        <i class="fa-regular fa-heart" onclick="addtoWishlist(${element.id})"></i>
                        <i class="fa-light fa-route-interstate"></i>
                    </div>
                </div>
            </div>
        </div>`
        }
    })
    document.getElementById("features-card").innerHTML = html;
    html += `</div>`;
    featuresCard.innerHTML = html;
    $('#features-card').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1100: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
};


// <button onclick="addToCart(${element.id})">Add to Cart</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
// <i class="fa-regular fa-heart" onclick="addtoWishlist(${element.id})"></i>

// show blog card data on html file 
function showblog(arrayOfData) {
    let blogcard = document.getElementById("blog-card-container");
    let blog = `<div id="blog-carousel-cards" class="owl-carousel owl-theme">`;
    arrayOfData.forEach(element => {
        blog += `<div class="item">
        <div class="blog" style="width: 24rem;">
            <img class="blog-card"
                src="${element.img}"
                alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.content}</p>
                <a><h3> Read More →</h3></a>
            </div>
        </div>
    </div>`
    });
    blog += `</div>`;
    blogcard.innerHTML = blog;
    $('#blog-carousel-cards').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            1390: {
                items: 2
            },
            1440: {
                items: 3
            }
        }
    })
}


// show carousel-card data on html 
function showcarousel(arrayOfData) {
    let carouselcard = document.getElementById("carousel-card-container");
    let carousel = `<div id="carousel-card" class="owl-carousel owl-theme">`;
    // console.log(arrayOfData.products)
    arrayOfData.products.forEach((element) => {
        if (element.type == "carousel_card") {
            carousel += `  <div class="item">
            <div class="card">
                <div class="card-img-top">
                    <img src="${element.img}"
                        alt="Card image cap">
                </div>
                <div class="card-grey-line">
                    <a id="ericson">Ericson</a>
                    <a id="model">Model 15</a>
                </div>
                <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    <a id="carousel-price">${element.price}</a><br />
                    <div class="carousel-addcart">
                        <div>
                            <input type="number" value="2">
                            <button id="1" onclick="addToCart(${element.id})">Add toCart</button>
                        </div>
                        <div id="carousel-heart">
                            <i class="fa-regular fa-heart" onclick="addtoWishlist(${element.id})"></i>
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                        </div>
                    </div>
                    <div class="last-carousel-greyline">
                        <a id="buy-carous"><i id="green" class="fa-solid fa-dollar-sign"></i>&nbspBuy Now</a>
                        <a id="question-carous"> <i id="red" class="fa-solid fa-question"></i>&nbspQuestions</a>
                    </div>
                </div>
            </div>
        </div>`
        }
    })
    carousel += `</div>`;
    carouselcard.innerHTML = carousel;
    $('#carousel-card').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            980: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
}

// show quote carousel data on html



function showquote(arrayOfData) {
    let quotecarousel = document.getElementById("quote-conatiner");
    let quote = `<div id="quotes-carousel" class="owl-carousel owl-theme">`
    arrayOfData.forEach(element => {
        quote += `<div class="item">
        <div class="quotes" style="width: 18rem;">
            <div class="qi">
                <img src="${element.img}"
                    alt="Card image cap">
            </div>
            <div class="card-body">
                <h2 class="card-title">${element.title}</h2>
                <p class="card-text">${element.content}
                </p><br />
                <a><h3> "-chalibaltimore"</h3></a>
            </div>
        </div>
    </div>`
    });
    quote += `</div>`;
    quotecarousel.innerHTML = quote;
    $('#quotes-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
// done quote  carousel card data shown in html 

// show carousel-collection data on html file
function showcollections(arrayOfData) {
    let carouselcoll = document.getElementById("carous-coll");
    let coll = `<div id="mid-owl" class="owl-carousel owl-theme">`;
    arrayOfData.forEach((element) => {
        coll += `<div class="item">
         <img class="cm"
             src="${element.img}">
     </div>`
    });
    coll += `</div>`;
    carouselcoll.innerHTML = coll;
    $('#mid-owl').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        responsiveBaseElement: 'body',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
}
// show most view section on html page 
// arrayOfData.forEach(element => {
//     view += ` <div class="sl">
//     <div class="view">
//         <img
//             src="${element.img}">
//     </div>
//     <h4>
//         ${element.content}
//     </h4>
// </div>`
// });



function showmostview(arrayOfData) {
    let mostview = document.getElementById("mview");
    let view = ``;
    arrayOfData.forEach(element => {
        view += ` <div class="sl">
        <div class="view">
            <img
                src="${element.img}">
        </div>
        <div>
            <h4>
              ${element.content}
            </h4>
            <a><i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
            </a>
        </div>
    </div> `
    });
    // view+=`</div>`;
    mostview.innerHTML = view;
}
// working search function 

// show search items
// async function searching() {
//     const searchItems = []
//     let searchdata = document.getElementById("search").value;
//     if (searchdata) {
//         let fetchsearch = await fetch('./items.json');
//         let fetchres = await fetchsearch.json();
//         fetchres.products.forEach((element) => {
//             if ((element.title.toLowerCase().match(searchdata.toLowerCase())) && (searchdata)) {
//                 searchItems.push(element)
//             }
//         }
//         )
//         let arr = []
//         let paginationContainer = document.getElementById("search-pagination")
//         let mypagei = `<div class="pagination">
//     <a href="#">&laquo;</a>`
//         const page = Math.ceil(searchItems.length / 4);
//         localStorage.setItem("pages", page);
//         for (let i = 1; i <= page; i++) {
//             let pageProductPagination = {
//                 page: i,
//                 pageProduct: searchItems.slice(i * 4 - 4, i * 4)
//             }
//             arr.push(pageProductPagination)
//             localStorage.setItem("myPaginationProducts", JSON.stringify(arr))
//             mypagei += `
//         <a id="page-${i}" onclick="showPaginationProduct(this.id)" href="#">${i}</a> `
//         }
//         mypagei += `<a href="#">&raquo;</a>
//     </div>`;
//         paginationContainer.innerHTML = mypagei
//         showPaginationProduct("page-1")
//     } else {
//         location.reload()
//     }
// }
async function searching() {
    let search_data = document.getElementById('search').value;
    if (!search_data.length) {

    }
    else {
        localStorage.setItem('search_data', search_data);
        window.location = './search.html';
    }
}
function showPaginationProduct(id) {
    let paginationProducts = JSON.parse(localStorage.getItem("myPaginationProducts"));
    console.log(paginationProducts)
    let html = ""
    let itemsArr = paginationProducts.find((item) => Number(item.page) === Number(id.split("-")[1]))
    console.log(itemsArr)
    itemsArr.pageProduct.forEach((element) => {
        html += `<div class="item">
                       <div class="card" style="width: 15rem;">
                            <div class="card-img-top">
                               <img src="${element.img}"
                                   alt="Card image cap">
                         </div>
                           <div class="card-body">
                               <h2 class="card-title">${element.title}</h2>
                                ${element.price}
                                <p class="card-text">${element.content}</p><br />
                               <button>Add to
                                  Cart</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                               <i class="fa-regular fa-heart"></i>
                            <i class="fa-light fa-route-interstate"></i>
                         </div>
                        </div>
               </div>`
    })
    document.getElementById("shop-block").innerHTML = html;
    if (html != '') {
        document.getElementById("shop-block").style.display = "flex";
        document.getElementById('section-hide').style.display = "none";
        document.getElementById('main-hide').style.display = "none";
        document.getElementById('shop-hide').style.display = "none";
        document.getElementById('people-saying-hide').style.display = "none";
        document.getElementById('feature-pro').style.display = "none";
        document.getElementById('carousel-card-container').style.display = "none";
        document.getElementById('feature-category-hide').style.display = "none";
        document.getElementById('show-cart').style.display = "none";
        document.getElementById('wishlist').style.display = "none";
    }
    else {
        document.getElementById('section-hide').style.display = "block";
        document.getElementById('main-hide').style.display = "block";
        document.getElementById('shop-hide').style.display = "block";
        document.getElementById('people-saying-hide').style.display = "block";
        document.getElementById('feature-pro').style.display = "block";
        document.getElementById('carousel-card-container').style.display = "block";
        document.getElementById('feature-category-hide').style.display = "block";
    }

}
// ************Login-Register-Logout Section


// ***************** show a new tab of login page 
function login() {
    window.location = './Login/login.html';
}

// ****************show a new  tab of register page
function register() {
    window.location = './Registration/register.html';
}




// store the registration form value in variable by targeting id
const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const mail = document.getElementById('e-mail');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');



// after click on register button

let registerform = () => {
    const usernameValue = username.value.trim();
    const mailValue = mail.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    // condition check for all the fields 
    const registerdata = {
        username: usernameValue,
        mail: mailValue,
        pass1: pass1Value,
        pass2: pass2Value
    };
    if (usernameValue === '' && mailValue === '' && pass1Value === '' && pass2.value === '') {
        setError('All fields are required');
    }
    if (usernameValue === '') {
        setError('Username is required');
    }
    else if (mailValue === '') {
        setError('E-mail is required');
    }
    else if (!isValidEmail(mailValue)) {
        setError('Provide a valid email address');
    }
    else if (pass1Value === '') {
        setError('Password is required');
    }
    else if (pass1Value.length < 8) {
        setError('password must be atleast 8 character');
    }
    else if (pass2Value === '') {
        setError('Please confirm your password');
    }
    else if (pass2Value != pass1Value) {
        setError('password does not match');
    }
    else if (localStorage.getItem('registerdata')) {
        setError('user already exist');
    }
    else {
        localStorage.setItem("registerdata", JSON.stringify(registerdata));
        setSucess('You are successfully registered!!');
        window.location = '../index.html';
    }
    // console.log(window.localStorage.getItem('registerdata'));

};

// error and suceess function
const setError = (message) => {
    alert(message);
}

const setSucess = (message) => {
    alert(message);

}
// check valid e-maail address
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// **************Login process

let loginform = () => {
    const username = document.getElementById('user').value.trim();
    const password = document.getElementById('password').value.trim();
    const registeruser = JSON.parse(window.localStorage.getItem('registerdata'));
    console.log(registeruser.pass1);
    if (username === '' && password === '') {
        alert('All fields are required');
    }
    else if (username === '') {
        alert('username is required');
    }
    else if (password === '') {
        alert('password is required');
    }
    else if (username === registeruser.username && password === registeruser.pass1) {
        alert('welcome!! you are sucessfully login');
        window.location = '../index.html';
    }
    else {
        alert("plase check your username and password");
    }
}

// Add to cart Section here

async function addToCart(id) {
    const arr = JSON.parse(localStorage.getItem("cartItems")) || []
    if (arr.includes(id)) {
        alert("items is alreday in cart");
    }
    else {
        arr.push(id);
        localStorage.setItem("cartItems", JSON.stringify(arr));
        alert("item is added");
        document.getElementById('items-counter').innerText = arr.length;
        localStorage.setItem("item-counter", arr.length);
        // adding price of cart items
        const res8 = await fetch('./items.json');
        const data8 = await res8.json();
        let totalprice = parseInt(JSON.parse(localStorage.getItem('item-price'))) || 0;
        data8.products.forEach((element) => {
            if (element.id == id) {
                totalprice = totalprice + Number(element.price.split("$")[1]);
            }
        })
        localStorage.setItem('item-price', JSON.stringify(totalprice));
        document.getElementById('total-price').innerText = totalprice;
    }
}

// Add to wishlist Section
function addtoWishlist(id) {
    const arr = JSON.parse(localStorage.getItem("wishlistItems")) || []
    if (arr.includes(id)) {
        alert("item is already in wishlist");
    }
    else {
        arr.push(id);
        localStorage.setItem("wishlistItems", JSON.stringify(arr));
        alert("item is added in wishlist");

    }
}



// Show Cart Section here
async function showCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems == null) {
        alert('nothing to see in cart');
    }
    //  Sort the  store id of cartitems
    cartItems.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
    let z = 0;
    const data7 = await fetch('./items.json');
    const res7 = await data7.json();
    let html = "";
    res7.products.forEach((element) => {
        if (element.id == cartItems[z]) {
            html += `
            <div class="item">
                <div class="card" style="width: 12rem;">
                    <img class="card-img-bottom"
                        src="${element.img}
                        alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${element.title}</h3>
                      ${element.price}
                        <p class="card-text">${element.content}</p><br />
                        <button onclick="removefromCart(${element.id})">REMOVE FROM CART</button>&nbsp&nbsp&nbsp&nbsp&nbsp
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-light fa-route-interstate"></i>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div> `
            z++;
        }
    })
    document.getElementById('show-cart').innerHTML = html;
    if (html != '') {
        document.getElementById("show-cart").style.display = "flex";
        document.getElementById('section-hide').style.display = "none";
        document.getElementById('main-hide').style.display = "none";
        document.getElementById('shop-hide').style.display = "none";
        document.getElementById('people-saying-hide').style.display = "none";
        document.getElementById('feature-pro').style.display = "none";
        document.getElementById('carousel-card-container').style.display = "none";
        document.getElementById('feature-category-hide').style.display = "none";
        document.getElementById('wishlist').style.display = "none";
    }
    else {
        alert('nothing to see in cart');
        document.getElementById('section-hide').style.display = "block";
        document.getElementById('main-hide').style.display = "block";
        document.getElementById('shop-hide').style.display = "block";
        document.getElementById('people-saying-hide').style.display = "block";
        document.getElementById('feature-pro').style.display = "block";
        document.getElementById('carousel-card-container').style.display = "block";
        document.getElementById('feature-category-hide').style.display = "block";
    }

}
// remove from cart section here
 async function removefromCart(id) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const index = cartItems.indexOf(id);
    if (index >= 0) {
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    alert('item is removed from cart');
    if (JSON.parse(localStorage.getItem('item-counter')) > 0) {
        let totalItem = JSON.parse(localStorage.getItem('item-counter')) - 1;
        localStorage.setItem('item-counter', JSON.stringify(totalItem));
        document.getElementById('items-counter').innerText = totalItem;
    }
    if ((localStorage.getItem('item-price')) > 0) {
        const res9 = await fetch('./items.json');
        const data9 = await res9.json();
        data9.products.forEach( element => {
         if(element.id==id){
           let current_price = localStorage.getItem('item-price');
           current_price -= Number(element.price.split("$")[1]);
           localStorage.setItem('item-price',current_price);
           document.getElementById('total-price').innerText= current_price;
         }
        })
        
    }
    }
    // Wishlist Section
    async function showWishlist() {
        let wishItems = JSON.parse(localStorage.getItem("wishlistItems"));
        if (wishItems == null) {
            alert('nothing to see in wishlist');
        }
        wishItems.sort((a, b) => {
            if (a > b) {
                return 1
            } else {
                return -1
            }
        })
        let index = 0;
        const data8 = await fetch('./items.json');
        const res8 = await data8.json();
        let html = ""
        res8.products.forEach((element) => {
            if (element.id == wishItems[index]) {
                html += `
        <div class="item">
            <div class="card" style="width: 12rem;">
                <img class="card-img-bottom"
                    src="${element.img}
                    alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title">${element.title}</h3>
                  $${element.price}
                    <p class="card-text">${element.content}</p><br />
                    <button onclick="removefromCart(${element.id})">REMOVE FROM CART</button>&nbsp&nbsp&nbsp&nbsp&nbsp
                    <i class="fa-regular fa-heart" onclick="removefromWishlist(${element.id})"></i>
                    <i class="fa-light fa-route-interstate"></i>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div> `
                index++;
            }
        })
        document.getElementById('wishlist').innerHTML = html;
        if (html != '') {
            document.getElementById('heart').style.color = "red";
            document.getElementById("wishlist").style.display = "flex";
            document.getElementById('section-hide').style.display = "none";
            document.getElementById('main-hide').style.display = "none";
            document.getElementById('shop-hide').style.display = "none";
            document.getElementById('people-saying-hide').style.display = "none";
            document.getElementById('feature-pro').style.display = "none";
            document.getElementById('carousel-card-container').style.display = "none";
            document.getElementById('feature-category-hide').style.display = "none";
            document.getElementById('shop-block').style.display = "none";
            document.getElementById("show-cart").style.display = "none";
            document.getElementById('search-pagination').style.display = "none";

        }
        else {
            alert('nothing to see in wishlist');
            document.getElementById('section-hide').style.display = "block";
            document.getElementById('main-hide').style.display = "block";
            document.getElementById('shop-hide').style.display = "block";
            document.getElementById('people-saying-hide').style.display = "block";
            document.getElementById('feature-pro').style.display = "block";
            document.getElementById('carousel-card-container').style.display = "block";
            document.getElementById('feature-category-hide').style.display = "block";
            document.getElementById('heart').style.color = "black";
            document.getElementById('shop-block').style.display = "none";
            document.getElementById('search-pagination').style.display = "none";
        }
    }

    //  remove from Wishlist section 
    function removefromWishlist(id) {
        alert('item is removed from wishlist');
        let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"));
        const index = wishlistItems.indexOf(id);
        wishlistItems.splice(index, 1);
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }

    // on load function
    function onload() {
        // alert('page is loaded');
        let items = JSON.parse(localStorage.getItem("item-counter"));
        if (items) {
            document.getElementById('items-counter').innerHTML = items;
        }
        let price= localStorage.getItem('item-price');
        if(price){
            document.getElementById('total-price').innerHTML= price;
        }
    }


    // handle click of  featured categories
    function handleclick(id) {
        let currentActive = document.getElementById(id)
        let categoriesListParent = document.getElementById("categoriesListParent")

        if (Array.from(categoriesListParent.firstElementChild.classList).includes("active") === true) {
            categoriesListParent.firstElementChild.classList.remove("active")
            currentActive.classList.add("active")
            localStorage.setItem("currentActiveElementId", id);
        } else {
            let recentActiveID = localStorage.getItem("currentActiveElementId")
            let recentActiveElt = document.getElementById(recentActiveID)
            recentActiveElt.classList.remove("active")
            currentActive.classList.add("active")
            localStorage.setItem("currentActiveElementId", id);
        }
    }