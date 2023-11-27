let fruits = {
    name: "",
    kg: 0,
  
    sell() {
      console.log(`Selling ${this.kg} kg of ${this.name}`);
      return this;
    },
  
    buy() {
      console.log(`Buying ${this.kg} kg of ${this.name}`);
      return this;
    },
  
    outOfStockDate() {
      console.log("Out of stock date: 05/09/2024");
      return this;
    },
  
    buyingDate() {
      console.log("Buying date: Today!");
      return this;
    }
  };
  
 
  fruits.name = "Banana";
  fruits.kg = 3;
  
  fruits.sell().buy().outOfStockDate().buyingDate();
  
  
  fruits.name = "Pear";
  fruits.kg = 1.5;
  
  fruits.sell().buy().outOfStockDate().buyingDate();
  