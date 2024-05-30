const mongoose = require('mongoose');
const { server } = require('./backend/server'); // Adjust the path if necessary

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
