'use strict';

//:TODO create object literal for each store

// Object Literal Data for Stores
let firstAndPike = {
  storeName: 'First and Pike',
  totalSales: 0,
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageSales: 6.3
};

let seatacAirport = {
  storeName: 'Seatac Airport',
  totalSales: 0,
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageSales: 1.2
};

let seattleCenter = {
  storeName: 'Seattle Center',
  totalSales: 0,
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageSales: 3.7
};

let capitolHill = {
  storeName: 'Capitol Hill',
  totalSales: 0,
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageSales: 2.3
};

let alki = {
  storeName: 'Alki',
  totalSales: 0,
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageSales: 4.6
};

let stores = [firstAndPike, seattleCenter, seatacAirport, capitolHill, alki];
const storeHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var count = 0;

// Call Main Function to generate sales
calculateStoreSales();


function calculateStoreSales() {
  for (let i = 0; i < stores.length; i++) {
    count = i;

    // Add P tag to Main
    addElement('p', stores[i].storeName, 'main');

    // Add UL to P tag
    addElement('ul', '', 'p');

    for (let j = 0; j < storeHours.length; j++) {
      addElement('li', randomSalesGenerator(stores[i].minimumCustomers, stores[i].maximumCustomers, stores[i].averageSales), 'ul');
    }
  }
}

// Function to randomize sales numbers based on min, max, and average sales.
function randomSalesGenerator(minimumCustomers, maximumCustomers, averageSales) {
  let salesNumber = Math.round(Math.floor(Math.random() * ((maximumCustomers - minimumCustomers + 1)) + minimumCustomers) * averageSales);
  return salesNumber;
  // TODO: Track total Sales
}


// Helper functiomn to add and append elements to the DOM
function addElement(element, content, parent) {
  let docAdd = document.getElementsByTagName(parent);
  let newElement = document.createElement(element);
  let newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  // docAdd[0].appendChild(newElement);

  for (let i = 0; i < docAdd.length; i++) {
    docAdd[i].appendChild(newElement);
  }
}
