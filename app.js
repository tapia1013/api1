// Add event listener for button 1
document.getElementById('button1').addEventListener('click', loadCustomer)

// Add event listener for button 1 - Array
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomer(e) {
  // first create a xhr request
  const xhr = new XMLHttpRequest();

  // 2nd make a open and get request and which file, true for async
  xhr.open('GET', 'customer.json', true)

  // 4
  xhr.onload = function () {
    // check to make sure 200 status
    if (this.status === 200) {
      // console.log(this.responseText);

      // output to div we need to parse it cause its ""
      const customer = JSON.parse(this.responseText)

      // then create a var
      const output = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>${customer.phone}</li>
        </ul>
      `;

      // now output to browser
      document.getElementById('customer').innerHTML = output;

    }
  }

  //3rd send
  xhr.send();
}





// LOAD CUSTOMERS JSON ARRAY
function loadCustomers(e) {
  // first create a xhr request/ instatiate
  const xhr = new XMLHttpRequest();

  // 2nd make a open and get request and which file, true for async
  xhr.open('GET', 'customers.json', true)

  // 4
  xhr.onload = function () {
    // check to make sure 200 status
    if (this.status === 200) {
      // console.log(this.responseText);

      // output to div we need to parse it cause its ""
      const customers = JSON.parse(this.responseText)


      let output = '';
      customers.forEach(function (customer) {
        // += is append
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>${customer.phone}</li>
        </ul>
      `;
      })

      // then create a var cant access like this cause its an ARRAY we have to do the forEach method above this code
      // const output = `
      //   <ul>
      //   <li>ID: ${customer.id}</li>
      //   <li>Name: ${customer.name}</li>
      //   <li>Company: ${customer.company}</li>
      //   <li>${customer.phone}</li>
      //   </ul>
      // `;

      customers.forEach(function (customer) {
        let output = '';
      })

      // now output to browser
      document.getElementById('customers').innerHTML = output;

    }
  }


  //3rd send
  xhr.send();

}