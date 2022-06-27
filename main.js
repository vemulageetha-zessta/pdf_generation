
const csv = require('csvtojson');
const pdf = require('html-pdf');

// cutsom 
const { sendMail } = require('./email');
const { bill } = require('./template');

// constants
const csvFilePath = './customers.csv';


// Read the Customers from CSV file
const csvToJSON = async () => {
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
};

// Generate Bill PDF of each Customer.
const createBillPDF = (customer) => {

    // Generate a HTML  and  Convert HTML to PDF.
    const html = bill(customer);

    /**
     * It will create PDF of that HTML into given folder.
     */
    pdf.create(html, {}).toFile('./pdfs/' + customer.Name + '.pdf', function (err, data) {
        if (err){
            return console.log(err);
        }
        sendMail( customer , './pdfs/' + customer.Name + '.pdf');
    });
};

const task = async () => {
    const customers = await csvToJSON();
       customers.map( async(customer) => {
        setTimeout(createBillPDF(customer), 20000);
    });
}

task();
