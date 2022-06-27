const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'customers.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'email', title: 'EMAIL'},
        {id: 'date_of_joining', title: 'DATE OF JOINING'},
        {id: 'starting_date', title: 'STARTING DATE'},
        {id: 'current_date', title: 'CURRENT DATE'}
    ]
});
 
const records = [
    {name: 'geetha',  email: 'geetha.vemula@zessta.com', date_of_joining:'4-4-2022', starting_date:'4-4-2022', current_date:'24-06-2022'},
    {name: 'shivani', email: 'shivani.kallamadi@zessta.com',  date_of_joining:'15-11-2021', starting_date:'15-11-2021', current_date:'24-06-2022'},
    {name: 'saraswathi',  email: 'saraswathi@zessta.com', date_of_joining:'18-10-2021', starting_date:'18-10-2021', current_date:'24-06-2022'}
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
 
