const bill_template = (customer) => {
  return `
    <!DOCTYPE html>
<html>
<head>
<style>
body {
    margin: 3rem;
}
img {
    width: 200px;
    height: 200px;
}

h1 {
    color:dodgerblue;
    text-align: center;
    font-family:cursive;
    font-style: oblique;
}

h2 {
    color:dodgerblue;
    text-align: left;
}
p{
    color:black;
    font-size:17.72px;
    font-family: 'Times New Roman', Times, serif;
}

table {
    font-family: arial, sans-serif;
    border-collapse: inherit;
    width: 75%;
    margin-left: 6rem;
    margin-right: 6rem;
  }
  
  td, th {
    text-align: center;
    padding: 8px;
  }

  th{
    color: dodgerblue;
  }
  
  tr:nth-child(odd) {
    background-color: #dddddd;
  }
</style>
</head>
<body>

<img src="https://logos-world.net/wp-content/uploads/2021/02/Amazon-Prime-Video-Logo-2017-present.jpg">
<h2>Tax invoice:</h2>
<h3>${customer.Name}<br>Address:<br> ${customer.Address}</h3>
<br>
<p>
    Dear ${customer.Name},<br>
    We are confirming that you have turned off your auto-renew settings.<br> Your Prime membership will not continue and you will lose access to your Prime benefits at the end of your membership period.<br>
    If you would like to continue to enjoy access to Amazon Prime, please login to your amazon account and navigate to account details page to continue your subscription.<br>
    Thank you for trying Amazon Prime.
</p>
<br>
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
</html>`;
};

module.exports = {
  bill_template,
};
