  


// CLEAN CODE
// FOR THE CONFIRM ORDER MODAL (VARIABLES)
const orderbutton = document.getElementById('orderbutton');
const modal_container = document.getElementById('modal-container');
const close = newFunction();


// FOR THE CONFIRM ORDER MODAL(CODE)
function newFunction() {
    return document.getElementById('close');
}

function App(){
    modal_container.classList.add('show');
}
orderbutton.addEventListener('click', App)

function Closer(){
    modal_container.classList.remove('show');
}
close.addEventListener('click', Closer)

// orderbutton.addEventListener('click', () => {
//     modal_container.classList.add('show');
// })



 
//ADD TO CART BUTTON ALL FEATURES(ALL PRODUCT VARIABLE)
// All product buttons
const waffleButton = document.getElementById('waffle')

//All product images
const waffleImg = document.getElementById('waffle-img')
//All product frames 
const image_frame = document.getElementById('img-frame1')
//All button container
const buttonContainer = document.getElementById('btn-container')

//All embended button
const calcButton = document.getElementById('calc-btn')
 




function frameColor(){
    image_frame.classList.add('kola')
   waffleButton.remove()
   buttonContainer.appendChild(calcButton)
}
waffleButton.addEventListener('click',frameColor)

//DISPLAYING ITEM IN CHECKOUT/FETCHING FROM THE JSON FILE

// let  http = new XMLHttpRequest();

// http.open('get', 'data.json', true);

// http.send();

// http.onload = function(){
   
//     if(this.readyState == 4 && this.status == 200){



//         let products = JSON.parse(this.responseText)

// let output = '';

// for(let item of products){

// output += 

//      <div class='product'><><p class="title">${item.name}</p><p class="price">
//         <span>${item.price}</span>
//         <span>$</span>
//     </p></></div>


// }


// document.querySelector('.products').innerHTML = output;

//     }

// }








// $(document).ready(function(e){
//     jsonObject.data.forEach((i)=> loadProducts(i))
    
// })

// function loadProducts(data) {
// var li = document.createElement('li')
// li.innerHTML =  <div class="products" id="products">+
// <div>+
// <h5 class="title">+data.name+</h5>+ 
// <div class="price-list">+
//     <span class="item-number" id="item-number"></span>+
//     <span class="price-demo">@$5.50</span>+
//      <span class="calc-price" id="calc-price">+price+</span>+
// </div>+
//  </div>+
//  <button class="cancel-btn" id="remove">
//     X
// </button>+
// </div>;
 
// document.getElementById('list-of-product').appendChild
// }

 








//CART PLUS AND MINUS BUTTON FUNCTIONALITIES 

const input = document.getElementById('input')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const emptyElememt = document.getElementById('em')


//ALL CHECKOUT ITEM ID'S
const test = document.getElementById('products')
let priceOut = document.getElementById('calc-price')
let itemnumber = document.getElementById('item-number')


let counterVlaue = 1
let listContainer = document.getElementById('list-of-product')


function displayValue(){
    input.textContent = counterVlaue
}

function numberADD(){

    if (counterVlaue > 0){
        ++counterVlaue
        displayValue()
        let pricCalc = counterVlaue * 5.50
        priceOut.textContent = `$${pricCalc}`
        itemnumber.textContent = `${counterVlaue}x`
        // listContainer.appendChild(test);
        listContainer.classList.remove('list-of-product')

         
     }
}



plus.addEventListener('click',numberADD)

function numberSUB(){
    if (counterVlaue > 0){
       --counterVlaue 
       displayValue()
       itemnumber.textContent = `${--counterVlaue}x`
       let pricCalc = counterVlaue * 5.50
       let minusOp = pricCalc - 5.50
       priceOut.textContent = `$${minusOp}`
    }
}


minus.addEventListener('click',numberSUB)

//THE REMOVE CANCEL BUTTON
const removeBtn = document.getElementById('remove')
const productContainer = document.getElementById('products')

function removeOp(){
    productContainer.remove()
}

removeBtn.addEventListener('click', removeOp)


 
// // FETChING FROM JSON FILE
// for (let item of products){
//     output +=
    
// }



// // html template to output the variable 
  

       