const orderbutton = document.getElementById('orderbutton');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');



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



 
//ADD TO CART BUTTON

const waffleButton = document.getElementById('waffle')
const waffleImg = document.getElementById('waffle-img')
const div = document.getElementById('ola')

function frameColor(){

   div.classList.add('kola')


}



waffleButton.addEventListener('click',frameColor)


//CART BUTTON FUNCTIONALITIES 

const input = document.getElementById('input')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

const emptyElememt = document.getElementById('em')


let counterVlaue = 1


function displayValue(){
    input.textContent = counterVlaue  
}



function numberADD(){

    if (counterVlaue > 0){
        counterVlaue++
        displayValue()
     }

}

 
minus.addEventListener('click',numberADD)


 
// FETCGING FROM JSON FILE
for (let item of products){
    output +=
    
}



// html template to output the variable 