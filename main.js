
const csv = require('csvtojson');
const csvFilePath = './customers.csv';
const { sendMail } = require('./email');
const { bill } = require('./template');
const pdf = require('html-pdf');


// Read the Customers from CSV file
const csvToJSON = async () => {
    // Async / await usage
    const jsonArray = await csv().fromFile(csvFilePath);
    //

    // createBillPDF[jsonArray[0]];
    return jsonArray;
};

// Generate  Bill PDF of each Customer.


const createBillPDF = (customer) => {
    // Generate a HTML  and  Convert HTML to PDF.
    const html = bill(customer);
    console.log(html);

    /**
 * It will create PDF of that HTML into given folder.
 */
    pdf.create(html, {}).toFile('./' + customer.Name + '.pdf', function (err, data) {
        if (err) return console.log(err);

        sendMail('./' + customer.Name + '.pdf');
    });
};

const task = async () => {
    const customers = await csvToJSON();
    console.log(customers);

    customers.map(customer => {
        createBillPDF(customer);
    })
}

task();
