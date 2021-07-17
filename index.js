let cars="Tesla,Lamborgini,Ferrari";
let positon=cars.substring(6,16);
console.log(positon);

//substring cannot accept negative index
let car="Tesla,Lamborgini,Ferrari";
let pos=car.substring(-19,-9);
console.log(pos)