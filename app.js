let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'CROWN INTERNATIONAL TEE PIGMENT DYED',
        image: '1.png',
        price: 45.00
    },    
    {
        id: 2,
        name: 'SURFWALK TEE PIGMENT DYED',
        image: '2.png',
        price: 45
    },
    {
        id: 3,
        name: 'STÜSSY INTERNATIONAL TEE PIGMENT DYED',
        image: '3.png',
        price: 45
    },
    {
        id: 4,
        name: 'BASIC STÜSSY TEE PIGMENT DYED',
        image: '4.png',
        price: 45
    },
    {
        id: 5,
        name: 'STÜSSY INTERNATIONAL TEE PIGMENT DYED',
        image: '5.png',
        price: 45
    },
    {
        id: 6,
        name: '8 BALL TEE PIGMENT DYED',
        image: '6.png',
        price: 45
    },
    {
        id: 7,
        name: 'FRESH FOILS TEE',
        image: 'S2S.png',
        price: 45
    },
    {
        id: 8,
        name: 'FRESH FOILS TEE',
        image: '8.png',
        price: 45
    },
    {
        id: 9,
        name: 'FRESH FOILS TEE',
        image: 'S3S.png',
        price: 45
    },
    {
        id: 10,
        name: 'BASIC STÜSSY LS TEE PIGMENT DYED',
        image: '10.png',
        price: 55
    },
    {
        id: 11,
        name: 'BASIC STÜSSY LS TEE PIGMENT DYED',
        image: '11.png',
        price: 55
    },
    {
        id: 12,
        name: 'BASIC STÜSSY LS TEE',
        image: '12.png',
        price: 55
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}