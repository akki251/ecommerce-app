const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://${process.env.CONNECTION_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DATABASE CONNECTED 🖲️'))
  .catch((err) => console.log(err.message));

module.exports = mongoose;
