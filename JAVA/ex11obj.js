function createUser(name, address, bodyDimensions) {
    return {
      name,
      address,
      bodyDimensions,
    };
  }
  
  
  let usuario1 = createUser("Nicolas Tesla", "123 Main St", { height: 180, weight: 75 });
  
  let usuario2 = { ...usuario1 };
  
  usuario2.name = "Albert Einstein";
  usuario2.address = "456 Oak St";
  usuario2.bodyDimensions.height = 170;
  
  
  console.log("Usuario1:", usuario1);
  console.log("Usuario2:", usuario2);
  