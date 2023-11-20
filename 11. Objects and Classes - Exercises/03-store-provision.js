function solve(stock, orders) {
    let itemsInStock = {};
    for (let i = 0; i < stock.length; i += 2) {
        itemsInStock[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < orders.length; i += 2) {
        if (itemsInStock.hasOwnProperty(orders[i])) itemsInStock[orders[i]] += Number(orders[i + 1]);
        else itemsInStock[orders[i]] = Number(orders[i + 1]);
    }

    for (const key in itemsInStock) {
        console.log(`${key} -> ${itemsInStock[key]}`);
    }
}