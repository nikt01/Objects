function getTotalKgByFruit(shop) {
    let totalByFruit = {};
  
    for (const [fruit, kg] of Object.entries(shop)) {
      const fruitName = fruit.split(' ')[0]; 
      totalByFruit[fruitName] = (totalByFruit[fruitName] || 0) + kg;
    }
  
    return totalByFruit;
  }
  
 
  let frutas2 = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  
  console.log(getTotalKgByFruit(frutas2));
  