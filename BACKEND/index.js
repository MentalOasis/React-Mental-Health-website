
const app = require('./src/app/app.js');
const dbConnection = require('./src/database/database_preguntas');



app.listen(7000, () => {
  console.log('Server on port 7000');
});

dbConnection();