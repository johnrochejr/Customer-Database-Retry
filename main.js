// add 12 pictures and bios of customers
// add content dynamically
//
// first, create basic structure in HTML to be able to select content to
// Second, select nodes and dynamically add content

///////////////////////////////////////////////////////////////////////////////

// Set a variable of array data
const _data = customers.results;

// Ensure variable is linked properly
console.log(_data);
console.log(`You have ${_data.length} people!`);


// loop over data
// create HTML for each person
// add that HTML to the DOM

// set variable to cut down on typing
let allPeopleContainer = document.getElementById('staff');

// set for loop through _data
for (let i = 0; i < _data.length; i++) {

  // set variable here to shorten typing
  // _data[i] is a breakout of each person's information
  let _person = _data[i];

  // test
  console.log(_person);

  // create HTML node where we want to add content
  let personContainer = document.createElement('div');

  // add image to div
  let img = document.createElement('img');
  img.src = customers.results[i].picture.large;
  // set src attribute of img (URL)
  personContainer.appendChild(img);

  // add name, connect to array
  let name = document.createElement('h5');
  let firstName = customers.results[i].name.first;
  let lastName = customers.results[i].name.last;
  name.innerHTML = `${firstName} ${lastName}`;

  personContainer.appendChild(name);

  // add email
  let email = document.createElement('p');
  email.innerHTML = customers.results[i].name.email

  personContainer.appendChild(email);

  // address with 3 <p> tags inside, connect to array
  let address = document.createElement('address');
  let line1 = document.createElement('p');
  let line2 = document.createElement('p');
  let phoneNumber = document.createElement('p');

  // add values, then add in appropriate order
  // street, address, city, phone number
  line1.innerHTML = `${customers.results[i].location.street}`
  line2.innerHTML = `${customers.results[i].location.city}, ${customers.results[i].location.state}, ${customers.results[i].location.postcode}`;
  phoneNumber.innerHTML = `${customers.results[i].cell}`

  // append location info into address parent
  address.appendChild(line1);
  address.appendChild(line2);
  address.appendChild(phoneNumber);

  // append address info into personContainer parent
  personContainer.appendChild(address);

  // add SSN
  let ssn = document.createElement('p');
  ssn.innerHTML = `${customers.results[i].id.value}`

  personContainer.appendChild(ssn);

  // change class of div
  parent.className += 'person ';
  // add class to HTML <div> elements
  // add 'person' class to <div>
  // += is a JS operator - appends. Use by default
  // container called person.
  // Without this, we would have generic <div> elements

  // add personContainer to allPeopleContainer
  allPeopleContainer.appendChild(personContainer);


}
