// Pizza Name Display on click
let pizzaOne = document.getElementById('pizzaOne');
pizzaOne.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Mexican Green Wave";
    let price = document.getElementById('price');
    price.textContent = "$20";
});

let pizzaTwo = document.getElementById('pizzaTwo');
pizzaTwo.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Margherita Pizza";
    let price = document.getElementById('price');
    price.textContent = "$30";
});

let pizzaThree = document.getElementById('pizzaThree');
pizzaThree.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Double Cheese Pizza";
    let price = document.getElementById('price');
    price.textContent = "$25";
});

let pizzaFour = document.getElementById('pizzaFour');
pizzaFour.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Meatzaa Pizza";
    let price = document.getElementById('price');
    price.textContent = "$40";
});

let pizzaFive = document.getElementById('pizzaFive');
pizzaFive.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Cheese and Pepperoni";
    let price = document.getElementById('price');
    price.textContent = "$35";
});

let pizzaSix = document.getElementById('pizzaSix');
pizzaSix.addEventListener('click',()=>{
    let name = document.getElementById('name');
    name.textContent = "Golden Chicken Delight";
    let price = document.getElementById('price');
    price.textContent = "$60";
});


// -------------------------------------------------------------------------------- 

let buyme = document.getElementById('buyme');
buyme.addEventListener('click',function(){
    let finalPrice = document.getElementById('finalPrice');
    let price = document.getElementById('price').innerHTML;
    let pizzaName = document.getElementById('name').innerHTML;

    let nameText = document.createTextNode(pizzaName)
    let selectedName = document.getElementById('selectedName');
    let priceNode = document.createTextNode(price);
    selectedName.innerHTML = "";
    selectedName.appendChild(nameText);
    finalPrice.innerHTML = "";
    finalPrice.appendChild(priceNode);

});