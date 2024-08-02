const express = require('express')
const routes = require('./routes/index.js');



const app = express()
const port = 3000


app.use(express.static('./Static Page'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)









app.listen(port, () => console.log(`Example app listening on port ${port}!`))