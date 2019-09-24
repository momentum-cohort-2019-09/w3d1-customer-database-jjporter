const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customerToHtml (customer) {
    return `
    <div class="person">
        <img src=${customer.picture.large}>
        <div class="person-name">${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</div>
        <div class="email">${customer.email}</div>
        <div class="address">${capitalize(customer.location.street)},<br> ${capitalize(customer.location.city)}, ${capitalize(nameToAbbr((customer.location.state)))}, ${customer.location.postcode}</div>
        <div class="phone">Phone: ${customer.phone}</div>
        <div class="cell"> Cell: ${customer.cell}</div>
        <div class="dob">DOB: ${moment(customer.dob).format('MMM Do YYYY')}</div>
        <div class="registered">Customer since: ${moment(customer.registered).format('MMMM Do YYYY')}</div>
    </div>
    `
} 

document.querySelector('#customers').innerHTML = customers.map(customerToHtml).join('\n')