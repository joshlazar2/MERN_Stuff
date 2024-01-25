const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const PokemonRoutes = require("./routes/pokemon.routes");
PokemonRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
