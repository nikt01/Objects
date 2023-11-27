function createUser(name, address, bodyDimensions) {
    let user = {
      name,
      address,
      bodyDimensions,
      getInformation: function () {
        return `Name: ${this.name}, Address: ${this.address}, Body Dimensions: ${JSON.stringify(this.bodyDimensions)}`;
      },
      getFriends: function () {
        return this.friends || []; 
      },
      getMate: function () {
        return this.mate; 
      },
    };
  
    return user;
  }
  
  let usuario1 = createUser("Nicolas Tesla", "123 Main St", { height: 180, weight: 75 });
  
  let usuario2 = { ...usuario1 };
  
  usuario2.name = "Albert Einstein";
  usuario2.address = "456 Oak St";
  usuario2.bodyDimensions.height = 170;
  
  console.log("Usuario1 Information:", usuario1.getInformation());
  console.log("Usuario1 Friends:", usuario1.getFriends());
  console.log("Usuario1 Mate:", usuario1.getMate()); 
  
  console.log("Usuario2 Information:", usuario2.getInformation());
  console.log("Usuario2 Friends:", usuario2.getFriends());
  console.log("Usuario2 Mate:", usuario2.getMate());
  