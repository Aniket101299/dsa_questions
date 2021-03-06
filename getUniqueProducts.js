

/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count
 of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects 
by grouping the products based on the productName and summing up the quantity for the same products 
present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];



function getUniqueProductCount(listOfProducts) {
    let obj = {};
    listOfProducts.map((product) => {
        if(obj[product.productName] === undefined) {
            obj[product.productName] = 1;
        } else {
            obj[product.productName] = obj[product.productName] + 1;
        }
    })

    return obj;
}

console.log(getUniqueProductCount(listOfProducts));


function getUniquePrducts(listOfProducts) {
let obj = {};
let uniqueArr = [];
listOfProducts.map((product) => {

if(obj[product.productName] === undefined) {
obj[product.productName] = {quantity:product.quantity,description: product.description};
} else {
obj[product.productName] = {quantity:(Number(obj[product.productName].quantity) + Number(product.quantity)),description: product.description};
}

});

for(key in obj) {
let Uniqueproduct = {
    productName: key,
    quantity: obj[key].quantity,
    description: obj[key].description
    };

uniqueArr.push(Uniqueproduct);

}

return uniqueArr;

}

console.log(getUniquePrducts(listOfProducts));
  


// another optimise way 




//  function, getUniqueProductCount which return count of each Product
//  as an object present in the given list of Products considering Product Name as Key


function getUniqueProductCount(listOfProducts) {

    let obj = {};

    listOfProducts.forEach((product) => {

        if( obj[product.productName] === undefined ) {
            obj[product.productName] = 1;
        } else {
            obj[product.productName] = obj[product.productName] + 1;
        }

    });

    return obj;
}

console.log(getUniqueProductCount(listOfProducts));





//  function, getUniquePrducts which return an array of objects by grouping the products
//  based on the productName and summing up the quantity for the same products 
//  present in the given list of Products considering Product Name as Key.


function checkAndUpdate(arr, product) {

    let respectiveIndex = arr.findIndex( (el) => (el.productName == product.productName) );
   
    if( respectiveIndex == -1 ) {
        arr.push(product);
    } else {
        arr[respectiveIndex].quantity = arr[respectiveIndex].quantity + product.quantity;
    }
      return arr;
}



function getUniquePrducts(listOfProducts) {

    let OutputArr = new Array;
   
    for (let i = 0; i < listOfProducts.length; i++) {

        checkAndUpdate(OutputArr, listOfProducts[i]);

    } 

    return OutputArr;

} 

console.log(getUniquePrducts(listOfProducts));

