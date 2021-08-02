import { logsMixins } from "./mixins-logs.js";

class Stores {
    constructor(storeName, inventoryList, earnings) {
        this.storeName = storeName
        this.inventoryList = inventoryList
        this.earnings = earnings
    }

    addItem(item, quantity, price) {
        let newItem = new Products (item, quantity, price);
        this.inventoryList.push(newItem);
    }

    restockItem(item, quantity) {
        this.inventoryList.find((Products) => {
            if (Products.item === item) {
                Products.quantity += quantity;
            }
        })
    }

    sellItem(item, quantity) {
        const found = this.inventoryList.find(Products => Products.item.includes(item));
        if (found === undefined) {
            this.itemNotAvailable(item)
        } else if (quantity <= found.quantity) {
            found.quantity -= quantity;
            this.earnings += quantity * found.price
            console.log(`${quantity} ${item} is successfully sold for ${quantity * found.price}`);
        } else if (quantity > found.quantity) {
            console.log (`${item} has only ${found.quantity} stock remaining`);
        }
    }

    totalEarnings() {
        this.shopEarnings();
        return this
    }

   listInventory() {
        this.shopInventoryName();
        this.inventoryList.map((Products) => {
        console.log (`Item: ${Products.item} - Quantity: ${Products.quantity} - Price: ₱${Products.price}`)
        return this
    });
}
}

class Products {
    constructor (item, quantity, price) {
        this.item = item
        this.quantity = quantity
        this.price = price
    }
}

const bookStore = new Stores('Book Store', [], 0);
const toyStore = new Stores('Toy Store', [], 0);

Object.assign(Stores.prototype, logsMixins);
Object.assign(Products.prototype, logsMixins);

bookStore.addItem('HTML for Dummies', 0, 100);
bookStore.addItem('CSS for Dummies', 0, 150);
bookStore.addItem('JS for Dummies', 0, 200);

bookStore.restockItem('HTML for Dummies', 10);
bookStore.restockItem('CSS for Dummies', 10);
bookStore.restockItem('JS for Dummies', 10);
bookStore.restockItem('How to Train your Dragon', 1);

bookStore.sellItem('HTML for Dummies', 10)
bookStore.sellItem('CSS for Dummies', 5)
bookStore.sellItem('JS for Dummies', 15)
bookStore.sellItem('How to Train your Dragon', 1)

bookStore.totalEarnings().listInventory();

toyStore.addItem('Freedom Gundam HG', 0, 2000)
toyStore.addItem('Iron Man Helmet', 0, 5000)
toyStore.addItem('Batman Cape', 0, 3000)

toyStore.restockItem('Freedom Gundam HG', 10, 2000)
toyStore.restockItem('Iron Man Helmet', 10, 2000)
toyStore.restockItem('Batman Cape', 10, 2000)

toyStore.sellItem('Freedom Gundam HG', 10)
toyStore.sellItem('Iron Man Helmet', 5)
toyStore.sellItem('Batman Cape', 15)
toyStore.sellItem('Barbie Doll', 1)

toyStore.totalEarnings().listInventory();



