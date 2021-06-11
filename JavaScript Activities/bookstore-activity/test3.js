class Stores {
    constructor(storeName, inventoryList, earnings) {
        this.storeName = storeName
        this.inventoryList = inventoryList
        this.earnings = earnings
    }

    totalEarnings() {
        console.log(`${this.storeName} has earnings of ₱${this.earnings}`)
    }

   listInventory() {
        console.log('|| Book Inventory ||')
        bookStore.inventoryList.map((Books) => {
        console.log (`|| Title: ${Books.title} - Quantity: ${Books.quantity} - Price: ₱${Books.price} ||`)
    });
}
}

class Books {
    constructor (title, quantity, price) {
        this.title = title
        this.quantity = quantity
        this.price = price
    }

    addBook(title, quantity, price) {
        let newBook = new Books (title, quantity, price);
        bookStore.inventoryList.push(newBook);
    }

    restockBook(title, quantity) {
        bookStore.inventoryList.find((Books) => {
            if (Books.title === title) {
                Books.quantity += quantity;
            }
        })
    }

    sellBook(title, quantity) {
        const found = bookStore.inventoryList.find(Books => Books.title.includes(title));
        if (found === undefined) {
            console.log(`${title} is not available`)
        } else if (quantity <= found.quantity) {
            found.quantity -= quantity;
            bookStore.earnings += quantity * found.price
            console.log(`${quantity} ${title} is successfully sold for ${quantity * found.price}`);
        } else if (quantity > found.quantity) {
            console.log (`${title} has only ${found.quantity} stock remaining`);
        }
    }

}

const bookStore = new Stores('Book Store', [], 0);

Books.prototype.addBook('HTML for Dummies', 0, 100)
Books.prototype.addBook('CSS for Dummies', 0, 150)
Books.prototype.addBook('JS for Dummies', 0, 200)
Books.prototype.restockBook('JS for Dummies', 10)
Books.prototype.sellBook('HTML for Dummies', 1)
Books.prototype.sellBook('JS for Dummies', 5)
Books.prototype.sellBook('How to Train your Dragon', 1)
bookStore.totalEarnings()
bookStore.listInventory()
