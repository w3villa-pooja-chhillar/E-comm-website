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
                <div class="card" style="width: 12rem;">
                    <img class="card-img-bottom"
                        src="${element.img}
                        alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${element.title}</h3>
                      $${element.price}
                        <p class="card-text">${element.content}</p><br />
                        <button>Add to
                            Cart</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-light fa-route-interstate"></i>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div> `
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
                <h2 class="card-title">${element.title}</h2>
                <p class="card-text">${element.content}</p>
                <a href="#" class="btn btn-primary">${element.href}</a>
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
            700: {
                items: 2
            },
            1200: {
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
            carousel += `<div class="item">
            <div class="card" style="width: 15rem;">
                <div class="card-img-top">
                    <img src="${element.img}"
                        alt="Card image cap">
                </div>
                <div class="card-body">
                    <h2 class="card-title">${element.title}</h2>
                    $${element.price}
                    <p class="card-text">${element.content}</p><br />
                    <button onclick="addToCart(${element.id})">Add to Cart</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-light fa-route-interstate"></i>
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
            900: {
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
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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

function showmostview(arrayOfData) {
    let mostview = document.getElementById("mview");
    let view = ``;
    arrayOfData.forEach(element => {
        view += ` <div class="sl">
        <div class="view">
            <img
                src="${element.img}">
        </div>
        <h4>
            ${element.content}
        </h4>
    </div>`
    });
    // view+=`</div>`;
    mostview.innerHTML = view;
}
// working search function 
// show search items
async function searching() {
    const searchItems = []
    let searchdata = document.getElementById("search").value;
    let fetchsearch = await fetch('./items.json');
    let fetchres = await fetchsearch.json();
    fetchres.products.forEach((element) => {
        if ((element.title.toLowerCase().match(searchdata.toLowerCase())) && (searchdata)) {
            searchItems.push(element)
        }
    }
    )
    let arr = []
    let paginationContainer = document.getElementById("search-pagination")
    let mypagei = `<div class="pagination">
    <a href="#">&laquo;</a>`
    const page = Math.ceil(searchItems.length / 4);
    localStorage.setItem("pages", page);
    for (let i = 1; i <= page; i++) {
        let pageProductPagination = {
            page: i, 
            pageProduct: searchItems.slice(i * 4 - 4, i * 4)
        }
        arr.push(pageProductPagination)
        localStorage.setItem("myPaginationProducts", JSON.stringify(arr))
        mypagei += `
        <a id="page-${i}" onclick="showPaginationProduct(this.id)" href="#">${i}</a> `
    }
    mypagei += `<a href="#">&raquo;</a>
    </div>`;
    paginationContainer.innerHTML = mypagei
    showPaginationProduct("page-1")
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
               </div> `
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
    else {
        setSucess('You are successfully registered!!');
    }
    window.location = '../index.html';

    const registerdata = {
        username: usernameValue,
        mail: mailValue,
        pass1: pass1Value,
        pass2: pass2Value
    };
    window.localStorage.setItem("registerdata", JSON.stringify(registerdata));
    console.log(window.localStorage.getItem('registerdata'));

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
    }
    window.location = '../index.html';

}


// Add to cart section 
function addToCart(id){
    alert("you are going to add to cart");
    let cartData={
        cartarr:[]
    };
    
}



// function addToCart(id){
//     alert("you are going to add to cart")
//     localStorage.setItem("cartData","");
//     cartData=JSON.parse(localStorage.getItem("cartData"));
//     console.log(cartData);
//     if(cartData.cartarray.includes(id)){
//         alert("items is already in cart");
//     }
//     else{
//         if(cartData){
//             cartData.cartarray.push(id);
//             localStorage.setItem("cartData",JSON.stringify(cartData));
//         }
//         else{
//             let cartData={
//                 cartarray:[],
//             };
//             cartData.cartarray.push(id);
//             localStorage.setItem("cartData",JSON.stringify(cartData));
//         }
//         alert("item is added");
//     }
// }



//   function addToCart(id){
//     alert("you are going to add to cart");
//     let cartData={
//         cartArray:[]
//     };
//     localStorage.setItem("cartData","");
    
//     if(cartData.cartArray.includes(id)){
//         alert("item is already exist");
//     }
//     else{
//         alert("item is added");
//     }
//   }