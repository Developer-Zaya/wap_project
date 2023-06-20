window.onload = function () {
    getProducts();
    const token = sessionStorage.getItem("data")
    document.getElementById('login-user').innerText=token.split(",")[0];

    document.getElementById('logout-btn').addEventListener('click', function (event) {
        window.location.href = 'index.html';
    });
}

async function getProducts() {
    const token = sessionStorage.getItem("data")
    let products = await fetch('http://localhost:3000/products/').then(response => response.json());
    renderProduct(products)
}

let cart = []

async function addToCart(id){
    let product = await fetch('http://localhost:3000/products/'+id).then(response => response.json());
    console.log(product);
}

function renderCart(prod){
    let table = document.createElement('table');
    table.classList.add('table', 'table-bordered');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let headers = ['Name', 'Price', 'Total', 'Quantity'];
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.classList.add('text-center');
        th.textContent = headerText;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement('tbody');

    prod.forEach(product => {
        let tr = document.createElement('tr');

        let nameTd = document.createElement('td');
        nameTd.textContent = product.name;
        tr.appendChild(nameTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = product.price;
        tr.appendChild(priceTd);

        let total = document.createElement('td');
        total.textContent = product.total;
        tr.appendChild(total);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    let container = document.getElementById('my-cart');
    container.appendChild(table);
}

function renderProduct(prod) {
    let table = document.createElement('table');
    table.classList.add('table', 'table-bordered');

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let headers = ['Name', 'Price', 'Image', 'Stock', 'Actions'];
    headers.forEach(headerText => {
        let th = document.createElement('th');
        th.classList.add('text-center');
        th.textContent = headerText;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    let tbody = document.createElement('tbody');
    prod.forEach(product => {
        let tr = document.createElement('tr');

        let nameTd = document.createElement('td');
        nameTd.textContent = product.name;
        tr.appendChild(nameTd);

        let priceTd = document.createElement('td');
        priceTd.textContent = product.price;
        tr.appendChild(priceTd);

        let imageTd = document.createElement('td');
        let image = document.createElement('img');
        image.src = `./images/${product.image}`;
        image.alt = product.name;
        image.classList.add('logo-img');
        imageTd.appendChild(image);
        tr.appendChild(imageTd);

        let stockTd = document.createElement('td');
        stockTd.textContent = product.stock;
        tr.appendChild(stockTd);

        let actionsTd = document.createElement('td');
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-success', 'fw-bold', 'd-inline', 'order');
        button.onclick = ()=>{addToCart(product.id)};
        let icon = document.createElement('i');
        icon.classList.add('fa', 'fa-shopping-cart');
        button.appendChild(icon);
        actionsTd.appendChild(button);
        tr.appendChild(actionsTd);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    let container = document.getElementById('product-table');
    container.appendChild(table);
}