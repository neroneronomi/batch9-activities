export let logsMixins = {
    itemNotAvailable(item) {
        console.log(`${item} is not available`)
    },

    itemSold() {
        console.log(`${quantity} ${item} is successfully sold for ${quantity * found.price}`);
    },

    purchaseError() {
        console.log (`${item} has only ${found.quantity} stock remaining`);
    },

    shopEarnings() {
        console.log(`${this.storeName} has earnings of ₱${this.earnings}`)
    },

    shopInventoryName() {
        console.log(`${this.storeName} Inventory`)
    },

    shopInventory() {
        console.log (`Item: ${Products.item} - Quantity: ${Products.quantity} - Price: ₱${Products.price}`)
    },
}

