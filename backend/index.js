/** *
 * schemat:
 * Po udamym requescie do bazy emitujemy zdażenie websocket
 * z informacją z nazwiskiem i czasem i typem enter/finish
 *
 * jakieś rozwiązanie, które pozwala na zdecydowanie kiedy zaczynają sie requesty
 *
 * discontect
 *
 */

const app = require('express')();
const server = require('http').Server(app);
const io = (module.exports = require('socket.io')(server));
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/results');
require('./models/athletes');
const resultsRoutes = require('./routes/results');
const socketController = require('./controllers/socket');

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/results', resultsRoutes);
io.on('connection', socketController);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
  console.log('Connected to DB');

  mongoose.connection.db
    .listCollections({ name: 'results' })
    .next((err, collinfo) => {
      if (collinfo) {
        mongoose.connection.db.dropCollection('results', (err, result) =>
          console.log('Old result collection has been droped')
        );
      }
    });

  server.listen(PORT, () => {
    console.log(`Server is runnig on port: http://localhost:${PORT}/ `);
  });
});
