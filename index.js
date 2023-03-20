async function readdata() {
    const res1 = await fetch('./items.json');
    const data1 = await res1.json();
    // feature card container data on html file (Add to cart)
    showCard(data1.product.card);
    const res2 = await fetch('./items.json');
    const data2 = await res2.json();
    showcarousel(data2.product.carousel_card);
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
function showCard(arrayOfData) {
    let featuresCard = document.getElementById("features-card-container");
    let html = ` <div id="features-card" class="owl-carousel owl-theme">`;
    arrayOfData.forEach(element => {
        html += ` <div class="item">
        <div class="card" style="width: 12rem;">
            <img class="card-img-bottom"
                src="${element.img}
                alt="Card image cap">
            <div class="card-body">
                <h3 class="card-title">${element.title}</h3>
                <p class="card-text">${element.content}</p><br />
                <button>Add to
                    Cart</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <i class="fa-regular fa-heart"></i>
                <i class="fa-light fa-route-interstate"></i>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>`
    });
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
}





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
    arrayOfData.forEach(element => {
        carousel += `<div class="item">
        <div class="card" style="width: 15rem;">
            <div class="card-img-top">
                <img src="${element.img}"
                    alt="Card image cap">
            </div>
            <div class="card-body">
                <h2 class="card-title">${element.title}</h2>
                $999.00
                <p class="card-text">${element.content}</p><br />
                <button>Add to
                    Cart</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                <i class="fa-regular fa-heart"></i>
                <i class="fa-light fa-route-interstate"></i>
            </div>
        </div>
    </div>`
    });
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
    arrayOfData.forEach(element => {
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

async function searching() {
    let searchdata = document.getElementById("search").value;
    let fetchsearch = await fetch('./items.json');
    let fetchres = await fetchsearch.json();
    let arr = []
    for (let key in fetchres) {
        for (let i in fetchres[key]) {
            arr.push(fetchres[key][i])
        }
    }
    console.log(arr);
    let product = [];
    arr.flat().forEach((element) => {
        if (element.title.toLowerCase().includes(searchdata.toLowerCase())) {
            product.push(element)
        }
    })

    console.log(product);
}


// ************Login-Register-Logout Section


// ***************** show a new tab of login page 
function login() {
    window.location = './Login-page/index.html';
}

// ****************show a new  tab of register page
function register() {
    window.location = './Registration/index.html';
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
    if (username === '' && password === '') {
        setError('All fields are required');
    }
    else if (username === '') {
        setError('username is required');
    }
    else if (password === '') {
        setError('password is required');
    }
    else if(username === window.localStorage.getItem('registerdata.username') && password === window.localStorage.getItem('registerdata.pass1')) {
        setSucess('welcome!! you are sucessfully login');
    }
}





// after sucessful login 