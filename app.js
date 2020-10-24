const express = require('express')
const app = express()
// app.get('/', (req, res) => {
//   res.send('Heyy its Caye!')
// })
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Port 3000!')
})
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var events = [
  { title: "I am your first event", desc: "7th Annual SF Rock Project Festive Festival of Bands", imgUrl: "https://scontent-fml2-1.xx.fbcdn.net/v/t1.0-9/78280659_2969609699718440_4181947031197057024_o.jpg?_nc_cat=108&ccb=2&_nc_sid=b386c4&_nc_ohc=g0ueaEzlSPMAX8mwIWC&_nc_ht=scontent-fml2-1.xx&oh=e182f88e7ecdd1e3f00a652f1aa85659&oe=5FB874C4" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://scontent-fml2-1.xx.fbcdn.net/v/t1.0-9/78280659_2969609699718440_4181947031197057024_o.jpg?_nc_cat=108&ccb=2&_nc_sid=b386c4&_nc_ohc=g0ueaEzlSPMAX8mwIWC&_nc_ht=scontent-fml2-1.xx&oh=e182f88e7ecdd1e3f00a652f1aa85659&oe=5FB874C4" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://scontent-fml2-1.xx.fbcdn.net/v/t1.0-9/78280659_2969609699718440_4181947031197057024_o.jpg?_nc_cat=108&ccb=2&_nc_sid=b386c4&_nc_ohc=g0ueaEzlSPMAX8mwIWC&_nc_ht=scontent-fml2-1.xx&oh=e182f88e7ecdd1e3f00a652f1aa85659&oe=5FB874C4" }
]

app.get('/', (req, res) => {
  res.render('events-index', { events: events });
})
