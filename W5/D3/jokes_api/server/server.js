const express = require("express");
const app = express();
    
require("./config/mongoose.config"); // calling the mongoose.config and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));