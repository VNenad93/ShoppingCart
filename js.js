const flowers = [
    {
        name: "Sunflower",
        price: 3,
        image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        qtty: 1
    },
    {
        name: "Rose",
        price: 12,
        image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
        qtty: 1
    },
    {
        name: "Orchid",
        price: 15,
        image: 'https://images.unsplash.com/photo-1582862058398-c157c8424b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        qtty: 1
    }
]



for (let val of flowers) {
    const items = document.getElementById('items')

    items.innerHTML += `
        <div class="items">
            <div class="card" style="width: 18rem;">
            <img src="${val.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${val.name}</h5>
              <p class="card-text">Price: ${val.price}$</p>
              <p class="card-text">Quantity: ${val.qtty}</p>
              <a href="#" class="btn btn-primary add">Add to Cart</a>
            </div>
            </div>
        </div>`
}

const add = document.querySelectorAll('.add')

add.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (cart.find(val => val.name == flowers[i].name)) {
            flowers[i].qtty++
        } else {
            cart.push(flowers[i])
        }

        renderCart()
        total()

        console.log(cart)
    })
})

const cart = []
const totalSum = document.getElementById('total')


function total() {
    let sum = 0

    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].qtty * cart[i].price
    }

    totalSum.textContent = `Total: ${sum}$`
}

function renderCart() {
    const item = document.getElementById('cart')
    item.innerHTML = ''
    for (let items of cart) {
        item.innerHTML += `
        <div>
            <h3>${items.name}</h3>
            <div class="qtty">
                <a class="btn btn-success plus">+</a>
                <p id="numQtty">${items.qtty}</p>
                <a class="btn btn-warning minus">-</a>
                <a class="btn btn-danger delete">X</a>
            </div>
        </div>
        `
    }

    const plus = document.querySelectorAll('.plus')
    const minus = document.querySelectorAll('.minus')
    const deleteBtn = document.querySelectorAll('.delete')

    plus.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            cart[i].qtty++
            total()
            renderCart()
        })
    })

    minus.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            cart[i].qtty--

            if (cart[i].qtty == 0) {
                cart.splice(i, 1)
            }

            total()
            renderCart()
        })
    })

    deleteBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            cart.splice(i, 1)
            total()
            renderCart()
            console.log(i)
        })
    })

}