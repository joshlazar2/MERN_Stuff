const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
    


require("./config/mongoose.config"); // calling the mongoose.config and running the connect function
    
require('dotenv').config();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(cookieParser());

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);
    
const AlbumRoutes = require("./routes/album.routes");
AlbumRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));


// To get everything up and running always install express and mongoose (npm install)