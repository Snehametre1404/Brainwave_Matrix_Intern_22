
const products = [
  { id: 1, name: "Wireless Headphones", price: 1299, img: "https://t4.ftcdn.net/jpg/03/28/37/93/240_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg" },
  { id: 2, name: "Smart Watch", price: 2599, img: "https://t4.ftcdn.net/jpg/13/53/84/97/240_F_1353849722_oMe2uId7nodzVyO5ruR9UFRRpSefst8J.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 899, img: "https://t3.ftcdn.net/jpg/01/64/37/64/240_F_164376403_FIx6kAnQpdILiISn7ptIOqEN7JBrr6fw.jpg" },
  { id: 4, name: "Fitness Tracker", price: 1499, img: "https://t3.ftcdn.net/jpg/14/23/26/16/240_F_1423261670_BZ5LkK4a2kHOgc1FUYc0qx7fhG1oSm4s.jpg" },
  { id: 5, name: "Gaming Mouse", price: 799, img: "https://t4.ftcdn.net/jpg/05/31/84/57/240_F_531845717_AMMGpzK7RpSnIT2mjP6CTcrXDHfXfRwf.jpg" },
  { id: 6, name: "Laptop Stand", price: 699, img: "https://t4.ftcdn.net/jpg/04/95/99/33/240_F_495993350_uOfncuTug36utrVP03fzHcCXtgJnEiAa.jpg" },
  { id: 7, name: "USB-C Hub", price: 1199, img: "https://t3.ftcdn.net/jpg/15/02/00/80/240_F_1502008000_W6TNxX5KxOcC28orCG4fTLgYcw8nidPP.jpg" },
  { id: 8, name: "Portable Charger", price: 999, img: "https://t3.ftcdn.net/jpg/04/61/33/24/240_F_461332465_6YSsDfX8ozzx14pns0z8dCQDHbRdb6T2.jpg" },
  { id: 9, name: "Smartphone Gimbal", price: 1999, img: "https://t4.ftcdn.net/jpg/13/20/61/37/240_F_1320613730_nmxFHYobXHiCBwiYuRUFAMsrQkR9daS1.jpg" },
  { id: 10, name: "Noise Cancelling Earbuds", price: 1799, img: "https://t4.ftcdn.net/jpg/12/37/00/01/240_F_1237000149_M2BzqANKOF68uimDRpbuQ79EIWzxxWMC.jpg" },
  { id: 11, name: "Smart Light Bulb", price: 499, img: "https://t3.ftcdn.net/jpg/15/14/15/04/240_F_1514150448_A0W4LQGHnThgm1fdDs4kyDA5FBXIgN3h.jpg" },
  { id: 12, name: "Mechanical Keyboard", price: 2299, img: "https://t3.ftcdn.net/jpg/15/26/66/26/240_F_1526662605_89HueXrWer6SehkNie1AB8VETT59G6Ke.jpg" },
 
];



let cart = [];

const productList = document.getElementById('productList');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartModal = document.getElementById('cartModal');

function renderProducts(filter = '') {
  productList.innerHTML = '';
  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${p.img}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>रु${p.price}</p>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      productList.appendChild(item);
    });
}

function addToCart(id) {
  const p = products.find(item => item.id === id);
  cart.push(p);
  cartCount.textContent = cart.length;
  alert(`${p.name} added to cart!`);
}

document.getElementById('cartIcon').onclick = () => {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.name}</strong>: ₹${item.price}`;
    cartItems.appendChild(li);
  });
  cartModal.classList.add('active');
};

function closeCart() {
  cartModal.classList.remove('active');
}

document.getElementById('searchInput').addEventListener('input', e => renderProducts(e.target.value));

renderProducts();
