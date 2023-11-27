let carParts = {
    Mask: 10,
    Door: 5,
    Engine: 8,
    Roof: 15,
    wheels: 12,
    rims: 20,
    exhaust: 32,
   
  };
  
  function addQuantityToParts(numberToAdd) {
    for (let part in carParts) {
      if (carParts.hasOwnProperty(part)) {
        carParts[part] += numberToAdd;
      }
    }
  }
  
  
  console.log("Before adding: ", carParts);
  
  addQuantityToParts(3); 
  console.log("After adding: ", carParts);
  