const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
    
require("./config/mongoose.config"); // calling the mongoose.config and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));


// To get everything up and running always install express and mongoose (npm install)