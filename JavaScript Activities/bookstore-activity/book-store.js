const store = {
    storeName: 'Book Store for Programmers',
    inventoryList: [],
    earnings: 0,
}

const books =  [
    {title: "JavaScript for Dummies", quantity: 0, price: 200},
    {title: "CSS for Dummies", quantity: 0, price: 150}
]

function addBook(title, quantity, price) {
    let newBook = {'title': title, 'quantity': quantity, 'price': price};
    books.push(newBook);
    
}

function restockBook(title, quantity) {
    books.find((books) => {
   if (books.title === title) {
       books.quantity += quantity;
   } 
});
}

function sellBook(title, quantity) {
    const found = books.find(books => books.title.includes(title));
    if (found === undefined) {
        console.log(`${title} is not available`)
    } else if (quantity <= found.quantity ) {
        found.quantity -= quantity;
        store.earnings += quantity * found.price;
        console.log(`${quantity} ${title} is successfully sold for ${quantity * found.price}`);
    } else if (quantity > found.quantity) {
        console.log (`${title} has only ${found.quantity} stock remaining`);
    }
}

function updateInventory() {
    store.inventoryList.push(...books);   
}

function totalEarnings() {
    console.log(`${store.storeName} has earnings of ₱${store.earnings}`)
}

function listInventory() {
    console.log('|| Book Inventory ||')
    store.inventoryList.map((books) => {
    console.log (`|| Title: ${books.title} - Quantity: ${books.quantity} - Price: ₱${books.price} ||`)
    });
}

addBook('HTML for Dummies', 10, 100); // Add new book
restockBook('JavaScript for Dummies', 10); //Restock existing book
restockBook('How to Train your Dragon', 10); // Restock non existing book
sellBook('JavaScript for Dummies', 10); //Success Purchase
sellBook('HTML for Dummies', 5); // Success Purchase
sellBook('CSS for Dummies', 1); // Lack of stocks
sellBook('How to Train your Dragon', 5); //Book not Available
updateInventory(); //Updates inventory for changes thru adding, restocking and selling
totalEarnings(); // Shows shop total earning
listInventory(); // Shows shpop inventory