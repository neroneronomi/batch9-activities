books.find((books) => {
    if (title === books.title && quantity <= books.quantity) {
        books.quantity -= quantity;
        store.earnings += quantity * price;
        console.log(`${quantity} ${title} is successfully sold for ${quantity * price}`)
    } else if (title === books.title && quantity > books.quantity) {
        console.log (`${title} has only ${books.quantity} stock remaining`)
    } else if (books.title.includes(title)) {
        console.log ('sad')
    }
  })

  books.find((books) => {
    if (books.title.includes(title) && quantity <= books.quantity) {
        books.quantity -= quantity;
        store.earnings += quantity * books.price;
        console.log(`${quantity} ${title} is successfully sold for ${quantity * books.price}`)
    } else if (books.title.includes(title) && quantity > books.quantity) {
        console.log (`${title} has only ${books.quantity} stock remaining`)
    } 
  })

  books.find((books) => {
    if (books.title.includes(title)) {
        if (quantity <= books.quantity) {
            books.quantity -= quantity;
            store.earnings += quantity * books.price;
            console.log(`${quantity} ${title} is successfully sold for ${quantity * books.price}`)
            console.log(books.title.includes(title))
    } else {
        console.log (`${title} has only ${books.quantity} stock remaining`)
    }
    }
  })

  store.inventoryList.map((books) => {
    console.log (`${books.title} - ${books.quantity} - ₱${books.price}`)
});


class MainStore {
    constructor(mainStoreName, inventoryList, earnings) {
        this.mainStoreName = 'My Stores'
        this.inventoryList = []
        this.earnings = 0
    }
}

class BookStore extends MainStore {
    constructor(storeName, inventoryList, earnings) {
        this.storeName = 'Book Store for Programmers'
        this.inventoryList = []
        this.earnings = 0
    }    
}

class Books {
    constructor(title, quantity, price) {
        this.title = title
        this.quantity = quantity
        this. price = price
    }
}

// const books = []

// function addBook(title, quantity, price) {
//     let newBook = new Books(title, quantity, price);
//     books.push(newBook);
// }

// function updateInventory() {
//     BookStore.inventoryList.push(...books);   
// }

BookStore.prototype.addBook = function(title, quantity, price) {
    let newBook = new Books(title, quantity, price);
    this.inventoryList.push(newBook);
}



BookStore.addBook('HTML for Dummies', 10, 100); // add new book
addBook('CSS for Dummies', 10, 150); // add new book
addBook('JavaScript for Dummies', 10, 200); // add new book
updateInventory()

console.log(books)