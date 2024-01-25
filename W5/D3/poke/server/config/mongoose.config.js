const mongoose = require('mongoose');

const db = 'Pokemon_DB'

mongoose.connect(`mongodb://127.0.0.1:27017/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${db}`))
    .catch(err => console.log(`Something went wrong when connecting to ${db}| This is the error: ${err}`));