const bill = (customer) => {
    return `
    <!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>HTML Table</h2>

<table>
  <tr>
    <th>Name</th>
    <th>Plan</th>
    <th>Amount</th>
    <th>Due Date</th>
  </tr>
  <tr>
    <td>${customer.Name}</td>
    <td>${customer.Plan}</td>
    <td>${customer.Amount}</td>
   <td>${customer.Duedate}</td>
  </tr> 
</table>
</body>
</html>`
};

module.exports = {
    bill
}