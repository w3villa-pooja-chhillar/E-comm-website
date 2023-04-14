// function gridview(){
//    alert("grid-view");
// }

function addpart_price() {
    document.getElementsByClassName('add-part-slider')[0].style.display = "block";
}
function addpart_availbility() {
    document.getElementsByClassName('add-part-avail')[0].style.display = "block";
}
function addpart_subcategory() {
    document.getElementsByClassName('add-part-subcat')[0].style.display = "block";
}
function addpart_color() {
    document.getElementsByClassName('add-part-color')[0].style.display = "block";
}
function addpart_brand() {
    document.getElementsByClassName('add-part-brand')[0].style.display = "block";
}
function listview() {
    search_list();
    document.getElementsByClassName('list-items')[0].style.display = "block";
    document.getElementsByClassName('cart-items')[0].style.display = "none";
    document.getElementById('end-list').style.display = "none";
}
function gridview() {
    search_data();
    document.getElementsByClassName('list-items')[0].style.display = "none";
    document.getElementsByClassName('cart-items')[0].style.display = "grid";
    document.getElementById('end-list').style.display = "flex";
}


// fetch grid items from json
async function readsearch_data() {
    const res1 = await fetch('./search-item.json');
    const data1 = await res1.json();
    showsearch_data(data1);
    showlist_data(data1);
}
readsearch_data();
// show item to cart from json 
function showsearch_data(data) {
    let cart_items = document.getElementById('cart-items');
    let item = ``;
    data.items.forEach(element => {
        item += ` <div class="carts">
      <div class="cart-image"  onclick="showproduct()">
          <img
              src="${element.img}">
          <button id="carts-sticker-a">-10%</button>
          <button id="carts-sticker-b">HOT</button>
      </div>
      <div class="cart-grey">
          <div class="apple">Apple</div>
          <div class="product-15">Product-15</div>
      </div>
      <div class="cart-content">
          <h2>${element.title}</h2><br />
          <a>${element.price}</a><br />
          <div class="add-cart-line">
              <div class="add-cart">
                  <input type="number" value="1">
                  <button> ADD TO CART</button>
              </div>
              <div class="add-cart-icons">
                  <i class="fa-light fa-heart"></i>
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
          </div>
      </div>
      <div class="cart-grey">
          <div class="buy-now">
              <i class="fa-solid fa-dollar-sign"></i> Buy-now
          </div>
          <div class="question">
              <i class="fa-solid fa-question"></i>&nbspQuestion
          </div>
      </div>
  </div> `
    });
    cart_items.innerHTML = item;
}

function showlist_data(data) {
    let list = document.getElementById('list-items')
    let view = ``;
    data.items.forEach(element => {
        view += ` <div class="list-cart">
      <div class="list-cart-img" onclick="showproduct()">
          <img
              src="${element.img}">
              <button id="a">-56%</button>
              <button id="b">HOT</button>
      </div>
      <div class="list-cart-content">
          <div class="list-brand">
              Brand: <a>Apple</a>&nbsp&nbsp Model: product 15
          </div>
          <div class="list-cart-cinema">
              <h2>${element.title}</h2>
          </div>
          <div class="list-cart-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid <br />unt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis
              nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
          </div>
          <div class="list-cart-price">
              <a id="list-dollar">${element.price}</a>
              <a>Ex tax : 70.61$</a>
          </div>
          <div class="list-add-cart">
              <input type="number" value="2">
              <button id="list-cart-btn"><i class="fa-regular fa-cart-shopping"></i>ADD TO
                  CART</button>
              <button id="list-heart"><i class="fa-regular fa-heart"></i></button>
              <button id="list-direction"><i class="fa-solid fa-arrow-right-arrow-left"></i>
              </button>
          </div>
          <div class="list-buy-now">
              <a id="list-green-dollar"> <i class="fa-solid fa-dollar-sign"></i></a>&nbsp Buy
              Now&nbsp&nbsp
              <a id="list-red-ques"><i class="fa-solid fa-question"></i></a>&nbsp Question
          </div>
      </div>
  </div>
  <hr> `
    })
    list.innerHTML = view;
}

