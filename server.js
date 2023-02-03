const https = require('https')
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const cors = require('cors');


// Render Html File
app.use(cors())
app.get('/paystack', function(req, res) {


const params = JSON.stringify({
  "email": req.query.email,
  "amount": req.query.amount
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk_test_b7f41982f5f9f46e7359a2b7e9d436f3ae61130a',
    'Content-Type': 'application/json'
  }
}

const reqpaystack = https.request(options, respaystack => {
  let data = ''

  respaystack.on('data', (chunk) => {
    data += chunk
  });

  respaystack.on('end', () => {
    res.send(data)
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

reqpaystack.write(params)
reqpaystack.end()
});


app.listen(port, () => {
  // Code.....
})