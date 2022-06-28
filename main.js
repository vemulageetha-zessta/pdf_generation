//Importing inbuilt packages
const csv = require("csvtojson");
const pdf = require("html-pdf");

//Importing custom files
const { sendMail } = require("./email");
const { bill_template } = require("./bill_template");

//Assigning constants
const csvFilePath = "./customers.csv";

// Read the Customers from CSV file
const csvToJSON = async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  return jsonArray;
};

// Generate Bill PDF of each Customer.
const createBillPDF = (customer) => {
  // Generate a HTML  and  Convert HTML to PDF.
  const html = bill_template(customer);

  /*
    It will create PDF of that HTML into given folder.
  */
  pdf
    .create(html, {})
    .toFile("./pdfs/" + customer.Name + ".pdf", function (err, data) {
      if (err) {
        return console.log(err);
      }
      sendMail(customer, "./pdfs/" + customer.Name + ".pdf");
    });
};

const task = async () => {
  const customers = await csvToJSON();
  customers.map((customer) => {
    createBillPDF(customer);
  });
};

task();
