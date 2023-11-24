//Using Object Value:


function getTotalKgWithObjectValues(shop) {
    const values = Object.values(shop);
    return values.length === 0 ? 0 : values.reduce((total, amount) => total + amount);
  }
  

  let frutas = {
    "manzanas golden": 25,
    "manzanas fuji": 20,
    "pera conferencia": 17,
    "pera ercolina": 12,
  };
  
  console.log(getTotalKgWithObjectValues(frutas));


  // Using For - Of
  /*
  function getTotalKgWithForOf(shop) {
  let total = 0;
  for (const amount of Object.values(shop)) {
    total += amount;
  }
  return total;
}


let frutas1 = {
  "manzanas golden": 25,
  "manzanas fuji": 20,
  "pera conferencia": 17,
  "pera ercolina": 12,
};

console.log(getTotalKgWithForOf(frutas));
*/
