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
  
  let usuario1i = createUser("Nicolas Tesla", "123 Main St", { height: 180, weight: 75 });
  
  let usuario2i = { ...usuario1i };
  
  usuario2.name = "Albert Einstein";
  usuario2.address = "456 Oak St";
  usuario2.bodyDimensions.height = 170;
  
  console.log("Usuario1 Information:", usuario1i.getInformation());
  console.log("Usuario1 Friends:", usuario1i.getFriends());
  console.log("Usuario1 Mate:", usuario1i.getMate()); 
  
  console.log("Usuario2 Information:", usuario2i.getInformation());
  console.log("Usuario2 Friends:", usuario2i.getFriends());
  console.log("Usuario2 Mate:", usuario2i.getMate());
  