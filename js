const products=[
{name:"Букет троянд",price:800,image:"images/rose.svg",badge:"Хіт"},
{name:"Тюльпани",price:600,image:"images/tulip.svg",badge:"Весна"},
{name:"Подарунковий набір",price:500,image:"images/gift.svg",badge:"Новинка"}
];

let total=0;
const list=document.getElementById("productList");
const totalPrice=document.getElementById("totalPrice");

products.forEach(p=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`
<img src="${p.image}">
<div class="info">
<span class="badge">${p.badge}</span>
<h3>${p.name}</h3>
<p>${p.price} грн</p>
<button>Обрати</button>
</div>`;
card.querySelector("button").onclick=()=>{
total+=p.price;
totalPrice.textContent=total;
};
list.appendChild(card);
});

function clearCart(){
total=0;
totalPrice.textContent=0;
}
