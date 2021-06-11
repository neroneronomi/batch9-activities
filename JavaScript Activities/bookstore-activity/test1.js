class Stores {
    constructor(storeName, inventoryList, earnings) {
        this.storeName = storeName
        this.inventoryList = inventoryList
        this.earnings = earnings
    }
        addStore(storeName, inventoryList, earnings) {
            let newStore = new Stores(storeName, inventoryList, earnings);
            myStores.push(newStore)
            console.log(myStores)
        }

}

    const myStores = []

// const bookStore = new Stores('Book Store for Programmers', [], 0);

// class Books {
//     constructor (title, quantity, price) {
//         this.title = title
//         this.quantity = quantity
//         this.price = price
//     }
// }

    // addBook(title, quantity, price) {
    //     let newBook = new Books (title, quantity, price);
    //     bookStore.inventoryList.push(newBook);
    // }

//     restockBook(title, quantity) {
//         bookStore.inventoryList.find((Books) => {
//             if (Books.title === title) {
//                 Books.quantity += quantity;
//             }
//         })
//     }

//     sellBook(title, quantity) {
//         const found = bookStore.inventoryList.find(Books => Books.title.includes(title));
//         if (found === undefined) {
//             console.log(`${title} is not available`)
//         } else if (quantity <= found.quantity) {
//             found.quantity -= quantity;
//             bookStore.earnings += quantity * found.price
//             console.log(`${quantity} ${title} is successfully sold for ${quantity * found.price}`);
//         } else if (quantity > found.quantity) {
//             console.log (`${title} has only ${found.quantity} stock remaining`);
//         }
//     }

// }

Stores.prototype.addStore('Book Store for Programmers', [], 0)
// Stores.prototype.addBook('HTML for Dummies', 0, 100)
// Books.prototype.addBook('CSS for Dummies', 0, 150)
// Books.prototype.addBook('JS for Dummies', 0, 200)
// Books.prototype.restockBook('JS for Dummies', 10)
// Books.prototype.sellBook('HTML for Dummies', 1)
// Books.prototype.sellBook('JS for Dummies', 5)
// Books.prototype.sellBook('How to Train your Dragon', 1)
// console.log(bookStore.inventoryList)
// console.log(bookStore.earnings)
// console.log(bookStore.storeName)
