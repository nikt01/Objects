let carParts = {
    engine: 10,
    tires: 20,
    headlights: 15,
    brakes: 8,
    exhaustSystem: 5,
    suspension: 12,
    sparkPlugs: 30,
    airFilters: 25,
  };
  
  function addQuantityToParts(parts, numberToAdd) {
    for (let part in parts) {
      if (parts.hasOwnProperty(part)) {
        parts[part] += numberToAdd;
      }
    }
  }
  
  console.log("Before adding: ", carParts);
  
  
  addQuantityToParts(carParts, 2);
  
  console.log("After adding: ", carParts);
  