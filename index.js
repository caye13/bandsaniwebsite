const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Heyy its Caye!')
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Port 3000!')
})
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})
