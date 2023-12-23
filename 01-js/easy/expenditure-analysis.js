/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let priceList = [];
  const mp = new Map();
  for (let i = 0; i < transactions.length; i++) {
    const prev_value = mp.get(transactions[i].category) ?? 0;
    mp.set(transactions[i].category, prev_value + transactions[i].price);
  }
  for (let [key, value] of mp) {
    priceList.push({ category: key, totalSpent: value });
  }
  return priceList;
}

module.exports = calculateTotalSpentByCategory;