// show search data on search page
async function search_data() {
    let a = localStorage.getItem("search_data");
    const res2 = await fetch('./search-item.json');
    const data2 = await res2.json();
    let item = ``;
    data2.items.forEach(element => {
        if (element.title.toLowerCase().match(a.toLocaleLowerCase())) {
            let cart_data = document.getElementById('cart-items');
            item += ` <div class="carts">
           <div class="cart-image" onclick="showproduct()">
               <img
                   src="${element.img}">
               <button id="carts-sticker-a">-10%</button>
               <button id="carts-sticker-b">HOT</button>
           </div>
           <div class="cart-grey">
               <div class="apple">Apple</div>
               <div class="product-15">Product-15</div>
           </div>
           <div class="cart-content">
               <h2>${element.title}</h2><br />
               <a>${element.price}</a><br />
               <div class="add-cart-line">
                   <div class="add-cart">
                       <input type="number" value="1">
                       <button> ADD TO CART</button>
                   </div>
                   <div class="add-cart-icons">
                       <i class="fa-light fa-heart"></i>
                       <i class="fa-solid fa-arrow-right-arrow-left"></i>
                   </div>
               </div>
           </div>
           <div class="cart-grey">
               <div class="buy-now">
                   <i class="fa-solid fa-dollar-sign"></i> Buy-now
               </div>
               <div class="question">
                   <i class="fa-solid fa-question"></i>&nbspQuestion
               </div>
           </div>
       </div> `
            cart_data.innerHTML = item;
        }
    })
    if(item==''){
           document.getElementById('noitem-found').style.display="flex"; 
           document.getElementById('cart-items').style.display="none";
           document.getElementById('list-items').style.display="none";
        }
}
search_data();


async function search_list(){
    let b = localStorage.getItem("search_data");
    const res3 = await fetch('./search-item.json');
    const data3 = await res3.json();
    let list= ``;
    data3.items.forEach( element => {
        if (element.title.toLowerCase().match(b.toLocaleLowerCase())){
            let list_data = document.getElementById('list-items');
            list+= ` <div class="list-cart">
            <div class="list-cart-img" onclick="showproduct()">
                <img
                    src="${element.img}">
                    <button id="a">-56%</button>
                    <button id="b">HOT</button>
            </div>
            <div class="list-cart-content">
                <div class="list-brand">
                    Brand: <a>Apple</a>&nbsp&nbsp Model: product 15
                </div>
                <div class="list-cart-cinema">
                    <h2>${element.title}</h2>
                </div>
                <div class="list-cart-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid <br />unt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis
                    nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </div>
                <div class="list-cart-price">
                    <a id="list-dollar">${element.price}</a>
                    <a>Ex tax : 70.61$</a>
                </div>
                <div class="list-add-cart">
                    <input type="number" value="2">
                    <button id="list-cart-btn"><i class="fa-regular fa-cart-shopping"></i>ADD TO
                        CART</button>
                    <button id="list-heart"><i class="fa-regular fa-heart"></i></button>
                    <button id="list-direction"><i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>
                </div>
                <div class="list-buy-now">
                    <a id="list-green-dollar"> <i class="fa-solid fa-dollar-sign"></i></a>&nbsp Buy
                    Now&nbsp&nbsp
                    <a id="list-red-ques"><i class="fa-solid fa-question"></i></a>&nbsp Question
                </div>
            </div>
        </div>
        <hr>`
        list_data.innerHTML= list;
        }
    })
    if(list==''){
        document.getElementById('noitem-found').style.display="flex"; 
        document.getElementById('cart-items').style.display="none";
        document.getElementById('list-items').style.display="none";
    }
}

// recent view and most view section 
function recentview(){
    let recentcards = document.getElementById('recent-view-cards');
    recentcards.style.display="flex";
    let mostcards = document.getElementById('most-view-cards');
    mostcards.style.display="none";
    document.getElementById('most-view-line').style.marginLeft="unset";
    document.getElementById('most-view-line').style.width="177px";
    let mostview_content= document.getElementById('most-view-grey');
    mostview_content.style.color="#C0C0C0";
    let recentview_content= document.getElementById('most-view-white');
    recentview_content.style.color="white";
}

function mostview(){
    let recentcards = document.getElementById('recent-view-cards');
    recentcards.style.display="none";
    let mostcards = document.getElementById('most-view-cards');
    mostcards.style.display="flex";
    document.getElementById('most-view-line').style.marginLeft="185px";
    document.getElementById('most-view-line').style.width="140px";
    let mostview_content= document.getElementById('most-view-grey');
    mostview_content.style.color="white";
    let recentview_content= document.getElementById('most-view-white');
    recentview_content.style.color="#C0C0C0";
}
// show product page after clicking on a product
function showproduct(){
    window.location = './product/product.html';
}