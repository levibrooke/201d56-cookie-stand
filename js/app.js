'use strict';

//:TODO create object literal for each store

// Object Literal Data for Stores
let firstAndPike = {
  storeName: 'First and Pike',
  totalSales: 0,
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageSales:  6.3
};

let seatacAirport = {
  storeName: 'Seatac Airport',
  totalSales: 0,
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageSales:  1.2
};

let seattleCenter = {
  storeName: 'Seattle Center',
  totalSales: 0,
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageSales:  3.7
};

let capitolHill = {
  storeName: 'Capitol Hill',
  totalSales: 0,
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageSales:  2.3
};

let alki = {
  storeName: 'Alki',
  totalSales: 0,
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageSales:  4.6
};
let stores = [firstAndPike, seattleCenter, seatacAirport, capitolHill, alki ];
const storeHours = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


// TODO: Call Main Functuon to generate sales
calculateStoreSales();


function calculateStoreSales() {
  // for (let i = 0; i < stores.length; i++){
    // TODO: add element store name
  stores.forEach(store => {
    for (let j = 0; j < storeHours.length; j++) {
      // TODO: add element hours
      addElement('li',randomSalesGenerator(store.minimumCustomers,store.maximumCustomers,store.averageSales),'ul');
    }
  // }
      })
}

// TODO: Still need to calculate and track total sales

// Function to randomize sales numbers based on min, max, and average sales.
function randomSalesGenerator(minimumCustomers, maximumCustomers, averageSales){
  console.log(minimumCustomers, maximumCustomers, averageSales)
    let salesNumber = Math.round(Math.floor(Math.random() * ((maximumCustomers - minimumCustomers + 1) ) + minimumCustomers) * averageSales);
    console.log('Sales: ' + salesNumber)
    return salesNumber;
}

function addElement(element, content, parent)
{
  console.log(element + ' :element');
  console.log(content + ' :content');
  console.log(parent + ' :parent');
  let newElement = document.createElement(element);
  console.log(newElement)
  let newContent = document.createTextNode(content);
  console.log(newContent)
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;
}


