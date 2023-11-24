function multiplyNumeric2(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }
   let myObject = {
    a: 5,
    b: 10,
    c: 30, 
    d: 7
  };
  
  console.log("Before multiplication:", myObject);
  multiplyNumeric2(myObject);
  console.log("After multiplication:", myObject);
  