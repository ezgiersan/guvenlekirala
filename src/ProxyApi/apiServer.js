const express = require('express')
const cors = require('cors')
const app = express()
const port = 3333

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    // console.log(req.body)
    fetch('https://dev.guvenlekirala.tech/api/v1/advertlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    }).then(response => {
        res.status(response.status);
        return response.json();
    }).then((data) => {
        res.send(data);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})